import{w as i}from"./index.795ee6ed.js";import{a5 as h}from"./index.16e78bfc.js";i(void 0);i(void 0);function v(){const{subscribe:t,set:u,update:r}=i({});return{subscribe:t,set:u,update:r,open:e=>r(()=>({open:!0,...e})),close:()=>r(e=>(e.open=!1,e))}}const z=v();function I(){const{subscribe:t,set:u,update:r}=i([]);return{subscribe:t,set:u,update:r,trigger:e=>r(n=>(n.push(e),n)),close:()=>r(e=>(e.length>0&&e.shift(),e)),clear:()=>u([])}}I();const _={message:"Missing Toast Message",autohide:!0,timeout:5e3};function S(){const t=Math.random();return Number(t).toString(32)}function T(t){if(t.autohide===!0)return setTimeout(()=>{x.close(t.id)},t.timeout)}function M(){const{subscribe:t,set:u,update:r}=i([]);return{subscribe:t,trigger:e=>r(n=>{const o=S();e&&e.callback&&e.callback({id:o,status:"queued"});const s={..._,...e,id:o};return s.timeoutId=T(s),n.push(s),n}),close:e=>r(n=>{if(n.length>0){const o=n.findIndex(c=>c.id===e),s=n[o];s&&(s.callback&&s.callback({id:e,status:"closed"}),s.timeoutId&&clearTimeout(s.timeoutId),n.splice(o,1))}return n}),clear:()=>u([])}}const x=M(),g={};function p(t){return t==="local"?localStorage:sessionStorage}function m(t,u,r){const e=(r==null?void 0:r.serializer)??JSON,n=(r==null?void 0:r.storage)??"local",o=typeof window<"u"&&typeof document<"u";function s(c,d){o&&p(n).setItem(c,e.stringify(d))}if(!g[t]){const c=i(u,a=>{const l=o?p(n).getItem(t):null;if(l&&a(e.parse(l)),o){const w=f=>{f.key===t&&a(f.newValue?e.parse(f.newValue):null)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)}}),{subscribe:d,set:b}=c;g[t]={set(a){s(t,a),b(a)},update(a){const l=a(h(c));s(t,l),b(l)},subscribe:d}}return g[t]}m("modeOsPrefers",!1);m("modeUserPrefers",void 0);m("modeCurrent",!1);export{z as d};
