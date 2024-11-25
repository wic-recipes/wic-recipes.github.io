import{g as B}from"./D8zO4V_q.js";import{o as t,c as e,a as s,n as C,s as N,t as l,u as o,b as w,d as I,F as d,p as c,v as p}from"./Br0Olkl7.js";import{r as j}from"./DYxAMPGD.js";function S(a,u){return t(),e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}function V(a,u){return t(),e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})])}function A(a){return Array.isArray(a)&&(a=a[0]),j.find(u=>u.id===a)}const D={class:"mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"},F={class:"text-3xl font-bold tracking-tight"},P={class:"mt-4 border-b border-stone-200 pb-5 text-sm sm:flex sm:justify-between"},Z={class:"flex"},z={class:"font-medium inline-flex items-center"},q={class:"ml-4 font-medium inline-flex items-center"},E={class:"mt-8"},L={class:"space-y-24"},O={class:"grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 md:grid sm:gap-x-6 md:gap-x-8 lg:gap-x-8"},W={class:"sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2"},$={class:"flex flex-col items-center"},G=["src","alt"],H={class:"mt-2 text-xs text-stone-500"},J={class:"mt-6 sm:col-span-7 sm:mt-0 md:row-end-1"},K={class:"grid grid-cols-1 gap-y-8 border-b border-stone-200 pb-8 sm:grid-cols-2 sm:gap-x-6 sm:pb-4"},Q={class:"flex flex-col"},U={class:"mb-6"},X={key:0,class:"mt-3 space-y-3"},Y={class:"mt-4 uppercase"},ss={role:"list",class:"py-4"},ts={key:1,class:"mt-3 space-y-3"},es={key:0,class:"mb-6"},os={class:"mt-3 space-y-3"},ns={class:"flex flex-col"},is={key:0,class:"mb-6"},ls={class:"text-lg font-medium"},rs={class:"mt-3 space-y-3"},ds={key:1,class:"mb-6"},cs={class:"mt-3 space-y-3"},as={key:2,class:"mb-6"},ms={class:"mt-3 space-y-3"},us={key:3,class:"mb-6"},ps={class:"mt-3 space-y-3"},_s={class:"mt-8"},gs={key:0},xs={class:"mt-4 uppercase"},hs={role:"list",class:"divide-y divide-stone-200"},fs={key:1,role:"list",class:"divide-y divide-stone-200"},bs=C({__name:"[id]",setup(a){var g,x;const u=N(),n=A(u.params.id),M=typeof((g=n.directions)==null?void 0:g[0])!="string",R=typeof((x=n.ingredients)==null?void 0:x[0])!="string";return(_,r)=>{var h,f,v,y,k,b;return t(),e("div",D,[s("h1",F,l(o(n).title),1),s("div",P,[s("dl",Z,[s("dd",z,[w(o(S),{class:"size-6 mr-1"}),I(" "+l(o(n).time),1)]),s("dd",q,[w(o(V),{class:"size-6 mr-1"}),I(" "+l(o(n).servings)+" servings",1)])])]),s("div",E,[s("div",L,[s("div",O,[s("div",W,[s("figure",$,[s("img",{src:("getRecipeImagePath"in _?_.getRecipeImagePath:o(B))(o(n)),alt:o(n).title,class:"aspect-square w-full rounded-lg bg-stone-50 object-cover shadow-md"},null,8,G),s("figcaption",H," Recipe and photo by "+l(o(n).source),1)])]),s("div",J,[s("dl",K,[s("div",Q,[s("div",U,[r[0]||(r[0]=s("dt",{class:"text-lg font-medium"},"Ingredients",-1)),R?(t(),e("dd",X,[(t(!0),e(d,null,c(o(n).ingredients,i=>(t(),e("section",{key:i.title},[s("h3",Y,l(i.title),1),s("ul",ss,[(t(!0),e(d,null,c(i.items,m=>(t(),e("li",{key:_.step,class:"px-4 sm:px-0"},l(m),1))),128))])]))),128))])):(t(),e("dd",ts,[(t(!0),e(d,null,c(o(n).ingredients,i=>(t(),e("p",null,l(i),1))),256))]))]),(h=o(n))!=null&&h.notes?(t(),e("div",es,[r[1]||(r[1]=s("dt",{class:"text-lg font-medium"},"Notes",-1)),s("dd",os,[(t(!0),e(d,null,c(o(n).notes,i=>(t(),e("p",null,l(i),1))),256))])])):p("",!0),r[2]||(r[2]=s("p",{class:"text-xs"},"*WIC-approved ingredients",-1))]),s("div",ns,[(f=o(n))!=null&&f.sauceTitle&&((v=o(n))!=null&&v.sauceIngredients)?(t(),e("div",is,[s("dt",ls,l(o(n).sauceTitle),1),s("dd",rs,[(t(!0),e(d,null,c(o(n).sauceIngredients,i=>(t(),e("p",null,l(i),1))),256))])])):p("",!0),(y=o(n))!=null&&y.optionalToppings?(t(),e("div",ds,[r[3]||(r[3]=s("dt",{class:"text-lg font-medium"},"Optional Toppings",-1)),s("dd",cs,[(t(!0),e(d,null,c(o(n).optionalToppings,i=>(t(),e("p",null,l(i),1))),256))])])):p("",!0),(k=o(n))!=null&&k.servingInstructions?(t(),e("div",as,[r[4]||(r[4]=s("dt",{class:"text-lg font-medium"},"For Serving",-1)),s("dd",ms,[(t(!0),e(d,null,c(o(n).servingInstructions,i=>(t(),e("p",null,l(i),1))),256))])])):p("",!0),(b=o(n))!=null&&b.mixinIdeas?(t(),e("div",us,[r[5]||(r[5]=s("dt",{class:"text-lg font-medium"},"Mix-In Ideas",-1)),s("dd",ps,[(t(!0),e(d,null,c(o(n).mixinIdeas,i=>(t(),e("p",null,l(i),1))),256))])])):p("",!0)])])])])])]),s("div",_s,[r[6]||(r[6]=s("h2",{class:"text-lg font-medium"},"Directions",-1)),M?(t(),e("div",gs,[(t(!0),e(d,null,c(o(n).directions,i=>(t(),e("section",{key:i.title},[s("h3",xs,l(i.title),1),s("ul",hs,[(t(!0),e(d,null,c(i.steps,(m,T)=>(t(),e("li",{key:m,class:"px-4 py-4 sm:px-0"},l(T+1)+". "+l(m),1))),128))])]))),128))])):(t(),e("ul",fs,[(t(!0),e(d,null,c(o(n).directions,(i,m)=>(t(),e("li",{key:i,class:"px-4 py-4 sm:px-0"},l(m+1)+". "+l(i),1))),128))]))])])}}});export{bs as default};
