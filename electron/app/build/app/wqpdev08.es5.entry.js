var __awaiter=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function s(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};App.loadBundle("wqpdev08",["exports","./chunk-a5be4357.js","./chunk-dc3578ea.js","./chunk-a99bd936.js","./chunk-be8d65e3.js","./chunk-bf9db9f1.js"],function(t,e,n,o,i,r){var a=window.App.h,s=r.Plugins,c=s.Haptics,l=s.Share,u=function(){function t(){this.fab=null,this.el=null,this.id="",this.toastCtrl=null,this.actionSheetCtrl=null,this.track=null,this.token=sessionStorage.getItem("token"),this.devices=[],this.playEvent=null}return t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return t=this,[4,e.getTrackDetail(this.id)];case 1:return t.track=n.sent(),console.log(this.track),console.log("token",this.token),this.el&&(this.fab=this.el.querySelector("#socialFab")),[2]}})})},t.prototype.playTrack=function(){this.playEvent&&this.playEvent.emit({track:this.track})},t.prototype.listenLater=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(o){switch(o.label){case 0:return t={appActivityId:"/track/"+this.track.id,activitySourceHost:"https://wavex-app.firebaseapp.com",userTimezone:Intl.DateTimeFormat().resolvedOptions().timeZone,appDisplayName:"Musically",activationUrl:"https://wavex-app.firebaseapp.com/track/"+this.track.id,contentUrl:"https://wavex-app.firebaseapp.com/track/"+this.track.id,fallbackUrl:"https://wavex-app.firebaseapp.com",contentInfo:{"@context":"https://schema.org","@type":"Song",title:this.track.title},visualElements:{attribution:{iconUrl:"https://wavex-app.firebaseapp.com/assets/sc-icon.png",alternateText:"Musically",addImageQuery:!1},description:this.track.title+" was added to your Listen Later list",backgroundColor:"#ff0000",displayText:"Listen to "+this.track.title,content:{$schema:"https://adaptivecards.io/schemas/adaptive-card.json",type:"AdaptiveCard",body:[{type:"TextBlock",text:"Musically"}]}},historyItems:[{userTimezone:Intl.DateTimeFormat().resolvedOptions().timeZone,startedDateTime:(new Date).toISOString(),lastActiveDateTime:(new Date).toISOString()}]},this.token?[4,n.createActivity(this.token,t,this.track.id)]:[3,4];case 1:return e=o.sent(),console.log(e),this.toastCtrl?[4,this.toastCtrl.create({message:"Song has been posted to your Windows Timeline for later",duration:2500,showCloseButton:!0,closeButtonText:"ok"})]:[3,4];case 2:return[4,o.sent().present()];case 3:o.sent(),o.label=4;case 4:return[2]}})})},t.prototype.listenOnWindows=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return this.token?[4,n.getWindowsDevices(this.token)]:[3,2];case 1:t=e.sent(),this.devices=t.value,console.log(this.devices),e.label=2;case 2:return[2]}})})},t.prototype.toggleList=function(){if(this.fab){var t=this.fab.querySelector("ion-fab-button");t&&(t.activated=!t.activated);var e=this.fab.querySelector("ion-fab-list");e&&(e.activated=!e.activated)}},t.prototype.chooseDevice=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(o){switch(o.label){case 0:return o.trys.push([0,5,,6]),this.token?[4,n.sendCommand(this.token,t,location.href)]:[3,4];case 1:return o.sent(),this.toastCtrl?[4,this.toastCtrl.create({message:"This song will now start playing on your chosen device",duration:2500,showCloseButton:!0,closeButtonText:"ok"})]:[3,4];case 2:return[4,o.sent().present()];case 3:o.sent(),o.label=4;case 4:return this.close(),[3,6];case 5:return e=o.sent(),console.error(e),[3,6];case 6:return[2]}})})},t.prototype.close=function(){this.devices=[]},t.prototype.share=function(){return __awaiter(this,void 0,void 0,function(){var t,e,n,o=this;return __generator(this,function(i){switch(i.label){case 0:return console.log(location.href),console.log(location.origin),console.log(location.hostname),t=location.href,location.origin.includes("localhost")&&(t="https://wavex-app.firebaseapp.com/"+location.pathname),c&&c.impact({style:r.HapticsImpactStyle.Light}),!l||window.Windows?[3,2]:[4,l.share({title:"wavex",text:"Check out this song!",url:t,dialogTitle:"Share this song"})];case 1:return i.sent(),[3,3];case 2:if(window.Windows){console.log("trying to share"),e=window.Windows.ApplicationModel.DataTransfer.DataTransferManager,n=e.getForCurrentView(),console.log("dataTransferManager",n),n.addEventListener("datarequested",function(e){var n=e.request.data;console.log(n.properties),n.properties.title=o.track.title,n.properties.description="Check out this song!",n.setUri(new window.Windows.Foundation.Uri(t))});try{e.showShareUI()}catch(t){console.log("error",t)}}i.label=3;case 3:return[2]}})})},t.prototype.openWindows=function(){return __awaiter(this,void 0,void 0,function(){var t=this;return __generator(this,function(e){switch(e.label){case 0:return[4,this.actionSheetCtrl.create({header:"Windows 10",buttons:[{text:"Listen on your Windows 10 device",icon:"logo-windows",handler:function(){t.listenOnWindows()}},{text:"Listen later",icon:"time",handler:function(){t.listenLater()}},{text:"Cancel",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},t.prototype.render=function(){var t=this;return[a("ion-header",{"no-border":!0},a("ion-toolbar",{color:"primary"},a("ion-buttons",{slot:"start"},a("ion-back-button",{defaultHref:"/"})),a("ion-title",null,this.track?this.track.title:"loading..."))),a("ion-content",{padding:!0},a("div",{id:"containDiv"},a("section",{id:"header"},a("div",{id:"headerContent"},a("div",{id:"albumArt"},this.track&&this.track.artwork_url?a("img",{src:this.track.artwork_url,alt:this.track.title+" album art"}):a("div",{id:"fakeImg"})),a("section",{id:"actions"},a("ion-button",{onClick:function(){return t.playTrack()},shape:"round",id:"playButton"},a("ion-icon",{slot:"start",name:"play"}),"Play"),a("ion-button",{color:"secondary",shape:"round",id:"shareButton",onClick:function(){return t.share()}},a("ion-icon",{slot:"start",name:"share"}),"Share")),a("div",{id:"headerTrackDetail"},this.track?a("h1",{id:"realH1",key:1},this.track.title):a("h1",{key:0},"Loading..."),a("p",{id:"by"},"Posted by ",this.track&&this.track.user?this.track.user.username:"loading..."))),a("div",{id:"extraContent"},a("p",null,this.track?this.track.description:"loading...")))),this.token?a("ion-fab",{id:"socialFab",vertical:"bottom",horizontal:"end",slot:"fixed"},a("ion-fab-button",{color:"secondary",onClick:function(){return t.openWindows()}},a("ion-icon",{name:"logo-windows"}))):null,this.devices.length?a("div",{id:"devicesDiv"},a("button",{id:"closeButton",onClick:function(){return t.close()}},"X"),a("h3",null,"Choose a device"),a("ul",null,this.devices.map(function(e){return a("li",{onClick:function(){return t.chooseDevice(e.id)}},a("p",null,"Model: ",e.Model||"Not available"),a("p",null,"Name: ",e.Name||"Not available"))}))):null)]},Object.defineProperty(t,"is",{get:function(){return"track-detail"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{actionSheetCtrl:{connect:"ion-action-sheet-controller"},devices:{state:!0},el:{elementRef:!0},id:{type:String,attr:"id"},toastCtrl:{connect:"ion-toast-controller"},token:{state:!0},track:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"playEvent",method:"playEvent",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"#albumArt{-ms-flex-pack:center;justify-content:center;display:initial!important}#albumArt,#extraContent p{margin-top:2em}#albumArt img{-webkit-animation-name:fadein;animation-name:fadein;-webkit-animation-duration:.4s;animation-duration:.4s}#albumArt img,#fakeImg{height:14em;width:14em;border-radius:5px;margin-right:10px}#fakeImg{background:grey}#header{-ms-flex-pack:space-evenly;justify-content:space-evenly}#header,#header #headerContent{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}#header #headerContent{-ms-flex-pack:end;justify-content:flex-end;width:auto}h1{margin:0}#realH1{-webkit-animation-name:fadein;animation-name:fadein;-webkit-animation-duration:.4s;animation-duration:.4s;width:10em}#by{margin-top:4px;margin-bottom:0}#actions{margin-top:4em;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}#devicesDiv{padding:1em;position:fixed;width:100%;bottom:0;left:0;right:0;-webkit-animation-name:slidein;animation-name:slidein;-webkit-animation-duration:.28s;animation-duration:.28s;background:#1e2429;z-index:9999}#devicesDiv ul{list-style:none;padding:0}#devicesDiv ul li{border-radius:12px;padding:5px;padding-left:10px;margin:10px;font-size:15px;border:1px solid #fff}#closeButton{background:none;border:none;font-weight:700;position:absolute;right:15px;color:#fff}#actions button#windowsButton{margin-top:2em;color:#4169e1!important}#windowsActionsBlock{margin-top:2em}#graphButton{margin-top:10px}\@media(max-width:380px){#albumArt img,#fakeImg{height:6em;width:6em}}\@media(min-width:1200px){#wrapperDiv{margin-left:15em;padding-left:14em;padding-right:14em;margin-top:4em}#containDiv{margin-left:34em;margin-right:19em}}\@media(max-width:1200px){#headerContent,header{-ms-flex-direction:column;flex-direction:column}#headerContent{width:auto}#albumArt{display:initial!important}#albumArt img,#fakeImg{height:14em;width:14em}#headerTrackDetail{margin-left:0!important;margin-top:1em!important}#headerTrackDetail h1{width:12em}#actions{margin-top:1em!important}}#headerTrackDetail{padding-right:8em;margin-left:0!important;margin-top:1em!important}#headerTrackDetail h1{width:12em;font-weight:700}#actions{margin-top:1em!important}#actions #playButton{margin-right:1em}#headerTrackDetail p{font-weight:700}\@-webkit-keyframes fadein{0%{opacity:0}to{opacity:.99}}\@keyframes fadein{0%{opacity:0}to{opacity:.99}}\@-webkit-keyframes slidein{0%{opacity:0;-webkit-transform:translateY(180px);transform:translateY(180px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes slidein{0%{opacity:0;-webkit-transform:translateY(180px);transform:translateY(180px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}"},enumerable:!0,configurable:!0}),t}();function d(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.4),i.fromTo("translateY","100%","0%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function h(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.4,0),i.fromTo("translateY","0%","100%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}function p(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.32),i.fromTo("translateY","100%","0%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function f(t,e){var n=new t,o=new t;o.addElement(e.querySelector("ion-backdrop"));var i=new t;i.addElement(e.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.32,0),i.fromTo("translateY","0%","100%");var r=n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}var b=function(){function t(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return t.prototype.onBackdropTap=function(){this.dismiss(void 0,i.BACKDROP)},t.prototype.dispatchCancelHandler=function(t){if(i.isCancel(t.detail.role)){var e=this.getButtons().find(function(t){return"cancel"===t.role});this.callButtonHandler(e)}},t.prototype.present=function(){return i.present(this,"actionSheetEnter",d,p)},t.prototype.dismiss=function(t,e){return i.dismiss(this,t,e,"actionSheetLeave",h,f)},t.prototype.onDidDismiss=function(){return i.eventMethod(this.el,"ionActionSheetDidDismiss")},t.prototype.onWillDismiss=function(){return i.eventMethod(this.el,"ionActionSheetWillDismiss")},t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return i.isCancel(e=t.role)?[2,this.dismiss(void 0,e)]:[4,this.callButtonHandler(t)];case 1:return n.sent()?[2,this.dismiss(void 0,t.role)]:[2,Promise.resolve()]}})})},t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:if(!t||!t.handler)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.handler()];case 2:return!1===n.sent()?[2,!1]:[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2,!0]}})})},t.prototype.getButtons=function(){return this.buttons.map(function(t){return"string"==typeof t?{text:t}:t})},t.prototype.hostData=function(){return{role:"dialog","aria-modal":"true",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},o.getClassMap(this.cssClass),{"action-sheet-translucent":this.translucent})}},t.prototype.render=function(){var t=this,e=this.getButtons(),n=e.find(function(t){return"cancel"===t.role}),o=e.filter(function(t){return"cancel"!==t.role});return[a("ion-backdrop",{tappable:this.backdropDismiss}),a("div",{class:"action-sheet-wrapper",role:"dialog"},a("div",{class:"action-sheet-container"},a("div",{class:"action-sheet-group"},void 0!==this.header&&a("div",{class:"action-sheet-title"},this.header,this.subHeader&&a("div",{class:"action-sheet-sub-title"},this.subHeader)),o.map(function(e){return a("button",{type:"button","ion-activatable":!0,class:y(e),onClick:function(){return t.buttonClick(e)}},a("span",{class:"action-sheet-button-inner"},e.icon&&a("ion-icon",{icon:e.icon,lazy:!1,class:"action-sheet-icon"}),e.text),"md"===t.mode&&a("ion-ripple-effect",null))})),n&&a("div",{class:"action-sheet-group action-sheet-group-cancel"},a("button",{type:"button",class:y(n),onClick:function(){return t.buttonClick(n)}},a("span",{class:"action-sheet-button-inner"},n.icon&&a("ion-icon",{icon:n.icon,lazy:!1,class:"action-sheet-icon"}),n.text)))))]},Object.defineProperty(t,"is",{get:function(){return"ion-action-sheet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionActionSheetDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionActionSheetWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-action-sheet-ios-h{--color:initial;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{width:100%;border:0;outline:none;font-family:inherit}.action-sheet-button.activated.sc-ion-action-sheet-ios{background:var(--background-activated)}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:scroll;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9));--background-selected:var(--ion-background-color,#fff);--background-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.08);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px;overflow:hidden}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-button.activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h   .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected)}}.action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent));background-image:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0);background-repeat:no-repeat;background-position:bottom;background-size:100% 1px}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;color:var(--color,var(--ion-color-primary,#3880ff));font-size:20px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios   .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios   .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:700}.action-sheet-destructive.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#f04141)}.action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--background-selected);font-weight:600}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();function y(t){var e;return Object.assign(((e={"action-sheet-button":!0,"ion-activatable":!0})["action-sheet-"+t.role]=void 0!==t.role,e),o.getClassMap(t.cssClass))}var m=function(){function t(){}return t.prototype.create=function(t){return i.createOverlay(this.doc.createElement("ion-action-sheet"),t)},t.prototype.dismiss=function(t,e,n){return i.dismissOverlay(this.doc,t,e,"ion-action-sheet",n)},t.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,i.getOverlay(this.doc,"ion-action-sheet")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-action-sheet-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}(),v=function(){function t(){this.edge=!1,this.activated=!1}return t.prototype.activatedChanged=function(){var t=this.activated,e=this.el.querySelector("ion-fab-button");e&&(e.activated=t),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(function(e){e.activated=t})},t.prototype.componentDidLoad=function(){this.activated&&this.activatedChanged()},t.prototype.onClick=function(){this.el.querySelector("ion-fab-list")&&(this.activated=!this.activated)},t.prototype.close=function(){this.activated=!1},t.prototype.hostData=function(){var t;return{class:(t={},t["fab-horizontal-"+this.horizontal]=void 0!==this.horizontal,t["fab-vertical-"+this.vertical]=void 0!==this.vertical,t["fab-edge"]=this.edge,t)}},t.prototype.render=function(){return a("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-fab"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{type:Boolean,attr:"activated",mutable:!0,watchCallbacks:["activatedChanged"]},close:{method:!0},edge:{type:Boolean,attr:"edge"},el:{elementRef:!0},horizontal:{type:String,attr:"horizontal"},vertical:{type:String,attr:"vertical"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host([dir=rtl].fab-horizontal-center){right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host([dir=rtl].fab-horizontal-start){right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host([dir=rtl].fab-horizontal-end){left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"},enumerable:!0,configurable:!0}),t}(),g=function(){function t(){var t=this;this.activated=!1,this.disabled=!1,this.routerDirection="forward",this.show=!1,this.translucent=!1,this.type="button",this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()}}return t.prototype.hostData=function(){var t,e=this,n=e.disabled,i=e.color,r=e.activated,a=e.show,s=e.translucent,c=e.size,l=o.hostContext("ion-fab-list",e.el);return{"aria-disabled":n?"true":null,class:Object.assign({},o.createColorClasses(i),(t={"fab-button-in-list":l,"fab-button-translucent-in-list":l&&s,"fab-button-close-active":r,"fab-button-show":a,"fab-button-disabled":n,"fab-button-translucent":s,"ion-activatable":!0,"ion-focusable":!0},t["fab-button-"+c]=void 0!==c,t))}},t.prototype.render=function(){var t=this,e=void 0===this.href?"button":"a";return a(e,Object.assign({},"button"===e?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(e){return o.openURL(t.win,t.href,e,t.routerDirection)}}),a("span",{class:"close-icon"},a("ion-icon",{name:"close",lazy:!1})),a("span",{class:"button-inner"},a("slot",null)),"md"===this.mode&&a("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-fab-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{type:Boolean,attr:"activated"},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},show:{type:Boolean,attr:"show"},size:{type:String,attr:"size"},translucent:{type:Boolean,attr:"translucent"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.fab-button-disabled){pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;opacity:.5;pointer-events:none}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--transition:0.2s transform cubic-bezier(0.25,1.11,0.78,1.59)}:host,:host(.activated){--box-shadow:0 4px 16px rgba(0,0,0,0.12)}:host(.activated){--transform:scale(1.1);--transition:0.2s transform ease-out}.close-icon,::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--color:var(--ion-color-light-contrast,#000);--color-activated:var(--ion-color-light-contrast,#000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms,opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.9);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-background-color-rgb,255,255,255),0.8)}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb),.9)}:host(.ion-color.activated.fab-button-translucent) .button-native,:host(.ion-color.ion-focused.fab-button-translucent) .button-native{background:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();t.TrackDetail=u,t.IonActionSheet=b,t.IonActionSheetController=m,t.IonFab=v,t.IonFabButton=g,Object.defineProperty(t,"__esModule",{value:!0})});