var V=Object.defineProperty;var q=(n,e,i)=>e in n?V(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var r=(n,e,i)=>(q(n,typeof e!="symbol"?e+"":e,i),i);import{H as G,a5 as U,a4 as W,b as D,r as C,a0 as P,A as H,a1 as v,a2 as Y,_ as Z,c as F,o as c,h as p,f as u,g as f,L as J,Y as K,Z as Q,w as l,a3 as I,F as T,i as E,e as A,j as L,t as b,y as X,z as $}from"./index.17bd8e0d.js";class ee{constructor(e,i,t,R,x,S,z,k,h,d,s,o,y,O){r(this,"searchStyle");r(this,"searchBackgroundCss");r(this,"navBarBackgroundCss");r(this,"windowAnimate");r(this,"searchAnimate");r(this,"toolGroupAnimate");r(this,"closeIcon");r(this,"fuzzySearch");r(this,"simplify");r(this,"searchTextCss");r(this,"supperSearchEngine");r(this,"hideSearchAroundText");r(this,"frostedGlass");r(this,"favicon");r(this,"webTitle");this.closeIcon=e,this.toolGroupAnimate=i,this.navBarBackgroundCss=t,this.searchAnimate=R,this.windowAnimate=x,this.searchStyle=S,this.searchBackgroundCss=z,this.fuzzySearch=k,this.simplify=h,this.searchTextCss=d,this.supperSearchEngine=s,this.hideSearchAroundText=o,this.frostedGlass=y,this.favicon=O}}function te(n,e){const i=t=>{t.keyCode===n&&e.action()};G(()=>{window.addEventListener("keydown",i)}),U(()=>{window.removeEventListener("keydown",i,!1)})}function se(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&wd=${n}`};return W(e)}function ne(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://kaifa.baidu.com/rest/v1/recommend/suggests?wd=${n}`};return W(e)}function ae(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://www.zhihu.com/api/v4/search/suggest?q=${n}`};return W(e)}function ie(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://s.search.bilibili.com/main/suggest?term=${n}`};return W(e)}const oe={name:"SupperSearch",props:{placeholder:{type:String,default:"\u641C\u7D22\u4E00\u5207"},theme:ee},emits:["doAction","blur"],setup(n,e){const i=D(""),t=D(!1),R=()=>{e.emit("doAction",i.value)},x=m=>{e.emit("doAction",m)},S=()=>{t.value=!1,e.emit("blur")},z=D(),k=C([]),h=C([]),d=C([]),s=C([]),o=C([]),y=()=>{v(k),v(h),v(d),v(s),v(o)};te(27,{action(){y()}});const O=P("fuse"),N=m=>{n.theme.supperSearchEngine.lastIndexOf("baidu")>-1&&(v(h),se(m).then(_=>{const w=_.data,{g:a}=w;for(let g=0;g<(a==null?void 0:a.length);g+=1){const j=a[g];h.push(j.q)}}).catch(_=>{console.log(_)})),n.theme.supperSearchEngine.lastIndexOf("kaifa")>-1&&(v(d),ne(m).then(_=>{const a=_.data.data;a&&(a==null?void 0:a.length)>0&&d.push(...a)})),n.theme.supperSearchEngine.lastIndexOf("zhihu")>-1&&(v(s),ae(m).then(_=>{const a=_.data.suggest;if(a&&(a==null?void 0:a.length)>0)for(let g=0;g<a.length;g+=1){const j=a[g];s.push(j.query)}})),n.theme.supperSearchEngine.lastIndexOf("bili")>-1&&(v(o),ie(m).then(_=>{const w=_.data,a=Object.values(w);for(let g=0;g<a.length;g+=1)o.push(a[g].value)}))},M=D(!1);return H(i,m=>{if(n.theme.supperSearchEngine.lastIndexOf("tool")>-1){const _=O.fuseSearch(m);v(k),k.push(..._)}N(m),setTimeout(()=>{M.value=t.value&&k.length>0||h.length>0||d.length>0||s.length>0||o.length>0},300)}),{open:m=>{Y(m)},searchInputRef:z,zhFuzzyResultList:s,biliFuzzyResultList:o,closeTipAction:y,customSearch:x,tipVisible:t,manySearchTipVisible:M,fuseResultList:k,value:i,search:R,bdFuzzyResultList:h,kfFuzzyResultList:d,blurAction:S}}};const B=n=>(X("data-v-441a7e39"),n=n(),$(),n),ce={id:"supperWrapper"},re={class:"supperSearch"},le={class:"searchIcon"},ue={class:"searchInput"},he=["placeholder"],de={key:0,id:"supperTipWrapper",class:"animated fadeIn"},pe={key:0,class:"tipItemWrapper"},fe=B(()=>u("div",{class:"tipItemTitle"}," \u672C\u5730\u641C\u7D22 ",-1)),me={class:"tipItemList"},_e={key:1,class:"tipItemWrapper"},ge=B(()=>u("div",{class:"tipItemTitle"}," \u767E\u5EA6\u641C\u7D22 ",-1)),ye={class:"tipItemList"},ve={key:2,class:"tipItemWrapper"},ze=B(()=>u("div",{class:"tipItemTitle"}," \u5F00\u53D1\u8005\u641C\u7D22 ",-1)),ke={class:"tipItemList"},Ie={key:3,class:"tipItemWrapper"},be=B(()=>u("div",{class:"tipItemTitle"}," \u77E5\u4E4E\u641C\u7D22 ",-1)),Se={class:"tipItemList"},we={key:4,class:"tipItemWrapper"},Ce=B(()=>u("div",{class:"tipItemTitle"}," B\u7AD9\u641C\u7D22 ",-1)),Fe={class:"tipItemList"};function Te(n,e,i,t,R,x){const S=F("icon-search"),z=F("icon-font"),k=F("a-tooltip"),h=F("a-tag"),d=F("a-space");return c(),p("div",ce,[u("div",{id:"supperSearchWrapper",onBlur:e[4]||(e[4]=(...s)=>t.closeTipAction&&t.closeTipAction(...s))},[u("div",re,[u("div",le,[f(S,{size:24,style:{color:"#3974ff"}})]),u("div",ue,[J(u("input",{ref:"searchInputRef","onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),placeholder:i.placeholder,onFocus:e[1]||(e[1]=s=>t.tipVisible=!0),onKeydown:e[2]||(e[2]=Q((...s)=>t.search&&t.search(...s),["enter"]))},null,40,he),[[K,t.value]])])]),u("div",{class:"searchBtn",onClick:e[3]||(e[3]=(...s)=>t.search&&t.search(...s))}," \u641C\u7D22 ")],32),t.manySearchTipVisible&&i.theme.fuzzySearch?(c(),p("div",de,[t.fuseResultList.length>0?(c(),p("div",pe,[fe,u("div",me,[f(d,{wrap:""},{default:l(()=>[(c(!0),p(T,null,E(t.fuseResultList,(s,o)=>(c(),A(h,{key:o,size:"large",color:"orangered",checkable:"",class:"searchTipItem animated fadeIn",onMouseover:y=>!0,onCheck:y=>t.open(s.tool.link)},{icon:l(()=>[f(z,{type:"icon-huomiao1"})]),default:l(()=>[f(k,{content:s.tool.desc},{default:l(()=>[L(b(s.categoryName)+"/ "+b(s.tool.title),1)]),_:2},1032,["content"])]),_:2},1032,["onCheck"]))),128))]),_:1})])])):I("",!0),t.bdFuzzyResultList.length>0?(c(),p("div",_e,[ge,u("div",ye,[f(d,{wrap:""},{default:l(()=>[(c(!0),p(T,null,E(t.bdFuzzyResultList,(s,o)=>(c(),A(h,{key:o,color:"blue",checkable:"",size:"large",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://www.baidu.com/s?ie=UTF-8&wd=${s}`)},{icon:l(()=>[f(z,{type:"icon-baidu"})]),default:l(()=>[L(" "+b(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):I("",!0),t.kfFuzzyResultList.length>0?(c(),p("div",ve,[ze,u("div",ke,[f(d,{wrap:""},{default:l(()=>[(c(!0),p(T,null,E(t.kfFuzzyResultList,(s,o)=>(c(),A(h,{key:o,size:"large",checkable:"",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://kaifa.baidu.com/searchPage?wd=${s}`)},{icon:l(()=>[f(z,{type:"icon-biancheng"})]),default:l(()=>[L(" "+b(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):I("",!0),t.zhFuzzyResultList.length>0?(c(),p("div",Ie,[be,u("div",Se,[f(d,{wrap:""},{default:l(()=>[(c(!0),p(T,null,E(t.zhFuzzyResultList,(s,o)=>(c(),A(h,{key:o,size:"large",checkable:"",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://www.zhihu.com/search?type=content&q=${s}`)},{icon:l(()=>[f(z,{type:"icon-zhihu-circle-fill"})]),default:l(()=>[L(" "+b(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):I("",!0),t.biliFuzzyResultList.length>0?(c(),p("div",we,[Ce,u("div",Fe,[f(d,{wrap:""},{default:l(()=>[(c(!0),p(T,null,E(t.biliFuzzyResultList,(s,o)=>(c(),A(h,{key:o,size:"large",checkable:"",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://search.bilibili.com/all?keyword=${s}`)},{icon:l(()=>[f(z,{type:"icon-bilibili1"})]),default:l(()=>[L(" "+b(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):I("",!0)])):I("",!0)])}const Ee=Z(oe,[["render",Te],["__scopeId","data-v-441a7e39"]]),Re=Object.freeze(Object.defineProperty({__proto__:null,default:Ee},Symbol.toStringTag,{value:"Module"}));export{Ee as S,ee as T,ne as a,se as b,ie as c,Re as d,te as k,ae as z};
