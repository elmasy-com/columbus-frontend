import{S as G,i as J,s as K,L as M,o as ne,Y as Q,k as p,a as C,l as d,m as k,c as N,h as u,n as v,b as g,D as f,Z as W,K as R,_ as re,g as D,d as S,R as oe,q as $,r as P,p as ae,u as L,U as A,e as H,$ as ie,v as ce,f as ue,y as q,z as F,A as U,B as V,a0 as fe}from"../chunks/index.73ec313f.js";import{w as se}from"../chunks/index.09ca537f.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.5f48c70b.js";import{P as me}from"../chunks/ProgressBar.8801df1b.js";const O=se(0),z=se(0);function he(o,e,l){let t,s;return M(o,z,n=>l(0,t=n)),M(o,O,n=>l(1,s=n)),ne(async()=>{if(s!=0||t!=0)return;const n=await fetch("https://columbus.elmasy.com/api/stat");if(n.ok){if(n.status==204)return;const r=await n.json();if(r.domain==0&&r.sub==0)return;O.set(r.domain),z.set(r.sub)}else console.log("Failed to fetch /stat:"+n.statusText+" "+n.text())}),[]}class _e extends G{constructor(e){super(),J(this,e,he,null,K,{})}}function X(o,e,l){const t=o.slice();return t[6]=e[l],t}function pe(o){let e,l=o[9].message+"",t;return{c(){e=p("p"),t=$(l),this.h()},l(s){e=d(s,"P",{style:!0});var n=k(e);t=P(n,l),n.forEach(u),this.h()},h(){ae(e,"color","#ff3333")},m(s,n){g(s,e,n),f(e,t)},p(s,n){n&2&&l!==(l=s[9].message+"")&&L(t,l)},i:A,o:A,d(s){s&&u(e)}}}function de(o){let e,l=o[0]!=""&&o[5]!=null&&x(o);return{c(){l&&l.c(),e=H()},l(t){l&&l.l(t),e=H()},m(t,s){l&&l.m(t,s),g(t,e,s)},p(t,s){t[0]!=""&&t[5]!=null?l?l.p(t,s):(l=x(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:A,o:A,d(t){l&&l.d(t),t&&u(e)}}}function x(o){let e,l,t=o[5].length!=0&&ee(o),s=o[5],n=[];for(let r=0;r<s.length;r+=1)n[r]=te(X(o,s,r));return{c(){t&&t.c(),e=C(),l=p("ol");for(let r=0;r<n.length;r+=1)n[r].c();this.h()},l(r){t&&t.l(r),e=N(r),l=d(r,"OL",{class:!0});var a=k(l);for(let i=0;i<n.length;i+=1)n[i].l(a);a.forEach(u),this.h()},h(){v(l,"class","list sm:columns-2 md:columns-3")},m(r,a){t&&t.m(r,a),g(r,e,a),g(r,l,a);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(l,null)},p(r,a){if(r[5].length!=0?t?t.p(r,a):(t=ee(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),a&3){s=r[5];let i;for(i=0;i<s.length;i+=1){const b=X(r,s,i);n[i]?n[i].p(b,a):(n[i]=te(b),n[i].c(),n[i].m(l,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(r){t&&t.d(r),r&&u(e),r&&u(l),ie(n,r)}}}function ee(o){let e,l,t,s=o[5].length+"",n;return{c(){e=p("p"),l=$("Number of subdomains found: "),t=p("b"),n=$(s),this.h()},l(r){e=d(r,"P",{class:!0});var a=k(e);l=P(a,"Number of subdomains found: "),t=d(a,"B",{});var i=k(t);n=P(i,s),i.forEach(u),a.forEach(u),this.h()},h(){v(e,"class","mx-10 mb-5 py-2 border-2 border-primary-500")},m(r,a){g(r,e,a),f(e,l),f(e,t),f(t,n)},p(r,a){a&2&&s!==(s=r[5].length+"")&&L(n,s)},d(r){r&&u(e)}}}function be(o){let e,l=o[6]+"",t,s,n;return{c(){e=p("span"),t=$(l),s=$("."),n=$(o[0]),this.h()},l(r){e=d(r,"SPAN",{class:!0});var a=k(e);t=P(a,l),s=P(a,"."),n=P(a,o[0]),a.forEach(u),this.h()},h(){v(e,"class","flex-auto")},m(r,a){g(r,e,a),f(e,t),f(e,s),f(e,n)},p(r,a){a&2&&l!==(l=r[6]+"")&&L(t,l),a&1&&L(n,r[0])},d(r){r&&u(e)}}}function ve(o){let e,l;return{c(){e=p("span"),l=$(o[0]),this.h()},l(t){e=d(t,"SPAN",{class:!0});var s=k(e);l=P(s,o[0]),s.forEach(u),this.h()},h(){v(e,"class","flex-auto")},m(t,s){g(t,e,s),f(e,l)},p(t,s){s&1&&L(l,t[0])},d(t){t&&u(e)}}}function te(o){let e,l;function t(r,a){return r[6]==""?ve:be}let s=t(o),n=s(o);return{c(){e=p("li"),n.c(),l=C()},l(r){e=d(r,"LI",{});var a=k(e);n.l(a),l=N(a),a.forEach(u)},m(r,a){g(r,e,a),n.m(e,null),f(e,l)},p(r,a){s===(s=t(r))&&n?n.p(r,a):(n.d(1),n=s(r),n&&(n.c(),n.m(e,l)))},d(r){r&&u(e),n.d()}}}function ke(o){let e,l,t=o[0]!=""&&le();return{c(){t&&t.c(),e=H()},l(s){t&&t.l(s),e=H()},m(s,n){t&&t.m(s,n),g(s,e,n),l=!0},p(s,n){s[0]!=""?t?n&1&&D(t,1):(t=le(),t.c(),D(t,1),t.m(e.parentNode,e)):t&&(ce(),S(t,1,1,()=>{t=null}),ue())},i(s){l||(D(t),l=!0)},o(s){S(t),l=!1},d(s){t&&t.d(s),s&&u(e)}}}function le(o){let e,l;return e=new me({}),{c(){q(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){U(e,t,s),l=!0},i(t){l||(D(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function ge(o){let e,l,t,s,n,r,a,i,b,E,m={ctx:o,current:null,token:null,hasCatch:!0,pending:ke,then:de,catch:pe,value:5,error:9,blocks:[,,,]};return Q(a=o[1],m),{c(){e=p("form"),l=p("input"),t=C(),s=p("input"),n=C(),r=p("div"),m.block.c(),this.h()},l(c){e=d(c,"FORM",{class:!0});var h=k(e);l=d(h,"INPUT",{type:!0,placeholder:!0,class:!0}),t=N(h),s=d(h,"INPUT",{type:!0,class:!0}),h.forEach(u),n=N(c),r=d(c,"DIV",{id:!0});var y=k(r);m.block.l(y),y.forEach(u),this.h()},h(){v(l,"type","text"),v(l,"placeholder","Domain name"),v(l,"class","svelte-1tenhca"),v(s,"type","submit"),s.value="Find",v(s,"class","svelte-1tenhca"),v(e,"class","svelte-1tenhca"),v(r,"id","result")},m(c,h){g(c,e,h),f(e,l),W(l,o[0]),f(e,t),f(e,s),g(c,n,h),g(c,r,h),m.block.m(r,m.anchor=null),m.mount=()=>r,m.anchor=null,i=!0,b||(E=[R(l,"input",o[3]),R(l,"input",ye),R(s,"click",o[2])],b=!0)},p(c,[h]){o=c,h&1&&l.value!==o[0]&&W(l,o[0]),m.ctx=o,h&2&&a!==(a=o[1])&&Q(a,m)||re(m,o,h)},i(c){i||(D(m.block),i=!0)},o(c){for(let h=0;h<3;h+=1){const y=m.blocks[h];S(y)}i=!1},d(c){c&&u(e),c&&u(n),c&&u(r),m.block.d(),m.token=null,m=null,b=!1,oe(E)}}}function ye(){let o=document.getElementById("result");o!=null&&o.innerHTML!=""&&(o.innerHTML="")}function $e(o,e,l){let t="";async function s(){if(t==="")return;const i=await fetch("https://columbus.elmasy.com/api/lookup/"+t),b=await i.json();if(i.ok)return b;throw console.log(i),console.log(b),new Error(await b.error)}let n=s();function r(){l(1,n=s())}function a(){t=this.value,l(0,t)}return[t,n,r,a]}class Pe extends G{constructor(e){super(),J(this,e,$e,ge,K,{})}}function we(o){let e,l,t,s,n,r,a,i,b,E;return{c(){e=p("p"),l=$("Columbus Project is a subdomain discovery service with an easy to integrate API."),t=p("br"),s=$(`
				There are `),n=p("b"),r=$(o[0]),a=$(" number of domains and "),i=p("b"),b=$(o[1]),E=$(` number of subdomains
				in the database.`),this.h()},l(m){e=d(m,"P",{class:!0});var c=k(e);l=P(c,"Columbus Project is a subdomain discovery service with an easy to integrate API."),t=d(c,"BR",{}),s=P(c,`
				There are `),n=d(c,"B",{});var h=k(n);r=P(h,o[0]),h.forEach(u),a=P(c," number of domains and "),i=d(c,"B",{});var y=k(i);b=P(y,o[1]),y.forEach(u),E=P(c,` number of subdomains
				in the database.`),c.forEach(u),this.h()},h(){v(e,"class","max-sm:mx-6")},m(m,c){g(m,e,c),f(e,l),f(e,t),f(e,s),f(e,n),f(n,r),f(e,a),f(e,i),f(i,b),f(e,E)},p(m,c){c&1&&L(r,m[0]),c&2&&L(b,m[1])},d(m){m&&u(e)}}}function Ee(o){let e,l;return{c(){e=p("p"),l=$("Columbus Project is a subdomain discovery service with an easy to integrate API."),this.h()},l(t){e=d(t,"P",{class:!0});var s=k(e);l=P(s,"Columbus Project is a subdomain discovery service with an easy to integrate API."),s.forEach(u),this.h()},h(){v(e,"class","max-sm:mx-6")},m(t,s){g(t,e,s),f(e,l)},p:A,d(t){t&&u(e)}}}function Ie(o){let e,l,t,s,n,r,a,i,b,E,m,c,h,y,B;e=new _e({});function Y(_,j){return _[0]==0&&_[1]==0?Ee:we}let T=Y(o),w=T(o);return y=new Pe({}),{c(){q(e.$$.fragment),l=C(),t=p("div"),s=p("div"),n=p("img"),a=C(),i=p("h1"),b=$("Columbus Project"),E=C(),m=p("hr"),c=C(),w.c(),h=C(),q(y.$$.fragment),this.h()},l(_){F(e.$$.fragment,_),l=N(_),t=d(_,"DIV",{class:!0});var j=k(t);s=d(j,"DIV",{class:!0});var I=k(s);n=d(I,"IMG",{class:!0,src:!0,alt:!0}),a=N(I),i=d(I,"H1",{class:!0});var Z=k(i);b=P(Z,"Columbus Project"),Z.forEach(u),E=N(I),m=d(I,"HR",{}),c=N(I),w.l(I),h=N(I),F(y.$$.fragment,I),I.forEach(u),j.forEach(u),this.h()},h(){v(n,"class","max-w-[20%] inline"),fe(n.src,r="logo_white.svg")||v(n,"src",r),v(n,"alt","Elmasy Logo"),v(i,"class","font-bold"),v(s,"class","space-y-10 text-center"),v(t,"class","container h-full mx-auto flex justify-center items-center")},m(_,j){U(e,_,j),g(_,l,j),g(_,t,j),f(t,s),f(s,n),f(s,a),f(s,i),f(i,b),f(s,E),f(s,m),f(s,c),w.m(s,null),f(s,h),U(y,s,null),B=!0},p(_,[j]){T===(T=Y(_))&&w?w.p(_,j):(w.d(1),w=T(_),w&&(w.c(),w.m(s,h)))},i(_){B||(D(e.$$.fragment,_),D(y.$$.fragment,_),B=!0)},o(_){S(e.$$.fragment,_),S(y.$$.fragment,_),B=!1},d(_){V(e,_),_&&u(l),_&&u(t),w.d(),V(y)}}}function je(o,e,l){let t,s;return M(o,O,n=>l(0,t=n)),M(o,z,n=>l(1,s=n)),[t,s]}class Se extends G{constructor(e){super(),J(this,e,je,Ie,K,{})}}export{Se as component};
