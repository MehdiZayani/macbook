(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[9870],{8130:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>d});var n=o(9196),l=o(5736),s=o(4184),r=o.n(s),c=o(2864),a=o(721),u=o(3611);o(6995);const i=({parentClassName:t,sku:e,className:o,style:s})=>(0,n.createElement)("div",{className:r()(o,{[`${t}__product-sku`]:t}),style:s},(0,l.__)("SKU:","woo-gutenberg-products-block")," ",(0,n.createElement)("strong",null,e)),d=(0,a.withProductDataContext)((t=>{const{className:e}=t,o=(0,u.F)(t),{parentClassName:l}=(0,c.useInnerBlockLayoutContext)(),{product:s}=(0,c.useProductDataContext)(),a=s.sku;return t.isDescendentOfSingleProductTemplate?(0,n.createElement)(i,{parentClassName:l,className:e,sku:"Product SKU"}):a?(0,n.createElement)(i,{className:e,parentClassName:l,sku:a,...t.isDescendantOfAllProducts&&{className:r()(e,"wc-block-components-product-sku wp-block-woocommerce-product-sku",o.className),style:{...o.style}}}):null}))},3611:(t,e,o)=>{"use strict";o.d(e,{F:()=>u});var n=o(4184),l=o.n(n),s=o(7884),r=o(2646),c=o(1473),a=o(2661);const u=t=>{const e=(t=>{const e=(0,s.Kn)(t)?t:{style:{}};let o=e.style;return(0,r.H)(o)&&(o=JSON.parse(o)||{}),(0,s.Kn)(o)||(o={}),{...e,style:o}})(t),o=(0,a.vc)(e),n=(0,a.l8)(e),u=(0,a.su)(e),i=(0,c.f)(e);return{className:l()(i.className,o.className,n.className,u.className),style:{...i.style,...o.style,...n.style,...u.style}}}},1473:(t,e,o)=>{"use strict";o.d(e,{f:()=>s});var n=o(7884),l=o(2646);const s=t=>{const e=(0,n.Kn)(t.style.typography)?t.style.typography:{},o=(0,l.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:o,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},2661:(t,e,o)=>{"use strict";o.d(e,{l8:()=>d,su:()=>m,vc:()=>i});var n=o(4184),l=o.n(n),s=o(9784),r=o(2289),c=o(7884);function a(t={}){const e={};return(0,r.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function u(t,e){return t&&e?`has-${(0,s.o)(e)}-${t}`:""}function i(t){var e,o,n,s,r,i,d;const{backgroundColor:m,textColor:y,gradient:f,style:v}=t,p=u("background-color",m),k=u("color",y),g=function(t){if(t)return`has-${t}-gradient-background`}(f),b=g||(null==v||null===(e=v.color)||void 0===e?void 0:e.gradient);return{className:l()(k,g,{[p]:!b&&!!p,"has-text-color":y||(null==v||null===(o=v.color)||void 0===o?void 0:o.text),"has-background":m||(null==v||null===(n=v.color)||void 0===n?void 0:n.background)||f||(null==v||null===(s=v.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,c.Kn)(null==v||null===(r=v.elements)||void 0===r?void 0:r.link)?null==v||null===(i=v.elements)||void 0===i||null===(d=i.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==v?void 0:v.color)||{}})}}function d(t){var e;const o=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:o,style:n}=t,s=o?u("border-color",o):"";return l()({"has-border-color":!!o||!(null==n||null===(e=n.border)||void 0===e||!e.color),[s]:!!s})}(t),style:a({border:o})}}function m(t){var e;return{className:void 0,style:a({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},8519:(t,e,o)=>{"use strict";o.d(e,{F:()=>n});const n=t=>null===t},7884:(t,e,o)=>{"use strict";o.d(e,{$n:()=>s,Kn:()=>l,Qr:()=>r});var n=o(8519);const l=t=>!(0,n.F)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return l(t)&&e in t}const r=t=>0===Object.keys(t).length},2646:(t,e,o)=>{"use strict";o.d(e,{H:()=>n});const n=t=>"string"==typeof t},6995:()=>{}}]);