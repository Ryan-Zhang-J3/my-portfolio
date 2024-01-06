import{w as mt,b as ft}from"./paths.27942b5b.js";const ct="@riadh-adrani-theme",gt=t=>{localStorage.setItem(ct,JSON.stringify(t))},ut=mt(!1),at=t=>ut.update(y=>{var g;const b=typeof t=="boolean"?t:!y;return gt(b),(g=document.querySelector(":root"))==null||g.setAttribute("data-theme",b?"dark":"light"),b}),Dt=()=>{const t=localStorage.getItem(ct);t?at(JSON.parse(t)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&at(!0)},nt=t=>`${ft}/logos/${t}`,s=(t,y)=>y?{dark:nt(y),light:nt(t)}:nt(t),M={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi"),Flask:s("flask.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetees.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),FCR:s("First_Capital_Real_Estate_Investment_Trust_First_Capital_REIT_An.png"),Git:s("git.png"),MPP:s("MPP.png"),Giftver:s("giftver.png"),Metamorphosis:s("metamorphosis.png"),HocusFocus:s("hocusfocus.png"),McMaster:s("mcmaster.png"),IB:s("ib.png")};let lt;ut.subscribe(t=>lt=t);const St=t=>typeof t=="string"?t:lt?t.dark:t.light,pt=[{degree:"Bachelors Degree of Computer Science",description:"",location:"Hamilton, ON",logo:M.McMaster,name:"maccs",organization:"McMaster",period:{from:new Date(2022,9,5),to:new Date(2027,5,1)},shortDescription:"",slug:"undergrad",subjects:["C","Data Structures and Algorithms","Computer Architecture","Python","Haskell","Java","Web Development","Design Patterns","Discrete Math"]},{degree:"International Baccalaureate Degree",description:"",location:"Thornhill, ON",logo:M.IB,name:"maccs",organization:"McMaster",period:{from:new Date(2018,9,5),to:new Date(2023,4,18)},shortDescription:"",slug:"highschool",subjects:["Biology","Chemistry","Literature","French","Mathematics","Theory of Knowledge"]}],J=t=>t,ht=[J({slug:"python",color:"",logo:M.Python,name:"Python"}),J({slug:"js",color:"yellow",logo:M.JavaScript,name:"Javascript"}),J({slug:"css",color:"blue",logo:M.CSS,name:"CSS"}),J({slug:"html",color:"orange",logo:M.HTML,name:"HTML"}),J({slug:"reactjs",color:"cyan",logo:M.ReactJs,name:"React Js"}),J({slug:"nodejs",color:"green",logo:M.NodeJs,name:"Node JS"}),J({slug:"aws",color:"blue",logo:M.AWS,name:"AWS"}),J({slug:"PostgreSQL",color:"blue",logo:M.PostgreSQL,name:"PostgreSQL"}),J({slug:"Flask",color:"black",logo:M.Flask,name:"Flask"}),J({slug:"Java",color:"red",logo:M.Java,name:"Java"}),J({slug:"MongoDB",color:"green",logo:M.MongoDB,name:"MongoDB"}),J({slug:"Bootstrap",color:"purple",logo:M.Bootstrap,name:"Bootstrap"}),J({slug:"git",color:"white",logo:M.Git,name:"Git"}),J({slug:"microsoft-power-platform",color:"blue",logo:M.MPP,name:"Microsoft Power Platform"}),J({slug:"ExpressJS",color:"blue",logo:M.ExpressJs,name:"ExpressJS"}),J({slug:"C",color:"blue",logo:M.C,name:"C"})],X=(...t)=>ht.filter(y=>t.includes(y.slug));var j=(t=>(t.GitHub="github",t.StackOverflow="stackoverflow",t.Twitter="twitter",t.Linkedin="linkedin",t.Email="email",t.Facebook="facebook",t.Youtube="youtube",t))(j||{}),rt=(t=>(t.FullTime="Full-time",t.PartTime="Part-time",t.SelfEmployed="Self-employed",t.Freelance="Freelance",t.Contract="Contract",t.Internship="Internship",t))(rt||{});const Mt=[{slug:"data-analyst",company:"First Capital REIT",description:"Responsible for the creation, deployment, and maintenance of Robotic Process Automation flows to automate business processes. Developed applications used by system administrators to manage company resources. Queried and manipulated data for relevant PowerBI visualizations and business optimization.",contract:rt.Internship,type:"Data and Automation Analysis",location:"Toronto, ON",period:{from:new Date("May 2022"),to:new Date("August 2022")},skills:X("html","css","js","microsoft-power-platform","PostgreSQL"),name:"Data and Automation Analyst",color:"#ffffff",links:[],logo:M.FCR,shortDescription:""},{slug:"software-developer",company:"Linkall Technologies",description:"Worked in development team to create software solutions for clients using Python. Utilised multiple technologies and programming languages to build continuously adapted projects satisfying business requirements.",contract:rt.Internship,type:"Software Development",location:"Virtual",period:{from:new Date("April 2020"),to:new Date("August 2020")},skills:X("python","git"),name:"Software Developer",color:"#ffffff",links:[],logo:M.Unknown,shortDescription:""}],vt=[{slug:"giftver-project",color:"#5e95e3",description:"Giftver is an easy to use web application that allows friends to create, manage, and run Secret Santa Gift Exchanges from anywhere.",shortDescription:"Giftver is an easy to use web application that allows friends to create, manage, and run Secret Santa Gift Exchanges from anywhere.",links:[{to:"https://github.com/Ryan-Zhang-J3/Giftver",label:"GitHub"}],logo:M.Giftver,name:"Giftver",period:{from:new Date("December 2023")},skills:X("flask","python","postgresql"),type:"Webapp",screenshots:[{label:"Adding Users",src:"https://private-user-images.githubusercontent.com/122586539/293528856-6049eeab-dfbb-491d-9d51-7cb0173510cf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ1MTQxMTksIm5iZiI6MTcwNDUxMzgxOSwicGF0aCI6Ii8xMjI1ODY1MzkvMjkzNTI4ODU2LTYwNDllZWFiLWRmYmItNDkxZC05ZDUxLTdjYjAxNzM1MTBjZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwNlQwNDAzMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kOTVmNmRiNWFiZDZjYTVjN2Y1NzAyZThiZTZhZGE3YjBkOTFiN2Y3OGRjYzliNDcyNGM4MTgxNDU0OTBhYzgzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uuuFdL5vqjmwx4wdd0ayiMf0pUHMcv3Opxbn6y69Ry0"},{label:"Exchange Management",src:"https://private-user-images.githubusercontent.com/122586539/293572250-3209087c-4acd-4f41-a771-de34f8370dcf.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ1MTQxMTksIm5iZiI6MTcwNDUxMzgxOSwicGF0aCI6Ii8xMjI1ODY1MzkvMjkzNTcyMjUwLTMyMDkwODdjLTRhY2QtNGY0MS1hNzcxLWRlMzRmODM3MGRjZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwNlQwNDAzMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YzcwNzA1YmNlZGZiNDllZDIzNzY0MjY2YjkyZmZhNzBjNTQ2ZDdlMTg3NDg0YmJiNWU4YmZlZTVlNDhjNTExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.6mIw_xkU07BuIFvMglBSAFd_7IFCQZ4AP6KdxgQGKz4"},{label:"Recieving your secret santa recipient",src:"https://private-user-images.githubusercontent.com/122586539/294647304-46f19b37-d6a1-497e-9756-6aac2085068a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ1MTQ0NDIsIm5iZiI6MTcwNDUxNDE0MiwicGF0aCI6Ii8xMjI1ODY1MzkvMjk0NjQ3MzA0LTQ2ZjE5YjM3LWQ2YTEtNDk3ZS05NzU2LTZhYWMyMDg1MDY4YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwNlQwNDA5MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZjZiNTY3MDEyZWU4ZmYxMzUwOWExZmRjY2IzYjRmNDE1ZmIyYjExYTFlZmQzZDM4ODY5ZmMxODIzZDM4OWU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.zIZb85h-r7ARfR9Y1OKCCs2I-tJG1FVg7qis2jx29VE"}]},{slug:"metamorphosis-project",color:"#5e95e3",description:"A lifestyle website for fitness and self-improvement built using the MERN tech stack",shortDescription:"A lifestyle website for fitness and self-improvement built using the MERN tech stack",links:[{to:"https://github.com/Ryan-Zhang-J3/Metamorphosis",label:"GitHub"}],logo:M.Metamorphosis,name:"Metamorphosis",period:{from:new Date("August 2023")},skills:X("js","ExpressJS","MongoDB","nodejs"),type:"Webapp",screenshots:[]},{slug:"hocusfocus",color:"#5e95e3",description:"A program designed for users looking to maximize their productivity for extended periods of time.",shortDescription:"A program designed for users looking to maximize their productivity for extended periods of time.",links:[{to:"https://github.com/Ryan-Zhang-J3/HocusFocus",label:"GitHub"}],logo:M.HocusFocus,name:"hocusfocus",period:{from:new Date("January 2022")},skills:X("python","opencv"),type:"Application",screenshots:[]}];var dt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},it={},yt={get exports(){return it},set exports(t){it=t}};(function(t,y){(function(b,g){t.exports=g()})(dt,function(){var b=1e3,g=6e4,D=36e5,S="millisecond",z="second",A="minute",x="hour",N="day",O="week",L="month",H="quarter",Y="year",I="date",F="Invalid Date",K=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,st={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(o){var r=["th","st","nd","rd"],e=o%100;return"["+o+(r[(e-20)%10]||r[e]||r[0])+"]"}},E=function(o,r,e){var a=String(o);return!a||a.length>=r?o:""+Array(r+1-a.length).join(e)+o},q={s:E,z:function(o){var r=-o.utcOffset(),e=Math.abs(r),a=Math.floor(e/60),n=e%60;return(r<=0?"+":"-")+E(a,2,"0")+":"+E(n,2,"0")},m:function o(r,e){if(r.date()<e.date())return-o(e,r);var a=12*(e.year()-r.year())+(e.month()-r.month()),n=r.clone().add(a,L),l=e-n<0,h=r.clone().add(a+(l?-1:1),L);return+(-(a+(e-n)/(l?n-h:h-n))||0)},a:function(o){return o<0?Math.ceil(o)||0:Math.floor(o)},p:function(o){return{M:L,y:Y,w:O,d:N,D:I,h:x,m:A,s:z,ms:S,Q:H}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(o){return o===void 0}},G="en",m={};m[G]=st;var c="$isDayjsObject",i=function(o){return o instanceof w||!(!o||!o[c])},f=function o(r,e,a){var n;if(!r)return G;if(typeof r=="string"){var l=r.toLowerCase();m[l]&&(n=l),e&&(m[l]=e,n=l);var h=r.split("-");if(!n&&h.length>1)return o(h[0])}else{var p=r.name;m[p]=r,n=p}return!a&&n&&(G=n),n||!a&&G},d=function(o,r){if(i(o))return o.clone();var e=typeof r=="object"?r:{};return e.date=o,e.args=arguments,new w(e)},u=q;u.l=f,u.i=i,u.w=function(o,r){return d(o,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var w=function(){function o(e){this.$L=f(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[c]=!0}var r=o.prototype;return r.parse=function(e){this.$d=function(a){var n=a.date,l=a.utc;if(n===null)return new Date(NaN);if(u.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var h=n.match(K);if(h){var p=h[2]-1||0,v=(h[7]||"0").substring(0,3);return l?new Date(Date.UTC(h[1],p,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)):new Date(h[1],p,h[3]||1,h[4]||0,h[5]||0,h[6]||0,v)}}return new Date(n)}(e),this.init()},r.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},r.$utils=function(){return u},r.isValid=function(){return this.$d.toString()!==F},r.isSame=function(e,a){var n=d(e);return this.startOf(a)<=n&&n<=this.endOf(a)},r.isAfter=function(e,a){return d(e)<this.startOf(a)},r.isBefore=function(e,a){return this.endOf(a)<d(e)},r.$g=function(e,a,n){return u.u(e)?this[a]:this.set(n,e)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(e,a){var n=this,l=!!u.u(a)||a,h=u.p(e),p=function(U,T){var W=u.w(n.$u?Date.UTC(n.$y,T,U):new Date(n.$y,T,U),n);return l?W:W.endOf(N)},v=function(U,T){return u.w(n.toDate()[U].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(T)),n)},$=this.$W,C=this.$M,Z=this.$D,B="set"+(this.$u?"UTC":"");switch(h){case Y:return l?p(1,0):p(31,11);case L:return l?p(1,C):p(0,C+1);case O:var Q=this.$locale().weekStart||0,P=($<Q?$+7:$)-Q;return p(l?Z-P:Z+(6-P),C);case N:case I:return v(B+"Hours",0);case x:return v(B+"Minutes",1);case A:return v(B+"Seconds",2);case z:return v(B+"Milliseconds",3);default:return this.clone()}},r.endOf=function(e){return this.startOf(e,!1)},r.$set=function(e,a){var n,l=u.p(e),h="set"+(this.$u?"UTC":""),p=(n={},n[N]=h+"Date",n[I]=h+"Date",n[L]=h+"Month",n[Y]=h+"FullYear",n[x]=h+"Hours",n[A]=h+"Minutes",n[z]=h+"Seconds",n[S]=h+"Milliseconds",n)[l],v=l===N?this.$D+(a-this.$W):a;if(l===L||l===Y){var $=this.clone().set(I,1);$.$d[p](v),$.init(),this.$d=$.set(I,Math.min(this.$D,$.daysInMonth())).$d}else p&&this.$d[p](v);return this.init(),this},r.set=function(e,a){return this.clone().$set(e,a)},r.get=function(e){return this[u.p(e)]()},r.add=function(e,a){var n,l=this;e=Number(e);var h=u.p(a),p=function(C){var Z=d(l);return u.w(Z.date(Z.date()+Math.round(C*e)),l)};if(h===L)return this.set(L,this.$M+e);if(h===Y)return this.set(Y,this.$y+e);if(h===N)return p(1);if(h===O)return p(7);var v=(n={},n[A]=g,n[x]=D,n[z]=b,n)[h]||1,$=this.$d.getTime()+e*v;return u.w($,this)},r.subtract=function(e,a){return this.add(-1*e,a)},r.format=function(e){var a=this,n=this.$locale();if(!this.isValid())return n.invalidDate||F;var l=e||"YYYY-MM-DDTHH:mm:ssZ",h=u.z(this),p=this.$H,v=this.$m,$=this.$M,C=n.weekdays,Z=n.months,B=n.meridiem,Q=function(T,W,_,tt){return T&&(T[W]||T(a,l))||_[W].slice(0,tt)},P=function(T){return u.s(p%12||12,T,"0")},U=B||function(T,W,_){var tt=T<12?"AM":"PM";return _?tt.toLowerCase():tt};return l.replace(R,function(T,W){return W||function(_){switch(_){case"YY":return String(a.$y).slice(-2);case"YYYY":return u.s(a.$y,4,"0");case"M":return $+1;case"MM":return u.s($+1,2,"0");case"MMM":return Q(n.monthsShort,$,Z,3);case"MMMM":return Q(Z,$);case"D":return a.$D;case"DD":return u.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return Q(n.weekdaysMin,a.$W,C,2);case"ddd":return Q(n.weekdaysShort,a.$W,C,3);case"dddd":return C[a.$W];case"H":return String(p);case"HH":return u.s(p,2,"0");case"h":return P(1);case"hh":return P(2);case"a":return U(p,v,!0);case"A":return U(p,v,!1);case"m":return String(v);case"mm":return u.s(v,2,"0");case"s":return String(a.$s);case"ss":return u.s(a.$s,2,"0");case"SSS":return u.s(a.$ms,3,"0");case"Z":return h}return null}(T)||h.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(e,a,n){var l,h=this,p=u.p(a),v=d(e),$=(v.utcOffset()-this.utcOffset())*g,C=this-v,Z=function(){return u.m(h,v)};switch(p){case Y:l=Z()/12;break;case L:l=Z();break;case H:l=Z()/3;break;case O:l=(C-$)/6048e5;break;case N:l=(C-$)/864e5;break;case x:l=C/D;break;case A:l=C/g;break;case z:l=C/b;break;default:l=C}return n?l:u.a(l)},r.daysInMonth=function(){return this.endOf(L).$D},r.$locale=function(){return m[this.$L]},r.locale=function(e,a){if(!e)return this.$L;var n=this.clone(),l=f(e,a,!0);return l&&(n.$L=l),n},r.clone=function(){return u.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},o}(),k=w.prototype;return d.prototype=k,[["$ms",S],["$s",z],["$m",A],["$H",x],["$W",N],["$M",L],["$y",Y],["$D",I]].forEach(function(o){k[o[1]]=function(r){return this.$g(r,o[0],o[1])}}),d.extend=function(o,r){return o.$i||(o(r,w,d),o.$i=!0),d},d.locale=f,d.isDayjs=i,d.unix=function(o){return d(1e3*o)},d.en=m[G],d.Ls=m,d.p={},d})})(yt);const et=it;var ot={},wt={get exports(){return ot},set exports(t){ot=t}};(function(t,y){(function(b,g){t.exports=g()})(dt,function(){var b,g,D=1e3,S=6e4,z=36e5,A=864e5,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N=31536e6,O=2628e6,L=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,H={years:N,months:O,days:A,hours:z,minutes:S,seconds:D,milliseconds:1,weeks:6048e5},Y=function(m){return m instanceof q},I=function(m,c,i){return new q(m,i,c.$l)},F=function(m){return g.p(m)+"s"},K=function(m){return m<0},R=function(m){return K(m)?Math.ceil(m):Math.floor(m)},st=function(m){return Math.abs(m)},E=function(m,c){return m?K(m)?{negative:!0,format:""+st(m)+c}:{negative:!1,format:""+m+c}:{negative:!1,format:""}},q=function(){function m(i,f,d){var u=this;if(this.$d={},this.$l=d,i===void 0&&(this.$ms=0,this.parseFromMilliseconds()),f)return I(i*H[F(f)],this);if(typeof i=="number")return this.$ms=i,this.parseFromMilliseconds(),this;if(typeof i=="object")return Object.keys(i).forEach(function(o){u.$d[F(o)]=i[o]}),this.calMilliseconds(),this;if(typeof i=="string"){var w=i.match(L);if(w){var k=w.slice(2).map(function(o){return o!=null?Number(o):0});return this.$d.years=k[0],this.$d.months=k[1],this.$d.weeks=k[2],this.$d.days=k[3],this.$d.hours=k[4],this.$d.minutes=k[5],this.$d.seconds=k[6],this.calMilliseconds(),this}}return this}var c=m.prototype;return c.calMilliseconds=function(){var i=this;this.$ms=Object.keys(this.$d).reduce(function(f,d){return f+(i.$d[d]||0)*H[d]},0)},c.parseFromMilliseconds=function(){var i=this.$ms;this.$d.years=R(i/N),i%=N,this.$d.months=R(i/O),i%=O,this.$d.days=R(i/A),i%=A,this.$d.hours=R(i/z),i%=z,this.$d.minutes=R(i/S),i%=S,this.$d.seconds=R(i/D),i%=D,this.$d.milliseconds=i},c.toISOString=function(){var i=E(this.$d.years,"Y"),f=E(this.$d.months,"M"),d=+this.$d.days||0;this.$d.weeks&&(d+=7*this.$d.weeks);var u=E(d,"D"),w=E(this.$d.hours,"H"),k=E(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var r=E(o,"S"),e=i.negative||f.negative||u.negative||w.negative||k.negative||r.negative,a=w.format||k.format||r.format?"T":"",n=(e?"-":"")+"P"+i.format+f.format+u.format+a+w.format+k.format+r.format;return n==="P"||n==="-P"?"P0D":n},c.toJSON=function(){return this.toISOString()},c.format=function(i){var f=i||"YYYY-MM-DDTHH:mm:ss",d={Y:this.$d.years,YY:g.s(this.$d.years,2,"0"),YYYY:g.s(this.$d.years,4,"0"),M:this.$d.months,MM:g.s(this.$d.months,2,"0"),D:this.$d.days,DD:g.s(this.$d.days,2,"0"),H:this.$d.hours,HH:g.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:g.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:g.s(this.$d.seconds,2,"0"),SSS:g.s(this.$d.milliseconds,3,"0")};return f.replace(x,function(u,w){return w||String(d[u])})},c.as=function(i){return this.$ms/H[F(i)]},c.get=function(i){var f=this.$ms,d=F(i);return d==="milliseconds"?f%=1e3:f=d==="weeks"?R(f/H[d]):this.$d[d],f||0},c.add=function(i,f,d){var u;return u=f?i*H[F(f)]:Y(i)?i.$ms:I(i,this).$ms,I(this.$ms+u*(d?-1:1),this)},c.subtract=function(i,f){return this.add(i,f,!0)},c.locale=function(i){var f=this.clone();return f.$l=i,f},c.clone=function(){return I(this.$ms,this)},c.humanize=function(i){return b().add(this.$ms,"ms").locale(this.$l).fromNow(!i)},c.valueOf=function(){return this.asMilliseconds()},c.milliseconds=function(){return this.get("milliseconds")},c.asMilliseconds=function(){return this.as("milliseconds")},c.seconds=function(){return this.get("seconds")},c.asSeconds=function(){return this.as("seconds")},c.minutes=function(){return this.get("minutes")},c.asMinutes=function(){return this.as("minutes")},c.hours=function(){return this.get("hours")},c.asHours=function(){return this.as("hours")},c.days=function(){return this.get("days")},c.asDays=function(){return this.as("days")},c.weeks=function(){return this.get("weeks")},c.asWeeks=function(){return this.as("weeks")},c.months=function(){return this.get("months")},c.asMonths=function(){return this.as("months")},c.years=function(){return this.get("years")},c.asYears=function(){return this.as("years")},m}(),G=function(m,c,i){return m.add(c.years()*i,"y").add(c.months()*i,"M").add(c.days()*i,"d").add(c.hours()*i,"h").add(c.minutes()*i,"m").add(c.seconds()*i,"s").add(c.milliseconds()*i,"ms")};return function(m,c,i){b=i,g=i().$utils(),i.duration=function(u,w){var k=i.locale();return I(u,{$l:k},w)},i.isDuration=Y;var f=c.prototype.add,d=c.prototype.subtract;c.prototype.add=function(u,w){return Y(u)?G(this,u,1):f.bind(this)(u,w)},c.prototype.subtract=function(u,w){return Y(u)?G(this,u,-1):d.bind(this)(u,w)}}})})(wt);const $t=ot;et.extend($t);const zt=(t,y=new Date)=>{let b=0,g=0,D=0;return y.getFullYear()!==t.getFullYear()?(D=y.getMonth(),g=(y.getFullYear()-t.getFullYear()-1)*12,b=12-t.getMonth()):b=y.getMonth()-t.getMonth(),b+g+D+2},kt=t=>["January","February","March","April","May","June","July","August","September","October","November","December"][t],Ct=(t,y)=>`${t} | ${y}`;function Jt(t,y=new Date(Date.now()+1e3*60*60*24)){const b=et(t),g=et(y),D=et.duration(g.diff(b));let S=0,z="day";return D.as("days")<=7?(z="day",S=D.as("days")):D.as("months")<=1?(z="week",S=D.as("weeks")):D.as("years")<=1?(z="month",S=D.as("months"),y.getMonth()>=4&&(S+=1)):(z="year",S=D.as("years")),S=Math.trunc(S),`${Math.trunc(S)} ${z}${S>1?"s":""}`}var V=(t=>(t.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",t.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",t.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",t.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",t.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",t.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",t.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",t.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",t.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",t.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",t.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",t.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",t.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",t.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",t.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",t.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",t.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",t.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",t.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",t.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",t))(V||{});const Tt="Slick template with Svelte",Lt={home:"Home",personal:"Projects",career:"Experiences",resume:"Resume",skills:"Skills",Education:"Education"},Yt=t=>{switch(t){case j.GitHub:return V.GitHub;case j.Linkedin:return V.LinkedIn;case j.StackOverflow:return V.StackOverflow;case j.Facebook:return V.Facebook;case j.Email:return V.Email;case j.Twitter:return V.Twitter;case j.Youtube:return V.Youtube}},Nt={title:"Home",name:"Ryan",lastName:"Zhang",description:`Hey, nice to meet you! I'm Ryan, a second year Computer Science student at McMaster University. I'm passionate about anything tech - I would love to talk about anything from the software that lets computers see to the hardware that makes it possible. Besides software development, studying, or trying out new food, there's not much I enjoy more than getting to know more people and having great interactions with others.

I'm constantly learning and growing - trying to find new, better solutions and develop as a professional.`,links:[{platform:j.GitHub,link:"https://github.com/Ryan-Zhang-J3"},{platform:j.Linkedin,link:"https://www.linkedin.com/in/ryan-zhang-4b2631218/"},{platform:j.Email,link:"ryan.zhang.formal@gmail.com"}]},It={title:"Projects",items:vt},Zt={title:"Experiences",items:Mt},jt={title:"Skills",items:ht},At={title:"Resumé",item:"Ryan_Resume_2023.pdf"},Et={title:"Search"},Rt={items:pt,title:"Education"};export{Rt as E,Nt as H,V as I,ht as M,Lt as N,It as P,At as R,Et as S,Tt as T,at as a,Yt as b,Jt as c,kt as d,Zt as e,Mt as f,St as g,dt as h,zt as i,vt as j,jt as k,Dt as o,ut as t,Ct as u};
