import{s as Ae,a as ke,n as Ve,r as De}from"../chunks/scheduler.D2DHjgeC.js";import{S as He,i as Be,e as c,g as L,k as T,u as ye,c as u,a as _,h as F,l as N,d as p,v as xe,b as f,s as Me,f as de,m as l,n as C,w as Re,t as O,o as P,p as I,j as me,D as R,E as ve}from"../chunks/index.6zuvowMu.js";import{T as D}from"../chunks/TextObfuscator.TiS8Gupb.js";function Ue(o){let r,a,m,n,s,h,e,t,i,$,M=o[2].split(";")[0]+"",U,j,b,S,w;return t=new D({props:{text:o[1]}}),S=new D({props:{text:"Play"}}),{c(){r=c("div"),a=c("img"),n=L(),s=c("div"),h=c("span"),e=c("h4"),T(t.$$.fragment),i=L(),$=c("span"),U=ye(M),j=L(),b=c("a"),T(S.$$.fragment),this.h()},l(g){r=u(g,"DIV",{style:!0,class:!0,id:!0});var x=_(r);a=u(x,"IMG",{class:!0,src:!0,loading:!0,alt:!0}),n=F(x),s=u(x,"DIV",{class:!0});var v=_(s);h=u(v,"SPAN",{class:!0});var E=_(h);e=u(E,"H4",{class:!0});var le=_(e);N(t.$$.fragment,le),le.forEach(p),E.forEach(p),i=F(v),$=u(v,"SPAN",{class:!0});var k=_($);U=xe(k,M),k.forEach(p),j=F(v),b=u(v,"A",{href:!0,class:!0});var ie=_(b);N(S.$$.fragment,ie),ie.forEach(p),v.forEach(p),x.forEach(p),this.h()},h(){f(a,"class","w-14 h-14 m-2"),ke(a.src,m=o[0])||f(a,"src",m),f(a,"loading","lazy"),f(a,"alt","Icon"),f(e,"class","title text-md font-medium"),f(h,"class","flex flex-row align-middle items-center"),f($,"class","tag px-2 py-0.5 bg-blue-800 mb-2 mt-1 text-blue rounded-full text-sm font-mono w-fit"),f(b,"href",o[4]),f(b,"class","card-link btn hero-btn !py-1 !px-6 !m-0 !mt-2"),f(s,"class","flex flex-col"),Me(r,"max-width","460px"),f(r,"class","card"),f(r,"id",o[3])},m(g,x){de(g,r,x),l(r,a),l(r,n),l(r,s),l(s,h),l(h,e),C(t,e,null),l(s,i),l(s,$),l($,U),l(s,j),l(s,b),C(S,b,null),w=!0},p(g,[x]){(!w||x&1&&!ke(a.src,m=g[0]))&&f(a,"src",m);const v={};x&2&&(v.text=g[1]),t.$set(v),(!w||x&4)&&M!==(M=g[2].split(";")[0]+"")&&Re(U,M),(!w||x&16)&&f(b,"href",g[4]),(!w||x&8)&&f(r,"id",g[3])},i(g){w||(O(t.$$.fragment,g),O(S.$$.fragment,g),w=!0)},o(g){P(t.$$.fragment,g),P(S.$$.fragment,g),w=!1},d(g){g&&p(r),I(t),I(S)}}}function ze(o,r,a){let{img:m="/assets/missing.png"}=r,{title:n="Placeholder"}=r,{data:s="html;000;nes"}=r,{idName:h=""}=r,e="#";return s.split(";")[0]=="html"?e=`assets/handlers/${s.split(";")[0]}.html`:s.split(";")[0]=="flash"?e=`assets/handlers/${s.split(";")[0]}.html#${s.split(";")[1]}`:s.split(";")[0]=="rom"&&(e=`assets/handlers/${s.split(";")[0]}.html#${s.split(";")[2]};${s.split(";")[1]}`),o.$$set=t=>{"img"in t&&a(0,m=t.img),"title"in t&&a(1,n=t.title),"data"in t&&a(2,s=t.data),"idName"in t&&a(3,h=t.idName)},[m,n,s,h,e]}class Ge extends He{constructor(r){super(),Be(this,r,ze,Ue,Ae,{img:0,title:1,data:2,idName:3})}}function $e(){let o,r,a,m,n,s,h,e,t=document.querySelector(".tagFilter").value||"All";for(o=document.getElementById("searchInput"),r=o.value.toUpperCase(),a=document.querySelector(".gcontainer").getElementsByTagName("div"),n=0;n<a.length;n++)m=a[n].querySelector("h4.title"),e=m.textContent||m.innerText,s=a[n].querySelector("span.tag"),h=s.textContent||s.innerText,e.toUpperCase().indexOf(r)>-1||h.toLowerCase()==r.toLowerCase()?t.toLowerCase()!="all"?h.toLowerCase()==t.toLowerCase()?a[n].style.display="":a[n].style.display="none":a[n].style.display="":a[n].style.display="none"}const Ye=async()=>{let r=await(await fetch("assets/assets.json")).json();var a=[];for(var m in r)a.push(m);for(let n=1;n<r.len+1;n++){if(!r[a[n]][0].type||r[a[n]][0].type!="pointer")throw new Error("Not a pointer");if(!r[a[n]][0].target)throw new Error("No url for pointer to follow");let h=await(await fetch("/assets/"+r[a[n]][0].target)).json();h[a[n]]!=null?r[a[n]]=h[a[n]]:r[a[n]]=h}return r},Je=()=>{let o={html:[],rom:{nes:[],snes:[],megadrive:[]},flash:{}},r=0;function a(m){return m.toLowerCase().split(" ").map(function(n){return n[0].toUpperCase()+n.substr(1)}).join(" ")}setTimeout(async()=>{o=await Ye(),r+=o.html.length;for(let e=0;e<o.html.length;e++){let i=document.querySelector("#template").cloneNode(!0);i.querySelector("img").addEventListener("error",()=>{i.querySelector("img").src="/assets/missing.png"}),i.querySelector(".title").innerText=o.html[e].name,i.querySelector(".tag").innerText="HTML",i.querySelector(".card-link").href=`/_x#${btoa(o.html[e].name)}||${btoa("/assets/handlers/html.html#"+o.html[e].id)}`,i.querySelector("img").src=`/assets/html/thumbs/${o.html[e].id}.jpg`,document.querySelector(".gcontainer").appendChild(i),i.id=""}r+=o.flash.length;for(let e=0;e<o.flash.length;e++){let i=document.querySelector("#template").cloneNode(!0);i.querySelector("img").addEventListener("error",()=>{i.querySelector("img").src="/assets/missing.png"}),i.querySelector(".title").innerText=o.flash[e].name,i.querySelector(".tag").innerText="Flash",i.querySelector(".card-link").href=`/_x#${btoa(o.flash[e].name)}||${btoa("/assets/handlers/flash.html#"+o.flash[e].id)}`,i.querySelector("img").src=`/assets/flash/thumbs/${o.flash[e].id.split(".")[0]}_flash.jpg`,document.querySelector(".gcontainer").appendChild(i),i.id=""}var m=["nes","snes","megadrive"],n=["NES","SNES","Megadrive"];for(let e=0;e<m.length;e++){r+=o.rom[m[e]].length;for(let t=0;t<o.rom[m[e]].length;t++){let $=document.querySelector("#template").cloneNode(!0);$.querySelector(".title").innerText=o.rom[m[e]][t].name,$.querySelector(".tag").innerText=`${n[e]}`,$.querySelector("img").src=`/assets/rom/thumbs/${o.rom[m[e]][t].id.split(".")[0]}_${m[e]}.jpg`,$.querySelector(".card-link").href=`/_x#${btoa(o.rom[m[e]][t].name)}||${btoa(`/assets/handlers/rom.html#${m[e]};${o.rom[m[e]][t].id}`)}`,$.querySelector("img").addEventListener("error",()=>{$.querySelector("img").src="/assets/missing.png"}),document.querySelector(".gcontainer").appendChild($),$.id=""}}var s=[];for(var h in o.yt_playables)s.push(h);r+=s.length;for(let e=0;e<s.length;e++){let i=document.querySelector("#template").cloneNode(!0);i.querySelector(".title").innerText=a(s[e].replaceAll("-"," ")),i.querySelector(".tag").innerText="Playable",i.querySelector("img").style.display="none",i.querySelector(".card-link").href=o.yt_playables[s[e]],i.querySelector(".card-link").target="_blank",document.querySelector(".gcontainer").appendChild(i),i.id=""}document.querySelector("#template").remove(),console.log(r),setTimeout(()=>{document.querySelector(".loadingOverlay").style.opacity=0,setTimeout(()=>{document.querySelector(".loadingOverlay").remove(),document.querySelector(".title span").classList.add("soonBold2")},350)},2e3)},33)};function Ke(o){let r,a,m,n,s,h,e,t,i,$,M,U,j,b,S,w,g,x,v,E,le,k,ie="Filter:",fe,y,A,Se="All",H,be="Emulators ----",z,W,G,X,Y,Z,B,qe="Other --------",J,ee,K,te,Q,re,pe,he,ge,se,ae,ce,_e,we;return s=new D({props:{text:"games"}}),S=new D({props:{text:"Games"}}),W=new D({props:{text:"NES"}}),X=new D({props:{text:"SNES"}}),Z=new D({props:{text:"Megadrive"}}),ee=new D({props:{text:"HTML"}}),te=new D({props:{text:"Flash"}}),re=new D({props:{text:"YT Playables"}}),ae=new Ge({props:{idName:"template"}}),{c(){r=c("div"),a=c("h2"),m=ye("Loading "),n=c("span"),T(s.$$.fragment),h=ye("..."),e=L(),t=c("div"),i=c("br"),$=c("br"),M=c("br"),U=L(),j=c("h1"),b=c("span"),T(S.$$.fragment),w=L(),g=c("br"),x=L(),v=c("div"),E=c("input"),le=L(),k=c("span"),k.textContent=ie,fe=L(),y=c("select"),A=c("option"),A.textContent=Se,H=c("option"),H.textContent=be,z=c("option"),T(W.$$.fragment),G=c("option"),T(X.$$.fragment),Y=c("option"),T(Z.$$.fragment),B=c("option"),B.textContent=qe,J=c("option"),T(ee.$$.fragment),K=c("option"),T(te.$$.fragment),Q=c("option"),T(re.$$.fragment),pe=L(),he=c("br"),ge=L(),se=c("div"),T(ae.$$.fragment),this.h()},l(d){r=u(d,"DIV",{class:!0});var ne=_(r);a=u(ne,"H2",{class:!0});var ue=_(a);m=xe(ue,"Loading "),n=u(ue,"SPAN",{class:!0});var Ee=_(n);N(s.$$.fragment,Ee),Ee.forEach(p),h=xe(ue,"..."),ue.forEach(p),ne.forEach(p),e=F(d),t=u(d,"DIV",{class:!0});var q=_(t);i=u(q,"BR",{}),$=u(q,"BR",{}),M=u(q,"BR",{}),U=F(q),j=u(q,"H1",{class:!0});var Te=_(j);b=u(Te,"SPAN",{});var Ne=_(b);N(S.$$.fragment,Ne),Ne.forEach(p),Te.forEach(p),w=F(q),g=u(q,"BR",{}),x=F(q),v=u(q,"DIV",{class:!0});var oe=_(v);E=u(oe,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),le=F(oe),k=u(oe,"SPAN",{class:!0,"data-svelte-h":!0}),me(k)!=="svelte-mnp55q"&&(k.textContent=ie),fe=F(oe),y=u(oe,"SELECT",{class:!0,placeholder:!0});var V=_(y);A=u(V,"OPTION",{"data-svelte-h":!0}),me(A)!=="svelte-1isdzz2"&&(A.textContent=Se),H=u(V,"OPTION",{"data-svelte-h":!0}),me(H)!=="svelte-1lq89p2"&&(H.textContent=be),z=u(V,"OPTION",{});var Ce=_(z);N(W.$$.fragment,Ce),Ce.forEach(p),G=u(V,"OPTION",{});var Oe=_(G);N(X.$$.fragment,Oe),Oe.forEach(p),Y=u(V,"OPTION",{});var Pe=_(Y);N(Z.$$.fragment,Pe),Pe.forEach(p),B=u(V,"OPTION",{"data-svelte-h":!0}),me(B)!=="svelte-70hv1c"&&(B.textContent=qe),J=u(V,"OPTION",{});var Ie=_(J);N(ee.$$.fragment,Ie),Ie.forEach(p),K=u(V,"OPTION",{});var Le=_(K);N(te.$$.fragment,Le),Le.forEach(p),Q=u(V,"OPTION",{});var Fe=_(Q);N(re.$$.fragment,Fe),Fe.forEach(p),V.forEach(p),oe.forEach(p),pe=F(q),he=u(q,"BR",{}),ge=F(q),se=u(q,"DIV",{class:!0});var je=_(se);N(ae.$$.fragment,je),je.forEach(p),q.forEach(p),this.h()},h(){f(n,"class","soonBold2"),f(a,"class","text-4xl"),f(r,"class","duration-300 loadingOverlay z-10 fixed top-0 left-0 px-2 w-full h-full backdrop-blur-lg bg-blue-900/30 flex flex-col justify-center items-center"),f(j,"class","text-4xl title text-center"),f(E,"type","search"),f(E,"id","searchInput"),f(E,"placeholder","Search"),f(E,"class","input"),f(k,"class","mr-1"),A.selected=!0,A.__value="All",R(A,A.__value),H.disabled=!0,H.__value="Emulators ----",R(H,H.__value),z.__value="NES",R(z,z.__value),G.__value="SNES",R(G,G.__value),Y.__value="Megadrive",R(Y,Y.__value),B.disabled=!0,B.__value="Other --------",R(B,B.__value),J.__value="HTML",R(J,J.__value),K.__value="Flash",R(K,K.__value),Q.__value="Playable",R(Q,Q.__value),f(y,"class","input hover:ring-green !py-1.5 tagFilter font-mono"),f(y,"placeholder","Filter by..."),f(v,"class","searchContainer w-full flex flex-row justify-center items-center"),f(se,"class","gcontainer mx-auto w-fit"),f(t,"class","px-2 w-full h-full")},m(d,ne){de(d,r,ne),l(r,a),l(a,m),l(a,n),C(s,n,null),l(a,h),de(d,e,ne),de(d,t,ne),l(t,i),l(t,$),l(t,M),l(t,U),l(t,j),l(j,b),C(S,b,null),l(t,w),l(t,g),l(t,x),l(t,v),l(v,E),l(v,le),l(v,k),l(v,fe),l(v,y),l(y,A),l(y,H),l(y,z),C(W,z,null),l(y,G),C(X,G,null),l(y,Y),C(Z,Y,null),l(y,B),l(y,J),C(ee,J,null),l(y,K),C(te,K,null),l(y,Q),C(re,Q,null),l(t,pe),l(t,he),l(t,ge),l(t,se),C(ae,se,null),ce=!0,_e||(we=[ve(E,"keyup",$e),ve(y,"change",$e),ve(y,"mouseleave",$e)],_e=!0)},p:Ve,i(d){ce||(O(s.$$.fragment,d),O(S.$$.fragment,d),O(W.$$.fragment,d),O(X.$$.fragment,d),O(Z.$$.fragment,d),O(ee.$$.fragment,d),O(te.$$.fragment,d),O(re.$$.fragment,d),O(ae.$$.fragment,d),ce=!0)},o(d){P(s.$$.fragment,d),P(S.$$.fragment,d),P(W.$$.fragment,d),P(X.$$.fragment,d),P(Z.$$.fragment,d),P(ee.$$.fragment,d),P(te.$$.fragment,d),P(re.$$.fragment,d),P(ae.$$.fragment,d),ce=!1},d(d){d&&(p(r),p(e),p(t)),I(s),I(S),I(W),I(X),I(Z),I(ee),I(te),I(re),I(ae),_e=!1,De(we)}}}function Qe(o){return Je(),[]}class et extends He{constructor(r){super(),Be(this,r,Qe,Ke,Ae,{})}}export{et as component};