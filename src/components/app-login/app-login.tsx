import { Component, State, Prop } from '@stencil/core';

import { UserAgentApplication } from 'msal';

import { config } from '../../helpers/utils';
import { getUser, getProfilePhoto } from '../../services/graph';


@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css'
})
export class AppLogin {

  @State() user: any;
  @State() loggedIn: boolean = false;
  @State() profilePhoto: string | null = null;

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: any | null = null;

  userAgentApplication: any = new UserAgentApplication(config.appId, null, () => this.tokenCallback(), {
    redirectUri: config.redirectURI
  });
  token: string | null = null;

  async componentDidLoad() {
    try {
      this.token = await this.userAgentApplication.acquireTokenSilent(config.scopes);

      if (this.token) {
        await this.getUserProfile();
      }
    }
    catch (err) {
      console.error(err);
    }
  }

  tokenCallback() {

  }

  async login() {
    try {
      await this.userAgentApplication.loginPopup(config.scopes);
      await this.getUserProfile();
    }
    catch (err) {
      const errParts = err.split('|');
      console.log(errParts);
    }
  }

  async getUserProfile() {
    try {
      // Get the access token silently
      // If the cache contains a non-expired token, this function
      // will just return the cached token. Otherwise, it will
      // make a request to the Azure OAuth endpoint to get a token

      if (!this.token) {
        this.token = await this.userAgentApplication.acquireTokenSilent(config.scopes);
        
        if (this.token) {
          sessionStorage.setItem('token', this.token);
        }
      }

      if (this.token) {
        console.log(this.token);
        sessionStorage.setItem('token', this.token);

        const userData = await getUser(this.token);
        console.log(userData);
        this.user = userData;

        const photoBinary = await getProfilePhoto(this.token);
        this.profilePhoto = window.URL.createObjectURL(photoBinary);

        this.loggedIn = true;

        if (this.toastCtrl) {
          const toast = await this.toastCtrl.create({
            message: `Hello ${this.user.displayName}`,
            duration: 2000
          });

          await toast.present();
        }
      }
    }
    catch (err) {
      const errParts = err.split('|');
      console.log(errParts);
    }
  }

  render() {
    return (
      <div>
        {this.profilePhoto ? <img  id='profilePhoto' alt='user photo' src={this.profilePhoto ? this.profilePhoto : undefined}></img> : null}
        {!this.profilePhoto ? <ion-button fill='clear' onClick={() => this.login()}>Login</ion-button> : null}
      </div>
    );
  }
}
