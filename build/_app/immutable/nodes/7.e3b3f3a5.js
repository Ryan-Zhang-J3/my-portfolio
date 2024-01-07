import{j as ue,P as pe,g as K}from"../chunks/params.928104e8.js";import{s as _e,a as I,f as w,c as D,g as j,h as C,d as m,j as b,i as y,I as d,W as Z,n as J,l as L,m as G,p as F,K as X,R as me}from"../chunks/scheduler.b3c879a1.js";import{S as de,i as he,b as T,d as M,m as B,t as E,c as W,a as k,e as N,g as Y}from"../chunks/index.50170cf9.js";import{U as H,e as q}from"../chunks/UIcon.32c9a790.js";import{C as $e}from"../chunks/CardLogo.c1ccdcd2.js";import{M as ge}from"../chunks/MainTitle.b47c05e7.js";import{b as le}from"../chunks/paths.ab0dfef0.js";import{M as ve}from"../chunks/Markdown.2fabca50.js";import{T as be}from"../chunks/TabTitle.9e60002d.js";import{C as ie}from"../chunks/Chip.368a93b1.js";import{B as ke}from"../chunks/Banner.a96417a6.js";import{C as fe}from"../chunks/CardDivider.91fc1b4e.js";function we({params:f}){if(f.slug)return{project:ue.find(r=>r.slug===f.slug)}}const We=Object.freeze(Object.defineProperty({__proto__:null,load:we},Symbol.toStringTag,{value:"Module"}));function re(f,e,r){const t=f.slice();return t[4]=e[r],t}function ne(f,e,r){const t=f.slice();return t[4]=e[r],t}function se(f,e,r){const t=f.slice();return t[4]=e[r],t}function je(f){let e,r,t,l,n,s,o,a,u,c,g,V,S,O;r=new ke({props:{img:K(f[0].project.logo),$$slots:{default:[De]},$$scope:{ctx:f}}});const z=[Pe,Ve],P=[];function h(v,i){return v[0].project.description?0:1}s=h(f),o=P[s]=z[s](f),c=new fe({});const Q=[Se,ye],R=[];function $(v,i){return v[2].length>0?0:1}return V=$(f),S=R[V]=Q[V](f),{c(){e=w("div"),T(r.$$.fragment),t=I(),l=w("div"),n=w("div"),o.c(),a=I(),u=w("div"),T(c.$$.fragment),g=I(),S.c(),this.h()},l(v){e=j(v,"DIV",{class:!0});var i=C(e);M(r.$$.fragment,i),t=D(i),l=j(i,"DIV",{class:!0});var p=C(l);n=j(p,"DIV",{class:!0});var x=C(n);o.l(x),x.forEach(m),a=D(p),u=j(p,"DIV",{class:!0});var _=C(u);M(c.$$.fragment,_),_.forEach(m),g=D(p),S.l(p),p.forEach(m),i.forEach(m),this.h()},h(){b(n,"class","px-10px m-y-5"),b(u,"class","w-100% m-t-8"),b(l,"class","pt-3 pb-1 overflow-x-hidden w-full"),b(e,"class","flex flex-col items-center overflow-x-hidden")},m(v,i){y(v,e,i),B(r,e,null),d(e,t),d(e,l),d(l,n),P[s].m(n,null),d(l,a),d(l,u),B(c,u,null),d(l,g),R[V].m(l,null),O=!0},p(v,i){const p={};i&1&&(p.img=K(v[0].project.logo)),i&2049&&(p.$$scope={dirty:i,ctx:v}),r.$set(p);let x=s;s=h(v),s===x?P[s].p(v,i):(Y(),E(P[x],1,1,()=>{P[x]=null}),W(),o=P[s],o?o.p(v,i):(o=P[s]=z[s](v),o.c()),k(o,1),o.m(n,null)),S.p(v,i)},i(v){O||(k(r.$$.fragment,v),k(o),k(c.$$.fragment,v),k(S),O=!0)},o(v){E(r.$$.fragment,v),E(o),E(c.$$.fragment,v),E(S),O=!1},d(v){v&&m(e),N(r),P[s].d(),N(c),R[V].d()}}}function xe(f){let e,r,t,l,n="Could not load project data...",s;return r=new H({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=I(),l=w("p"),l.textContent=n,this.h()},l(o){e=j(o,"DIV",{class:!0});var a=C(e);M(r.$$.fragment,a),t=D(a),l=j(a,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-18mwztv"&&(l.textContent=n),a.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(o,a){y(o,e,a),B(r,e,null),d(e,t),d(e,l),s=!0},p:J,i(o){s||(k(r.$$.fragment,o),s=!0)},o(o){E(r.$$.fragment,o),s=!1},d(o){o&&m(e),N(r)}}}function Ee(f){let e=f[0].project.name+"",r;return{c(){r=L(e)},l(t){r=G(t,e)},m(t,l){y(t,r,l)},p(t,l){l&1&&e!==(e=t[0].project.name+"")&&F(r,e)},d(t){t&&m(r)}}}function Ce(f){let e,r,t,l,n=f[4].label+"",s,o,a;return r=new H({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),T(r.$$.fragment),t=I(),l=w("span"),s=L(n),o=I(),this.h()},l(u){e=j(u,"DIV",{class:!0});var c=C(e);M(r.$$.fragment,c),t=D(c),l=j(c,"SPAN",{});var g=C(l);s=G(g,n),g.forEach(m),c.forEach(m),o=D(u),this.h()},h(){b(e,"class","row-center gap-2")},m(u,c){y(u,e,c),B(r,e,null),d(e,t),d(e,l),d(l,s),y(u,o,c),a=!0},p(u,c){(!a||c&1)&&n!==(n=u[4].label+"")&&F(s,n)},i(u){a||(k(r.$$.fragment,u),a=!0)},o(u){E(r.$$.fragment,u),a=!1},d(u){u&&(m(e),m(o)),N(r)}}}function oe(f){let e,r;return e=new ie({props:{href:f[4].to,$$slots:{default:[Ce]},$$scope:{ctx:f}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=t[4].to),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Ie(f){let e,r,t,l=f[4].name+"",n,s,o;return e=new $e({props:{src:K(f[4].logo),alt:f[4].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){T(e.$$.fragment),r=I(),t=w("span"),n=L(l),s=I(),this.h()},l(a){M(e.$$.fragment,a),r=D(a),t=j(a,"SPAN",{class:!0});var u=C(t);n=G(u,l),u.forEach(m),s=D(a),this.h()},h(){b(t,"class","text-[0.9em]")},m(a,u){B(e,a,u),y(a,r,u),y(a,t,u),d(t,n),y(a,s,u),o=!0},p(a,u){const c={};u&1&&(c.src=K(a[4].logo)),u&1&&(c.alt=a[4].name),e.$set(c),(!o||u&1)&&l!==(l=a[4].name+"")&&F(n,l)},i(a){o||(k(e.$$.fragment,a),o=!0)},o(a){E(e.$$.fragment,a),o=!1},d(a){a&&(m(r),m(t),m(s)),N(e,a)}}}function ae(f){let e,r;return e=new ie({props:{classes:"inline-flex flex-row items-center justify-center",href:`${le}/skills/${f[4].slug}`,$$slots:{default:[Ie]},$$scope:{ctx:f}}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.href=`${le}/skills/${t[4].slug}`),l&2049&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function De(f){let e,r,t,l,n,s=f[0].project.type+"",o,a,u,c,g,V,S,O,z;t=new ge({props:{$$slots:{default:[Ee]},$$scope:{ctx:f}}}),c=new fe({});let P=q(f[0].project.links),h=[];for(let i=0;i<P.length;i+=1)h[i]=oe(se(f,P,i));const Q=i=>E(h[i],1,1,()=>{h[i]=null});let R=q(f[0].project.skills),$=[];for(let i=0;i<R.length;i+=1)$[i]=ae(ne(f,R,i));const v=i=>E($[i],1,1,()=>{$[i]=null});return{c(){e=w("div"),r=w("div"),T(t.$$.fragment),l=I(),n=w("p"),o=L(s),a=I(),u=w("div"),T(c.$$.fragment),g=I(),V=w("div");for(let i=0;i<h.length;i+=1)h[i].c();S=I(),O=w("div");for(let i=0;i<$.length;i+=1)$[i].c();this.h()},l(i){e=j(i,"DIV",{class:!0});var p=C(e);r=j(p,"DIV",{class:!0});var x=C(r);M(t.$$.fragment,x),x.forEach(m),l=D(p),n=j(p,"P",{class:!0});var _=C(n);o=G(_,s),_.forEach(m),a=D(p),u=j(p,"DIV",{class:!0});var A=C(u);M(c.$$.fragment,A),A.forEach(m),g=D(p),V=j(p,"DIV",{class:!0});var ee=C(V);for(let U=0;U<h.length;U+=1)h[U].l(ee);ee.forEach(m),S=D(p),O=j(p,"DIV",{class:!0});var te=C(O);for(let U=0;U<$.length;U+=1)$[U].l(te);te.forEach(m),p.forEach(m),this.h()},h(){b(r,"class","text-0.9em"),b(n,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),b(u,"class","w-75%"),b(V,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),b(O,"class","row-center flex-wrap m-b-2"),b(e,"class","col-center p-y-20")},m(i,p){y(i,e,p),d(e,r),B(t,r,null),d(e,l),d(e,n),d(n,o),d(e,a),d(e,u),B(c,u,null),d(e,g),d(e,V);for(let x=0;x<h.length;x+=1)h[x]&&h[x].m(V,null);d(e,S),d(e,O);for(let x=0;x<$.length;x+=1)$[x]&&$[x].m(O,null);z=!0},p(i,p){const x={};if(p&2049&&(x.$$scope={dirty:p,ctx:i}),t.$set(x),(!z||p&1)&&s!==(s=i[0].project.type+"")&&F(o,s),p&1){P=q(i[0].project.links);let _;for(_=0;_<P.length;_+=1){const A=se(i,P,_);h[_]?(h[_].p(A,p),k(h[_],1)):(h[_]=oe(A),h[_].c(),k(h[_],1),h[_].m(V,null))}for(Y(),_=P.length;_<h.length;_+=1)Q(_);W()}if(p&1){R=q(i[0].project.skills);let _;for(_=0;_<R.length;_+=1){const A=ne(i,R,_);$[_]?($[_].p(A,p),k($[_],1)):($[_]=ae(A),$[_].c(),k($[_],1),$[_].m(O,null))}for(Y(),_=R.length;_<$.length;_+=1)v(_);W()}},i(i){if(!z){k(t.$$.fragment,i),k(c.$$.fragment,i);for(let p=0;p<P.length;p+=1)k(h[p]);for(let p=0;p<R.length;p+=1)k($[p]);z=!0}},o(i){E(t.$$.fragment,i),E(c.$$.fragment,i),h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)E(h[p]);$=$.filter(Boolean);for(let p=0;p<$.length;p+=1)E($[p]);z=!1},d(i){i&&m(e),N(t),N(c),X(h,i),X($,i)}}}function Ve(f){let e,r,t,l,n="No description",s;return r=new H({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=I(),l=w("p"),l.textContent=n,this.h()},l(o){e=j(o,"DIV",{class:!0});var a=C(e);M(r.$$.fragment,a),t=D(a),l=j(a,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-1ugej71"&&(l.textContent=n),a.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(o,a){y(o,e,a),B(r,e,null),d(e,t),d(e,l),s=!0},p:J,i(o){s||(k(r.$$.fragment,o),s=!0)},o(o){E(r.$$.fragment,o),s=!1},d(o){o&&m(e),N(r)}}}function Pe(f){let e,r;return e=new ve({props:{content:f[0].project.description}}),{c(){T(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,l){B(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.content=t[0].project.description),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function ye(f){let e,r,t,l,n="No screenshots",s;return r=new H({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),T(r.$$.fragment),t=I(),l=w("p"),l.textContent=n,this.h()},l(o){e=j(o,"DIV",{class:!0});var a=C(e);M(r.$$.fragment,a),t=D(a),l=j(a,"P",{class:!0,["data-svelte-h"]:!0}),Z(l)!=="svelte-s36p3y"&&(l.textContent=n),a.forEach(m),this.h()},h(){b(l,"class","font-300"),b(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(o,a){y(o,e,a),B(r,e,null),d(e,t),d(e,l),s=!0},p:J,i(o){s||(k(r.$$.fragment,o),s=!0)},o(o){E(r.$$.fragment,o),s=!1},d(o){o&&m(e),N(r)}}}function Se(f){let e,r=q(f[2]),t=[];for(let l=0;l<r.length;l+=1)t[l]=ce(re(f,r,l));return{c(){e=w("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=j(l,"DIV",{class:!0});var n=C(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(m),this.h()},h(){b(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(l,n){y(l,e,n);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,n){if(n&4){r=q(l[2]);let s;for(s=0;s<r.length;s+=1){const o=re(l,r,s);t[s]?t[s].p(o,n):(t[s]=ce(o),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},i:J,o:J,d(l){l&&m(e),X(t,l)}}}function ce(f){let e,r,t,l,n,s=f[4].label+"",o,a;return{c(){e=w("div"),r=w("img"),l=I(),n=w("p"),o=L(s),a=I(),this.h()},l(u){e=j(u,"DIV",{class:!0});var c=C(e);r=j(c,"IMG",{class:!0,src:!0,alt:!0}),l=D(c),n=j(c,"P",{class:!0});var g=C(n);o=G(g,s),g.forEach(m),a=D(c),c.forEach(m),this.h()},h(){b(r,"class","aspect-video w-100%"),me(r.src,t=f[4].src)||b(r,"src",t),b(r,"alt",f[4].label),b(n,"class","text-[var(--tertiary-text)] font-300"),b(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(u,c){y(u,e,c),d(e,r),d(e,l),d(e,n),d(n,o),d(e,a)},p:J,d(u){u&&m(e)}}}function Te(f){let e,r,t,l,n,s;e=new be({props:{title:f[1]}});const o=[xe,je],a=[];function u(c,g){return c[0].project===void 0?0:1}return l=u(f),n=a[l]=o[l](f),{c(){T(e.$$.fragment),r=I(),t=w("div"),n.c(),this.h()},l(c){M(e.$$.fragment,c),r=D(c),t=j(c,"DIV",{class:!0});var g=C(t);n.l(g),g.forEach(m),this.h()},h(){b(t,"class","pb-10 overflow-x-hidden col flex-1")},m(c,g){B(e,c,g),y(c,r,g),y(c,t,g),a[l].m(t,null),s=!0},p(c,[g]){const V={};g&2&&(V.title=c[1]),e.$set(V);let S=l;l=u(c),l===S?a[l].p(c,g):(Y(),E(a[S],1,1,()=>{a[S]=null}),W(),n=a[l],n?n.p(c,g):(n=a[l]=o[l](c),n.c()),k(n,1),n.m(t,null))},i(c){s||(k(e.$$.fragment,c),k(n),s=!0)},o(c){E(e.$$.fragment,c),E(n),s=!1},d(c){c&&(m(r),m(t)),N(e,c),a[l].d()}}}function Me(f,e,r){var o;let t,{data:l}=e;const{title:n}=pe,s=((o=l.project)==null?void 0:o.screenshots)??[];return f.$$set=a=>{"data"in a&&r(0,l=a.data)},f.$$.update=()=>{f.$$.dirty&1&&r(1,t=l.project?`${l.project.name} - ${n}`:n)},[l,t,s]}class Ye extends de{constructor(e){super(),he(this,e,Me,Te,_e,{data:0})}}export{Ye as component,We as universal};
