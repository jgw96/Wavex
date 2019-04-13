import { Component, Event, EventEmitter, Element, Prop } from '@stencil/core';


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
          <ion-button color="secondary" shape="round">
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
