import{c as b,a as g,h,R as f,s as c,b as E,r as z,S as A,p as d,d as i,e as H,C as L,f as G,g as m,i as C,j as O,k as R,l as y,m as N,n as S,w as x,u as D,o as T,q as $,t as P,v as M,x as w,V as v,y as j,z as u,A as B,B as V,D as I}from"./clientConfigs.dd6dee15.js";const _=[["v-18cc131e","/CHANGELOG.html",{title:"docs"},["/CHANGELOG","/CHANGELOG.md"]],["v-8daa1a0e","/",{title:"Home"},["/index.html","/README.md"]],["v-1020f180","/components/",{title:"Introduction"},["/components/index.html","/components/README.md"]],["v-fffb8e28","/guide/",{title:"Introduction"},["/guide/index.html","/guide/README.md"]],["v-10898e45","/guide/page-missing.html",{title:"\u7FFB\u8BD1\u7F3A\u5931"},["/guide/page-missing","/guide/page-missing.md"]],["v-2d0ad528","/zh/",{title:"\u9996\u9875"},["/zh/index.html","/zh/README.md"]],["v-1f687c9e","/zh/components/",{title:"\u4ECB\u7ECD"},["/zh/components/index.html","/zh/components/README.md"]],["v-47357bdb","/zh/guide/",{title:"\u4ECB\u7ECD"},["/zh/guide/index.html","/zh/guide/README.md"]],["v-2f01f711","/zh/guide/code-block.html",{title:"\u7EC4\u4EF6\u6F14\u793A"},["/zh/guide/code-block","/zh/guide/code-block.md"]],["v-44220680","/zh/guide/page-map.html",{title:"\u9875\u9762\u6620\u5C04"},["/zh/guide/page-map","/zh/guide/page-map.md"]],["v-e7c0b8b4","/zh/guide/theme-vmi.html",{title:"\u4E3B\u9898\u53C2\u8003"},["/zh/guide/theme-vmi","/zh/guide/theme-vmi.md"]],["v-3706649a","/404.html",{title:""},["/404"]],["v-42e818be","/components/components/CHANGELOG.html",{title:"@bfehub/vuepress-components"},["/components/components/CHANGELOG","/components/components/CHANGELOG.md"]],["v-138ffd64","/components/npm-badge/",{title:"NpmBadge"},["/components/npm-badge/index.html","/components/npm-badge/index.md"]],["v-95f2bb02","/zh/components/npm-badge/",{title:"NpmBadge"},["/zh/components/npm-badge/index.html","/zh/components/npm-badge/index.md"]],["v-18cc131e-missing","/zh/CHANGELOG.html",{title:"docs"},["/zh/CHANGELOG","/zh/CHANGELOG.md"]],["v-10898e45-missing","/zh/guide/page-missing.html",{title:"\u7FFB\u8BD1\u7F3A\u5931"},["/zh/guide/page-missing","/zh/guide/page-missing.md"]],["v-42e818be-missing","/zh/components/components/CHANGELOG.html",{title:"@bfehub/vuepress-components"},["/zh/components/components/CHANGELOG","/zh/components/components/CHANGELOG.md"]]];var q=()=>_.reduce((t,[a,o,e,n])=>(t.push({name:a,path:o,component:v,meta:e},...n.map(s=>({path:s,redirect:o}))),t),[{name:"404",path:"/:catchAll(.*)",component:v}]),F=j,k=()=>{const t=E({history:F(z(c.value.base)),routes:q(),scrollBehavior:(a,o,e)=>e||(a.hash?{el:a.hash}:{top:0})});return t.beforeResolve(async(a,o)=>{var e;(a.path!==o.path||o===A)&&([d.value]=await Promise.all([i.resolvePageData(a.name),(e=H[a.name])==null?void 0:e.__asyncLoader()]))}),t},U=t=>{t.component("ClientOnly",L),t.component("Content",G)},W=(t,a)=>{const o=m(()=>i.resolveRouteLocale(c.value.locales,a.currentRoute.value.path)),e=m(()=>i.resolveSiteLocaleData(c.value,o.value)),n=m(()=>i.resolvePageFrontmatter(d.value)),s=m(()=>i.resolvePageHeadTitle(d.value,e.value)),l=m(()=>i.resolvePageHead(s.value,n.value,e.value)),r=m(()=>i.resolvePageLang(d.value));return t.provide(C,o),t.provide(O,e),t.provide(R,n),t.provide(y,s),t.provide(N,l),t.provide(S,r),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>n.value},$head:{get:()=>l.value},$headTitle:{get:()=>s.value},$lang:{get:()=>r.value},$page:{get:()=>d.value},$routeLocale:{get:()=>o.value},$site:{get:()=>c.value},$siteLocale:{get:()=>e.value},$withBase:{get:()=>x}}),{pageData:d,pageFrontmatter:n,pageHead:l,pageHeadTitle:s,pageLang:r,routeLocale:o,siteData:c,siteLocaleData:e}},Z=()=>{const t=D(),a=T(),o=$(),e=P([]),n=()=>{a.value.forEach(l=>{const r=J(l);r&&e.value.push(r)})},s=()=>{document.documentElement.lang=o.value,e.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),e.value.splice(0,e.value.length),a.value.forEach(l=>{const r=K(l);r!==null&&(document.head.appendChild(r),e.value.push(r))})};V(I,s),M(()=>{n(),s(),w(()=>t.path,()=>s())})},J=([t,a,o=""])=>{const e=Object.entries(a).map(([r,p])=>u(p)?`[${r}="${p}"]`:p===!0?`[${r}]`:"").join(""),n=`head > ${t}${e}`;return Array.from(document.querySelectorAll(n)).find(r=>r.innerText===o)||null},K=([t,a,o])=>{if(!u(t))return null;const e=document.createElement(t);return B(a)&&Object.entries(a).forEach(([n,s])=>{u(s)?e.setAttribute(n,s):s===!0&&e.setAttribute(n,"")}),u(o)&&e.appendChild(document.createTextNode(o)),e},Q=b,X=async()=>{var o;const t=Q({name:"VuepressApp",setup(){var e;Z();for(const n of g)(e=n.setup)==null||e.call(n);return()=>[h(f),...g.flatMap(({rootComponents:n=[]})=>n.map(s=>h(s)))]}}),a=k();U(t),W(t,a);for(const e of g)await((o=e.enhance)==null?void 0:o.call(e,{app:t,router:a,siteData:c}));return t.use(a),{app:t,router:a}};X().then(({app:t,router:a})=>{a.isReady().then(()=>{t.mount("#app")})});export{X as createVueApp};
