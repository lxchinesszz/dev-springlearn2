import{d,a as i,w as u,aM as c,v as h,x as m,A as s,aF as f,bz as v,bA as w,bf as b,bg as g}from"./arco.02c92fc9.js";import{_}from"./index.4bb0c45f.js";const k=d({name:"SearchSimple",props:{placeholder:{type:String,default:"\u641C\u7D22\u4E00\u5207"}},emits:["doAction","change","blur"],setup(e,o){const r=i(""),n=()=>{o.emit("doAction",r.value)},l=()=>{o.emit("blur")};u(r,t=>{o.emit("change",t)});const a=i();return c(()=>{}),{searchInputRef:a,value:r,search:n,blurAction:l}}});const p=e=>(b("data-v-2fcd9645"),e=e(),g(),e),S={class:"form"},y=p(()=>s("svg",{width:"17",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":"search"},[s("path",{d:"M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9",stroke:"currentColor","stroke-width":"1.333","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),A=[y],M=["placeholder"],C=p(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),I=[C];function B(e,o,r,n,l,a){return h(),m("div",S,[s("button",{style:{cursor:"pointer"},onClick:o[0]||(o[0]=(...t)=>e.search&&e.search(...t))},A),f(s("input",{ref:"searchInputRef","onUpdate:modelValue":o[1]||(o[1]=t=>e.value=t),class:"input",placeholder:e.placeholder,type:"text",onKeydown:o[2]||(o[2]=w((...t)=>e.search&&e.search(...t),["enter"])),onBlur:o[3]||(o[3]=(...t)=>e.blurAction&&e.blurAction(...t))},null,40,M),[[v,e.value]]),s("button",{class:"reset",type:"reset",style:{cursor:"pointer"},onClick:o[4]||(o[4]=t=>e.value="")},I)])}const z=_(k,[["render",B],["__scopeId","data-v-2fcd9645"]]);export{z as S};
