import{s as u,n as c}from"./scheduler.D2DHjgeC.js";import{S as d,i as x,q as f,f as p,d as o,r as g,e as v,u as y,c as b,a as k,v as S,m as q,w as N}from"./index.6zuvowMu.js";import{e as _}from"./each.D6YF6ztN.js";function h(r,a,n){const t=r.slice();return t[1]=a[n],t[3]=n,t}function m(r){let a,n=r[1]+"",t;return{c(){a=v("span"),t=y(n)},l(e){a=b(e,"SPAN",{});var s=k(a);t=S(s,n),s.forEach(o)},m(e,s){p(e,a,s),q(a,t)},p(e,s){s&1&&n!==(n=e[1]+"")&&N(t,n)},d(e){e&&o(a)}}}function T(r){let a,n=_(r[0].split("")),t=[];for(let e=0;e<n.length;e+=1)t[e]=m(h(r,n,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();a=f()},l(e){for(let s=0;s<t.length;s+=1)t[s].l(e);a=f()},m(e,s){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,s);p(e,a,s)},p(e,[s]){if(s&1){n=_(e[0].split(""));let l;for(l=0;l<n.length;l+=1){const i=h(e,n,l);t[l]?t[l].p(i,s):(t[l]=m(i),t[l].c(),t[l].m(a.parentNode,a))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},i:c,o:c,d(e){e&&o(a),g(t,e)}}}function w(r,a,n){let{text:t=""}=a;return r.$$set=e=>{"text"in e&&n(0,t=e.text)},[t]}class O extends d{constructor(a){super(),x(this,a,w,T,u,{text:0})}}export{O as T};