import{S,i as T,s as V,k as y,l as q,m as I,h as g,n as s,p as D,b as _,D as B,U as P,I as E,J as M}from"./index.16e78bfc.js";import"./ProgressBar.svelte_svelte_type_style_lang.8eb38531.js";function C(r){let e,a,n,u=`${r[4]?100:r[7]}%`,m,d;return{c(){e=y("div"),a=y("div"),this.h()},l(l){e=q(l,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0});var t=I(e);a=q(t,"DIV",{class:!0}),I(a).forEach(g),t.forEach(g),this.h()},h(){s(a,"class",n="progress-bar-meter "+r[5]+" "+r[5]+" svelte-meqa4r"),D(a,"width",u),s(e,"class",m="progress-bar "+r[6]+" svelte-meqa4r"),s(e,"data-testid","progress-bar"),s(e,"role","progressbar"),s(e,"aria-labelledby",r[3]),s(e,"aria-valuenow",r[0]),s(e,"aria-valuemin",r[1]),s(e,"aria-valuemax",d=r[2]-r[1])},m(l,t){_(l,e,t),B(e,a)},p(l,[t]){t&32&&n!==(n="progress-bar-meter "+l[5]+" "+l[5]+" svelte-meqa4r")&&s(a,"class",n),t&144&&u!==(u=`${l[4]?100:l[7]}%`)&&D(a,"width",u),t&64&&m!==(m="progress-bar "+l[6]+" svelte-meqa4r")&&s(e,"class",m),t&8&&s(e,"aria-labelledby",l[3]),t&1&&s(e,"aria-valuenow",l[0]),t&2&&s(e,"aria-valuemin",l[1]),t&6&&d!==(d=l[2]-l[1])&&s(e,"aria-valuemax",d)},i:P,o:P,d(l){l&&g(e)}}}const J="w-full overflow-hidden",U="h-full";function j(r,e,a){let n,u,m,d,l,{value:t=void 0}=e,{min:f=0}=e,{max:b=100}=e,{height:c="h-2"}=e,{rounded:h="rounded-token"}=e,{meter:v="bg-surface-900-50-token"}=e,{track:o="bg-surface-200-700-token"}=e,{labelledby:k=""}=e;return r.$$set=i=>{a(13,e=E(E({},e),M(i))),"value"in i&&a(0,t=i.value),"min"in i&&a(1,f=i.min),"max"in i&&a(2,b=i.max),"height"in i&&a(8,c=i.height),"rounded"in i&&a(9,h=i.rounded),"meter"in i&&a(10,v=i.meter),"track"in i&&a(11,o=i.track),"labelledby"in i&&a(3,k=i.labelledby)},r.$$.update=()=>{r.$$.dirty&7&&a(7,n=t?100*(t-f)/(b-f):0),r.$$.dirty&1&&a(4,u=t===void 0||t<0),r.$$.dirty&16&&a(12,m=u?"animIndeterminate":""),a(6,d=`${J} ${c} ${h} ${o} ${e.class??""}`),r.$$.dirty&5632&&a(5,l=`${U} ${h} ${m} ${v}`)},e=M(e),[t,f,b,k,u,l,d,n,c,h,v,o,m]}class F extends S{constructor(e){super(),T(this,e,j,C,V,{value:0,min:1,max:2,height:8,rounded:9,meter:10,track:11,labelledby:3})}}export{F as P};