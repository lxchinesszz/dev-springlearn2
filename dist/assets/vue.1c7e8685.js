import{s as Rt,u as ne,c as H,r as Ae,i as Q,n as Xe,d as Ze,h as Je,p as Ee,a as xe,w as et,e as tt,m as ae,g as Et,b as ue,f as nt,t as St,j as bt,o as Pt,k as wt}from"./arco.6c7ade2f.js";import{i as kt}from"./chart.c85f8732.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const X=typeof window<"u";function Ct(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function Se(e,t){const n={};for(const r in t){const s=t[r];n[r]=V(s)?s.map(e):e(s)}return n}const re=()=>{},V=Array.isArray,_t=/\/$/,Ot=e=>e.replace(_t,"");function be(e,t,n="/"){let r,s={},i="",h="";const d=t.indexOf("#");let a=t.indexOf("?");return d<a&&d>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,d>-1?d:t.length),s=e(i)),d>-1&&(r=r||t.slice(0,d),h=t.slice(d,t.length)),r=It(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+h,path:r,query:s,hash:h}}function At(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Me(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function xt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Z(t.matched[r],n.matched[s])&&rt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function rt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jt(e[n],t[n]))return!1;return!0}function jt(e,t){return V(e)?Ne(e,t):V(t)?Ne(t,e):e===t}function Ne(e,t){return V(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function It(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,i,h;for(i=0;i<r.length;i++)if(h=r[i],h!==".")if(h==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ce;(function(e){e.pop="pop",e.push="push"})(ce||(ce={}));var se;(function(e){e.back="back",e.forward="forward",e.unknown=""})(se||(se={}));function Lt(e){if(!e)if(X){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ot(e)}const Mt=/^[^#]+#/;function Nt(e,t){return e.replace(Mt,"#")+t}function $t(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fe=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ht(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=$t(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $e(e,t){return(history.state?history.state.position-t:-1)+e}const we=new Map;function Bt(e,t){we.set(e,t)}function Vt(e){const t=we.get(e);return we.delete(e),t}let qt=()=>location.protocol+"//"+location.host;function st(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let d=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(d);return a[0]!=="/"&&(a="/"+a),Me(a,"")}return Me(n,e)+r+s}function zt(e,t,n,r){let s=[],i=[],h=null;const d=({state:l})=>{const m=st(e,location),y=n.value,O=t.value;let k=0;if(l){if(n.value=m,t.value=l,h&&h===y){h=null;return}k=O?l.position-O.position:0}else r(m);s.forEach(E=>{E(n.value,y,{delta:k,type:ce.pop,direction:k?k>0?se.forward:se.back:se.unknown})})};function a(){h=n.value}function f(l){s.push(l);const m=()=>{const y=s.indexOf(l);y>-1&&s.splice(y,1)};return i.push(m),m}function o(){const{history:l}=window;!l.state||l.replaceState(P({},l.state,{scroll:fe()}),"")}function u(){for(const l of i)l();i=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",o),{pauseListeners:a,listen:f,destroy:u}}function He(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?fe():null}}function Tt(e){const{history:t,location:n}=window,r={value:st(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,f,o){const u=e.indexOf("#"),l=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+a:qt()+e+a;try{t[o?"replaceState":"pushState"](f,"",l),s.value=f}catch(m){console.error(m),n[o?"replace":"assign"](l)}}function h(a,f){const o=P({},t.state,He(s.value.back,a,s.value.forward,!0),f,{position:s.value.position});i(a,o,!0),r.value=a}function d(a,f){const o=P({},s.value,t.state,{forward:a,scroll:fe()});i(o.current,o,!0);const u=P({},He(r.value,a,null),{position:o.position+1},f);i(a,u,!1),r.value=a}return{location:r,state:s,push:d,replace:h}}function Mn(e){e=Lt(e);const t=Tt(e),n=zt(e,t.state,t.location,t.replace);function r(i,h=!0){h||n.pauseListeners(),history.go(i)}const s=P({location:"",base:e,go:r,createHref:Nt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Gt(e){return typeof e=="string"||e&&typeof e=="object"}function ot(e){return typeof e=="string"||typeof e=="symbol"}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ct=Symbol("");var Be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Be||(Be={}));function J(e,t){return P(new Error,{type:e,[ct]:!0},t)}function z(e,t){return e instanceof Error&&ct in e&&(t==null||!!(e.type&t))}const Ve="[^/]+?",Kt={sensitive:!1,strict:!1,start:!0,end:!0},Dt=/[.+*?^${}()[\]/\\]/g;function Ut(e,t){const n=P({},Kt,t),r=[];let s=n.start?"^":"";const i=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let u=0;u<f.length;u++){const l=f[u];let m=40+(n.sensitive?.25:0);if(l.type===0)u||(s+="/"),s+=l.value.replace(Dt,"\\$&"),m+=40;else if(l.type===1){const{value:y,repeatable:O,optional:k,regexp:E}=l;i.push({name:y,repeatable:O,optional:k});const S=E||Ve;if(S!==Ve){m+=10;try{new RegExp(`(${S})`)}catch($){throw new Error(`Invalid custom RegExp for param "${y}" (${S}): `+$.message)}}let I=O?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;u||(I=k&&f.length<2?`(?:/${I})`:"/"+I),k&&(I+="?"),s+=I,m+=20,k&&(m+=-8),O&&(m+=-20),S===".*"&&(m+=-50)}o.push(m)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const h=new RegExp(s,n.sensitive?"":"i");function d(f){const o=f.match(h),u={};if(!o)return null;for(let l=1;l<o.length;l++){const m=o[l]||"",y=i[l-1];u[y.name]=m&&y.repeatable?m.split("/"):m}return u}function a(f){let o="",u=!1;for(const l of e){(!u||!o.endsWith("/"))&&(o+="/"),u=!1;for(const m of l)if(m.type===0)o+=m.value;else if(m.type===1){const{value:y,repeatable:O,optional:k}=m,E=y in f?f[y]:"";if(V(E)&&!O)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const S=V(E)?E.join("/"):E;if(!S)if(k)l.length<2&&(o.endsWith("/")?o=o.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);o+=S}}return o||"/"}return{re:h,score:r,keys:i,parse:d,stringify:a}}function Ft(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Qt(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ft(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(qe(r))return 1;if(qe(s))return-1}return s.length-r.length}function qe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Wt={type:0,value:""},Yt=/[a-zA-Z0-9_]/;function Xt(e){if(!e)return[[]];if(e==="/")return[[Wt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const s=[];let i;function h(){i&&s.push(i),i=[]}let d=0,a,f="",o="";function u(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:o,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=a}for(;d<e.length;){if(a=e[d++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(f&&u(),h()):a===":"?(u(),n=1):l();break;case 4:l(),n=r;break;case 1:a==="("?n=2:Yt.test(a)?l():(u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&d--);break;case 2:a===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+a:n=3:o+=a;break;case 3:u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&d--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),u(),h(),s}function Zt(e,t,n){const r=Ut(Xt(e.path),n),s=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Jt(e,t){const n=[],r=new Map;t=Ge({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function i(o,u,l){const m=!l,y=en(o);y.aliasOf=l&&l.record;const O=Ge(t,o),k=[y];if("alias"in o){const I=typeof o.alias=="string"?[o.alias]:o.alias;for(const $ of I)k.push(P({},y,{components:l?l.record.components:y.components,path:$,aliasOf:l?l.record:y}))}let E,S;for(const I of k){const{path:$}=I;if(u&&$[0]!=="/"){const j=u.record.path,L=j[j.length-1]==="/"?"":"/";I.path=u.record.path+($&&L+$)}if(E=Zt(I,u,O),l?l.alias.push(E):(S=S||E,S!==E&&S.alias.push(E),m&&o.name&&!Te(E)&&h(o.name)),y.children){const j=y.children;for(let L=0;L<j.length;L++)i(j[L],E,l&&l.children[L])}l=l||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&a(E)}return S?()=>{h(S)}:re}function h(o){if(ot(o)){const u=r.get(o);u&&(r.delete(o),n.splice(n.indexOf(u),1),u.children.forEach(h),u.alias.forEach(h))}else{const u=n.indexOf(o);u>-1&&(n.splice(u,1),o.record.name&&r.delete(o.record.name),o.children.forEach(h),o.alias.forEach(h))}}function d(){return n}function a(o){let u=0;for(;u<n.length&&Qt(o,n[u])>=0&&(o.record.path!==n[u].record.path||!it(o,n[u]));)u++;n.splice(u,0,o),o.record.name&&!Te(o)&&r.set(o.record.name,o)}function f(o,u){let l,m={},y,O;if("name"in o&&o.name){if(l=r.get(o.name),!l)throw J(1,{location:o});O=l.record.name,m=P(ze(u.params,l.keys.filter(S=>!S.optional).map(S=>S.name)),o.params&&ze(o.params,l.keys.map(S=>S.name))),y=l.stringify(m)}else if("path"in o)y=o.path,l=n.find(S=>S.re.test(y)),l&&(m=l.parse(y),O=l.record.name);else{if(l=u.name?r.get(u.name):n.find(S=>S.re.test(u.path)),!l)throw J(1,{location:o,currentLocation:u});O=l.record.name,m=P({},u.params,o.params),y=l.stringify(m)}const k=[];let E=l;for(;E;)k.unshift(E.record),E=E.parent;return{name:O,path:y,params:m,matched:k,meta:nn(k)}}return e.forEach(o=>i(o)),{addRoute:i,resolve:f,removeRoute:h,getRoutes:d,getRecordMatcher:s}}function ze(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function en(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:tn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function tn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Te(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nn(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Ge(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function it(e,t){return t.children.some(n=>n===e||it(e,n))}const at=/#/g,rn=/&/g,sn=/\//g,on=/=/g,cn=/\?/g,ut=/\+/g,an=/%5B/g,un=/%5D/g,lt=/%5E/g,ln=/%60/g,ft=/%7B/g,fn=/%7C/g,ht=/%7D/g,hn=/%20/g;function je(e){return encodeURI(""+e).replace(fn,"|").replace(an,"[").replace(un,"]")}function dn(e){return je(e).replace(ft,"{").replace(ht,"}").replace(lt,"^")}function ke(e){return je(e).replace(ut,"%2B").replace(hn,"+").replace(at,"%23").replace(rn,"%26").replace(ln,"`").replace(ft,"{").replace(ht,"}").replace(lt,"^")}function pn(e){return ke(e).replace(on,"%3D")}function mn(e){return je(e).replace(at,"%23").replace(cn,"%3F")}function gn(e){return e==null?"":mn(e).replace(sn,"%2F")}function le(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function vn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ut," "),h=i.indexOf("="),d=le(h<0?i:i.slice(0,h)),a=h<0?null:le(i.slice(h+1));if(d in t){let f=t[d];V(f)||(f=t[d]=[f]),f.push(a)}else t[d]=a}return t}function Ke(e){let t="";for(let n in e){const r=e[n];if(n=pn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(V(r)?r.map(i=>i&&ke(i)):[r&&ke(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function yn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=V(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Rn=Symbol(""),De=Symbol(""),he=Symbol(""),dt=Symbol(""),Ce=Symbol("");function te(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function D(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((h,d)=>{const a=u=>{u===!1?d(J(4,{from:n,to:t})):u instanceof Error?d(u):Gt(u)?d(J(2,{from:t,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),h())},f=e.call(r&&r.instances[s],t,n,a);let o=Promise.resolve(f);e.length<3&&(o=o.then(a)),o.catch(u=>d(u))})}function Pe(e,t,n,r){const s=[];for(const i of e)for(const h in i.components){let d=i.components[h];if(!(t!=="beforeRouteEnter"&&!i.instances[h]))if(En(d)){const f=(d.__vccOpts||d)[t];f&&s.push(D(f,n,r,i,h))}else{let a=d();s.push(()=>a.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${i.path}"`));const o=Ct(f)?f.default:f;i.components[h]=o;const l=(o.__vccOpts||o)[t];return l&&D(l,n,r,i,h)()}))}}return s}function En(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ue(e){const t=Q(he),n=Q(dt),r=H(()=>t.resolve(ne(e.to))),s=H(()=>{const{matched:a}=r.value,{length:f}=a,o=a[f-1],u=n.matched;if(!o||!u.length)return-1;const l=u.findIndex(Z.bind(null,o));if(l>-1)return l;const m=Fe(a[f-2]);return f>1&&Fe(o)===m&&u[u.length-1].path!==m?u.findIndex(Z.bind(null,a[f-2])):l}),i=H(()=>s.value>-1&&wn(n.params,r.value.params)),h=H(()=>s.value>-1&&s.value===n.matched.length-1&&rt(n.params,r.value.params));function d(a={}){return Pn(a)?t[ne(e.replace)?"replace":"push"](ne(e.to)).catch(re):Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:i,isExactActive:h,navigate:d}}const Sn=Ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const n=Ae(Ue(e)),{options:r}=Q(he),s=H(()=>({[Qe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Je("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bn=Sn;function Pn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function wn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!V(s)||s.length!==r.length||r.some((i,h)=>i!==s[h]))return!1}return!0}function Fe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>e!=null?e:t!=null?t:n,kn=Ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Q(Ce),s=H(()=>e.route||r.value),i=Q(De,0),h=H(()=>{let f=ne(i);const{matched:o}=s.value;let u;for(;(u=o[f])&&!u.components;)f++;return f}),d=H(()=>s.value.matched[h.value]);Ee(De,H(()=>h.value+1)),Ee(Rn,d),Ee(Ce,s);const a=xe();return et(()=>[a.value,d.value,e.name],([f,o,u],[l,m,y])=>{o&&(o.instances[u]=f,m&&m!==o&&f&&f===l&&(o.leaveGuards.size||(o.leaveGuards=m.leaveGuards),o.updateGuards.size||(o.updateGuards=m.updateGuards))),f&&o&&(!m||!Z(o,m)||!l)&&(o.enterCallbacks[u]||[]).forEach(O=>O(f))},{flush:"post"}),()=>{const f=s.value,o=e.name,u=d.value,l=u&&u.components[o];if(!l)return We(n.default,{Component:l,route:f});const m=u.props[o],y=m?m===!0?f.params:typeof m=="function"?m(f):m:null,k=Je(l,P({},y,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(u.instances[o]=null)},ref:a}));return We(n.default,{Component:k,route:f})||k}}});function We(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Cn=kn;function Nn(e){const t=Jt(e.routes,e),n=e.parseQuery||vn,r=e.stringifyQuery||Ke,s=e.history,i=te(),h=te(),d=te(),a=Rt(K);let f=K;X&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=Se.bind(null,c=>""+c),u=Se.bind(null,gn),l=Se.bind(null,le);function m(c,g){let p,v;return ot(c)?(p=t.getRecordMatcher(c),v=g):v=c,t.addRoute(v,p)}function y(c){const g=t.getRecordMatcher(c);g&&t.removeRoute(g)}function O(){return t.getRoutes().map(c=>c.record)}function k(c){return!!t.getRecordMatcher(c)}function E(c,g){if(g=P({},g||a.value),typeof c=="string"){const R=be(n,c,g.path),x=t.resolve({path:R.path},g),ee=s.createHref(R.fullPath);return P(R,x,{params:l(x.params),hash:le(R.hash),redirectedFrom:void 0,href:ee})}let p;if("path"in c)p=P({},c,{path:be(n,c.path,g.path).path});else{const R=P({},c.params);for(const x in R)R[x]==null&&delete R[x];p=P({},c,{params:u(c.params)}),g.params=u(g.params)}const v=t.resolve(p,g),C=c.hash||"";v.params=o(l(v.params));const A=At(r,P({},c,{hash:dn(C),path:v.path})),b=s.createHref(A);return P({fullPath:A,hash:C,query:r===Ke?yn(c.query):c.query||{}},v,{redirectedFrom:void 0,href:b})}function S(c){return typeof c=="string"?be(n,c,a.value.path):P({},c)}function I(c,g){if(f!==c)return J(8,{from:g,to:c})}function $(c){return w(c)}function j(c){return $(P(S(c),{replace:!0}))}function L(c){const g=c.matched[c.matched.length-1];if(g&&g.redirect){const{redirect:p}=g;let v=typeof p=="function"?p(c):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=S(v):{path:v},v.params={}),P({query:c.query,hash:c.hash,params:"path"in v?{}:c.params},v)}}function w(c,g){const p=f=E(c),v=a.value,C=c.state,A=c.force,b=c.replace===!0,R=L(p);if(R)return w(P(S(R),{state:typeof R=="object"?P({},C,R.state):C,force:A,replace:b}),g||p);const x=p;x.redirectedFrom=g;let ee;return!A&&xt(r,v,p)&&(ee=J(16,{to:x,from:v}),Ie(v,v,!0,!1)),(ee?Promise.resolve(ee):B(x,v)).catch(N=>z(N)?z(N,2)?N:ge(N):me(N,x,v)).then(N=>{if(N){if(z(N,2))return w(P({replace:b},S(N.to),{state:typeof N.to=="object"?P({},C,N.to.state):C,force:A}),g||x)}else N=G(x,v,!0,b,C);return T(x,v,N),N})}function _(c,g){const p=I(c,g);return p?Promise.reject(p):Promise.resolve()}function B(c,g){let p;const[v,C,A]=_n(c,g);p=Pe(v.reverse(),"beforeRouteLeave",c,g);for(const R of v)R.leaveGuards.forEach(x=>{p.push(D(x,c,g))});const b=_.bind(null,c,g);return p.push(b),W(p).then(()=>{p=[];for(const R of i.list())p.push(D(R,c,g));return p.push(b),W(p)}).then(()=>{p=Pe(C,"beforeRouteUpdate",c,g);for(const R of C)R.updateGuards.forEach(x=>{p.push(D(x,c,g))});return p.push(b),W(p)}).then(()=>{p=[];for(const R of c.matched)if(R.beforeEnter&&!g.matched.includes(R))if(V(R.beforeEnter))for(const x of R.beforeEnter)p.push(D(x,c,g));else p.push(D(R.beforeEnter,c,g));return p.push(b),W(p)}).then(()=>(c.matched.forEach(R=>R.enterCallbacks={}),p=Pe(A,"beforeRouteEnter",c,g),p.push(b),W(p))).then(()=>{p=[];for(const R of h.list())p.push(D(R,c,g));return p.push(b),W(p)}).catch(R=>z(R,8)?R:Promise.reject(R))}function T(c,g,p){for(const v of d.list())v(c,g,p)}function G(c,g,p,v,C){const A=I(c,g);if(A)return A;const b=g===K,R=X?history.state:{};p&&(v||b?s.replace(c.fullPath,P({scroll:b&&R&&R.scroll},C)):s.push(c.fullPath,C)),a.value=c,Ie(c,g,p,b),ge()}let F;function pe(){F||(F=s.listen((c,g,p)=>{if(!Le.listening)return;const v=E(c),C=L(v);if(C){w(P(C,{replace:!0}),v).catch(re);return}f=v;const A=a.value;X&&Bt($e(A.fullPath,p.delta),fe()),B(v,A).catch(b=>z(b,12)?b:z(b,2)?(w(b.to,v).then(R=>{z(R,20)&&!p.delta&&p.type===ce.pop&&s.go(-1,!1)}).catch(re),Promise.reject()):(p.delta&&s.go(-p.delta,!1),me(b,v,A))).then(b=>{b=b||G(v,A,!1),b&&(p.delta&&!z(b,8)?s.go(-p.delta,!1):p.type===ce.pop&&z(b,20)&&s.go(-1,!1)),T(v,A,b)}).catch(re)}))}let q=te(),M=te(),ie;function me(c,g,p){ge(c);const v=M.list();return v.length?v.forEach(C=>C(c,g,p)):console.error(c),Promise.reject(c)}function yt(){return ie&&a.value!==K?Promise.resolve():new Promise((c,g)=>{q.add([c,g])})}function ge(c){return ie||(ie=!c,pe(),q.list().forEach(([g,p])=>c?p(c):g()),q.reset()),c}function Ie(c,g,p,v){const{scrollBehavior:C}=e;if(!X||!C)return Promise.resolve();const A=!p&&Vt($e(c.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return Xe().then(()=>C(c,g,A)).then(b=>b&&Ht(b)).catch(b=>me(b,c,g))}const ve=c=>s.go(c);let ye;const Re=new Set,Le={currentRoute:a,listening:!0,addRoute:m,removeRoute:y,hasRoute:k,getRoutes:O,resolve:E,options:e,push:$,replace:j,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:h.add,afterEach:d.add,onError:M.add,isReady:yt,install(c){const g=this;c.component("RouterLink",bn),c.component("RouterView",Cn),c.config.globalProperties.$router=g,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>ne(a)}),X&&!ye&&a.value===K&&(ye=!0,$(s.location).catch(C=>{}));const p={};for(const C in K)p[C]=H(()=>a.value[C]);c.provide(he,g),c.provide(dt,Ae(p)),c.provide(Ce,a);const v=c.unmount;Re.add(c),c.unmount=function(){Re.delete(c),Re.size<1&&(f=K,F&&F(),F=null,a.value=K,ye=!1,ie=!1),v()}}};return Le}function W(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function _n(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let h=0;h<i;h++){const d=t.matched[h];d&&(e.matched.find(f=>Z(f,d))?r.push(d):n.push(d));const a=e.matched[h];a&&(t.matched.find(f=>Z(f,a))||s.push(a))}return[n,r,s]}function $n(){return Q(he)}/*!
  * pinia v2.0.27
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let pt;const de=e=>pt=e,mt=Symbol();function _e(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var oe;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(oe||(oe={}));function Hn(){const e=tt(!0),t=e.run(()=>xe({}));let n=[],r=[];const s=ae({install(i){de(s),s._a=i,i.provide(mt,s),i.config.globalProperties.$pinia=s,r.forEach(h=>n.push(h)),r=[]},use(i){return!this._a&&!kt?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const gt=()=>{};function Ye(e,t,n,r=gt){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&bt()&&Pt(s),s}function Y(e,...t){e.slice().forEach(n=>{n(...t)})}function Oe(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];_e(s)&&_e(r)&&e.hasOwnProperty(n)&&!ue(r)&&!nt(r)?e[n]=Oe(s,r):e[n]=r}return e}const On=Symbol();function An(e){return!_e(e)||!e.hasOwnProperty(On)}const{assign:U}=Object;function xn(e){return!!(ue(e)&&e.effect)}function jn(e,t,n,r){const{state:s,actions:i,getters:h}=t,d=n.state.value[e];let a;function f(){d||(n.state.value[e]=s?s():{});const o=wt(n.state.value[e]);return U(o,i,Object.keys(h||{}).reduce((u,l)=>(u[l]=ae(H(()=>{de(n);const m=n._s.get(e);return h[l].call(m,m)})),u),{}))}return a=vt(e,f,t,n,r,!0),a.$reset=function(){const u=s?s():{};this.$patch(l=>{U(l,u)})},a}function vt(e,t,n={},r,s,i){let h;const d=U({actions:{}},n),a={deep:!0};let f,o,u=ae([]),l=ae([]),m;const y=r.state.value[e];!i&&!y&&(r.state.value[e]={}),xe({});let O;function k(w){let _;f=o=!1,typeof w=="function"?(w(r.state.value[e]),_={type:oe.patchFunction,storeId:e,events:m}):(Oe(r.state.value[e],w),_={type:oe.patchObject,payload:w,storeId:e,events:m});const B=O=Symbol();Xe().then(()=>{O===B&&(f=!0)}),o=!0,Y(u,_,r.state.value[e])}const E=gt;function S(){h.stop(),u=[],l=[],r._s.delete(e)}function I(w,_){return function(){de(r);const B=Array.from(arguments),T=[],G=[];function F(M){T.push(M)}function pe(M){G.push(M)}Y(l,{args:B,name:w,store:j,after:F,onError:pe});let q;try{q=_.apply(this&&this.$id===e?this:j,B)}catch(M){throw Y(G,M),M}return q instanceof Promise?q.then(M=>(Y(T,M),M)).catch(M=>(Y(G,M),Promise.reject(M))):(Y(T,q),q)}}const $={_p:r,$id:e,$onAction:Ye.bind(null,l),$patch:k,$reset:E,$subscribe(w,_={}){const B=Ye(u,w,_.detached,()=>T()),T=h.run(()=>et(()=>r.state.value[e],G=>{(_.flush==="sync"?o:f)&&w({storeId:e,type:oe.direct,events:m},G)},U({},a,_)));return B},$dispose:S},j=Ae($);r._s.set(e,j);const L=r._e.run(()=>(h=tt(),h.run(()=>t())));for(const w in L){const _=L[w];if(ue(_)&&!xn(_)||nt(_))i||(y&&An(_)&&(ue(_)?_.value=y[w]:Oe(_,y[w])),r.state.value[e][w]=_);else if(typeof _=="function"){const B=I(w,_);L[w]=B,d.actions[w]=_}}return U(j,L),U(St(j),L),Object.defineProperty(j,"$state",{get:()=>r.state.value[e],set:w=>{k(_=>{U(_,w)})}}),r._p.forEach(w=>{U(j,h.run(()=>w({store:j,app:r._a,pinia:r,options:d})))}),y&&i&&n.hydrate&&n.hydrate(j.$state,y),f=!0,o=!0,j}function Bn(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function h(d,a){const f=Et();return d=d||f&&Q(mt),d&&de(d),d=pt,d._s.has(r)||(i?vt(r,t,s,d):jn(r,s,d)),d._s.get(r)}return h.$id=r,h}export{Mn as a,Hn as b,Nn as c,Bn as d,$n as u};
