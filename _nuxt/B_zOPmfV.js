import{o as i,c,a as t,n as g,d,b as p,w as u,u as l,e as m,F as f,p as x,q as _,t as h}from"./Br0Olkl7.js";import{g as w}from"./D8zO4V_q.js";import{r as y}from"./DYxAMPGD.js";function k(o,a){return i(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})])}function b(){const o=[],a=["peanut-butter-smoothie-bowl","easy-kale-salad-with-fresh-lemon-dressing","rainbow-peanut-noodles"];for(const n of a){const e=y.find(r=>r.id===n);e&&o.push(e)}return o}const R={class:"mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"},v={class:"mt-4 text-base text-gray-500"},B={class:"mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"},F=["src","alt"],C={class:"mt-4 text-base font-semibold text-gray-900"},V=g({__name:"index",setup(o){const a=b();return(n,e)=>{const r=m;return i(),c("main",R,[e[2]||(e[2]=t("h2",{class:"text-2xl font-bold tracking-tight text-gray-900"},"Find a Recipe",-1)),t("p",v,[e[1]||(e[1]=d(" Find a tasty, affordable, WIC-friendly recipe. ")),p(r,{to:"/recipes",class:"inline-flex items-center underline decoration-gray-500"},{default:u(()=>[e[0]||(e[0]=d(" See All Recipes ")),p(l(k),{class:"size-6 ml-1"})]),_:1})]),t("div",B,[(i(!0),c(f,null,x(l(a),s=>(i(),_(r,{key:s.id,to:`/recipe/${s.id}`,class:"group block"},{default:u(()=>[t("img",{src:("getRecipeImagePath"in n?n.getRecipeImagePath:l(w))(s),alt:s.title,class:"aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6] shadow-md"},null,8,F),t("h3",C,h(s.title),1)]),_:2},1032,["to"]))),128))])])}}});export{V as default};