import { Event, EventEmitter, Component, Prop } from '@stencil/core';

import { del } from 'idb-keyval';

@Component({
  tag: 'popover-page',
  styleUrl: 'popover-page.css',
  shadow: true
})
export class PopoverPage {

  @Prop() userAgent: any;
  @Event() loggedOut: EventEmitter | any;

  logout() {
    this.userAgent.logout();
    this.loggedOut.emit();
  }

  delFave() {
    del('musically_saved_tracks');
    location.reload();
  }

  render() {
    return [
      <ion-list lines='none'>
        <app-install-button></app-install-button>

        <ion-item onClick={() => this.delFave()}>
          <ion-label color='danger'>Delete Favorites</ion-label>
        </ion-item>

        <ion-item onClick={() => this.logout()}>
          <ion-label>Logout</ion-label>
        </ion-item>
      </ion-list>
    ];
  }
}
