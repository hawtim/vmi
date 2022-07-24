import{c as b,a as d,h,R as G,s as u,b as f,r as E,S as A,p as c,d as p,e as H,C as L,f as C,g as l,i as z,j as O,k as N,l as R,m as y,n as S,w as x,u as D,o as T,q as $,t as k,v as P,x as M,V as v,y as w,z as g,A as j,B,D as V}from"./clientConfigs.a3169f0a.js";const I=[["v-8daa1a0e","/",{title:"Home"},["/index.html","/README.md"]],["v-1020f180","/components/",{title:"Introduction"},["/components/index.html","/components/README.md"]],["v-fffb8e28","/guide/",{title:"Introduction"},["/guide/index.html","/guide/README.md"]],["v-10898e45","/guide/page-missing.html",{title:"\u7FFB\u8BD1\u7F3A\u5931"},["/guide/page-missing","/guide/page-missing.md"]],["v-2d0ad528","/zh/",{title:"\u9996\u9875"},["/zh/index.html","/zh/README.md"]],["v-1f687c9e","/zh/components/",{title:"\u4ECB\u7ECD"},["/zh/components/index.html","/zh/components/README.md"]],["v-47357bdb","/zh/guide/",{title:"\u4ECB\u7ECD"},["/zh/guide/index.html","/zh/guide/README.md"]],["v-2f01f711","/zh/guide/code-block.html",{title:"\u7EC4\u4EF6\u6F14\u793A"},["/zh/guide/code-block","/zh/guide/code-block.md"]],["v-44220680","/zh/guide/page-map.html",{title:"\u9875\u9762\u6620\u5C04"},["/zh/guide/page-map","/zh/guide/page-map.md"]],["v-e7c0b8b4","/zh/guide/theme-vmi.html",{title:"\u4E3B\u9898\u53C2\u8003"},["/zh/guide/theme-vmi","/zh/guide/theme-vmi.md"]],["v-3706649a","/404.html",{title:""},["/404"]],["v-42e818be","/components/components/CHANGELOG.html",{title:"@bfehub/vuepress-components"},["/components/components/CHANGELOG","/components/components/CHANGELOG.md"]],["v-1c557aa6","/components/plugin-code-block/CHANGELOG.html",{title:"@bfehub/vuepress-plugin-code-block"},["/components/plugin-code-block/CHANGELOG","/components/plugin-code-block/CHANGELOG.md"]],["v-92c870c8","/components/plugin-page-map/CHANGELOG.html",{title:"@bfehub/vuepress-plugin-page-map"},["/components/plugin-page-map/CHANGELOG","/components/plugin-page-map/CHANGELOG.md"]],["v-5adbb75c","/components/plugin-page-missing/CHANGELOG.html",{title:"@bfehub/vuepress-plugin-page-missing"},["/components/plugin-page-missing/CHANGELOG","/components/plugin-page-missing/CHANGELOG.md"]],["v-f3c58674","/components/theme-vmi/CHANGELOG.html",{title:"@bfehub/vuepress-theme-vmi"},["/components/theme-vmi/CHANGELOG","/components/theme-vmi/CHANGELOG.md"]],["v-138ffd64","/components/npm-badge/",{title:"NpmBadge"},["/components/npm-badge/index.html","/components/npm-badge/index.md"]],["v-95f2bb02","/zh/components/npm-badge/",{title:"NpmBadge"},["/zh/components/npm-badge/index.html","/zh/components/npm-badge/index.md"]],["v-10898e45-missing","/zh/guide/page-missing.html",{title:"\u7FFB\u8BD1\u7F3A\u5931"},["/zh/guide/page-missing","/zh/guide/page-missing.md"]],["v-42e818be-missing","/zh/components/components/CHANGELOG.html",{title:"@bfehub/vuepress-components"},["/zh/components/components/CHANGELOG","/zh/components/components/CHANGELOG.md"]],["v-1c557aa6-missing","/zh/components/plugin-code-block/CHANGELOG.html",{title:"@bfehub/vuepress-plugin-code-block"},["/zh/components/plugin-code-block/CHANGELOG","/zh/components/plugin-code-block/CHANGELOG.md"]],["v-92c870c8-missing","/zh/components/plugin-page-map/CHANGELOG.html",{title:"@bfehub/vuepress-plugin-page-map"},["/zh/components/plugin-page-map/CHANGELOG","/zh/components/plugin-page-map/CHANGELOG.md"]],["v-5adbb75c-missing","/zh/components/plugin-page-missing/CHANGELOG.html",{title:"@bfehub/vuepress-plugin-page-missing"},["/zh/components/plugin-page-missing/CHANGELOG","/zh/components/plugin-page-missing/CHANGELOG.md"]],["v-f3c58674-missing","/zh/components/theme-vmi/CHANGELOG.html",{title:"@bfehub/vuepress-theme-vmi"},["/zh/components/theme-vmi/CHANGELOG","/zh/components/theme-vmi/CHANGELOG.md"]]];var _=()=>I.reduce((t,[n,o,e,a])=>(t.push({name:n,path:o,component:v,meta:e},...a.map(s=>({path:s,redirect:o}))),t),[{name:"404",path:"/:catchAll(.*)",component:v}]),q=w,F=()=>{const t=f({history:q(E(u.value.base)),routes:_(),scrollBehavior:(n,o,e)=>e||(n.hash?{el:n.hash}:{top:0})});return t.beforeResolve(async(n,o)=>{var e;(n.path!==o.path||o===A)&&([c.value]=await Promise.all([p.resolvePageData(n.name),(e=H[n.name])==null?void 0:e.__asyncLoader()]))}),t},U=t=>{t.component("ClientOnly",L),t.component("Content",C)},W=(t,n)=>{const o=l(()=>p.resolveRouteLocale(u.value.locales,n.currentRoute.value.path)),e=l(()=>p.resolveSiteLocaleData(u.value,o.value)),a=l(()=>p.resolvePageFrontmatter(c.value)),s=l(()=>p.resolvePageHeadTitle(c.value,e.value)),i=l(()=>p.resolvePageHead(s.value,a.value,e.value)),m=l(()=>p.resolvePageLang(c.value));return t.provide(z,o),t.provide(O,e),t.provide(N,a),t.provide(R,s),t.provide(y,i),t.provide(S,m),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>a.value},$head:{get:()=>i.value},$headTitle:{get:()=>s.value},$lang:{get:()=>m.value},$page:{get:()=>c.value},$routeLocale:{get:()=>o.value},$site:{get:()=>u.value},$siteLocale:{get:()=>e.value},$withBase:{get:()=>x}}),{pageData:c,pageFrontmatter:a,pageHead:i,pageHeadTitle:s,pageLang:m,routeLocale:o,siteData:u,siteLocaleData:e}},Z=()=>{const t=D(),n=T(),o=$(),e=k([]),a=()=>{n.value.forEach(i=>{const m=J(i);m&&e.value.push(m)})},s=()=>{document.documentElement.lang=o.value,e.value.forEach(i=>{i.parentNode===document.head&&document.head.removeChild(i)}),e.value.splice(0,e.value.length),n.value.forEach(i=>{const m=K(i);m!==null&&(document.head.appendChild(m),e.value.push(m))})};B(V,s),P(()=>{a(),s(),M(()=>t.path,()=>s())})},J=([t,n,o=""])=>{const e=Object.entries(n).map(([m,r])=>g(r)?`[${m}="${r}"]`:r===!0?`[${m}]`:"").join(""),a=`head > ${t}${e}`;return Array.from(document.querySelectorAll(a)).find(m=>m.innerText===o)||null},K=([t,n,o])=>{if(!g(t))return null;const e=document.createElement(t);return j(n)&&Object.entries(n).forEach(([a,s])=>{g(s)?e.setAttribute(a,s):s===!0&&e.setAttribute(a,"")}),g(o)&&e.appendChild(document.createTextNode(o)),e},Q=b,X=async()=>{var o;const t=Q({name:"VuepressApp",setup(){var e;Z();for(const a of d)(e=a.setup)==null||e.call(a);return()=>[h(G),...d.flatMap(({rootComponents:a=[]})=>a.map(s=>h(s)))]}}),n=F();U(t),W(t,n);for(const e of d)await((o=e.enhance)==null?void 0:o.call(e,{app:t,router:n,siteData:u}));return t.use(n),{app:t,router:n}};X().then(({app:t,router:n})=>{n.isReady().then(()=>{t.mount("#app")})});export{X as createVueApp};
