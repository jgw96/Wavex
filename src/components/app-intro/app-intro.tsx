import { Component, Prop } from '@stencil/core';

import { Plugins, HapticsImpactStyle } from '@capacitor/core';

const { Haptics } = Plugins;

@Component({
  tag: 'app-intro',
  styleUrl: 'app-intro.css'
})
export class AppIntro {

  @Prop({ connect: 'ion-nav' })
  nav: any | null = null;


  async getStarted() {
    if (Haptics) {
      Haptics.impact({
        style: HapticsImpactStyle.Light
      })
    }
    
    const nav: any = await (this.nav as any).componentOnReady();
    nav.setRoot('app-home', null, { animated: false, direction: 'forward' });
    localStorage.setItem('seen', 'true');
  }

  render() {
    return (
      <ion-content fullscreen={true}>
        <ion-slides pager={true}>
          <ion-slide>
          <img src="/assets/music_icon.svg" alt='Music slide' class="slide-image" />
            <h1 class="slide-title">
              Welcome to wavex
            </h1>

            <p class='slideP'>
            wavex gives you intelligent, cross platform access to all of your favorite music from up and coming artists (Powered by SoundCloud)
            </p>
          </ion-slide>

          <ion-slide>
            <img src="/assets/devices.svg" alt='devices slide' class="slide-image" />
            <h2 class="slide-title">
              Cross Platform
            </h2>

            <p class='slideP'>
              wavex brings your mobile device and PC together by integrating deeply with all of your Windows 10 devices
            </p>
          </ion-slide>

          <ion-slide>
            <img alt='robot slide' src="/assets/robot.svg" class="slide-image" />
            <h2 class="slide-title">
              Intelligent
            </h2>

            <p class='slideP'>
              wavex uses cutting edge AI to learn your song preferences, deeply understand these songs and then suggest new songs that will help widen your music
              library, not just show you the same old stuff.
            </p>
          </ion-slide>

          <ion-slide>
            <img alt='get started slide' src="/assets/walk.svg" class="slide-image" />
            <h2 class="slide-title">
              Get Started
            </h2>

            <p class='slideP'>
              Thanks for trying wavex, have fun!
            </p>

            <ion-button onClick={() => this.getStarted()} id='startedButton' shape='round'>
              Get Started
            </ion-button>
          </ion-slide>
        </ion-slides>
      </ion-content>
    );
  }
}
