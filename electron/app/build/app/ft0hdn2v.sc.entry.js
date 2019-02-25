const t=window.App.h;import{a as e,d as i,e as s}from"./chunk-7c632336.js";class l{constructor(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.routerDirection="forward",this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,i=t.detail,s={},l=this.itemStyles.get(e)||{};let n=!1;Object.keys(i).forEach(t=>{const e=`item-${t}`,o=i[t];o!==l[e]&&(n=!0),o&&(s[e]=!0)}),n&&(this.itemStyles.set(e,s),this.el.forceUpdate())}componentDidLoad(){Array.from(this.el.querySelectorAll("ion-button")).forEach(t=>{void 0===t.size&&(t.size="small")});const t=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=t.length>1}isClickable(){return void 0!==this.href||this.button}hostData(){const t={};return this.itemStyles.forEach(e=>{Object.assign(t,e)}),{"aria-disabled":this.disabled?"true":null,class:Object.assign({},t,e(this.color),{[`item-lines-${this.lines}`]:void 0!==this.lines,"item-disabled":this.disabled,"in-list":i("ion-list",this.el),item:!0,"item-multiple-inputs":this.multipleInputs,"ion-activatable":this.isClickable(),"ion-focusable":!0})}}render(){const{href:e,detail:i,mode:l,win:n,detailIcon:o,routerDirection:a,type:r}=this,c=this.isClickable(),d=c?void 0===e?"button":"a":"div",h=void 0!==i?i:"ios"===l&&c;return[t(d,Object.assign({},"button"===d?{type:r}:{href:e},{class:"item-native",disabled:this.disabled,onClick:t=>s(n,e,t,a)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"}),h&&t("ion-icon",{icon:o,lazy:!1,class:"item-detail-icon"}),t("div",{class:"item-inner-highlight"})),c&&"md"===l&&t("ion-ripple-effect",null)),t("div",{class:"item-highlight"})]}static get is(){return"ion-item"}static get encapsulation(){return"shadow"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},type:{type:String,attr:"type"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return".sc-ion-item-ios-h{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}.ion-color.sc-ion-item-ios-h   .item-inner.sc-ion-item-ios, .ion-color.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{border-color:var(--ion-color-shade)}.ion-focused.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--background-focused)}.activated.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--background-activated)}.ion-color.activated.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--ion-color-tint)}.item-disabled.sc-ion-item-ios-h{cursor:default;opacity:.3;pointer-events:none}.item-native.sc-ion-item-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native.sc-ion-item-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native.sc-ion-item-ios::-moz-focus-inner{border:0}a.sc-ion-item-ios, button.sc-ion-item-ios{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner.sc-ion-item-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner.sc-ion-item-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon.sc-ion-item-ios{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}.sc-ion-item-ios-s > ion-icon{font-size:1.6em}.sc-ion-item-ios-s > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.sc-ion-item-ios-s > ion-label{-ms-flex:1;flex:1}.item-input.sc-ion-item-ios-h, [vertical-align-top].sc-ion-item-ios-h{-ms-flex-align:start;align-items:flex-start}.input-wrapper.sc-ion-item-ios{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-label-floating.sc-ion-item-ios-h   .input-wrapper.sc-ion-item-ios, .item-label-stacked.sc-ion-item-ios-h   .input-wrapper.sc-ion-item-ios{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight.sc-ion-item-ios, .item-inner-highlight.sc-ion-item-ios{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight.sc-ion-item-ios{height:var(--full-highlight-height)}.item-inner-highlight.sc-ion-item-ios{height:var(--inset-highlight-height)}.item-interactive.ion-touched.ion-invalid.sc-ion-item-ios-h, .item-interactive.item-has-focus.sc-ion-item-ios-h{--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}.item-interactive.item-has-focus.sc-ion-item-ios-h{--highlight-background:var(--highlight-color-focused)}.item-interactive.ion-valid.sc-ion-item-ios-h{--highlight-background:var(--highlight-color-valid)}.item-interactive.ion-invalid.sc-ion-item-ios-h{--highlight-background:var(--highlight-color-invalid)}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > ion-select, .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > ion-select{--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > ion-datetime, .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > ion-datetime{--padding-start:0;width:100%}.sc-ion-item-ios-h.item-multiple-inputs .sc-ion-item-ios-s > ion-datetime, .sc-ion-item-ios-h.item-multiple-inputs .sc-ion-item-ios-s > ion-select{position:relative}.item-textarea.sc-ion-item-ios-h{-ms-flex-align:stretch;align-items:stretch}.sc-ion-item-ios-s > ion-reorder[slot]{margin-top:0;margin-bottom:0}.sc-ion-item-ios-h{--min-height:44px;--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--ion-item-background-activated,#d9d9d9);--background-focused:var(--ion-item-background-activated,#d9d9d9);--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));--color:var(--ion-item-color,var(--ion-text-color,#000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:17px}.activated.sc-ion-item-ios-h{--transition:none}.item-interactive.sc-ion-item-ios-h{--show-full-highlight:0;--show-inset-highlight:1}.item-lines-full.sc-ion-item-ios-h{--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}.item-lines-inset.sc-ion-item-ios-h{--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}.item-lines-inset.sc-ion-item-ios-h, .item-lines-none.sc-ion-item-ios-h{--border-width:0px;--show-full-highlight:0}.item-lines-full.sc-ion-item-ios-h, .item-lines-none.sc-ion-item-ios-h{--inner-border-width:0px;--show-inset-highlight:0}.sc-ion-item-ios-s > [slot=start]{margin-left:0;margin-right:16px;margin-top:2px;margin-bottom:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > [slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}.sc-ion-item-ios-s > [slot=end]{margin-left:8px;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > [slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-item-ios-s > ion-icon[slot=end], .sc-ion-item-ios-s > ion-icon[slot=start]{margin-left:0;margin-top:7px;margin-bottom:7px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > ion-icon[slot=end], .sc-ion-item-ios-s > ion-icon[slot=start]{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.sc-ion-item-ios-s > ion-toggle[slot=end], .sc-ion-item-ios-s > ion-toggle[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > [slot=end], .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > [slot=end]{margin-top:7px;margin-bottom:7px}.sc-ion-item-ios-s > .button-small{--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}.sc-ion-item-ios-s > ion-avatar{width:36px;height:36px}.sc-ion-item-ios-s > ion-thumbnail{width:56px;height:56px}.sc-ion-item-ios-s > ion-avatar[slot=end], .sc-ion-item-ios-s > ion-thumbnail[slot=end]{margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > ion-avatar[slot=end], .sc-ion-item-ios-s > ion-thumbnail[slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-item-ios-h.item-radio .sc-ion-item-ios-s > ion-label, .sc-ion-item-ios-h.item-toggle .sc-ion-item-ios-s > ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-h.item-radio .sc-ion-item-ios-s > ion-label, .sc-ion-item-ios-h.item-toggle .sc-ion-item-ios-s > ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.sc-ion-item-ios-s > ion-label{margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > ion-label{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}.item-label-floating.sc-ion-item-ios-h, .item-label-stacked.sc-ion-item-ios-h{--min-height:68px}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > ion-select, .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > ion-select{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"}static get styleMode(){return"ios"}}export{l as IonItem};