(()=>{"use strict";const t=window.wc.__experimentalInteractivity,e=t=>{const e=new URL(window.location.href),{searchParams:o}=e;return""!==t?o.set("filter_stock_status",t):o.delete("filter_stock_status"),e.href};(0,t.store)("woocommerce/collection-stock-filter",{actions:{navigate:()=>{const o=(0,t.getContext)("woocommerce/interactivity-dropdown");(0,t.navigate)(e(o.selectedItem.value||""))},updateProducts:o=>{const s=new URL(window.location.href).searchParams.get("filter_stock_status")||"",a=""===s?[]:s.split(",");if(o.target.checked)s.includes(o.target.value)||a.push(o.target.value);else{const t=a.indexOf(o.target.value);t>-1&&a.splice(t,1)}(0,t.navigate)(e(a.join(",")))}}})})();