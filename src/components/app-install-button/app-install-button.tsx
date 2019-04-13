import { Component, State } from '@stencil/core';


@Component({
  tag: 'app-install-button',
  styleUrl: 'app-install-button.css'
})
export class AppInstallButton {

  @State() deferredPrompt: any = null;

  componentDidLoad() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      console.log(e);
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
  }

  install() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
        .then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          this.deferredPrompt = null;
        });
    }
  }

  render() {
    return (
      this.deferredPrompt ?
        <ion-button fill="clear" onClick={() => this.install()}>Install</ion-button>
        : null
    );
  }
}
