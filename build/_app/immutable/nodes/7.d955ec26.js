import{S as O,i as Q,s as W,L as B,o as X,y as Z,a as F,k as h,q as d,z as $,c as R,l as _,m as T,r as b,h as v,n as E,Y as tt,A as et,b as L,D as e,g as st,d as at,B as nt,u as H,U as rt}from"../chunks/index.41ee7622.js";import{w as q}from"../chunks/index.52702af0.js";const M=q(0),V=q(0),N=q(0),G=q(0),J=q(0);function ot(r,t,l){let c,s,i,m,u;return B(r,J,a=>l(0,c=a)),B(r,G,a=>l(1,s=a)),B(r,N,a=>l(2,i=a)),B(r,V,a=>l(3,m=a)),B(r,M,a=>l(4,u=a)),X(async()=>{if(u!=0||m!=0||i!=0||s!=0||c!=0)return;const a=await fetch("https://columbus.elmasy.com/api/stat");if(a.ok){if(a.status==204)return;const f=await a.json();if(f.total==0||f.tld==0||f.domain==0||f.fulldomain==0||f.tld==0)return;M.set(f.total),V.set(f.tld),N.set(f.domain),G.set(f.fulldomain),J.set(f.sub)}else console.log("Failed to fetch /stat:"+a.statusText+" "+a.text())}),[]}class lt extends O{constructor(t){super(),Q(this,t,ot,null,W,{})}}function it(r){let t,l,c,s,i,m,u,a,f,I,k,x,D,g,C,j,P,S;return{c(){t=h("p"),l=d(`Columbus Project is an API first subdomain discovery service.
				`),c=h("br"),s=d(`
				A blazingly fast subdomain enumeration service with advanced features. `),i=h("br"),m=d(`
				There are `),u=h("b"),a=d(r[0]),f=d(` different entries in the database, combined from
				`),I=h("b"),k=d(r[3]),x=d(`
				different subdomains, `),D=h("b"),g=d(r[2]),C=d(" different domains and "),j=h("b"),P=d(r[1]),S=d(` top level
				domains.`),this.h()},l(p){t=_(p,"P",{class:!0});var o=T(t);l=b(o,`Columbus Project is an API first subdomain discovery service.
				`),c=_(o,"BR",{}),s=b(o,`
				A blazingly fast subdomain enumeration service with advanced features. `),i=_(o,"BR",{}),m=b(o,`
				There are `),u=_(o,"B",{});var z=T(u);a=b(z,r[0]),z.forEach(v),f=b(o,` different entries in the database, combined from
				`),I=_(o,"B",{});var y=T(I);k=b(y,r[3]),y.forEach(v),x=b(o,`
				different subdomains, `),D=_(o,"B",{});var n=T(D);g=b(n,r[2]),n.forEach(v),C=b(o," different domains and "),j=_(o,"B",{});var A=T(j);P=b(A,r[1]),A.forEach(v),S=b(o,` top level
				domains.`),o.forEach(v),this.h()},h(){E(t,"class","max-sm:mx-6")},m(p,o){L(p,t,o),e(t,l),e(t,c),e(t,s),e(t,i),e(t,m),e(t,u),e(u,a),e(t,f),e(t,I),e(I,k),e(t,x),e(t,D),e(D,g),e(t,C),e(t,j),e(j,P),e(t,S)},p(p,o){o&1&&H(a,p[0]),o&8&&H(k,p[3]),o&4&&H(g,p[2]),o&2&&H(P,p[1])},d(p){p&&v(t)}}}function ct(r){let t,l,c,s;return{c(){t=h("p"),l=d(`Columbus Project is an API first subdomain discovery service.
				`),c=h("br"),s=d(`
				A blazingly fast subdomain enumeration service with advanced features.`),this.h()},l(i){t=_(i,"P",{class:!0});var m=T(t);l=b(m,`Columbus Project is an API first subdomain discovery service.
				`),c=_(m,"BR",{}),s=b(m,`
				A blazingly fast subdomain enumeration service with advanced features.`),m.forEach(v),this.h()},h(){E(t,"class","max-sm:mx-6")},m(i,m){L(i,t,m),e(t,l),e(t,c),e(t,s)},p:rt,d(i){i&&v(t)}}}function ut(r){let t,l,c,s,i,m,u,a,f,I,k,x,D,g,C,j,P,S,p;t=new lt({});function o(n,A){return n[0]==0||n[1]==0||n[2]==0||n[3]==0?ct:it}let z=o(r),y=z(r);return{c(){Z(t.$$.fragment),l=F(),c=h("div"),s=h("div"),i=h("img"),u=F(),a=h("h1"),f=d("Columbus Project"),I=F(),k=h("hr"),x=F(),y.c(),D=F(),g=h("a"),C=d("Try out the features"),j=F(),P=h("a"),S=d("Discover the API"),this.h()},l(n){$(t.$$.fragment,n),l=R(n),c=_(n,"DIV",{class:!0});var A=T(c);s=_(A,"DIV",{class:!0});var w=T(s);i=_(w,"IMG",{class:!0,src:!0,alt:!0}),u=R(w),a=_(w,"H1",{class:!0});var U=T(a);f=b(U,"Columbus Project"),U.forEach(v),I=R(w),k=_(w,"HR",{}),x=R(w),y.l(w),D=R(w),g=_(w,"A",{class:!0,href:!0});var Y=T(g);C=b(Y,"Try out the features"),Y.forEach(v),j=R(w),P=_(w,"A",{class:!0,href:!0});var K=T(P);S=b(K,"Discover the API"),K.forEach(v),w.forEach(v),A.forEach(v),this.h()},h(){E(i,"class","max-w-[20%] inline"),tt(i.src,m="logo_white.svg")||E(i,"src",m),E(i,"alt","Elmasy Logo"),E(a,"class","font-bold"),E(g,"class","btn btn-l variant-ghost-primary max-sm:mx-3 sm:mx-5"),E(g,"href","/tools"),E(P,"class","btn btn-l variant-ghost-primary max-sm:mx-3 sm:mx-5"),E(P,"href","/swagger/index.html"),E(s,"class","space-y-10 text-center"),E(c,"class","container h-full mx-auto flex justify-center items-center")},m(n,A){et(t,n,A),L(n,l,A),L(n,c,A),e(c,s),e(s,i),e(s,u),e(s,a),e(a,f),e(s,I),e(s,k),e(s,x),y.m(s,null),e(s,D),e(s,g),e(g,C),e(s,j),e(s,P),e(P,S),p=!0},p(n,[A]){z===(z=o(n))&&y?y.p(n,A):(y.d(1),y=z(n),y&&(y.c(),y.m(s,D)))},i(n){p||(st(t.$$.fragment,n),p=!0)},o(n){at(t.$$.fragment,n),p=!1},d(n){nt(t,n),n&&v(l),n&&v(c),y.d()}}}function mt(r,t,l){let c,s,i,m;return B(r,M,u=>l(0,c=u)),B(r,V,u=>l(1,s=u)),B(r,G,u=>l(2,i=u)),B(r,J,u=>l(3,m=u)),[c,s,i,m]}class bt extends O{constructor(t){super(),Q(this,t,mt,ut,W,{})}}export{bt as component};
