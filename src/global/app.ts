import '@ionic/core';

import { setupConfig } from '@ionic/core';

import { mdTransitionAnimation } from '../animations/navAni';

/*setupConfig({
   animated: window.matchMedia("(min-width: 1200px)").matches ? false : true
});*/

window.matchMedia("(min-width: 1200px)").matches ? setupConfig({
  navAnimation: mdTransitionAnimation
}) : null

