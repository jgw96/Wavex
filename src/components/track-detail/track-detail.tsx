import { Component, Element, Event, EventEmitter, Prop, State } from '@stencil/core';
import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

import { getTrackDetail } from '../../services/api';
import { createActivity, getWindowsDevices, sendCommand } from '../../services/graph';

const { Haptics, Share } = Plugins;

@Component({
  tag: 'track-detail',
  styleUrl: 'track-detail.css'
})
export class TrackDetail {

  fab: any = null;

  @Element() el: HTMLElement | null = null;

  @Prop() id: string = '';
  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: any | null = null;
  @Prop({ connect: 'ion-action-sheet-controller' }) actionSheetCtrl: any | null = null;

  @State() track: any | null = null;
  @State() token: string | null = sessionStorage.getItem('token');
  @State() devices: any[] = [];

  @Event() playEvent: EventEmitter | null = null;

  async componentDidLoad() {
    this.track = await getTrackDetail(this.id);
    console.log(this.track);
    console.log('token', this.token);

    if (this.el) {
      this.fab = this.el.querySelector('#socialFab');
    }
  }

  playTrack() {
    if (this.playEvent) {
      this.playEvent.emit({
        track: this.track
      });
    }
  }

  async listenLater() {
    const activity = {
      "appActivityId": `/track/${this.track.id}`,
      "activitySourceHost": "https://wavex-app.firebaseapp.com",
      "userTimezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
      "appDisplayName": "Musically",
      "activationUrl": `https://wavex-app.firebaseapp.com/track/${this.track.id}`,
      "contentUrl": `https://wavex-app.firebaseapp.com/track/${this.track.id}`,
      "fallbackUrl": "https://wavex-app.firebaseapp.com",
      "contentInfo": {
        "@context": "https://schema.org",
        "@type": "Song",
        "title": this.track.title
      },
      "visualElements": {
        "attribution": {
          "iconUrl": "https://wavex-app.firebaseapp.com/assets/sc-icon.png",
          "alternateText": "Musically",
          "addImageQuery": false,
        },
        "description": `${this.track.title} was added to your Listen Later list`,
        "backgroundColor": "#ff0000",
        "displayText": `Listen to ${this.track.title}`,
        "content": {
          "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
          "type": "AdaptiveCard",
          "body":
            [{
              "type": "TextBlock",
              "text": "Musically"
            }]
        }
      },
      "historyItems": [
        {
          "userTimezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
          "startedDateTime": new Date().toISOString(),
          "lastActiveDateTime": new Date().toISOString(),
        }
      ]
    }

    if (this.token) {
      const data = await createActivity(this.token, activity, this.track.id);
      console.log(data);

      if (this.toastCtrl) {
        const toast = await this.toastCtrl.create({
          message: 'Song has been posted to your Windows Timeline for later',
          duration: 2500,
          showCloseButton: true,
          closeButtonText: 'ok'
        });
        await toast.present();
      }
    }
  }

  async listenOnWindows() {
    if (this.token) {
      const data = await getWindowsDevices(this.token);

      this.devices = data.value;
      console.log(this.devices);
    }
  }

  toggleList() {
    if (this.fab) {
      const fabButton = this.fab.querySelector('ion-fab-button');
      if (fabButton) {
        fabButton.activated = !fabButton.activated;
      }

      const fabList = this.fab.querySelector('ion-fab-list');
      if (fabList) {
        fabList.activated = !fabList.activated;
      }
    }
  }

  async chooseDevice(id: string) {
    try {
      if (this.token) {
        await sendCommand(this.token, id, location.href);

        if (this.toastCtrl) {
          const toast = await this.toastCtrl.create({
            message: 'This song will now start playing on your chosen device',
            duration: 2500,
            showCloseButton: true,
            closeButtonText: 'ok'
          });
          await toast.present();
        }
      }
      this.close();
    } catch (err) {
      console.error(err);
    }
  }

  close() {
    this.devices = [];
  }

  async share() {
    console.log(location.href);
    console.log(location.origin);
    console.log(location.hostname);

    let shareURL = location.href;

    if (location.origin.includes('localhost')) {
      shareURL = `https://wavex-app.firebaseapp.com/${location.pathname}`;
    }

    if (Haptics) {
      Haptics.impact({
        style: HapticsImpactStyle.Light
      })
    }

    if (Share && !(window as any).Windows) {
      await Share.share({
        title: 'wavex',
        text: 'Check out this song!',
        url: shareURL,
        dialogTitle: 'Share this song'
      });
    }
    else if ((window as any).Windows) {
      console.log('trying to share');
      const DataTransferManager = (window as any).Windows.ApplicationModel.DataTransfer.DataTransferManager;

      const dataTransferManager = DataTransferManager.getForCurrentView();
      console.log('dataTransferManager', dataTransferManager);

      dataTransferManager.addEventListener("datarequested", (ev: any) => {
        const data = ev.request.data;
        console.log(data.properties);

        data.properties.title = this.track.title;
        data.properties.description = "Check out this song!";
        data.setUri(new (window as any).Windows.Foundation.Uri(shareURL));
      });

      try {
        DataTransferManager.showShareUI();
      }
      catch (err) {
        console.log('error', err);
      }

    }
  }

  async openWindows() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Windows 10",
      buttons: [{
        text: 'Listen on your Windows 10 device',
        icon: 'logo-windows',
        handler: () => {
          this.listenOnWindows()
        }
      },
      {
        text: 'Listen later',
        icon: 'time',
        handler: () => {
          this.listenLater()
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>{this.track ? this.track.title : 'loading...'}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <div id='containDiv'>
          <section id='header'>

            <div id='headerContent'>
              <div id='albumArt'>
                {this.track && this.track.artwork_url ? <img src={this.track.artwork_url} alt={`${this.track.title} album art`}></img> : <div id='fakeImg'></div>}
              </div>

              <section id='actions'>
                <ion-button onClick={() => this.playTrack()} shape='round' id='playButton'>
                  <ion-icon slot="start" name="play"></ion-icon>
                  Play
            </ion-button>
                <ion-button color='secondary' shape='round' id='shareButton' onClick={() => this.share()}>
                  <ion-icon slot="start" name="share"></ion-icon>
                  Share
            </ion-button>
              </section>

              <div id='headerTrackDetail'>
                {this.track ? <h1 id='realH1' key={1}>{this.track.title}</h1> : <h1 key={0}>Loading...</h1>}
                <p id='by'>Posted by {this.track && this.track.user ? this.track.user.username : 'loading...'}</p>
              </div>
            </div>

            <div id='extraContent'>
              <p>{this.track ? this.track.description : 'loading...'}</p>
            </div>
          </section>
        </div>

        {this.token ? <ion-fab id="socialFab" vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button color="secondary" onClick={() => this.openWindows()}>
            <ion-icon name="logo-windows"></ion-icon>
          </ion-fab-button>
        </ion-fab> : null}

        {
          this.devices.length ? <div id='devicesDiv'>
            <button id='closeButton' onClick={() => this.close()}>X</button>
            <h3>Choose a device</h3>
            <ul>
              {
                this.devices.map((device) => {
                  return (
                    <li onClick={() => this.chooseDevice(device.id)}>
                      <p>Model: {device.Model || 'Not available'}</p>
                      <p>Name: {device.Name || 'Not available'}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div> : null}
      </ion-content>
    ]
  }
}
