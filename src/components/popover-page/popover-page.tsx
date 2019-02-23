import { Event, EventEmitter, Component, Prop } from '@stencil/core';


@Component({
  tag: 'popover-page',
  styleUrl: 'popover-page.css'
})
export class PopoverPage {

  @Prop() userAgent: any;
  @Event() loggedOut: EventEmitter | any;

  logout() {
    this.userAgent.logout();
    this.loggedOut.emit();
  }

  render() {
    return [
      <ion-list>
        <ion-item onClick={() => this.logout()}>
          <ion-label>Logout</ion-label>
        </ion-item>
      </ion-list>
    ];
  }
}
