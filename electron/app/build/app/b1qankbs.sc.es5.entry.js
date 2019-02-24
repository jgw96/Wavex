var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{u(o.next(e))}catch(e){i(e)}}function a(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}u((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};App.loadBundle("b1qankbs",["require","exports","./chunk-37baa648.js","./chunk-a99bd936.js","./chunk-9a5c0d8f.js","./chunk-175e5cf7.js","./chunk-be8d65e3.js"],function(e,t,n,o,r,i,s){var a=window.App.h,u=function(){function e(){this.deferredPrompt=null}return e.prototype.componentDidLoad=function(){var e=this;window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),e.deferredPrompt=t})},e.prototype.install=function(){var e=this;this.deferredPrompt&&(this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then(function(t){"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),e.deferredPrompt=null}))},e.prototype.render=function(){var e=this;return this.deferredPrompt?a("ion-item",null,a("ion-button",{onClick:function(){return e.install()}},"Install")):null},Object.defineProperty(e,"is",{get:function(){return"app-install-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){}return e.prototype.logout=function(){this.userAgent.logout(),this.loggedOut.emit()},e.prototype.delFave=function(){n.del("musically_saved_tracks"),location.reload()},e.prototype.render=function(){var e=this;return[a("ion-list",{lines:"none"},a("app-install-button",null),a("ion-item",{onClick:function(){return e.delFave()}},a("ion-label",{color:"danger"},"Delete Favorites")),a("ion-item",{onClick:function(){return e.logout()}},a("ion-label",null,"Logout")))]},Object.defineProperty(e,"is",{get:function(){return"popover-page"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{userAgent:{type:"Any",attr:"user-agent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"loggedOut",method:"loggedOut",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-list.sc-popover-page   ion-label.sc-popover-page{font-weight:700}"},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){this.noAnimate=!1}return e.prototype.componentWillLoad=function(){this.noAnimate="floating"===this.position,this.emitStyle()},e.prototype.componentDidLoad=function(){var e=this;this.noAnimate&&setTimeout(function(){e.noAnimate=!1},1e3)},e.prototype.positionChanged=function(){this.emitStyle()},e.prototype.emitStyle=function(){var e,t=this.position;this.ionStyle.emit(((e={label:!0})["label-"+t]=void 0!==t,e))},e.prototype.hostData=function(){var e,t=this.position;return{class:Object.assign({},o.createColorClasses(this.color),(e={},e["label-"+t]=void 0!==t,e["label-no-animate"]=this.noAnimate,e))}},Object.defineProperty(e,"is",{get:function(){return"ion-label"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},noAnimate:{state:!0},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".item.sc-ion-label-md-h, .item   .sc-ion-label-md-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-md-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-md-h{white-space:normal}.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled   .sc-ion-label-md-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-md-h, .item-input   .sc-ion-label-md-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-md-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-placeholder.label-floating.sc-ion-label-md-h, .item-has-placeholder   .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value   .label-floating.sc-ion-label-md-h{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.label-no-animate.label-floating.sc-ion-label-md-h{-webkit-transition:none;transition:none}[text-wrap].sc-ion-label-md-h{line-height:1.5}.label-stacked.sc-ion-label-md-h{font-size:12.8px}.label-floating.sc-ion-label-md-h{-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}[dir=rtl].label-floating.sc-ion-label-md-h{-webkit-transform-origin:right top;transform-origin:right top}.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{margin-left:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.sc-ion-label-md-s  h1 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:24px;font-weight:400}.sc-ion-label-md-s  h2 {margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:16px;font-weight:400}.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6 {margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-md-s  p {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:20px;text-overflow:inherit;overflow:inherit}.sc-ion-label-md-s > p{color:var(--ion-color-step-600,#666)}.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p{color:inherit}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),p=function(){function e(){this.inset=!1}return e.prototype.closeSlidingItems=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return(e=this.el.querySelector("ion-item-sliding"))&&e.closeOpened?[2,e.closeOpened()]:[2,!1]})})},e.prototype.hostData=function(){var e;return{class:Object.assign({},o.createThemedClasses(this.mode,"list"),(e={},e["list-lines-"+this.lines]=void 0!==this.lines,e["list-inset"]=this.inset,e["list-"+this.mode+"-lines-"+this.lines]=void 0!==this.lines,e))}},Object.defineProperty(e,"is",{get:function(){return"ion-list"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{closeSlidingItems:{method:!0},el:{elementRef:!0},inset:{type:Boolean,attr:"inset"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-list{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:block;contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;background:var(--ion-item-background,var(--ion-background-color,#fff))}.list-md>.input:last-child:after{left:0}:host-context([dir=rtl]) .list-md>.input:last-child:after{right:0}.list-md.list-inset{margin-left:16px;margin-right:16px;margin-top:16px;margin-bottom:16px;border-radius:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.list-md.list-inset{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px}}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md-lines-full .item,.list-md .item-lines-full{--border-width:0 0 1px 0}.list-md-lines-full .item{--inner-border-width:0}.list-md-lines-inset .item,.list-md .item-lines-inset{--inner-border-width:0 0 1px 0}.list-md .item-lines-inset{--border-width:0}.list-md .item-lines-full{--inner-border-width:0}.list-md .item-lines-none{--border-width:0;--inner-border-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),d=1,h=function(){function e(e,t){this.component=e,this.params=t,this.state=d}return e.prototype.init=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return this.state=2,this.element?[3,2]:(t=this,[4,i.attachComponent(this.delegate,e,this.component,["ion-page","ion-page-invisible"],this.params)]);case 1:t.element=n.sent(),n.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){r.assert(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function f(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var o=e.params;if(o===n)return!0;if(!o&&!n)return!0;if(!o||!n)return!1;var r=Object.keys(o),i=Object.keys(n);if(r.length!==i.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(o[u]!==n[u])return!1}return!0}function m(e,t){return e?e instanceof h?e:new h(e,t):null}var v=function(){function t(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return t.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},t.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},t.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return this.rootChanged(),t=this,[4,new Promise(function(t,n){e(["./chunk-58ce983f.js"],t,n)})];case 1:return t.gesture=n.sent().createSwipeBackGesture(this.el,this.queue,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}})})},t.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];i.lifecycle(n.element,i.LIFECYCLE_WILL_UNLOAD),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},t.prototype.push=function(e,t,n,o){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},o)},t.prototype.insert=function(e,t,n,o,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:o},r)},t.prototype.insertPages=function(e,t,n,o){return this.queueTrns({insertStart:e,insertViews:t,opts:n},o)},t.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},t.prototype.popTo=function(e,t,n){var o={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(o.removeView=e,o.removeStart=1):"number"==typeof e&&(o.removeStart=e+1),this.queueTrns(o,n)},t.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},t.prototype.removeIndex=function(e,t,n,o){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},o)},t.prototype.setRoot=function(e,t,n,o){return this.setPages([{page:e,params:t}],n,o)},t.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},t.prototype.setRouteId=function(e,t,n){var o,r=this,i=this.getActiveSync();if(f(i,e,t))return Promise.resolve({changed:!1,element:i.element});var s,a=new Promise(function(e){return o=e}),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return o({changed:!0,element:e,markVisible:function(){return __awaiter(r,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return t(),[4,s];case 1:return e.sent(),[2]}})})}}),n}};if("root"===n)s=this.setRoot(e,t,u);else{var l=this.views.find(function(n){return f(n,e,t)});l?s=this.popTo(l,Object.assign({},u,{direction:"back"})):"forward"===n?s=this.push(e,t,u):"back"===n&&(s=this.setRoot(e,t,Object.assign({},u,{direction:"back",animated:!0})))}return a},t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},t.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},t.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},t.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},t.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},t.prototype.getLength=function(){return this.views.length},t.prototype.getActiveSync=function(){return this.views[this.views.length-1]},t.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},t.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},t.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},t.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}},t.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},t.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},t.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},t.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,function(){var t,n,o,r;return __generator(this,function(i){switch(i.label){case 0:if(i.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===d?[4,n.init(this.el)]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return o=i.sent(),[3,5];case 4:o={hasCompleted:!0,requiresTransition:!1},i.label=5;case 5:return this.success(o,e),this.ionNavDidChange.emit(),[3,7];case 6:return r=i.sent(),this.failed(r,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},t.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){r.assert(void 0!==e.removeStart,"removeView needs removeStart"),r.assert(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var o=e.insertViews;if(o){r.assert(o.length>0,"length can not be zero");var i=o.map(function(e){return e instanceof h?e:"page"in e?m(e.page,e.params):m(e,void 0)}).filter(function(e){return null!==e});if(0===i.length)throw new Error("invalid views to insert");for(var s=0,a=i;s<a.length;s++){var u=a[s];u.delegate=e.opts.delegate;var l=u.nav;if(l&&l!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}e.insertViews=i}},t.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var o=e.removeStart;if(void 0!==o)for(var r=this.views,i=o+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<o||s>=i)&&a!==t)return a}},t.prototype.postViewInit=function(e,t,n){r.assert(t||e,"Both leavingView and enteringView are null"),r.assert(n.resolve,"resolve must be valid"),r.assert(n.reject,"reject must be valid");var o,s=n.opts,a=n.insertViews,u=n.removeStart,l=n.removeCount;if(void 0!==u&&void 0!==l){r.assert(u>=0,"removeStart can not be negative"),r.assert(l>=0,"removeCount can not be negative"),o=[];for(var c=0;c<l;c++)(b=this.views[c+u])&&b!==e&&b!==t&&o.push(b);s.direction=s.direction||"back"}var p=this.views.length+(void 0!==a?a.length:0)-(void 0!==l?l:0);if(r.assert(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){for(var d=n.insertStart,h=0,f=a;h<f.length;h++)this.insertViewAt(b=f[h],d),d++;n.enteringRequiresTransition&&(s.direction=s.direction||"forward")}if(o&&o.length>0){for(var m=0,v=o;m<v.length;m++)i.lifecycle((b=v[m]).element,i.LIFECYCLE_WILL_LEAVE),i.lifecycle(b.element,i.LIFECYCLE_DID_LEAVE),i.lifecycle(b.element,i.LIFECYCLE_WILL_UNLOAD);for(var g=0,y=o;g<y.length;g++){var b;this.destroyView(b=y[g])}}},t.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var o,r,s,a,u,l,c=this;return __generator(this,function(p){switch(p.label){case 0:return r=(o=n.opts).progressAnimation?function(e){return c.sbAni=e}:void 0,s=e.element,a=t&&t.element,u=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),queue:this.queue,window:this.win,baseEl:this.el,animationBuilder:this.animation||o.animationBuilder||this.config.get("navAnimation"),progressCallback:r,animated:this.animated&&this.config.getBoolean("animated",!0),enteringEl:s,leavingEl:a},o),[4,i.transition(u)];case 1:return l=p.sent().hasCompleted,[2,this.transitionFinish(l,e,t,o)]}})})},t.prototype.transitionFinish=function(e,t,n,o){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:o.direction}},t.prototype.insertViewAt=function(e,t){var n=this.views,o=n.indexOf(e);o>-1?(r.assert(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(o,1)[0])):(r.assert(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},t.prototype.removeView=function(e){r.assert(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);r.assert(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},t.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},t.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),o=t.length-1;o>=0;o--){var r=t[o],s=r.element;o>n?(i.lifecycle(s,i.LIFECYCLE_WILL_UNLOAD),this.destroyView(r)):o<n&&i.setPageHidden(s,!0)}},t.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()},t.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},t.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},t.prototype.onEnd=function(e,t,n){this.sbAni&&this.sbAni.progressEnd(e,t,n)},t.prototype.render=function(){return a("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}();function g(e,t,n){var o=new e,r=new e,i=t.host||t,s=t.querySelector(".toast-wrapper");switch(r.addElement(s),n){case"top":r.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var a=Math.floor(i.clientHeight/2-s.clientHeight/2);s.style.top=a+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(o.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(r))}function y(e,t,n){var o=new e,r=new e,i=t.host||t,s=t.querySelector(".toast-wrapper");switch(r.addElement(s),n){case"top":r.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(r))}function b(e,t,n){var o=new e,r=new e,i=t.host||t,s=t.querySelector(".toast-wrapper");switch(r.addElement(s),n){case"top":s.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":var a=Math.floor(i.clientHeight/2-s.clientHeight/2);s.style.top=a+"px",r.fromTo("opacity",.01,1);break;default:s.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return Promise.resolve(o.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(r))}function w(e,t){var n=new e,o=new e,r=t.host||t,i=t.querySelector(".toast-wrapper");return o.addElement(i),o.fromTo("opacity",.99,0),Promise.resolve(n.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(o))}var S=function(){function e(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){switch(t.label){case 0:return[4,s.present(this,"toastEnter",g,b,this.position)];case 1:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss(void 0,"timeout")},this.duration)),[2]}})})},e.prototype.dismiss=function(e,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),s.dismiss(this,e,t,"toastLeave",y,w,this.position)},e.prototype.onDidDismiss=function(){return s.eventMethod(this.el,"ionToastDidDismiss")},e.prototype.onWillDismiss=function(){return s.eventMethod(this.el,"ionToastWillDismiss")},e.prototype.hostData=function(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},o.createColorClasses(this.color),o.getClassMap(this.cssClass),{"toast-translucent":this.translucent})}},e.prototype.render=function(){var e,t=this,n=((e={"toast-wrapper":!0})["toast-"+this.position]=!0,e);return a("div",{class:n},a("div",{class:"toast-container"},void 0!==this.message&&a("div",{class:"toast-message"},this.message),this.showCloseButton&&a("ion-button",{fill:"clear",class:"toast-button",onClick:function(){return t.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(e,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-toast-md-h{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}[dir=rtl].sc-ion-toast-md-h + b.sc-ion-toast-md{right:0}.overlay-hidden.sc-ion-toast-md-h{display:none}.ion-color.sc-ion-toast-md-h{--button-color:inherit;color:var(--ion-color-contrast)}.ion-color.sc-ion-toast-md-h   .toast-wrapper.sc-ion-toast-md{background:var(--ion-color-base)}.toast-wrapper.sc-ion-toast-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-container.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button.sc-ion-toast-md{color:var(--button-color)}.toast-message.sc-ion-toast-md{-ms-flex:1;flex:1;white-space:pre-wrap}.sc-ion-toast-md-h{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;font-size:14px}.toast-wrapper.sc-ion-toast-md{left:8px;right:8px;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper.sc-ion-toast-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-message.sc-ion-toast-md{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px;line-height:20px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-message.sc-ion-toast-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-button.sc-ion-toast-md{--margin-end:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),P=function(){function e(){}return e.prototype.create=function(e){return s.createOverlay(this.doc.createElement("ion-toast"),e)},e.prototype.dismiss=function(e,t,n){return s.dismissOverlay(this.doc,e,t,"ion-toast",n)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,s.getOverlay(this.doc,"ion-toast")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();t.AppInstallButton=u,t.PopoverPage=l,t.IonLabel=c,t.IonList=p,t.IonNav=v,t.IonToast=S,t.IonToastController=P,Object.defineProperty(t,"__esModule",{value:!0})});