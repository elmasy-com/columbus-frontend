function b(){}const at=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function dt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function U(t){return t()}function I(){return Object.create(null)}function E(t){t.forEach(U)}function O(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function It(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function _t(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t){let e;return V(t,n=>e=n)(),e}function Kt(t,e,n){t.$$.on_destroy.push(V(e,n))}function Qt(t,e,n,r){if(t){const i=X(t,e,n,r);return t[0](i)}}function X(t,e,n,r){return t[1]&&r?ft(n.ctx.slice(),t[1](r(e))):n.ctx}function Ut(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let c=0;c<s;c+=1)o[c]=e.dirty[c]|i[c];return o}return e.dirty|i}return e.dirty}function Vt(t,e,n,r,i,o){if(i){const s=X(e,n,r,o);t.p(s,i)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zt(t){const e={};for(const n in t)e[n]=!0;return e}function te(t){return t&&O(t.destroy)?t.destroy:b}function ee(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const Y=typeof window<"u";let ht=Y?()=>window.performance.now():()=>Date.now(),L=Y?t=>requestAnimationFrame(t):b;const v=new Set;function Z(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&L(Z)}function mt(t){let e;return v.size===0&&L(Z),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}const pt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in pt;let P=!1;function yt(){P=!0}function gt(){P=!1}function bt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=u?i+1:bt(1,i,_=>e[n[_]].claim_order,u))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],s=[];let c=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);c>=l;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<o.length&&s[l].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[l],f)}}function $t(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=nt("style");return vt(tt(t),e),e.sheet}function vt(t,e){return $t(t.head||t,e),e.sheet}function kt(t,e){if(P){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ne(t,e,n){P&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode&&t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function ie(){return W(" ")}function se(){return W("")}function ce(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function le(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,r,i=!1){At(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const l=n(c);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,r){return rt(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function oe(t,e,n){return it(t,e,n,nt)}function ue(t,e,n){return it(t,e,n,Et)}function Ct(t,e){return rt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>W(e),!0)}function ae(t){return Ct(t," ")}function fe(t,e){e=""+e,t.data!==e&&(t.data=e)}function de(t,e){t.value=e??""}function _e(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function st(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function he(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function me(t,e){return new t(e)}const D=new Map;let T=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:wt(e),rules:{}};return D.set(t,n),n}function J(t,e,n,r,i,o,s,c=0){const l=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=l){const x=e+(n-e)*o(g);u+=g*100+`%{${s(x,1-x)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${St(f)}_${c}`,_=tt(t),{stylesheet:d,rules:h}=D.get(_)||jt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${r}ms linear ${i}ms 1 both`,T+=1,a}function Mt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),T-=i,T||Dt())}function Dt(){L(()=>{T||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&et(e)}),D.clear())})}let C;function p(t){C=t}function N(){if(!C)throw new Error("Function called outside component initialization");return C}function pe(t){N().$$.on_mount.push(t)}function ye(t){N().$$.after_update.push(t)}function ge(){const t=N();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=st(e,n,{cancelable:r});return i.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function be(t,e){return N().$$.context.set(t,e),e}function xe(t){return N().$$.context.get(t)}function $e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const w=[],K=[];let k=[];const Q=[],ct=Promise.resolve();let H=!1;function lt(){H||(H=!0,ct.then(G))}function we(){return lt(),ct}function q(t){k.push(t)}const B=new Set;let $=0;function G(){if($!==0)return;const t=C;do{try{for(;$<w.length;){const e=w[$];$++,p(e),Tt(e.$$)}}catch(e){throw w.length=0,$=0,e}for(p(null),w.length=0,$=0;K.length;)K.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];B.has(n)||(B.add(n),n())}k.length=0}while(w.length);for(;Q.length;)Q.pop()();H=!1,B.clear(),p(t)}function Tt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function qt(t){const e=[],n=[];k.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),k=e}let A;function Ot(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function F(t,e,n){t.dispatchEvent(st(`${e?"intro":"outro"}${n}`))}const M=new Set;let y;function Pt(){y={r:0,c:[],p:y}}function Rt(){y.r||E(y.c),y=y.p}function ot(t,e){t&&t.i&&(M.delete(t),t.i(e))}function zt(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),y.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Bt={duration:0};function ve(t,e,n,r){const i={direction:"both"};let o=e(t,n,i),s=r?0:1,c=null,l=null,u=null;function f(){u&&Mt(t,u)}function a(d,h){const m=d.b-s;return h*=Math.abs(m),{a:s,b:d.b,d:m,duration:h,start:d.start,end:d.start+h,group:d.group}}function _(d){const{delay:h=0,duration:m=300,easing:g=at,tick:x=b,css:R}=o||Bt,z={start:ht()+h,b:d};d||(z.group=y,y.r+=1),c||l?l=z:(R&&(f(),u=J(t,s,d,m,h,g,R)),d&&x(0,1),c=a(z,m),q(()=>F(t,d,"start")),mt(S=>{if(l&&S>l.start&&(c=a(l,m),l=null,F(t,c.b,"start"),R&&(f(),u=J(t,s,c.b,c.duration,0,g,o.css))),c){if(S>=c.end)x(s=c.b,1-s),F(t,c.b,"end"),l||(c.b?f():--c.group.r||E(c.group.c)),c=null;else if(S>=c.start){const ut=S-c.start;s=c.a+c.d*g(ut/c.duration),x(s,1-s)}}return!!(c||l)}))}return{run(d){O(o)?Ot().then(()=>{o=o(i),_(d)}):_(d)},end(){f(),c=l=null}}}function ke(t,e){const n=e.token={};function r(i,o,s,c){if(e.token!==n)return;e.resolved=c;let l=e.ctx;s!==void 0&&(l=l.slice(),l[s]=c);const u=i&&(e.current=i)(l);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==o&&a&&(Pt(),zt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),Rt())}):e.block.d(1),u.c(),ot(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[o]=u),f&&G()}if(dt(t)){const i=N();if(t.then(o=>{p(i),r(e.then,1,e.value,o),p(null)},o=>{if(p(i),r(e.catch,2,e.error,o),p(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Ee(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}const Ft=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Ft];function Ne(t){t&&t.c()}function Ae(t,e){t&&t.l(e)}function Ht(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||q(()=>{const s=t.$$.on_mount.map(U).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),o.forEach(q)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(qt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(w.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ce(t,e,n,r,i,o,s,c=[-1]){const l=C;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:i,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:I(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&i(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Wt(t,a)),_}):[],u.update(),f=!0,E(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){yt();const a=Nt(e.target);u.fragment&&u.fragment.l(a),a.forEach(et)}else u.fragment&&u.fragment.c();e.intro&&ot(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),gt(),G()}p(l)}class Se{$destroy(){Lt(this,1),this.$destroy=b}$on(e,n){if(!O(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{re as $,Ht as A,Lt as B,Qt as C,kt as D,Vt as E,Xt as F,Ut as G,Zt as H,ft as I,Yt as J,ce as K,Kt as L,ge as M,pt as N,te as O,q as P,ve as Q,E as R,Se as S,$e as T,b as U,he as V,Et as W,ue as X,ke as Y,de as Z,Ee as _,ie as a,It as a0,be as a1,xe as a2,V as a3,at as a4,ee as a5,Jt as a6,ne as b,ae as c,zt as d,se as e,Rt as f,ot as g,et as h,Ce as i,ye as j,nt as k,oe as l,Nt as m,le as n,pe as o,_e as p,W as q,Ct as r,Gt as s,we as t,fe as u,Pt as v,K as w,me as x,Ne as y,Ae as z};
