var N=Object.defineProperty;var V=(n,e,c)=>e in n?N(n,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):n[e]=c;var r=(n,e,c)=>(V(n,typeof e!="symbol"?e+"":e,c),c);import{l as D,k as v,o as q,_ as P}from"./index.e5c93764.js";import{l as U,bL as H,a as R,r as T,i as J,w as Q,aZ as M,bl as Z,bI as K,bv as X,x as o,y as p,B as u,az as f,aG as Y,bG as $,bH as ee,aQ as l,aT as z,aJ as C,aR as F,aP as E,aL as L,aS as I,bf as te,bg as se}from"./arco.a227f52f.js";class ne{constructor(e,c,t,x,B,S,b,k,h,d,s,a,y,W){r(this,"searchStyle");r(this,"searchBackgroundCss");r(this,"navBarBackgroundCss");r(this,"windowAnimate");r(this,"searchAnimate");r(this,"toolGroupAnimate");r(this,"closeIcon");r(this,"fuzzySearch");r(this,"simplify");r(this,"searchTextCss");r(this,"supperSearchEngine");r(this,"hideSearchAroundText");r(this,"frostedGlass");r(this,"favicon");r(this,"webTitle");this.closeIcon=e,this.toolGroupAnimate=c,this.navBarBackgroundCss=t,this.searchAnimate=x,this.windowAnimate=B,this.searchStyle=S,this.searchBackgroundCss=b,this.fuzzySearch=k,this.simplify=h,this.searchTextCss=d,this.supperSearchEngine=s,this.hideSearchAroundText=a,this.frostedGlass=y,this.favicon=W}}function ie(n,e){const c=t=>{t.keyCode===n&&e.action()};U(()=>{window.addEventListener("keydown",c)}),H(()=>{window.removeEventListener("keydown",c,!1)})}function ae(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&wd=${n}`};return D(e)}function oe(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://kaifa.baidu.com/rest/v1/recommend/suggests?wd=${n}`};return D(e)}function ce(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://www.zhihu.com/api/v4/search/suggest?q=${n}`};return D(e)}function re(n="\u897F\u9B4F\u9676\u6E0A\u660E"){const e={method:"get",url:`https://s.search.bilibili.com/main/suggest?term=${n}`};return D(e)}const le={name:"SupperSearch",props:{placeholder:{type:String,default:"\u641C\u7D22\u4E00\u5207"},theme:ne},emits:["doAction","blur"],setup(n,e){const c=R(""),t=R(!1),x=()=>{e.emit("doAction",c.value)},B=m=>{e.emit("doAction",m)},S=()=>{t.value=!1,e.emit("blur")},b=R(),k=T([]),h=T([]),d=T([]),s=T([]),a=T([]),y=()=>{v(k),v(h),v(d),v(s),v(a)};ie(27,{action(){y()}});const W=J("fuse"),j=m=>{n.theme.supperSearchEngine.lastIndexOf("baidu")>-1&&(v(h),ae(m).then(_=>{const w=_.data,{g:i}=w;for(let g=0;g<(i==null?void 0:i.length);g+=1){const O=i[g];h.push(O.q)}}).catch(_=>{console.log(_)})),n.theme.supperSearchEngine.lastIndexOf("kaifa")>-1&&(v(d),oe(m).then(_=>{const i=_.data.data;i&&(i==null?void 0:i.length)>0&&d.push(...i)})),n.theme.supperSearchEngine.lastIndexOf("zhihu")>-1&&(v(s),ce(m).then(_=>{const i=_.data.suggest;if(i&&(i==null?void 0:i.length)>0)for(let g=0;g<i.length;g+=1){const O=i[g];s.push(O.query)}})),n.theme.supperSearchEngine.lastIndexOf("bili")>-1&&(v(a),re(m).then(_=>{const w=_.data,i=Object.values(w);for(let g=0;g<i.length;g+=1)a.push(i[g].value)}))},G=R(!1);return Q(c,m=>{if(n.theme.supperSearchEngine.lastIndexOf("tool")>-1){const _=W.fuseSearch(m);v(k),k.push(..._)}j(m),G.value=t.value&&k.length>0||h.length>0||d.length>0||s.length>0||a.length>0}),{open:m=>{q(m)},searchInputRef:b,zhFuzzyResultList:s,biliFuzzyResultList:a,closeTipAction:y,customSearch:B,tipVisible:t,manySearchTipVisible:G,fuseResultList:k,value:c,search:x,bdFuzzyResultList:h,kfFuzzyResultList:d,blurAction:S}}};const A=n=>(te("data-v-7ed4897b"),n=n(),se(),n),ue={id:"supperWrapper"},he={class:"supperSearch"},de={class:"searchIcon"},pe={class:"searchInput"},fe=["placeholder"],me={key:0,id:"supperTipWrapper",class:"animated fadeIn"},_e={key:0,class:"tipItemWrapper"},ge=A(()=>u("div",{class:"tipItemTitle"}," \u672C\u5730\u641C\u7D22 ",-1)),ye={class:"tipItemList"},ve={key:1,class:"tipItemWrapper"},be=A(()=>u("div",{class:"tipItemTitle"}," \u767E\u5EA6\u641C\u7D22 ",-1)),ke={class:"tipItemList"},ze={key:2,class:"tipItemWrapper"},Ie=A(()=>u("div",{class:"tipItemTitle"}," \u5F00\u53D1\u8005\u641C\u7D22 ",-1)),Se={class:"tipItemList"},we={key:3,class:"tipItemWrapper"},Te=A(()=>u("div",{class:"tipItemTitle"}," \u77E5\u4E4E\u641C\u7D22 ",-1)),Ce={class:"tipItemList"},Fe={key:4,class:"tipItemWrapper"},Ee=A(()=>u("div",{class:"tipItemTitle"}," B\u7AD9\u641C\u7D22 ",-1)),Le={class:"tipItemList"};function Ae(n,e,c,t,x,B){const S=M("icon-search"),b=M("icon-font"),k=Z,h=K,d=X;return o(),p("div",ue,[u("div",{id:"supperSearchWrapper",onBlur:e[4]||(e[4]=(...s)=>t.closeTipAction&&t.closeTipAction(...s))},[u("div",he,[u("div",de,[f(S,{size:24,style:{color:"#3974ff"}})]),u("div",pe,[Y(u("input",{ref:"searchInputRef","onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),placeholder:c.placeholder,onFocus:e[1]||(e[1]=s=>t.tipVisible=!0),onKeydown:e[2]||(e[2]=ee((...s)=>t.search&&t.search(...s),["enter"]))},null,40,fe),[[$,t.value]])])]),u("div",{class:"searchBtn",onClick:e[3]||(e[3]=(...s)=>t.search&&t.search(...s))}," \u641C\u7D22 ")],32),t.manySearchTipVisible?(o(),p("div",me,[t.fuseResultList.length>0?(o(),p("div",_e,[ge,u("div",ye,[f(d,{wrap:""},{default:l(()=>[(o(!0),p(C,null,F(t.fuseResultList,(s,a)=>(o(),E(h,{key:a,size:"large",color:"orangered",checkable:"",class:"searchTipItem animated fadeIn",onMouseover:y=>!0,onCheck:y=>t.open(s.tool.link)},{icon:l(()=>[f(b,{type:"icon-huomiao1"})]),default:l(()=>[f(k,{content:s.tool.desc},{default:l(()=>[L(I(s.categoryName)+"/ "+I(s.tool.title),1)]),_:2},1032,["content"])]),_:2},1032,["onCheck"]))),128))]),_:1})])])):z("",!0),t.bdFuzzyResultList.length>0?(o(),p("div",ve,[be,u("div",ke,[f(d,{wrap:""},{default:l(()=>[(o(!0),p(C,null,F(t.bdFuzzyResultList,(s,a)=>(o(),E(h,{key:a,color:"blue",checkable:"",size:"large",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://www.baidu.com/s?ie=UTF-8&wd=${s}`)},{icon:l(()=>[f(b,{type:"icon-baidu"})]),default:l(()=>[L(" "+I(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):z("",!0),t.kfFuzzyResultList.length>0?(o(),p("div",ze,[Ie,u("div",Se,[f(d,{wrap:""},{default:l(()=>[(o(!0),p(C,null,F(t.kfFuzzyResultList,(s,a)=>(o(),E(h,{key:a,size:"large",checkable:"",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://kaifa.baidu.com/searchPage?wd=${s}`)},{icon:l(()=>[f(b,{type:"icon-biancheng"})]),default:l(()=>[L(" "+I(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):z("",!0),t.zhFuzzyResultList.length>0?(o(),p("div",we,[Te,u("div",Ce,[f(d,{wrap:""},{default:l(()=>[(o(!0),p(C,null,F(t.zhFuzzyResultList,(s,a)=>(o(),E(h,{key:a,size:"large",checkable:"",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://www.zhihu.com/search?type=content&q=${s}`)},{icon:l(()=>[f(b,{type:"icon-zhihu-circle-fill"})]),default:l(()=>[L(" "+I(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):z("",!0),t.biliFuzzyResultList.length>0?(o(),p("div",Fe,[Ee,u("div",Le,[f(d,{wrap:""},{default:l(()=>[(o(!0),p(C,null,F(t.biliFuzzyResultList,(s,a)=>(o(),E(h,{key:a,size:"large",checkable:"",class:"searchTipItem animated fadeIn",onCheck:y=>t.open(`https://search.bilibili.com/all?keyword=${s}`)},{icon:l(()=>[f(b,{type:"icon-bilibili1"})]),default:l(()=>[L(" "+I(s),1)]),_:2},1032,["onCheck"]))),128))]),_:1})])])):z("",!0)])):z("",!0)])}const xe=P(le,[["render",Ae],["__scopeId","data-v-7ed4897b"]]),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:xe},Symbol.toStringTag,{value:"Module"}));export{xe as S,ne as T,oe as a,ae as b,re as c,Oe as d,ie as k,ce as z};
