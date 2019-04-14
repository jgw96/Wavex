import { Component, Event, EventEmitter, Element, Prop } from '@stencil/core';
import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

const { Haptics, Share } = Plugins;

@Component({
  tag: 'pod-detail',
  styleUrl: 'pod-detail.css'
})
export class PodDetail {

  @Prop() pod: any;

  @Element() el: HTMLElement;

  @Event() playEvent: EventEmitter | null = null;

  componentDidLoad() {
    console.log(this.pod);
  }

  async dismiss() {
    (this.el.closest('ion-modal') as any).dismiss();
  }

  playTrack(episode) {
    if (this.playEvent) {
      this.playEvent.emit({
        track: episode
      });
    }
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
        text: 'Check out this podcast!',
        url: shareURL,
        dialogTitle: 'Share this podcast'
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

        data.properties.title = this.pod.title;
        data.properties.description = "Check out this podcast!";
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

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-button onClick={() => this.dismiss()}>
              <ion-icon name="close"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title>{this.pod.title}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <h2 id="podDetailTitle">{this.pod.title}</h2>

        <div id="podDetailActions">
          <ion-button onClick={() => this.share()} color="secondary" shape="round">
            <ion-icon slot="start" name="share"></ion-icon>
            Share
          </ion-button>

          <ion-button onClick={() => this.playTrack(this.pod)} color="primary" shape="round">
            <ion-icon slot='start' name='play'></ion-icon>
            Play
          </ion-button>
        </div>

        <p innerHTML={this.pod.description}></p>
      </ion-content>
    ];
  }
}
