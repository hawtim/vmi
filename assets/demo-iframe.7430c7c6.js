import{H as E,X as B,a8 as v,t as S,g as $,a9 as M,v as V,L as n,a4 as F,a5 as b,M as i,$ as O,P as u,Z as s,aa as q,Y as h,ab as A,a1 as H,ac as I,a0 as L,ad as P,a2 as z,ae as D,a3 as K,K as R,O as k,a7 as g,af as X}from"./clientConfigs.a3169f0a.js";import{t as Y}from"./error.faeb4fa3.js";const y=t=>t**3,Z=t=>t<.5?y(t*2)/2:1-y((1-t)*2)/2,j={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},G={click:t=>t instanceof MouseEvent},J=["onClick"],Q={name:"ElBacktop"},U=E({...Q,props:j,emits:G,setup(t,{emit:m}){const o=t,l="ElBacktop",r=B("backtop"),e=v(),c=v(),p=S(!1),T=$(()=>({right:`${o.right}px`,bottom:`${o.bottom}px`})),N=()=>{if(!e.value)return;const a=Date.now(),f=e.value.scrollTop,d=()=>{if(!e.value)return;const _=(Date.now()-a)/500;_<1?(e.value.scrollTop=f*(1-Z(_)),requestAnimationFrame(d)):e.value.scrollTop=0};requestAnimationFrame(d)},w=()=>{e.value&&(p.value=e.value.scrollTop>=o.visibilityHeight)},C=a=>{N(),m("click",a)},x=D(w,300);return M(c,"scroll",x),V(()=>{var a;c.value=document,e.value=document.documentElement,o.target&&(e.value=(a=document.querySelector(o.target))!=null?a:void 0,e.value||Y(l,`target is not existed: ${o.target}`),c.value=e.value)}),(a,f)=>(n(),F(P,{name:`${s(r).namespace.value}-fade-in`},{default:b(()=>[p.value?(n(),i("div",{key:0,style:H(s(T)),class:h(s(r).b()),onClick:I(C,["stop"])},[O(a.$slots,"default",{},()=>[u(s(A),{class:h(s(r).e("icon"))},{default:b(()=>[u(s(q))]),_:1},8,["class"])])],14,J)):L("v-if",!0)]),_:3},8,["name"]))}});var W=z(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const ee=K(W),te=E({__name:"demo-iframe",setup(t){return(m,o)=>(n(),i(g,null,[k("ul",null,[(n(),i(g,null,X(100,l=>k("li",{key:l}," Scroll down to see the bottom-right button. ")),64))]),u(s(ee),{right:20,bottom:20})],64))}});var se=R(te,[["__file","demo-iframe.vue"]]);export{se as default};
