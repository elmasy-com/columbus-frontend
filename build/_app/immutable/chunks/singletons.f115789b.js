import{w as c}from"./index.52702af0.js";var _;const b=((_=globalThis.__sveltekit_wrprmc)==null?void 0:_.base)??"";var g;const v=((g=globalThis.__sveltekit_wrprmc)==null?void 0:g.assets)??b,k="1684551240195",A="sveltekit:snapshot",R="sveltekit:scroll",S="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function y(){return{x:pageXOffset,y:pageYOffset}}function i(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function I(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function x(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!a||w(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:a,download:r}}function O(e){let t=null,n=null,a=null,l=null,r=null,o=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=i(s,"preload-code")),l===null&&(l=i(s,"preload-data")),t===null&&(t=i(s,"keepfocus")),n===null&&(n=i(s,"noscroll")),r===null&&(r=i(s,"reload")),o===null&&(o=i(s,"replacestate")),s=h(s);return{preload_code:d[a??"off"],preload_data:d[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:o==="off"?!1:o===""?!0:null}}function p(e){const t=c(e);let n=!0;function a(){n=!0,t.update(o=>o)}function l(o){n=!1,t.set(o)}function r(o){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&o(s=u)})}return{notify:a,set:l,subscribe:r}}function m(){const{set:e,subscribe:t}=c(!1);let n;async function a(){clearTimeout(n);try{const l=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const o=(await l.json()).version!==k;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:a}}function w(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:p({}),page:p({}),navigating:c(null),updated:m()};export{S as I,f as P,R as S,A as a,x as b,O as c,y as d,b as e,I as f,T as g,U as h,w as i,L as s};
