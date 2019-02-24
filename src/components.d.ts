/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {
    'onPlayEvent'?: (event: CustomEvent) => void;
    'onSaveEvent'?: (event: CustomEvent) => void;
  }

  interface AppInstallButton {}
  interface AppInstallButtonAttributes extends StencilHTMLAttributes {}

  interface AppIntro {}
  interface AppIntroAttributes extends StencilHTMLAttributes {}

  interface AppLogin {}
  interface AppLoginAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'name': string;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface PopoverPage {
    'userAgent': any;
  }
  interface PopoverPageAttributes extends StencilHTMLAttributes {
    'onLoggedOut'?: (event: CustomEvent) => void;
    'userAgent'?: any;
  }

  interface TrackDetail {
    'id': string;
  }
  interface TrackDetailAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'onPlayEvent'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppInstallButton': Components.AppInstallButton;
    'AppIntro': Components.AppIntro;
    'AppLogin': Components.AppLogin;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'PopoverPage': Components.PopoverPage;
    'TrackDetail': Components.TrackDetail;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-install-button': Components.AppInstallButtonAttributes;
    'app-intro': Components.AppIntroAttributes;
    'app-login': Components.AppLoginAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'popover-page': Components.PopoverPageAttributes;
    'track-detail': Components.TrackDetailAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppInstallButtonElement extends Components.AppInstallButton, HTMLStencilElement {}
  var HTMLAppInstallButtonElement: {
    prototype: HTMLAppInstallButtonElement;
    new (): HTMLAppInstallButtonElement;
  };

  interface HTMLAppIntroElement extends Components.AppIntro, HTMLStencilElement {}
  var HTMLAppIntroElement: {
    prototype: HTMLAppIntroElement;
    new (): HTMLAppIntroElement;
  };

  interface HTMLAppLoginElement extends Components.AppLogin, HTMLStencilElement {}
  var HTMLAppLoginElement: {
    prototype: HTMLAppLoginElement;
    new (): HTMLAppLoginElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLPopoverPageElement extends Components.PopoverPage, HTMLStencilElement {}
  var HTMLPopoverPageElement: {
    prototype: HTMLPopoverPageElement;
    new (): HTMLPopoverPageElement;
  };

  interface HTMLTrackDetailElement extends Components.TrackDetail, HTMLStencilElement {}
  var HTMLTrackDetailElement: {
    prototype: HTMLTrackDetailElement;
    new (): HTMLTrackDetailElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-install-button': HTMLAppInstallButtonElement
    'app-intro': HTMLAppIntroElement
    'app-login': HTMLAppLoginElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'popover-page': HTMLPopoverPageElement
    'track-detail': HTMLTrackDetailElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-install-button': HTMLAppInstallButtonElement;
    'app-intro': HTMLAppIntroElement;
    'app-login': HTMLAppLoginElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'popover-page': HTMLPopoverPageElement;
    'track-detail': HTMLTrackDetailElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
