import { Component, Element, Event, EventEmitter, Prop, State } from '@stencil/core';

import { getTracks, searchTracks } from '../../services/api';
import { getSaved, deleteSong } from '../../services/data';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() tracks: any[] | null = null;
  @State() savedTracks: any[] | null = null;
  @State() searched: boolean = false;
  @State() searching: boolean = false;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: any | null = null;

  @Element() el: HTMLElement | null = null;

  @Event() playEvent: EventEmitter | null = null;
  @Event() saveEvent: EventEmitter | null = null;

  dropdownArrow: HTMLDivElement | null = null;

  async componentDidLoad() {
    this.tracks = await getTracks();

    if (window.matchMedia("(min-width: 1200px)").matches) {
      this.savedTracks = await getSaved();

      if (this.dropdownArrow) {
        this.dropdownArrow.animate(([
          {
            transform: 'rotate(0deg) translateX(0px)'
          },
          {
            transform: 'rotate(90deg) translateX(-3px)'
          }
        ] as any), {
            duration: 150,
            fill: 'forwards'
          })
      }
    }
  }

  async search(value: string) {
    const data = await searchTracks(value);
    this.savedTracks = null;
    this.tracks = data;
    this.searched = true;
  }

  playTrack(track: any) {
    if (this.playEvent) {
      this.playEvent.emit({
        track
      });
    }
  }

  saveTrack(track: any) {
    if (this.saveEvent) {
      this.saveEvent.emit({
        track
      });

      setTimeout(async () => {
        this.savedTracks = await getSaved();
      }, 400);
    }
  }

  async remove(track: any) {
    await deleteSong(track);

    setTimeout(async () => {
      this.savedTracks = await getSaved();
    }, 400);
  }

  async toggleSaved() {
    if (this.savedTracks) {
      this.savedTracks = null;

      if (this.dropdownArrow) {
        this.dropdownArrow.animate(([
          {
            transform: 'rotate(0deg) translateX(0px)'
          },
          {
            transform: 'rotate(90deg) translateX(-3px)'
          }
        ] as any), {
            duration: 150,
            fill: 'forwards'
          })
      }
    }
    else {
      this.savedTracks = await getSaved();

      if (this.savedTracks && this.savedTracks.length > 0) {
        if (this.dropdownArrow) {
          this.dropdownArrow.animate(([
            {
              transform: 'rotate(90deg) translateX(-3px)'
            },
            {
              transform: 'rotate(0deg) translateX(0px)'
            }
          ] as any), {
              duration: 150,
              fill: 'forwards'
            })
        }
      }
      else {
        if (this.toastCtrl) {
          const toast = await this.toastCtrl.create({
            message: 'Favorite a song to see it there!',
            duration: 2000
          });
          await toast.present();

          if (this.el) {
            const element = this.el.querySelector('ion-item-sliding');
            if (element) {
              const child = element.firstElementChild;

              if (child) {
                child.animate(([
                  {
                    transform: 'translate3d(0px, 0px, 0px)'
                  },
                  {
                    transform: 'translate3d(-20px, 0px, 0px)'
                  },
                  {
                    transform: 'translate3d(0px, 0px, 0px)'
                  },
                  {
                    transform: 'translate3d(-20px, 0px, 0px)'
                  },
                  {
                    transform: 'translate3d(0px, 0px, 0px)'
                  }
                ]) as any, {
                    duration: 600
                  })
              }
            }
          }
        }
      }
    }
  }

  showSearch() {
    if (this.searching) {
      this.searching = false;
    }
    else {
      this.searching = true;
    }
  }

  render() {
    return [
      <ion-header no-border >
        <ion-toolbar color="primary">
          <ion-title>wavex</ion-title>

          <ion-buttons slot='end'>
            <ion-button onClick={() => this.showSearch()} fill='clear'>
              <ion-icon name='search'></ion-icon>
            </ion-button>

            <app-login></app-login>

            <app-install-button></app-install-button>
          </ion-buttons>
        </ion-toolbar>

        {this.searching ? <ion-toolbar id='searchToolbar' color='primary'>
          <ion-searchbar mode='ios' onIonChange={(ev: any) => this.search(ev.detail.value || '')} debounce={300}></ion-searchbar>
        </ion-toolbar> : null}
      </ion-header>,

      <ion-content>
        <main id='container'>
          <div id='desktopSavedListDiv'>
            <ion-list id='desktopSavedList'>
              <ion-list-header id='savedDesktopHeader' onClick={() => this.toggleSaved()}>
                <ion-label>
                  Favorites
                </ion-label>

                <ion-button fill='clear' onClick={() => this.toggleSaved()}>
                  <ion-icon ref={(el: any) => this.dropdownArrow = el as HTMLDivElement} id='dropdownArrow' name='arrow-dropdown'></ion-icon>
                </ion-button>
              </ion-list-header>
              {this.savedTracks ? <div id='savedTracksDesktopDiv'>
                {
                  this.savedTracks.map((track) => {
                    if (track.genre && track.genre.length > 0) {
                      return (
                        /*<ion-item href={`/track/${track.id}`}>
                          <ion-thumbnail slot="start">
                            <ion-img src={track.artwork_url ? track.artwork_url : '/assets/music_icon.svg'} alt={`${track.title} album artwork`}></ion-img>
                          </ion-thumbnail>
                          <ion-label>
                            <h2>{track.title}</h2>
                            <p>{track.description || 'No Description'}</p>
                          </ion-label>
                        </ion-item>*/
                        <ion-card color='primary'>
                          <img src={track.artwork_url ? track.artwork_url : '/assets/music_icon.svg'} alt={`${track.title} album artwork`}></img>
                          <ion-card-header color='primary'>
                            <ion-card-subtitle>{track.user && track.user.username ? track.user.username : 'Not available'}</ion-card-subtitle>
                            <ion-card-title>{track.title}</ion-card-title>
                          </ion-card-header>

                          <ion-card-content color='primary'>
                            <span>{track.description || 'No Description'}</span>
                          </ion-card-content>

                          <ion-buttons>
                            <ion-button id='removeButton' fill='outline' shape='round' color='danger' onClick={() => this.remove(track)}>Remove</ion-button>
                            <ion-button fill='outline' shape='round' onClick={() => this.playTrack(track)}>Play</ion-button>
                          </ion-buttons>
                        </ion-card>
                      )
                    }
                  })
                }
              </div> : null}
            </ion-list>
          </div>

          <div id='mainDiv'>
            <ion-list>
              <ion-list-header id='savedHeader' onClick={() => this.toggleSaved()}>
                <ion-label>
                  Favorites
                </ion-label>

                <ion-button fill='clear'>
                  <ion-icon ref={(el: any) => this.dropdownArrow = el as HTMLDivElement} id='dropdownArrow' name='arrow-dropdown'></ion-icon>
                </ion-button>
              </ion-list-header>
              {this.savedTracks ? <div id='savedTracksDiv'>
                {
                  this.savedTracks.map((track) => {
                    if (track.genre && track.genre.length > 0) {
                      return (
                        <ion-item-sliding>
                          <ion-item href={`/track/${track.id}`}>
                            <ion-thumbnail slot="start">
                              <ion-img src={track.artwork_url ? track.artwork_url : '/assets/music_icon.svg'} alt={`${track.title} album artwork`}></ion-img>
                            </ion-thumbnail>
                            <ion-label>
                              <h2>{track.title}</h2>
                              <p>{track.description || 'No Description'}</p>
                            </ion-label>
                          </ion-item>

                          <ion-item-options side='end'>
                            <ion-item-option onClick={() => this.playTrack(track)} color='primary'>
                              <ion-icon class='optionsIcon' name='play'></ion-icon>
                            </ion-item-option>
                            <ion-item-option onClick={() => this.remove(track)} color='danger'>
                              <ion-icon class='optionsIcon' name='trash'></ion-icon>
                            </ion-item-option>
                          </ion-item-options>
                        </ion-item-sliding>
                      )
                    }
                  })
                }
              </div> : null}

              <ion-list-header>
                <ion-label>New Songs</ion-label>
              </ion-list-header>
              {
                this.tracks ? this.tracks.map((track) => {
                  if (track.genre && track.genre.length > 0) {
                    return (
                      <ion-item-sliding>
                        <ion-item href={`/track/${track.id}`}>
                          <ion-thumbnail slot="start">
                            <ion-img src={track.artwork_url ? track.artwork_url : '/assets/music_icon.svg'} alt={`${track.title} album artwork`}></ion-img>
                          </ion-thumbnail>
                          <ion-label>
                            <h2>{track.title}</h2>
                            <p>{track.description || 'No Description'}</p>
                          </ion-label>
                        </ion-item>

                        <ion-item-options side='end'>
                          <ion-item-option onClick={() => this.saveTrack(track)} color='secondary'>
                            <ion-icon class='optionsIcon' name='thumbs-up'></ion-icon>
                          </ion-item-option>
                          <ion-item-option onClick={() => this.playTrack(track)} color='primary'>
                            <ion-icon class='optionsIcon' name='play'></ion-icon>
                          </ion-item-option>
                        </ion-item-options>
                      </ion-item-sliding>
                    )
                  }
                }) : <ion-item>
                    <ion-thumbnail slot="start">
                      <ion-skeleton-text width='100%'></ion-skeleton-text>
                    </ion-thumbnail>
                    <ion-label>
                      <h2><ion-skeleton-text width='40%'></ion-skeleton-text></h2>
                      <p><ion-skeleton-text width='60%'></ion-skeleton-text></p>
                    </ion-label>
                  </ion-item>
              }
            </ion-list>
          </div>
        </main>
      </ion-content>
    ];
  }
}
