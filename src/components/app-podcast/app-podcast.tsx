import { Component, Event, EventEmitter, State, Prop } from '@stencil/core';

import { getSingleTrack } from '../../services/api';

@Component({
  tag: 'app-podcast',
  styleUrl: 'app-podcast.css'
})
export class AppPodcast {

  @Prop() pod: number;
  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: any | null = null;

  @State() podcast: any | null = null;

  @Event() playEvent: EventEmitter | null = null;

  // todo: change to DidLoad and add skeleton
  async componentWillLoad() {
    console.log(this.pod);
    if (this.pod) {
      console.log('here');
      this.podcast = await getSingleTrack(location.pathname.split('/')[2]);
    }

    console.log('podcast', this.podcast);
  }

  playTrack(episode, e: Event) {
    if (this.playEvent) {
      this.playEvent.emit({
        track: episode
      });
    }

    e.stopPropagation();
  }

  async moreInfo(episode) {
    const modal = await this.modalCtrl.create({
      component: 'pod-detail',
      componentProps: {
        'pod': episode
      }
    });
    await modal.present();
  }

  render() {
    return [
      <ion-header no-border>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Podcast</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <div id="podContainer">
          <section id="info">
            <img src={this.podcast && this.podcast.image ? this.podcast.image : null}></img>
            <h1>{this.podcast.title}</h1>

            <div id="podcastInfo">
              <h3>{this.podcast.language}</h3>
              {this.podcast.explicit_content ? <h3 id="explicit">Explicit</h3> : null}
            </div>
            <div id="podcastInfoDesc" innerHTML={this.podcast.description}></div>
          </section>

          <section id="episodes">
            <h2 id="epiHeader">Episodes</h2>

            <ion-list lines='none'>
              {
                this.podcast.episodes.map((episode) => {
                  return (
                    <ion-item onClick={() => this.moreInfo(episode)}>
                      <ion-label text-wrap>
                        <h2 id="epiTitle">{episode.title}</h2>

                        <div id="podcastExplicitBox">
                          {episode.explicit_content ? <h3 id="explicit">Explicit</h3> : null}
                        </div>

                        <p id="epiDesc" innerHTML={episode.description}></p>

                        <div id="podActions">
                          <ion-button onClick={(event) => this.playTrack(episode, event)} shape="round" fill="outline">
                            <ion-icon slot='start' name='play'></ion-icon>
                            play
                          </ion-button>
                        </div>
                      </ion-label>
                    </ion-item>
                  )
                })
              }
            </ion-list>

          </section>
        </div>
      </ion-content>
    ];
  }
}
