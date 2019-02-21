import { Component, Listen, Prop, State } from '@stencil/core';
import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

import { getSingleTrack } from '../../services/api';
import { saveSong } from '../../services/data';

declare var MediaMetadata: any;

const { Haptics } = Plugins;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: any | null = null;

  @State() musicSrc: string = '';
  @State() musicTitle: string | null = null;
  @State() genre: string = 'Not available';
  @State() likes: number | string = 'Not available';
  @State() desc: string = 'Not available';
  @State() playing: boolean = false;
  @State() currentTrack: any;
  @State() token: string | null = null;
  @State() onDetail: boolean = false;
  @State() hasSeenTutorial: boolean | null = null;

  audioEl: HTMLAudioElement | null = null;
  saveButtonEl: HTMLButtonElement | null = null;
  prevSong: any;
  wakeLockObj: any;
  wakeLockRequest: any;
  systemMediaControls: any;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    if (this.toastCtrl) {
      const toast = await this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      });
      await toast.present();
      await toast.onWillDismiss();
    }

    window.location.reload();
  }

  componentWillLoad() {
    this.hasSeenTutorial = (localStorage.getItem('seen') == 'true');
  }

  componentDidLoad() {
    if ((window as any).Windows && (window as any).Windows.UI.ViewManagement.ApplicationView) {
      const titleBar = (window as any).Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;
      titleBar.backgroundColor = { a: 255, r: 32, g: 44, b: 56 };
      titleBar.foregroundColor = { a: 255, r: 255, g: 255, b: 255 };
      titleBar.inactiveBackgroundColor = { a: 255, r: 32, g: 44, b: 56 };
      titleBar.inactiveForegroundColor = { a: 255, r: 32, g: 44, b: 56 };
      titleBar.buttonBackgroundColor = { a: 255, r: 32, g: 44, b: 56 };
    }

    if (window.matchMedia("(min-width: 1200px)").matches && this.hasSeenTutorial === true) {
      this.musicTitle = 'Nothing Playing'
    }
  }

  async doWakeLock() {
    if ('getWakeLock' in navigator) {
      try {
        this.wakeLockObj = await (navigator as any).getWakeLock('screen');
        this.wakeLockObj.addEventListener('activechange', () => {
          console.log(
            `The ${this.wakeLockObj.type} wake lock is ${
            this.wakeLockObj.active ? 'active' : 'not active'}.`
          );
        });
      }
      catch (err) {
        console.error('Could not obtain wake lock', err);
      }

      this.wakeLockRequest = this.wakeLockObj.createRequest();
    }
  }

  @Listen('playEvent')
  async play(event: CustomEvent) {
    if (Haptics) {
      Haptics.impact({
        style: HapticsImpactStyle.Light
      })
    }
    
    this.playing = true;

    await this.doWakeLock();

    if (event && event.detail && event.detail.track) {
      console.log('playEvent', event.detail.track)
      this.currentTrack = event.detail.track;
      this.musicSrc = event.detail.track.stream_url;
      this.musicTitle = event.detail.track.title;
      this.genre = event.detail.track.genre;
      this.likes = event.detail.track.likes_count;
      this.desc = event.detail.track.description;

      if (this.audioEl) {
        this.audioEl.oncanplay = async () => {
          this.prevSong = event.detail.track;
          console.log('playing');

          if (this.audioEl) {
            await this.audioEl.play();

            this.setUpListeners();
            this.setUpMeta(event.detail.track);

            if ((window as any).Windows) {
              this.systemMediaControls.playbackStatus = (window as any).Windows.Media.MediaPlaybackStatus.playing;
            }
          }
        }
      }
    }
  }

  @Listen('saveEvent')
  async saveEventHandler(event: CustomEvent) {
    if (event && event.detail && event.detail.track) {
      console.log('saving');
      await this.save(event.detail.track);
    }
  }

  pause() {
    this.playing = false;

    if (Haptics) {
      Haptics.impact({
        style: HapticsImpactStyle.Light
      })
    }


    if (this.audioEl) {
      this.audioEl.pause();
      if ((window as any).Windows) {
        this.systemMediaControls.playbackStatus = (window as any).Windows.Media.MediaPlaybackStatus.paused;
      }
    }

    if (this.wakeLockRequest) {
      this.wakeLockRequest.cancel();
      this.wakeLockRequest = null;
    }
  }

  async homePlay() {
    if (this.musicSrc) {
      
      if (Haptics) {
        Haptics.impact({
          style: HapticsImpactStyle.Light
        })
      }

      this.playing = true;
      if (this.audioEl) {
        await this.audioEl.play();
        
        if ((window as any).Windows) {
          this.systemMediaControls.playbackStatus = (window as any).Windows.Media.MediaPlaybackStatus.playing;
        }
      }
    } else {
      console.log('do something');
      this.playing = true;
      await this.next();
    }
  }

  async next() {
    if (Haptics) {
      Haptics.impact({
        style: HapticsImpactStyle.Light
      })
    }

    console.log(this.genre);
    const track = await getSingleTrack(this.genre ? this.genre : '');
    console.log(track);
    this.musicSrc = track.stream_url;
    this.musicTitle = track.title;
    this.desc = track.description;
    this.genre = track.genre;

    if (this.audioEl) {
      this.audioEl.oncanplay = async () => {
        this.prevSong = track;

        this.setUpMeta(track);
      }
    }
  }

  async prev() {
    console.log('here', this.prevSong);

    if (Haptics) {
      Haptics.impact({
        style: HapticsImpactStyle.Light
      })
    }

    if (this.prevSong) {
      if (this.audioEl) {
        await this.audioEl.pause();
        this.audioEl.currentTime = 0;
      }

      this.setUpMeta(this.prevSong);
      this.prevSong = null;
    } else {
      this.next();
    }
  }

  setUpListeners() {
    if (this.audioEl) {
      this.audioEl.addEventListener('ended', async () => {
        await this.next();
      });
    }
  }

  async systemMediaControlsButtonPressed(args: any) {
    if (args.button === (window as any).Windows.Media.SystemMediaTransportControlsButton.play) {
      console.log('playing from windows');
      await this.homePlay();
    }
    else if (args.button === (window as any).Windows.Media.SystemMediaTransportControlsButton.pause) {
      await this.pause();
      this.systemMediaControls.playbackStatus = (window as any).Windows.Media.MediaPlaybackStatus.paused;
    }
    else if (args.button === (window as any).Windows.Media.SystemMediaTransportControlsButton.next) {
      await this.next();
    }
    else if (args.button === (window as any).Windows.Media.SystemMediaTransportControlsButton.previous) {
      await this.prev();
    }
  }

  setUpMeta(track: any) {
    console.log(track);
    if ('mediaSession' in navigator) {
      console.log('in media session', track);
      (navigator as any).mediaSession.metadata = new MediaMetadata({
        title:track.title ? track.title : '',
        artist: track.user.username ? track.user.username : ''
      });

      (navigator as any).mediaSession.setActionHandler('play', () => this.homePlay());
      (navigator as any).mediaSession.setActionHandler('pause', () => this.pause());
      (navigator as any).mediaSession.setActionHandler('previoustrack', () => this.homePlay());
      (navigator as any).mediaSession.setActionHandler('nexttrack', () => this.next());
    };

    if ((window as any).Windows) {
      console.log('here');
      this.systemMediaControls = (window as any).Windows.Media.SystemMediaTransportControls.getForCurrentView();

      this.systemMediaControls.addEventListener('buttonpressed', (args: any) => this.systemMediaControlsButtonPressed(args), true)

      this.systemMediaControls.isPlayEnabled = true;
      this.systemMediaControls.isPauseEnabled = true;
      this.systemMediaControls.isStopEnabled = true;
      this.systemMediaControls.isNextEnabled = true;
      this.systemMediaControls.isPreviousEnabled = true;

      let updater = this.systemMediaControls.displayUpdater;
      updater.type = (window as any).Windows.Media.MediaPlaybackType.music;
      updater.musicProperties.artist = track.user.username;
      updater.musicProperties.title = track.title;
      updater.thumbnail = (window as any).Windows.Storage.Streams.RandomAccessStreamReference.createFromUri(new (window as any).Windows.Foundation.Uri(track.artwork_url));
      updater.update();
    }
  }

  async save(track?: any) {
    if (Haptics) {
      Haptics.impact({
        style: HapticsImpactStyle.Light
      })
    }

    if (this.currentTrack && !track) {
      const keyframes = [
        {
          transform: 'translate3d(-1px, 0, 0)'
        },
        {
          transform: 'translate3d(2px, 0, 0)'
        },
        {
          transform: 'translate3d(-4px, 0, 0)'
        },
        {
          transform: 'translate3d(4px, 0, 0)'
        }
      ];

      if (this.saveButtonEl) {
        this.saveButtonEl.animate((keyframes as any), {
          duration: 300
        });

        await saveSong(this.currentTrack);

        if (this.toastCtrl) {
          const toast = await this.toastCtrl.create({
            message: 'Song saved',
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 2000
          });
          await toast.present();
        }
      }
    }
    else {
      const saveVar = await saveSong(track)

      if (this.toastCtrl && saveVar === true) {
        const toast = await this.toastCtrl.create({
          message: 'Song saved',
          showCloseButton: true,
          closeButtonText: 'Ok',
          duration: 2000
        });
        await toast.present();
      }
    }
  }

  close() {
    this.musicSrc = '';
    this.musicTitle = '';
    this.playing = false;
    this.genre = '';
    this.likes = '';
    this.desc = '';

    if (this.wakeLockRequest) {
      this.wakeLockRequest.cancel();
      this.wakeLockRequest = null;
    }
  }


  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route-redirect from="/" to={this.hasSeenTutorial ? '/home' : '/intro'} />

          <ion-route url='/intro' component='app-intro' />
          <ion-route url="/home" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/track/:id" component="track-detail" />
        </ion-router>
        <ion-nav />

        <audio autoplay ref={(el) => this.audioEl = el as HTMLAudioElement} src={`${this.musicSrc}?client_id=a7Ucuq0KY8Ksn8WzBG6wj4x6pcId6BpU`}></audio>

        {this.musicTitle ? <footer>
          <div id='expandedInfo'>
            <h3>{this.musicTitle || 'Nothing Playing'}</h3>
            <p>Genre: {this.genre || 'Not available'}</p>
            <p>Likes: {this.likes || 'Not available'}</p>
            <p>Description: {this.desc || 'Not available'}</p>
          </div>

          <div id='mobileInfo'>
            <h3>{this.musicTitle}</h3>
          </div>

          <div id='buttonBlock'>
            <ion-button fill='clear' id='playCloseButton' onClick={() => this.close()}>
              <ion-icon name='close'></ion-icon>
            </ion-button>

            <ion-button fill='clear' aria-label='Previous button' onClick={() => this.prev()}>
              <ion-icon name='skip-backward'></ion-icon>
            </ion-button>
            {!this.playing ?
              <ion-button key='start' fill='clear' class='slightlyBigger' aria-label='Play button' onClick={() => this.homePlay()}>
                <ion-icon name='play' size='large'></ion-icon>
              </ion-button>
              :
              <ion-button key='end' fill='clear' class='slightlyBigger' aria-label='Pause button' onClick={() => this.pause()}>
                <ion-icon name='pause' size='large'></ion-icon>
              </ion-button>
            }
            <ion-button fill='clear' aria-label='Next button' onClick={() => this.next()}>
              <ion-icon name='skip-forward'></ion-icon>
            </ion-button>

            <ion-button fill='clear' ref={(el: any) => this.saveButtonEl = el as HTMLButtonElement} aria-label='Sharing button' id='desktopShareButton' onClick={() => this.save()}>
              <ion-icon name='star-outline'></ion-icon>
            </ion-button>
          </div>
        </footer> : null}
      </ion-app>
    );
  }
}
