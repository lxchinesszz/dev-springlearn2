import{s as Ht,u as W,c as $,r as Me,i as Y,n as Ne,d as dt,h as pt,p as Se,a as q,w as ne,e as ht,m as fe,b as de,f as mt,t as Dt,g as gt,j as vt,o as yt,k as Vt,l as qt}from"./arco.a227f52f.js";import{i as Gt}from"./chart.ee63dc06.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const J=typeof window<"u";function Qt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function Pe(e,t){const n={};for(const r in t){const o=t[r];n[r]=H(o)?o.map(e):e(o)}return n}const ce=()=>{},H=Array.isArray,Ut=/\/$/,zt=e=>e.replace(Ut,"");function _e(e,t,n="/"){let r,o={},c="",d="";const p=t.indexOf("#");let i=t.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(r=t.slice(0,i),c=t.slice(i+1,p>-1?p:t.length),o=e(c)),p>-1&&(r=r||t.slice(0,p),d=t.slice(p,t.length)),r=Yt(r!=null?r:t,n),{fullPath:r+(c&&"?")+c+d,path:r,query:o,hash:d}}function Ft(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ge(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Kt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&ee(t.matched[r],n.matched[o])&&Et(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Et(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Wt(e[n],t[n]))return!1;return!0}function Wt(e,t){return H(e)?Qe(e,t):H(t)?Qe(t,e):e===t}function Qe(e,t){return H(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Yt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,c,d;for(c=0;c<r.length;c++)if(d=r[c],d!==".")if(d==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(c-(c===r.length?1:0)).join("/")}var ue;(function(e){e.pop="pop",e.push="push"})(ue||(ue={}));var ie;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ie||(ie={}));function Xt(e){if(!e)if(J){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zt(e)}const Zt=/^[^#]+#/;function Jt(e,t){return e.replace(Zt,"#")+t}function en(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const he=()=>({left:window.pageXOffset,top:window.pageYOffset});function tn(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=en(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ue(e,t){return(history.state?history.state.position-t:-1)+e}const Ce=new Map;function nn(e,t){Ce.set(e,t)}function rn(e){const t=Ce.get(e);return Ce.delete(e),t}let on=()=>location.protocol+"//"+location.host;function Rt(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let p=o.includes(e.slice(c))?e.slice(c).length:1,i=o.slice(p);return i[0]!=="/"&&(i="/"+i),Ge(i,"")}return Ge(n,e)+r+o}function sn(e,t,n,r){let o=[],c=[],d=null;const p=({state:f})=>{const m=Rt(e,location),E=n.value,C=t.value;let R=0;if(f){if(n.value=m,t.value=f,d&&d===E){d=null;return}R=C?f.position-C.position:0}else r(m);o.forEach(y=>{y(n.value,E,{delta:R,type:ue.pop,direction:R?R>0?ie.forward:ie.back:ie.unknown})})};function i(){d=n.value}function a(f){o.push(f);const m=()=>{const E=o.indexOf(f);E>-1&&o.splice(E,1)};return c.push(m),m}function s(){const{history:f}=window;!f.state||f.replaceState(P({},f.state,{scroll:he()}),"")}function l(){for(const f of c)f();c=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",s),{pauseListeners:i,listen:a,destroy:l}}function ze(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?he():null}}function cn(e){const{history:t,location:n}=window,r={value:Rt(e,n)},o={value:t.state};o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(i,a,s){const l=e.indexOf("#"),f=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+i:on()+e+i;try{t[s?"replaceState":"pushState"](a,"",f),o.value=a}catch(m){console.error(m),n[s?"replace":"assign"](f)}}function d(i,a){const s=P({},t.state,ze(o.value.back,i,o.value.forward,!0),a,{position:o.value.position});c(i,s,!0),r.value=i}function p(i,a){const s=P({},o.value,t.state,{forward:i,scroll:he()});c(s.current,s,!0);const l=P({},ze(r.value,i,null),{position:s.position+1},a);c(i,l,!1),r.value=i}return{location:r,state:o,push:p,replace:d}}function pr(e){e=Xt(e);const t=cn(e),n=sn(e,t.state,t.location,t.replace);function r(c,d=!0){d||n.pauseListeners(),history.go(c)}const o=P({location:"",base:e,go:r,createHref:Jt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function an(e){return typeof e=="string"||e&&typeof e=="object"}function bt(e){return typeof e=="string"||typeof e=="symbol"}const U={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wt=Symbol("");var Fe;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Fe||(Fe={}));function te(e,t){return P(new Error,{type:e,[wt]:!0},t)}function V(e,t){return e instanceof Error&&wt in e&&(t==null||!!(e.type&t))}const Ke="[^/]+?",un={sensitive:!1,strict:!1,start:!0,end:!0},ln=/[.+*?^${}()[\]/\\]/g;function fn(e,t){const n=P({},un,t),r=[];let o=n.start?"^":"";const c=[];for(const a of e){const s=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let l=0;l<a.length;l++){const f=a[l];let m=40+(n.sensitive?.25:0);if(f.type===0)l||(o+="/"),o+=f.value.replace(ln,"\\$&"),m+=40;else if(f.type===1){const{value:E,repeatable:C,optional:R,regexp:y}=f;c.push({name:E,repeatable:C,optional:R});const w=y||Ke;if(w!==Ke){m+=10;try{new RegExp(`(${w})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${E}" (${w}): `+T.message)}}let j=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;l||(j=R&&a.length<2?`(?:/${j})`:"/"+j),R&&(j+="?"),o+=j,m+=20,R&&(m+=-8),C&&(m+=-20),w===".*"&&(m+=-50)}s.push(m)}r.push(s)}if(n.strict&&n.end){const a=r.length-1;r[a][r[a].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function p(a){const s=a.match(d),l={};if(!s)return null;for(let f=1;f<s.length;f++){const m=s[f]||"",E=c[f-1];l[E.name]=m&&E.repeatable?m.split("/"):m}return l}function i(a){let s="",l=!1;for(const f of e){(!l||!s.endsWith("/"))&&(s+="/"),l=!1;for(const m of f)if(m.type===0)s+=m.value;else if(m.type===1){const{value:E,repeatable:C,optional:R}=m,y=E in a?a[E]:"";if(H(y)&&!C)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const w=H(y)?y.join("/"):y;if(!w)if(R)f.length<2&&(s.endsWith("/")?s=s.slice(0,-1):l=!0);else throw new Error(`Missing required param "${E}"`);s+=w}}return s||"/"}return{re:d,score:r,keys:c,parse:p,stringify:i}}function dn(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function pn(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const c=dn(r[n],o[n]);if(c)return c;n++}if(Math.abs(o.length-r.length)===1){if(We(r))return 1;if(We(o))return-1}return o.length-r.length}function We(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hn={type:0,value:""},mn=/[a-zA-Z0-9_]/;function gn(e){if(!e)return[[]];if(e==="/")return[[hn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${a}": ${m}`)}let n=0,r=n;const o=[];let c;function d(){c&&o.push(c),c=[]}let p=0,i,a="",s="";function l(){!a||(n===0?c.push({type:0,value:a}):n===1||n===2||n===3?(c.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:a,regexp:s,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),a="")}function f(){a+=i}for(;p<e.length;){if(i=e[p++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(a&&l(),d()):i===":"?(l(),n=1):f();break;case 4:f(),n=r;break;case 1:i==="("?n=2:mn.test(i)?f():(l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+i:n=3:s+=i;break;case 3:l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${a}"`),l(),d(),o}function vn(e,t,n){const r=fn(gn(e.path),n),o=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function yn(e,t){const n=[],r=new Map;t=Ze({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function c(s,l,f){const m=!f,E=En(s);E.aliasOf=f&&f.record;const C=Ze(t,s),R=[E];if("alias"in s){const j=typeof s.alias=="string"?[s.alias]:s.alias;for(const T of j)R.push(P({},E,{components:f?f.record.components:E.components,path:T,aliasOf:f?f.record:E}))}let y,w;for(const j of R){const{path:T}=j;if(l&&T[0]!=="/"){const x=l.record.path,L=x[x.length-1]==="/"?"":"/";j.path=l.record.path+(T&&L+T)}if(y=vn(j,l,C),f?f.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),m&&s.name&&!Xe(y)&&d(s.name)),E.children){const x=E.children;for(let L=0;L<x.length;L++)c(x[L],y,f&&f.children[L])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&i(y)}return w?()=>{d(w)}:ce}function d(s){if(bt(s)){const l=r.get(s);l&&(r.delete(s),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(s);l>-1&&(n.splice(l,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function p(){return n}function i(s){let l=0;for(;l<n.length&&pn(s,n[l])>=0&&(s.record.path!==n[l].record.path||!St(s,n[l]));)l++;n.splice(l,0,s),s.record.name&&!Xe(s)&&r.set(s.record.name,s)}function a(s,l){let f,m={},E,C;if("name"in s&&s.name){if(f=r.get(s.name),!f)throw te(1,{location:s});C=f.record.name,m=P(Ye(l.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),s.params&&Ye(s.params,f.keys.map(w=>w.name))),E=f.stringify(m)}else if("path"in s)E=s.path,f=n.find(w=>w.re.test(E)),f&&(m=f.parse(E),C=f.record.name);else{if(f=l.name?r.get(l.name):n.find(w=>w.re.test(l.path)),!f)throw te(1,{location:s,currentLocation:l});C=f.record.name,m=P({},l.params,s.params),E=f.stringify(m)}const R=[];let y=f;for(;y;)R.unshift(y.record),y=y.parent;return{name:C,path:E,params:m,matched:R,meta:bn(R)}}return e.forEach(s=>c(s)),{addRoute:c,resolve:a,removeRoute:d,getRoutes:p,getRecordMatcher:o}}function Ye(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function En(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Rn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Rn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Xe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bn(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Ze(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function St(e,t){return t.children.some(n=>n===e||St(e,n))}const Pt=/#/g,wn=/&/g,Sn=/\//g,Pn=/=/g,_n=/\?/g,_t=/\+/g,On=/%5B/g,Cn=/%5D/g,Ot=/%5E/g,kn=/%60/g,Ct=/%7B/g,An=/%7C/g,kt=/%7D/g,In=/%20/g;function $e(e){return encodeURI(""+e).replace(An,"|").replace(On,"[").replace(Cn,"]")}function xn(e){return $e(e).replace(Ct,"{").replace(kt,"}").replace(Ot,"^")}function ke(e){return $e(e).replace(_t,"%2B").replace(In,"+").replace(Pt,"%23").replace(wn,"%26").replace(kn,"`").replace(Ct,"{").replace(kt,"}").replace(Ot,"^")}function jn(e){return ke(e).replace(Pn,"%3D")}function Ln(e){return $e(e).replace(Pt,"%23").replace(_n,"%3F")}function Mn(e){return e==null?"":Ln(e).replace(Sn,"%2F")}function pe(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Nn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const c=r[o].replace(_t," "),d=c.indexOf("="),p=pe(d<0?c:c.slice(0,d)),i=d<0?null:pe(c.slice(d+1));if(p in t){let a=t[p];H(a)||(a=t[p]=[a]),a.push(i)}else t[p]=i}return t}function Je(e){let t="";for(let n in e){const r=e[n];if(n=jn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(H(r)?r.map(c=>c&&ke(c)):[r&&ke(r)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function $n(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=H(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Tn=Symbol(""),et=Symbol(""),me=Symbol(""),At=Symbol(""),Ae=Symbol("");function se(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function z(e,t,n,r,o){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,p)=>{const i=l=>{l===!1?p(te(4,{from:n,to:t})):l instanceof Error?p(l):an(l)?p(te(2,{from:t,to:l})):(c&&r.enterCallbacks[o]===c&&typeof l=="function"&&c.push(l),d())},a=e.call(r&&r.instances[o],t,n,i);let s=Promise.resolve(a);e.length<3&&(s=s.then(i)),s.catch(l=>p(l))})}function Oe(e,t,n,r){const o=[];for(const c of e)for(const d in c.components){let p=c.components[d];if(!(t!=="beforeRouteEnter"&&!c.instances[d]))if(Bn(p)){const a=(p.__vccOpts||p)[t];a&&o.push(z(a,n,r,c,d))}else{let i=p();o.push(()=>i.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${c.path}"`));const s=Qt(a)?a.default:a;c.components[d]=s;const f=(s.__vccOpts||s)[t];return f&&z(f,n,r,c,d)()}))}}return o}function Bn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tt(e){const t=Y(me),n=Y(At),r=$(()=>t.resolve(W(e.to))),o=$(()=>{const{matched:i}=r.value,{length:a}=i,s=i[a-1],l=n.matched;if(!s||!l.length)return-1;const f=l.findIndex(ee.bind(null,s));if(f>-1)return f;const m=nt(i[a-2]);return a>1&&nt(s)===m&&l[l.length-1].path!==m?l.findIndex(ee.bind(null,i[a-2])):f}),c=$(()=>o.value>-1&&qn(n.params,r.value.params)),d=$(()=>o.value>-1&&o.value===n.matched.length-1&&Et(n.params,r.value.params));function p(i={}){return Vn(i)?t[W(e.replace)?"replace":"push"](W(e.to)).catch(ce):Promise.resolve()}return{route:r,href:$(()=>r.value.href),isActive:c,isExactActive:d,navigate:p}}const Hn=dt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tt,setup(e,{slots:t}){const n=Me(tt(e)),{options:r}=Y(me),o=$(()=>({[rt(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rt(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&t.default(n);return e.custom?c:pt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},c)}}}),Dn=Hn;function Vn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!H(o)||o.length!==r.length||r.some((c,d)=>c!==o[d]))return!1}return!0}function nt(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const rt=(e,t,n)=>e!=null?e:t!=null?t:n,Gn=dt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(Ae),o=$(()=>e.route||r.value),c=Y(et,0),d=$(()=>{let a=W(c);const{matched:s}=o.value;let l;for(;(l=s[a])&&!l.components;)a++;return a}),p=$(()=>o.value.matched[d.value]);Se(et,$(()=>d.value+1)),Se(Tn,p),Se(Ae,o);const i=q();return ne(()=>[i.value,p.value,e.name],([a,s,l],[f,m,E])=>{s&&(s.instances[l]=a,m&&m!==s&&a&&a===f&&(s.leaveGuards.size||(s.leaveGuards=m.leaveGuards),s.updateGuards.size||(s.updateGuards=m.updateGuards))),a&&s&&(!m||!ee(s,m)||!f)&&(s.enterCallbacks[l]||[]).forEach(C=>C(a))},{flush:"post"}),()=>{const a=o.value,s=e.name,l=p.value,f=l&&l.components[s];if(!f)return ot(n.default,{Component:f,route:a});const m=l.props[s],E=m?m===!0?a.params:typeof m=="function"?m(a):m:null,R=pt(f,P({},E,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(l.instances[s]=null)},ref:i}));return ot(n.default,{Component:R,route:a})||R}}});function ot(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qn=Gn;function hr(e){const t=yn(e.routes,e),n=e.parseQuery||Nn,r=e.stringifyQuery||Je,o=e.history,c=se(),d=se(),p=se(),i=Ht(U);let a=U;J&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=Pe.bind(null,u=>""+u),l=Pe.bind(null,Mn),f=Pe.bind(null,pe);function m(u,g){let h,v;return bt(u)?(h=t.getRecordMatcher(u),v=g):v=u,t.addRoute(v,h)}function E(u){const g=t.getRecordMatcher(u);g&&t.removeRoute(g)}function C(){return t.getRoutes().map(u=>u.record)}function R(u){return!!t.getRecordMatcher(u)}function y(u,g){if(g=P({},g||i.value),typeof u=="string"){const b=_e(n,u,g.path),I=t.resolve({path:b.path},g),oe=o.createHref(b.fullPath);return P(b,I,{params:f(I.params),hash:pe(b.hash),redirectedFrom:void 0,href:oe})}let h;if("path"in u)h=P({},u,{path:_e(n,u.path,g.path).path});else{const b=P({},u.params);for(const I in b)b[I]==null&&delete b[I];h=P({},u,{params:l(u.params)}),g.params=l(g.params)}const v=t.resolve(h,g),O=u.hash||"";v.params=s(f(v.params));const A=Ft(r,P({},u,{hash:xn(O),path:v.path})),S=o.createHref(A);return P({fullPath:A,hash:O,query:r===Je?$n(u.query):u.query||{}},v,{redirectedFrom:void 0,href:S})}function w(u){return typeof u=="string"?_e(n,u,i.value.path):P({},u)}function j(u,g){if(a!==u)return te(8,{from:g,to:u})}function T(u){return _(u)}function x(u){return T(P(w(u),{replace:!0}))}function L(u){const g=u.matched[u.matched.length-1];if(g&&g.redirect){const{redirect:h}=g;let v=typeof h=="function"?h(u):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),P({query:u.query,hash:u.hash,params:"path"in v?{}:u.params},v)}}function _(u,g){const h=a=y(u),v=i.value,O=u.state,A=u.force,S=u.replace===!0,b=L(h);if(b)return _(P(w(b),{state:typeof b=="object"?P({},O,b.state):O,force:A,replace:S}),g||h);const I=h;I.redirectedFrom=g;let oe;return!A&&Kt(r,v,h)&&(oe=te(16,{to:I,from:v}),Ve(v,v,!0,!1)),(oe?Promise.resolve(oe):B(I,v)).catch(N=>V(N)?V(N,2)?N:Ee(N):ye(N,I,v)).then(N=>{if(N){if(V(N,2))return _(P({replace:S},w(N.to),{state:typeof N.to=="object"?P({},O,N.to.state):O,force:A}),g||I)}else N=Q(I,v,!0,S,O);return G(I,v,N),N})}function k(u,g){const h=j(u,g);return h?Promise.reject(h):Promise.resolve()}function B(u,g){let h;const[v,O,A]=Un(u,g);h=Oe(v.reverse(),"beforeRouteLeave",u,g);for(const b of v)b.leaveGuards.forEach(I=>{h.push(z(I,u,g))});const S=k.bind(null,u,g);return h.push(S),X(h).then(()=>{h=[];for(const b of c.list())h.push(z(b,u,g));return h.push(S),X(h)}).then(()=>{h=Oe(O,"beforeRouteUpdate",u,g);for(const b of O)b.updateGuards.forEach(I=>{h.push(z(I,u,g))});return h.push(S),X(h)}).then(()=>{h=[];for(const b of u.matched)if(b.beforeEnter&&!g.matched.includes(b))if(H(b.beforeEnter))for(const I of b.beforeEnter)h.push(z(I,u,g));else h.push(z(b.beforeEnter,u,g));return h.push(S),X(h)}).then(()=>(u.matched.forEach(b=>b.enterCallbacks={}),h=Oe(A,"beforeRouteEnter",u,g),h.push(S),X(h))).then(()=>{h=[];for(const b of d.list())h.push(z(b,u,g));return h.push(S),X(h)}).catch(b=>V(b,8)?b:Promise.reject(b))}function G(u,g,h){for(const v of p.list())v(u,g,h)}function Q(u,g,h,v,O){const A=j(u,g);if(A)return A;const S=g===U,b=J?history.state:{};h&&(v||S?o.replace(u.fullPath,P({scroll:S&&b&&b.scroll},O)):o.push(u.fullPath,O)),i.value=u,Ve(u,g,h,S),Ee()}let K;function ve(){K||(K=o.listen((u,g,h)=>{if(!qe.listening)return;const v=y(u),O=L(v);if(O){_(P(O,{replace:!0}),v).catch(ce);return}a=v;const A=i.value;J&&nn(Ue(A.fullPath,h.delta),he()),B(v,A).catch(S=>V(S,12)?S:V(S,2)?(_(S.to,v).then(b=>{V(b,20)&&!h.delta&&h.type===ue.pop&&o.go(-1,!1)}).catch(ce),Promise.reject()):(h.delta&&o.go(-h.delta,!1),ye(S,v,A))).then(S=>{S=S||Q(v,A,!1),S&&(h.delta&&!V(S,8)?o.go(-h.delta,!1):h.type===ue.pop&&V(S,20)&&o.go(-1,!1)),G(v,A,S)}).catch(ce)}))}let D=se(),M=se(),le;function ye(u,g,h){Ee(u);const v=M.list();return v.length?v.forEach(O=>O(u,g,h)):console.error(u),Promise.reject(u)}function Bt(){return le&&i.value!==U?Promise.resolve():new Promise((u,g)=>{D.add([u,g])})}function Ee(u){return le||(le=!u,ve(),D.list().forEach(([g,h])=>u?h(u):g()),D.reset()),u}function Ve(u,g,h,v){const{scrollBehavior:O}=e;if(!J||!O)return Promise.resolve();const A=!h&&rn(Ue(u.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return Ne().then(()=>O(u,g,A)).then(S=>S&&tn(S)).catch(S=>ye(S,u,g))}const Re=u=>o.go(u);let be;const we=new Set,qe={currentRoute:i,listening:!0,addRoute:m,removeRoute:E,hasRoute:R,getRoutes:C,resolve:y,options:e,push:T,replace:x,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:c.add,beforeResolve:d.add,afterEach:p.add,onError:M.add,isReady:Bt,install(u){const g=this;u.component("RouterLink",Dn),u.component("RouterView",Qn),u.config.globalProperties.$router=g,Object.defineProperty(u.config.globalProperties,"$route",{enumerable:!0,get:()=>W(i)}),J&&!be&&i.value===U&&(be=!0,T(o.location).catch(O=>{}));const h={};for(const O in U)h[O]=$(()=>i.value[O]);u.provide(me,g),u.provide(At,Me(h)),u.provide(Ae,i);const v=u.unmount;we.add(u),u.unmount=function(){we.delete(u),we.size<1&&(a=U,K&&K(),K=null,i.value=U,be=!1,le=!1),v()}}};return qe}function X(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Un(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let d=0;d<c;d++){const p=t.matched[d];p&&(e.matched.find(a=>ee(a,p))?r.push(p):n.push(p));const i=e.matched[d];i&&(t.matched.find(a=>ee(a,i))||o.push(i))}return[n,r,o]}function mr(){return Y(me)}/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let It;const ge=e=>It=e,xt=Symbol();function Ie(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ae;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ae||(ae={}));function gr(){const e=ht(!0),t=e.run(()=>q({}));let n=[],r=[];const o=fe({install(c){ge(o),o._a=c,c.provide(xt,o),c.config.globalProperties.$pinia=o,r.forEach(d=>n.push(d)),r=[]},use(c){return!this._a&&!Gt?r.push(c):n.push(c),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const jt=()=>{};function st(e,t,n,r=jt){e.push(t);const o=()=>{const c=e.indexOf(t);c>-1&&(e.splice(c,1),r())};return!n&&vt()&&yt(o),o}function Z(e,...t){e.slice().forEach(n=>{n(...t)})}function xe(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];Ie(o)&&Ie(r)&&e.hasOwnProperty(n)&&!de(r)&&!mt(r)?e[n]=xe(o,r):e[n]=r}return e}const zn=Symbol();function Fn(e){return!Ie(e)||!e.hasOwnProperty(zn)}const{assign:F}=Object;function Kn(e){return!!(de(e)&&e.effect)}function Wn(e,t,n,r){const{state:o,actions:c,getters:d}=t,p=n.state.value[e];let i;function a(){p||(n.state.value[e]=o?o():{});const s=Vt(n.state.value[e]);return F(s,c,Object.keys(d||{}).reduce((l,f)=>(l[f]=fe($(()=>{ge(n);const m=n._s.get(e);return d[f].call(m,m)})),l),{}))}return i=Lt(e,a,t,n,r,!0),i.$reset=function(){const l=o?o():{};this.$patch(f=>{F(f,l)})},i}function Lt(e,t,n={},r,o,c){let d;const p=F({actions:{}},n),i={deep:!0};let a,s,l=fe([]),f=fe([]),m;const E=r.state.value[e];!c&&!E&&(r.state.value[e]={}),q({});let C;function R(_){let k;a=s=!1,typeof _=="function"?(_(r.state.value[e]),k={type:ae.patchFunction,storeId:e,events:m}):(xe(r.state.value[e],_),k={type:ae.patchObject,payload:_,storeId:e,events:m});const B=C=Symbol();Ne().then(()=>{C===B&&(a=!0)}),s=!0,Z(l,k,r.state.value[e])}const y=jt;function w(){d.stop(),l=[],f=[],r._s.delete(e)}function j(_,k){return function(){ge(r);const B=Array.from(arguments),G=[],Q=[];function K(M){G.push(M)}function ve(M){Q.push(M)}Z(f,{args:B,name:_,store:x,after:K,onError:ve});let D;try{D=k.apply(this&&this.$id===e?this:x,B)}catch(M){throw Z(Q,M),M}return D instanceof Promise?D.then(M=>(Z(G,M),M)).catch(M=>(Z(Q,M),Promise.reject(M))):(Z(G,D),D)}}const T={_p:r,$id:e,$onAction:st.bind(null,f),$patch:R,$reset:y,$subscribe(_,k={}){const B=st(l,_,k.detached,()=>G()),G=d.run(()=>ne(()=>r.state.value[e],Q=>{(k.flush==="sync"?s:a)&&_({storeId:e,type:ae.direct,events:m},Q)},F({},i,k)));return B},$dispose:w},x=Me(T);r._s.set(e,x);const L=r._e.run(()=>(d=ht(),d.run(()=>t())));for(const _ in L){const k=L[_];if(de(k)&&!Kn(k)||mt(k))c||(E&&Fn(k)&&(de(k)?k.value=E[_]:xe(k,E[_])),r.state.value[e][_]=k);else if(typeof k=="function"){const B=j(_,k);L[_]=B,p.actions[_]=k}}return F(x,L),F(Dt(x),L),Object.defineProperty(x,"$state",{get:()=>r.state.value[e],set:_=>{R(k=>{F(k,_)})}}),r._p.forEach(_=>{F(x,d.run(()=>_({store:x,app:r._a,pinia:r,options:p})))}),E&&c&&n.hydrate&&n.hydrate(x.$state,E),a=!0,s=!0,x}function vr(e,t,n){let r,o;const c=typeof t=="function";typeof e=="string"?(r=e,o=c?n:t):(o=e,r=e.id);function d(p,i){const a=gt();return p=p||a&&Y(xt),p&&ge(p),p=It,p._s.has(r)||(c?Lt(r,t,o,p):Wn(r,o,p)),p._s.get(r)}return d.$id=r,d}var ct;const re=typeof window<"u",it=e=>typeof e=="function",Te=e=>typeof e=="string",Yn=()=>{};re&&((ct=window==null?void 0:window.navigator)==null?void 0:ct.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Be(e){return typeof e=="function"?e():W(e)}function Xn(e){return e}function He(e){return vt()?(yt(e),!0):!1}function Mt(e){return typeof e=="function"?$(e):q(e)}function Zn(e,t=!0){gt()?qt(e):t?e():Ne(e)}function Jn(e,t,n={}){const{immediate:r=!0}=n,o=q(!1);let c=null;function d(){c&&(clearTimeout(c),c=null)}function p(){o.value=!1,d()}function i(...a){d(),o.value=!0,c=setTimeout(()=>{o.value=!1,c=null,e(...a)},Be(t))}return r&&(o.value=!0,re&&i()),He(p),{isPending:o,start:i,stop:p}}function Nt(e){var t;const n=Be(e);return(t=n==null?void 0:n.$el)!=null?t:n}const $t=re?window:void 0,Tt=re?window.document:void 0,er=re?window.navigator:void 0;re&&window.location;function tr(...e){let t,n,r,o;if(Te(e[0])||Array.isArray(e[0])?([n,r,o]=e,t=$t):[t,n,r,o]=e,!t)return Yn;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const c=[],d=()=>{c.forEach(s=>s()),c.length=0},p=(s,l,f)=>(s.addEventListener(l,f,o),()=>s.removeEventListener(l,f,o)),i=ne(()=>Nt(t),s=>{d(),s&&c.push(...n.flatMap(l=>r.map(f=>p(s,l,f))))},{immediate:!0,flush:"post"}),a=()=>{i(),d()};return He(a),a}function De(e,t=!1){const n=q(),r=()=>n.value=Boolean(e());return r(),Zn(r,t),n}function yr(e={}){const{navigator:t=er,read:n=!1,source:r,copiedDuring:o=1500,legacy:c=!1}=e,d=["copy","cut"],p=De(()=>t&&"clipboard"in t),i=$(()=>p.value||c),a=q(""),s=q(!1),l=Jn(()=>s.value=!1,o);function f(){p.value?t.clipboard.readText().then(R=>{a.value=R}):a.value=C()}if(i.value&&n)for(const R of d)tr(R,f);async function m(R=Be(r)){i.value&&R!=null&&(p.value?await t.clipboard.writeText(R):E(R),a.value=R,s.value=!0,l.start())}function E(R){const y=document.createElement("textarea");y.value=R!=null?R:"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function C(){var R,y,w;return(w=(y=(R=document==null?void 0:document.getSelection)==null?void 0:R.call(document))==null?void 0:y.toString())!=null?w:""}return{isSupported:i,text:a,copied:s,copy:m}}const je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Le="__vueuse_ssr_handlers__";je[Le]=je[Le]||{};je[Le];function Er(e={}){const{initialValue:t=""}=e,n=De(()=>typeof window<"u"&&"EyeDropper"in window),r=q(t);async function o(c){if(!n.value)return;const p=await new window.EyeDropper().open(c);return r.value=p.sRGBHex,p}return{isSupported:n,sRGBHex:r,open:o}}function Rr(e=null,t={}){const{baseUrl:n="",rel:r="icon",document:o=Tt}=t,c=Mt(e),d=p=>{o==null||o.head.querySelectorAll(`link[rel*="${r}"]`).forEach(i=>i.href=`${n}${p}`)};return ne(c,(p,i)=>{Te(p)&&p!==i&&d(p)},{immediate:!0}),c}var at=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,rr=Object.prototype.propertyIsEnumerable,or=(e,t)=>{var n={};for(var r in e)nr.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&at)for(var r of at(e))t.indexOf(r)<0&&rr.call(e,r)&&(n[r]=e[r]);return n};function sr(e,t,n={}){const r=n,{window:o=$t}=r,c=or(r,["window"]);let d;const p=De(()=>o&&"MutationObserver"in o),i=()=>{d&&(d.disconnect(),d=void 0)},a=ne(()=>Nt(e),l=>{i(),p.value&&o&&l&&(d=new MutationObserver(t),d.observe(l,c))},{immediate:!0}),s=()=>{i(),a()};return He(s),{isSupported:p,stop:s}}var ut;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ut||(ut={}));function br(e=null,t={}){var n,r;const{document:o=Tt}=t,c=Mt((n=e!=null?e:o==null?void 0:o.title)!=null?n:null),d=e&&it(e);function p(i){if(!("titleTemplate"in t))return i;const a=t.titleTemplate||"%s";return it(a)?a(i):W(a).replace(/%s/g,i)}return ne(c,(i,a)=>{i!==a&&o&&(o.title=p(Te(i)?i:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&o&&!d&&sr((r=o.head)==null?void 0:r.querySelector("title"),()=>{o&&o.title!==c.value&&(c.value=p(o.title))},{childList:!0}),c}var cr=Object.defineProperty,lt=Object.getOwnPropertySymbols,ir=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,ft=(e,t,n)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ur=(e,t)=>{for(var n in t||(t={}))ir.call(t,n)&&ft(e,n,t[n]);if(lt)for(var n of lt(t))ar.call(t,n)&&ft(e,n,t[n]);return e};const lr={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ur({linear:Xn},lr);export{pr as a,gr as b,hr as c,vr as d,Er as e,yr as f,mr as g,br as h,Rr as u};
