import{f as be,e as xe,g as Q,c as ie}from"../chunks/params.6e75924c.js";import{s as ke,a as P,f as w,c as y,g as E,h as I,d as $,j as C,i as T,I as _,W as $e,n as de,l as A,m as R,p as Y,K as ce}from"../chunks/scheduler.b3c879a1.js";import{S as we,i as Ee,b as S,d as M,m as N,t as k,c as Z,a as x,e as j,g as ee}from"../chunks/index.50170cf9.js";import{U as ne,e as J}from"../chunks/UIcon.32c9a790.js";import{C as Ce}from"../chunks/CardLogo.c1ccdcd2.js";import{M as Ie}from"../chunks/MainTitle.b47c05e7.js";import{b as fe}from"../chunks/paths.b5a59394.js";import{M as De}from"../chunks/Markdown.53f38150.js";import{T as Ve}from"../chunks/TabTitle.84f916a2.js";import{C as he}from"../chunks/Chip.332572e2.js";import{B as Pe}from"../chunks/Banner.fcc29db6.js";import{C as ye}from"../chunks/CardDivider.91fc1b4e.js";function Te({params:i}){if(i.slug)return{experience:be.find(l=>l.slug===i.slug)}}const et=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));function ue(i,e,l){const t=i.slice();return t[3]=e[l],t}function pe(i,e,l){const t=i.slice();return t[3]=e[l],t}function Se(i){let e,l,t,r,n,f,a,s;l=new Pe({props:{img:Q(i[0].experience.logo),$$slots:{default:[Ae]},$$scope:{ctx:i}}});const m=[Ue,Re],o=[];function b(d,v){return d[0].experience.description?0:1}return f=b(i),a=o[f]=m[f](i),{c(){e=w("div"),S(l.$$.fragment),t=P(),r=w("div"),n=w("div"),a.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=I(e);M(l.$$.fragment,v),t=y(v),r=E(v,"DIV",{class:!0});var B=I(r);n=E(B,"DIV",{class:!0});var V=I(n);a.l(V),V.forEach($),B.forEach($),v.forEach($),this.h()},h(){C(n,"class","px-10px m-y-5"),C(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){T(d,e,v),N(l,e,null),_(e,t),_(e,r),_(r,n),o[f].m(n,null),s=!0},p(d,v){const B={};v&1&&(B.img=Q(d[0].experience.logo)),v&257&&(B.$$scope={dirty:v,ctx:d}),l.$set(B);let V=f;f=b(d),f===V?o[f].p(d,v):(ee(),k(o[V],1,1,()=>{o[V]=null}),Z(),a=o[f],a?a.p(d,v):(a=o[f]=m[f](d),a.c()),x(a,1),a.m(n,null))},i(d){s||(x(l.$$.fragment,d),x(a),s=!0)},o(d){k(l.$$.fragment,d),k(a),s=!1},d(d){d&&$(e),j(l),o[f].d()}}}function Me(i){let e,l,t,r,n="Could not load experience data...",f;return l=new ne({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=P(),r=w("p"),r.textContent=n,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=I(e);M(l.$$.fragment,s),t=y(s),r=E(s,"P",{class:!0,["data-svelte-h"]:!0}),$e(r)!=="svelte-1o82fhi"&&(r.textContent=n),s.forEach($),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,s){T(a,e,s),N(l,e,null),_(e,t),_(e,r),f=!0},p:de,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&$(e),j(l)}}}function Ne(i){let e=i[0].experience.name+"",l;return{c(){l=A(e)},l(t){l=R(t,e)},m(t,r){T(t,l,r)},p(t,r){r&1&&e!==(e=t[0].experience.name+"")&&Y(l,e)},d(t){t&&$(l)}}}function je(i){let e,l,t,r,n=i[3].label+"",f,a,s;return l=new ne({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(l.$$.fragment),t=P(),r=w("span"),f=A(n),a=P(),this.h()},l(m){e=E(m,"DIV",{class:!0});var o=I(e);M(l.$$.fragment,o),t=y(o),r=E(o,"SPAN",{});var b=I(r);f=R(b,n),b.forEach($),o.forEach($),a=y(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,o){T(m,e,o),N(l,e,null),_(e,t),_(e,r),_(r,f),T(m,a,o),s=!0},p(m,o){(!s||o&1)&&n!==(n=m[3].label+"")&&Y(f,n)},i(m){s||(x(l.$$.fragment,m),s=!0)},o(m){k(l.$$.fragment,m),s=!1},d(m){m&&($(e),$(a)),j(l)}}}function me(i){let e,l;return e=new he({props:{href:i[3].to,$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){N(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=t[3].to),r&257&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Be(i){let e,l,t,r=i[3].name+"",n,f,a;return e=new Ce({props:{src:Q(i[3].logo),alt:i[3].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),l=P(),t=w("span"),n=A(r),f=P(),this.h()},l(s){M(e.$$.fragment,s),l=y(s),t=E(s,"SPAN",{class:!0});var m=I(t);n=R(m,r),m.forEach($),f=y(s),this.h()},h(){C(t,"class","text-[0.9em]")},m(s,m){N(e,s,m),T(s,l,m),T(s,t,m),_(t,n),T(s,f,m),a=!0},p(s,m){const o={};m&1&&(o.src=Q(s[3].logo)),m&1&&(o.alt=s[3].name),e.$set(o),(!a||m&1)&&r!==(r=s[3].name+"")&&Y(n,r)},i(s){a||(x(e.$$.fragment,s),a=!0)},o(s){k(e.$$.fragment,s),a=!1},d(s){s&&($(l),$(t),$(f)),j(e,s)}}}function _e(i){let e,l;return e=new he({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${i[3].slug}`,$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){N(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.href=`${fe}/skills/${t[3].slug}`),r&257&&(n.$$scope={dirty:r,ctx:t}),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Ae(i){let e,l,t,r,n,f=i[0].experience.company+"",a,s,m=i[0].experience.location+"",o,b,d=i[0].experience.type+"",v,B,V,G=ie(i[0].experience.period.from,i[0].experience.period.to)+"",H,te,F,L,le,O,re,X,U;t=new Ie({props:{$$slots:{default:[Ne]},$$scope:{ctx:i}}}),L=new ye({});let q=J(i[0].experience.links),h=[];for(let c=0;c<q.length;c+=1)h[c]=me(pe(i,q,c));const ge=c=>k(h[c],1,1,()=>{h[c]=null});let K=J(i[0].experience.skills),g=[];for(let c=0;c<K.length;c+=1)g[c]=_e(ue(i,K,c));const ve=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),S(t.$$.fragment),r=P(),n=w("p"),a=A(f),s=A(" · "),o=A(m),b=A(" · "),v=A(d),B=P(),V=w("p"),H=A(G),te=P(),F=w("div"),S(L.$$.fragment),le=P(),O=w("div");for(let c=0;c<h.length;c+=1)h[c].c();re=P(),X=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=I(e);l=E(u,"DIV",{class:!0});var D=I(l);M(t.$$.fragment,D),D.forEach($),r=y(u),n=E(u,"P",{class:!0});var p=I(n);a=R(p,f),s=R(p," · "),o=R(p,m),b=R(p," · "),v=R(p,d),p.forEach($),B=y(u),V=E(u,"P",{class:!0});var z=I(V);H=R(z,G),z.forEach($),te=y(u),F=E(u,"DIV",{class:!0});var se=I(F);M(L.$$.fragment,se),se.forEach($),le=y(u),O=E(u,"DIV",{class:!0});var ae=I(O);for(let W=0;W<h.length;W+=1)h[W].l(ae);ae.forEach($),re=y(u),X=E(u,"DIV",{class:!0});var oe=I(X);for(let W=0;W<g.length;W+=1)g[W].l(oe);oe.forEach($),u.forEach($),this.h()},h(){C(l,"class","text-0.9em"),C(n,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(F,"class","w-75%"),C(O,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(X,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){T(c,e,u),_(e,l),N(t,l,null),_(e,r),_(e,n),_(n,a),_(n,s),_(n,o),_(n,b),_(n,v),_(e,B),_(e,V),_(V,H),_(e,te),_(e,F),N(L,F,null),_(e,le),_(e,O);for(let D=0;D<h.length;D+=1)h[D]&&h[D].m(O,null);_(e,re),_(e,X);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(X,null);U=!0},p(c,u){const D={};if(u&257&&(D.$$scope={dirty:u,ctx:c}),t.$set(D),(!U||u&1)&&f!==(f=c[0].experience.company+"")&&Y(a,f),(!U||u&1)&&m!==(m=c[0].experience.location+"")&&Y(o,m),(!U||u&1)&&d!==(d=c[0].experience.type+"")&&Y(v,d),(!U||u&1)&&G!==(G=ie(c[0].experience.period.from,c[0].experience.period.to)+"")&&Y(H,G),u&1){q=J(c[0].experience.links);let p;for(p=0;p<q.length;p+=1){const z=pe(c,q,p);h[p]?(h[p].p(z,u),x(h[p],1)):(h[p]=me(z),h[p].c(),x(h[p],1),h[p].m(O,null))}for(ee(),p=q.length;p<h.length;p+=1)ge(p);Z()}if(u&1){K=J(c[0].experience.skills);let p;for(p=0;p<K.length;p+=1){const z=ue(c,K,p);g[p]?(g[p].p(z,u),x(g[p],1)):(g[p]=_e(z),g[p].c(),x(g[p],1),g[p].m(X,null))}for(ee(),p=K.length;p<g.length;p+=1)ve(p);Z()}},i(c){if(!U){x(t.$$.fragment,c),x(L.$$.fragment,c);for(let u=0;u<q.length;u+=1)x(h[u]);for(let u=0;u<K.length;u+=1)x(g[u]);U=!0}},o(c){k(t.$$.fragment,c),k(L.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);U=!1},d(c){c&&$(e),j(t),j(L),ce(h,c),ce(g,c)}}}function Re(i){let e,l,t,r,n="No description...",f;return l=new ne({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=P(),r=w("p"),r.textContent=n,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=I(e);M(l.$$.fragment,s),t=y(s),r=E(s,"P",{class:!0,["data-svelte-h"]:!0}),$e(r)!=="svelte-kl0ixf"&&(r.textContent=n),s.forEach($),this.h()},h(){C(r,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,s){T(a,e,s),N(l,e,null),_(e,t),_(e,r),f=!0},p:de,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&$(e),j(l)}}}function Ue(i){let e,l;return e=new De({props:{content:i[0].experience.description??"This place is yet to be filled..."}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,r){N(e,t,r),l=!0},p(t,r){const n={};r&1&&(n.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(n)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function ze(i){let e,l,t,r,n,f;e=new Ve({props:{title:i[1]}});const a=[Me,Se],s=[];function m(o,b){return o[0].experience===void 0?0:1}return r=m(i),n=s[r]=a[r](i),{c(){S(e.$$.fragment),l=P(),t=w("div"),n.c(),this.h()},l(o){M(e.$$.fragment,o),l=y(o),t=E(o,"DIV",{class:!0});var b=I(t);n.l(b),b.forEach($),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(o,b){N(e,o,b),T(o,l,b),T(o,t,b),s[r].m(t,null),f=!0},p(o,[b]){const d={};b&2&&(d.title=o[1]),e.$set(d);let v=r;r=m(o),r===v?s[r].p(o,b):(ee(),k(s[v],1,1,()=>{s[v]=null}),Z(),n=s[r],n?n.p(o,b):(n=s[r]=a[r](o),n.c()),x(n,1),n.m(t,null))},i(o){f||(x(e.$$.fragment,o),x(n),f=!0)},o(o){k(e.$$.fragment,o),k(n),f=!1},d(o){o&&($(l),$(t)),j(e,o),s[r].d()}}}function Le(i,e,l){let t,{data:r}=e;const{title:n}=xe;return i.$$set=f=>{"data"in f&&l(0,r=f.data)},i.$$.update=()=>{i.$$.dirty&1&&l(1,t=r.experience?`${r.experience.name} - ${n}`:n)},[r,t]}class tt extends we{constructor(e){super(),Ee(this,e,Le,ze,ke,{data:0})}}export{tt as component,et as universal};
