import { Component, State, Prop } from '@stencil/core';

import { getSingleTrack } from '../../services/api';

@Component({
  tag: 'app-podcast',
  styleUrl: 'app-podcast.css'
})
export class AppPodcast {

  @Prop() pod: number;

  @State() podcast: any | null = null;

  // todo: change to DidLoad and add skeleton
  async componentWillLoad() {
    console.log(this.pod);
    if (this.pod) {
      console.log('here');
      this.podcast = await getSingleTrack(location.pathname.split('/')[2]);
    }

    console.log('podcast', this.podcast);
  }

  render() {
    return [
      <ion-header no-border>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>podcast</ion-title>
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
            <p>{this.podcast.description}</p>
          </section>

          <section id="episodes">
            <ion-list lines='none'>
              {
                this.podcast.episodes.map((episode) => {
                  return (
                    <ion-item>
                      <ion-label text-wrap>
                        <h2>{episode.title}</h2>

                        <div id="podcastExplicitBox">
                          {episode.explicit_content ? <h3 id="explicit">Explicit</h3> : null}
                        </div>

                        <p innerHTML={episode.description}></p>

                        <div id="podActions">
                          <ion-button shape="round" fill="outline">
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
