var t,e,n,r,o,i,s,a,u;window,function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"}(t||(t={})),function(t){t.Rear="REAR",t.Front="FRONT"}(e||(e={})),function(t){t.Uri="uri",t.Base64="base64"}(n||(n={})),function(t){t.Application="APPLICATION",t.Documents="DOCUMENTS",t.Data="DATA",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE"}(r||(r={})),function(t){t.UTF8="utf8",t.ASCII="ascii",t.UTF16="utf16"}(o||(o={})),function(t){t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT"}(i||(i={})),function(t){t.Default="DEFAULT",t.Destructive="DESTRUCTIVE",t.Cancel="CANCEL"}(s||(s={})),function(t){t.Smart="smart",t.Shared="shared",t.User="user"}(a||(a={})),function(t){t.Dark="DARK",t.Light="LIGHT"}(u||(u={}));var c=new(function(){function t(){var t=this;this.Plugins={},this.platform="web",this.isNative=!1,this.Plugins=new Proxy(this.Plugins,{get:function(e,n){if(void 0===e[n]){var r=t;return new Proxy({},{get:function(t,e){return void 0===t[e]?r.pluginMethodNoop.bind(r,t,e,n):t[e]}})}return e[n]}})}return t.prototype.pluginMethodNoop=function(t,e,n){return Promise.reject(n+" does not have web implementation.")},t.prototype.getPlatform=function(){return this.platform},t.prototype.isPluginAvailable=function(t){return this.Plugins.hasOwnProperty(t)},t.prototype.handleError=function(t){console.error(t)},t}());c=window.Capacitor||c,window.Capacitor||(window.Capacitor=c);var l=c.Plugins,f=new(function(){function t(){this.plugins={},this.loadedPlugins={}}return t.prototype.addPlugin=function(t){this.plugins[t.config.name]=t},t.prototype.getPlugin=function(t){return this.plugins[t]},t.prototype.loadPlugin=function(t){var e=this.getPlugin(t);e?e.load():console.error("Unable to load web plugin "+t+", no such plugin found.")},t.prototype.getPlugins=function(){var t=[];for(var e in this.plugins)t.push(this.plugins[e]);return t},t}()),p=function(){function t(t,e){this.config=t,this.loaded=!1,this.listeners={},this.windowListeners={},e?e.addPlugin(this):f.addPlugin(this)}return t.prototype.addWindowListener=function(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0},t.prototype.removeWindowListener=function(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)},t.prototype.addListener=function(t,e){var n=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e);var r=this.windowListeners[t];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){n.removeListener(t,e)}}},t.prototype.removeListener=function(t,e){var n=this.listeners[t];if(n){var r=n.indexOf(e);this.listeners[t].splice(r,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}},t.prototype.notifyListeners=function(t,e){var n=this.listeners[t];n&&n.forEach(function(t){return t(e)})},t.prototype.hasListeners=function(t){return!!this.listeners[t].length},t.prototype.registerWindowListener=function(t,e){var n=this;this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:function(t){n.notifyListeners(e,t)}}},t.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},t.prototype.load=function(){this.loaded=!0},t}(),d=function(t,e){t.hasOwnProperty(e.config.name)&&!function(t){return t.config.platforms&&t.config.platforms.indexOf(Capacitor.platform)>=0}(e)||(t[e.config.name]=e)},h=function(t,e){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function v(t,e){function n(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function m(t,e,n,r){return new(n||(n=Promise))(function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})}function w(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}new(function(t){function e(){return t.call(this,{name:"Browser",platforms:["web"]})||this}return v(e,t),e.prototype.open=function(t){return m(this,void 0,void 0,function(){return w(this,function(e){return this._lastWindow=window.open(t.url,t.windowName||"_blank"),[2,Promise.resolve()]})})},e.prototype.prefetch=function(t){return m(this,void 0,void 0,function(){return w(this,function(t){return[2,Promise.resolve()]})})},e.prototype.close=function(){return m(this,void 0,void 0,function(){return w(this,function(t){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]})})},e}(p)),new(function(t){function e(){return t.call(this,{name:"Camera",platforms:["web"]})||this}return v(e,t),e.prototype.getPhoto=function(t){return m(this,void 0,void 0,function(){var t=this;return w(this,function(e){return[2,new Promise(function(e,n){return m(t,void 0,void 0,function(){var t,r=this;return w(this,function(o){switch(o.label){case 0:return t=document.createElement("ion-pwa-camera-modal"),document.body.appendChild(t),[4,t.componentOnReady()];case 1:return o.sent(),t.addEventListener("onPhoto",function(o){return m(r,void 0,void 0,function(){var r,i;return w(this,function(s){switch(s.label){case 0:return null!==(r=o.detail)?[3,1]:(n(),[3,3]);case 1:return i=e,[4,this._getCameraPhoto(r)];case 2:i.apply(void 0,[s.sent()]),s.label=3;case 3:return t.dismiss(),[2]}})})}),t.present(),[2]}})})})]})})},e.prototype._getCameraPhoto=function(t){return new Promise(function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onloadend=function(){var t=r.result;e({base64Data:t,webPath:t,format:"jpeg"})},r.onerror=function(t){n(t)}})},e}(p)),new(function(t){function e(){return t.call(this,{name:"Clipboard",platforms:["web"]})||this}return v(e,t),e.prototype.write=function(t){return m(this,void 0,void 0,function(){return w(this,function(e){switch(e.label){case 0:return navigator.clipboard?t.string||t.url?[4,navigator.clipboard.writeText(t.string||t.label)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return e.sent(),[3,3];case 2:if(t.image)return[2,Promise.reject("Setting images not supported on the web")];e.label=3;case 3:return[2,Promise.resolve()]}})})},e.prototype.read=function(t){return m(this,void 0,void 0,function(){var t,e,n,r;return w(this,function(o){switch(o.label){case 0:return navigator.clipboard?[4,navigator.clipboard.read()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:for(t=o.sent(),e=0,n=t.items;e<n.length;e++)if("text/plain"===(r=n[e]).type)return[2,Promise.resolve(r.getAs("text/plain"))];return[2,Promise.reject("Unable to get data from clipboard")]}})})},e}(p));var g=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.forEach(function(e){if(e&&"object"==typeof e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}),t};new(function(t){function e(){return t.call(this,{name:"Geolocation",platforms:["web"]})||this}return v(e,t),e.prototype.getCurrentPosition=function(t){var e=this;return new Promise(function(n,r){return e.requestPermissions().then(function(e){window.navigator.geolocation.getCurrentPosition(function(t){n(t)},function(t){r(t)},g({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))})})},e.prototype.watchPosition=function(t,e){return""+window.navigator.geolocation.watchPosition(function(t){e(t)},function(t){e(null,t)},g({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},t))},e.prototype.clearWatch=function(t){return window.navigator.geolocation.clearWatch(parseInt(t.id,10)),Promise.resolve()},e}(p)),new(function(t){function e(){return t.call(this,{name:"Device",platforms:["web"]})||this}return v(e,t),e.prototype.getInfo=function(){return m(this,void 0,void 0,function(){var t,e,n;return w(this,function(r){switch(r.label){case 0:t=navigator.userAgent,e=this.parseUa(t),n={},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return n=r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,Promise.resolve({model:e.model,platform:"web",appVersion:"",osVersion:e.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:n.level,isCharging:n.charging,uuid:this.getUid()})]}})})},e.prototype.getLanguageCode=function(){return m(this,void 0,void 0,function(){return w(this,function(t){return[2,{value:navigator.language}]})})},e.prototype.parseUa=function(t){var e={},n=t.indexOf("(")+1,r=t.indexOf(") AppleWebKit");-1!==t.indexOf(") Gecko")&&(r=t.indexOf(") Gecko"));var o=t.substring(n,r);if(-1!==t.indexOf("Android"))e.model=o.replace("; wv","").split("; ").pop().split(" Build")[0],e.osVersion=o.split("; ")[1];else if(e.model=o.split("; ")[0],navigator.oscpu)e.osVersion=navigator.oscpu;else if(-1!==t.indexOf("Windows"))e.osVersion=o;else{var i=o.split("; ").pop().replace(" like Mac OS X","").split(" ");e.osVersion=i[i.length-1].replace(/_/g,".")}return e},e.prototype.getUid=function(){var t=window.localStorage.getItem("_capuid");return t||(t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}),window.localStorage.setItem("_capuid",t),t)},e}(p)),new(function(t){function e(){return t.call(this,{name:"Share",platforms:["web"]})||this}return v(e,t),e.prototype.share=function(t){return navigator.share?navigator.share({title:t.title,text:t.text,url:t.url}):Promise.reject("Web Share API not available")},e}(p)),new(function(t){function e(){return t.call(this,{name:"Modals",platforms:["web"]})||this}return v(e,t),e.prototype.alert=function(t){return m(this,void 0,void 0,function(){return w(this,function(e){return window.alert(t.message),[2,Promise.resolve()]})})},e.prototype.prompt=function(t){return m(this,void 0,void 0,function(){var e;return w(this,function(n){return e=window.prompt(t.message,t.inputPlaceholder||""),[2,Promise.resolve({value:e,cancelled:null===e})]})})},e.prototype.confirm=function(t){return m(this,void 0,void 0,function(){var e;return w(this,function(n){return e=window.confirm(t.message),[2,Promise.resolve({value:e})]})})},e.prototype.showActions=function(t){return m(this,void 0,void 0,function(){var e=this;return w(this,function(n){return[2,new Promise(function(n,r){return m(e,void 0,void 0,function(){var e,r;return w(this,function(o){switch(o.label){case 0:return(e=document.querySelector("ion-action-sheet-controller"))||(e=document.createElement("ion-action-sheet-controller"),document.body.appendChild(e)),[4,e.componentOnReady()];case 1:return o.sent(),r=t.options.map(function(t,e){return{text:t.title,role:t.style&&t.style.toLowerCase()||"",icon:t.icon||"",handler:function(){n({index:e})}}}),[4,e.create({title:t.title,buttons:r})];case 2:return[4,o.sent().present()];case 3:return o.sent(),[2]}})})})]})})},e}(p)),new(function(t){function e(){var e=t.call(this,{name:"Motion"})||this;return e.registerWindowListener("devicemotion","accel"),e.registerWindowListener("deviceorientation","orientation"),e}return v(e,t),e}(p)),new(function(t){function e(){var e=t.call(this,{name:"Storage",platforms:["web"]})||this;return e.KEY_PREFIX="_cap_",e}return v(e,t),e.prototype.get=function(t){var e=this;return new Promise(function(n,r){n({value:window.localStorage.getItem(e.makeKey(t.key))})})},e.prototype.set=function(t){var e=this;return new Promise(function(n,r){window.localStorage.setItem(e.makeKey(t.key),t.value),n()})},e.prototype.remove=function(t){var e=this;return new Promise(function(n,r){window.localStorage.removeItem(e.makeKey(t.key)),n()})},e.prototype.keys=function(){var t=this;return new Promise(function(e,n){e({keys:Object.keys(localStorage).filter(function(e){return t.isKey(e)}).map(function(e){return t.getKey(e)})})})},e.prototype.clear=function(){var t=this;return new Promise(function(e,n){Object.keys(localStorage).filter(function(e){return t.isKey(e)}).forEach(function(t){return window.localStorage.removeItem(t)}),e()})},e.prototype.makeKey=function(t){return this.KEY_PREFIX+t},e.prototype.isKey=function(t){return 0===t.indexOf(this.KEY_PREFIX)},e.prototype.getKey=function(t){return t.substr(this.KEY_PREFIX.length)},e}(p)),new(function(t){function e(){return t.call(this,{name:"Toast",platforms:["web"]})||this}return v(e,t),e.prototype.show=function(t){return m(this,void 0,void 0,function(){var e,n;return w(this,function(r){switch(r.label){case 0:return(e=document.querySelector("ion-toast-controller"))||(e=document.createElement("ion-toast-controller"),document.body.appendChild(e)),[4,e.componentOnReady()];case 1:return r.sent(),n=3e3,t.duration&&(n="long"===t.duration?5e3:3e3),[4,e.create({position:"bottom",message:t.text,duration:n})];case 2:return[4,r.sent().present()];case 3:return[2,r.sent()]}})})},e}(p)),function(t){for(var e=0,n=f.getPlugins();e<n.length;e++)d(t,n[e])}(l);export{i as a,l as b};