import '@ionic/core';

import { setupConfig } from '@ionic/core';

setupConfig({
   animated: window.matchMedia("(min-width: 1200px)").matches ? false : true
});
