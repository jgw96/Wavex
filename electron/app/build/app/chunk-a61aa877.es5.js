var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}c((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};App.loadBundle("chunk-a61aa877.js",["exports","./chunk-37baa648.js"],function(e,t){window;var n="musically_saved_tracks";function r(e,t){for(var n=e.slice(),r=0;r<n.length;r++)if(console.log("saved",n[r].id),console.log("new",t.id),n[r].id===t.id)return!0}e.getSaved=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:return[4,t.get(n)];case 1:return(e=r.sent())?[2,e]:[2,[]]}})})},e.deleteSong=function(e){return __awaiter(this,void 0,void 0,function(){var r,o;return __generator(this,function(i){switch(i.label){case 0:return[4,t.get(n)];case 1:return r=i.sent(),o=r.filter(function(t){return t.id===e.id&&console.log("removed"),t.id!==e.id}),console.log(o),[4,t.set(n,o)];case 2:return i.sent(),[2]}})})},e.saveSong=function(e){return __awaiter(this,void 0,void 0,function(){var o;return __generator(this,function(i){switch(i.label){case 0:return[4,t.get(n)];case 1:return(o=i.sent())?(console.log(r(o,e)),void 0!==r(o,e)?[3,3]:(o.push(e),[4,t.set(n,o)])):[3,5];case 2:return i.sent(),[2,!0];case 3:return[2,!1];case 4:return[3,7];case 5:return console.log(e),[4,t.set(n,[e])];case 6:return i.sent(),[2,!0];case 7:return[2]}})})}});