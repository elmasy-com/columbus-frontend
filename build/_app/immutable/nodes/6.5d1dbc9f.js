import{S as O,i as Q,s as W,L as I,o as X,y as Z,a as F,k as h,q as d,z as $,c as R,l as _,m as x,r as b,h as v,n as w,Y as tt,A as et,b as H,D as e,g as st,d as at,B as nt,u as M,U as rt}from"../chunks/index.41ee7622.js";import{w as L}from"../chunks/index.52702af0.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.8bf662ad.js";const V=L(0),G=L(0),N=L(0),q=L(0),J=L(0);function ot(o,t,l){let c,s,i,m,u;return I(o,J,a=>l(0,c=a)),I(o,q,a=>l(1,s=a)),I(o,N,a=>l(2,i=a)),I(o,G,a=>l(3,m=a)),I(o,V,a=>l(4,u=a)),X(async()=>{if(u!=0||m!=0||i!=0||s!=0||c!=0)return;const a=await fetch("https://columbus.elmasy.com/api/stat");if(a.ok){if(a.status==204)return;const f=await a.json();if(f.total==0||f.tld==0||f.domain==0||f.fulldomain==0||f.tld==0)return;V.set(f.total),G.set(f.tld),N.set(f.domain),q.set(f.fulldomain),J.set(f.sub)}else console.log("Failed to fetch /stat:"+a.statusText+" "+a.text())}),[]}class lt extends O{constructor(t){super(),Q(this,t,ot,null,W,{})}}function it(o){let t,l,c,s,i,m,u,a,f,D,j,C,E,T,S,z,g,k,B;return{c(){t=h("p"),l=d(`Columbus Project is an API first subdomain discovery service.
				`),c=h("br"),s=d(`
				A blazingly fast subdomain enumeration service with advanced features. `),i=h("br"),m=d(`
				There are `),u=h("b"),a=d(o[0]),f=d(` different entries in the database, combined from
				`),D=h("b"),j=d(o[3]),C=d(`
				different subdomains, `),E=h("b"),T=d("$"),S=d(q),z=d(" different domains and "),g=h("b"),k=d(o[1]),B=d(` top level
				domains.`),this.h()},l(A){t=_(A,"P",{class:!0});var r=x(t);l=b(r,`Columbus Project is an API first subdomain discovery service.
				`),c=_(r,"BR",{}),s=b(r,`
				A blazingly fast subdomain enumeration service with advanced features. `),i=_(r,"BR",{}),m=b(r,`
				There are `),u=_(r,"B",{});var y=x(u);a=b(y,o[0]),y.forEach(v),f=b(r,` different entries in the database, combined from
				`),D=_(r,"B",{});var n=x(D);j=b(n,o[3]),n.forEach(v),C=b(r,`
				different subdomains, `),E=_(r,"B",{});var P=x(E);T=b(P,"$"),S=b(P,q),P.forEach(v),z=b(r," different domains and "),g=_(r,"B",{});var p=x(g);k=b(p,o[1]),p.forEach(v),B=b(r,` top level
				domains.`),r.forEach(v),this.h()},h(){w(t,"class","max-sm:mx-6")},m(A,r){H(A,t,r),e(t,l),e(t,c),e(t,s),e(t,i),e(t,m),e(t,u),e(u,a),e(t,f),e(t,D),e(D,j),e(t,C),e(t,E),e(E,T),e(E,S),e(t,z),e(t,g),e(g,k),e(t,B)},p(A,r){r&1&&M(a,A[0]),r&8&&M(j,A[3]),r&2&&M(k,A[1])},d(A){A&&v(t)}}}function ct(o){let t,l,c,s;return{c(){t=h("p"),l=d(`Columbus Project is an API first subdomain discovery service.
				`),c=h("br"),s=d(`
				A blazingly fast subdomain enumeration service with advanced features.`),this.h()},l(i){t=_(i,"P",{class:!0});var m=x(t);l=b(m,`Columbus Project is an API first subdomain discovery service.
				`),c=_(m,"BR",{}),s=b(m,`
				A blazingly fast subdomain enumeration service with advanced features.`),m.forEach(v),this.h()},h(){w(t,"class","max-sm:mx-6")},m(i,m){H(i,t,m),e(t,l),e(t,c),e(t,s)},p:rt,d(i){i&&v(t)}}}function ut(o){let t,l,c,s,i,m,u,a,f,D,j,C,E,T,S,z,g,k,B;t=new lt({});function A(n,P){return n[0]==0||n[1]==0||n[2]==0||n[3]==0?ct:it}let r=A(o),y=r(o);return{c(){Z(t.$$.fragment),l=F(),c=h("div"),s=h("div"),i=h("img"),u=F(),a=h("h1"),f=d("Columbus Project"),D=F(),j=h("hr"),C=F(),y.c(),E=F(),T=h("a"),S=d("Try out the features"),z=F(),g=h("a"),k=d("Discover the API"),this.h()},l(n){$(t.$$.fragment,n),l=R(n),c=_(n,"DIV",{class:!0});var P=x(c);s=_(P,"DIV",{class:!0});var p=x(s);i=_(p,"IMG",{class:!0,src:!0,alt:!0}),u=R(p),a=_(p,"H1",{class:!0});var U=x(a);f=b(U,"Columbus Project"),U.forEach(v),D=R(p),j=_(p,"HR",{}),C=R(p),y.l(p),E=R(p),T=_(p,"A",{class:!0,href:!0});var Y=x(T);S=b(Y,"Try out the features"),Y.forEach(v),z=R(p),g=_(p,"A",{class:!0,href:!0});var K=x(g);k=b(K,"Discover the API"),K.forEach(v),p.forEach(v),P.forEach(v),this.h()},h(){w(i,"class","max-w-[20%] inline"),tt(i.src,m="logo_white.svg")||w(i,"src",m),w(i,"alt","Elmasy Logo"),w(a,"class","font-bold"),w(T,"class","btn btn-l variant-ghost-primary max-sm:mx-3 sm:mx-5"),w(T,"href","/tools"),w(g,"class","btn btn-l variant-ghost-primary max-sm:mx-3 sm:mx-5"),w(g,"href","/swagger/index.html"),w(s,"class","space-y-10 text-center"),w(c,"class","container h-full mx-auto flex justify-center items-center")},m(n,P){et(t,n,P),H(n,l,P),H(n,c,P),e(c,s),e(s,i),e(s,u),e(s,a),e(a,f),e(s,D),e(s,j),e(s,C),y.m(s,null),e(s,E),e(s,T),e(T,S),e(s,z),e(s,g),e(g,k),B=!0},p(n,[P]){r===(r=A(n))&&y?y.p(n,P):(y.d(1),y=r(n),y&&(y.c(),y.m(s,E)))},i(n){B||(st(t.$$.fragment,n),B=!0)},o(n){at(t.$$.fragment,n),B=!1},d(n){nt(t,n),n&&v(l),n&&v(c),y.d()}}}function mt(o,t,l){let c,s,i,m;return I(o,V,u=>l(0,c=u)),I(o,G,u=>l(1,s=u)),I(o,q,u=>l(2,i=u)),I(o,J,u=>l(3,m=u)),[c,s,i,m]}class ht extends O{constructor(t){super(),Q(this,t,mt,ut,W,{})}}export{ht as component};
