import{_ as c,m as u,e as l,a as i,o as a,c as o,d as s,F as p,r as _,t as r,b as d}from"./index-c8a00d26.js";const m={name:"ShoppingCart",computed:{...u("cart",{checkoutStatus:t=>t.checkoutStatus}),...l("cart",{courses:"cartCourses",total:"cartTotal"})},methods:{...i("cart",["addCoursesToUser"])}},h=s("h1",null,"Carrito",-1),C={class:"cart__list"},S={class:"cart__item"},k={class:"item__price"},f={key:0};function g(t,n,T,y,$,v){return a(),o("div",null,[h,s("ul",C,[(a(!0),o(p,null,_(t.courses,e=>(a(),o("li",S,[s("h3",null,r(e.title),1),s("span",k,r(e.price)+"€",1)]))),256))]),s("p",null,"Total: "+r(t.total),1),s("button",{onClick:n[0]||(n[0]=(...e)=>t.addCoursesToUser&&t.addCoursesToUser(...e))},"Comprar"),t.checkoutStatus?(a(),o("p",f,r(t.checkoutStatus),1)):d("",!0)])}const U=c(m,[["render",g]]);export{U as default};
