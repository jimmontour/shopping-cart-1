(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{12:function(e,a,t){e.exports={backdrop:"Cart_backdrop__9zLXG",cart:"Cart_cart__1ENP3",container:"Cart_container__WYHuc",close:"Cart_close__1qQL-",svgClose:"Cart_svgClose__Wzojf",cartContentWrapper:"Cart_cartContentWrapper__1iqEW",title:"Cart_title__2cUSz",cartList:"Cart_cartList__PpwRB",totalPrice:"Cart_totalPrice__284-K",subtitle:"Cart_subtitle__1I4R3",svgCart:"Cart_svgCart__1IiDg"}},13:function(e,a,t){e.exports={cartContent:"CartItem_cartContent__3GIPs",cartImage:"CartItem_cartImage__1n-or",cartDetails:"CartItem_cartDetails__2muBm",cartName:"CartItem_cartName__28AVS",cartPrice:"CartItem_cartPrice__pyZjC",cartCategory:"CartItem_cartCategory__1BT9Y",quantityController:"CartItem_quantityController__3fR1I",quantityControlButton:"CartItem_quantityControlButton__1XUWZ",quantityDisplay:"CartItem_quantityDisplay__1MbX8"}},14:function(e,a,t){e.exports={backdrop:"Search_backdrop__jQONh",search:"Search_search__3vyMj",container:"Search_container__3T-3T",close:"Search_close__1N9in",svgClose:"Search_svgClose__3g-Or",form:"Search_form__16vaC",svgSearch:"Search_svgSearch__3ib6z",textField:"Search_textField__1U_oU",btn:"Search_btn__3QTPC",line:"Search_line__3aTk5"}},18:function(e,a,t){e.exports={container:"HomePage_container__1_kot",s1:"HomePage_s1__27C4k",s1Title:"HomePage_s1Title__1955D",s1Subtitle:"HomePage_s1Subtitle__hLWsb",s1Link:"HomePage_s1Link__1cRNu"}},2:function(e,a,t){e.exports={container:"ShopPage_container__vD2py",wrapper:"ShopPage_wrapper__1LQ4r",side:"ShopPage_side__1IEbp",sideTitleShop:"ShopPage_sideTitleShop__3ATGE",sideTitle:"ShopPage_sideTitle__3uONv",categories:"ShopPage_categories__3w8QO",category:"ShopPage_category__1LpPa",categoryLink:"ShopPage_categoryLink__3b_gf",main:"ShopPage_main__2rGzm",productList:"ShopPage_productList__jQgLg",product:"ShopPage_product__Lr5BQ",frontImage:"ShopPage_frontImage__2FnKI",backImage:"ShopPage_backImage__25Z4j",productLink:"ShopPage_productLink__2aLLu",productImage:"ShopPage_productImage__25Kuc",productName:"ShopPage_productName__3aegZ",productPrice:"ShopPage_productPrice__tud4y"}},26:function(e,a,t){e.exports={link:"SlideUpButton_link__16t6r",linkText:"SlideUpButton_linkText__88qwP"}},40:function(e,a,t){},5:function(e,a,t){e.exports={container:"ProductPage_container__18DGR",main:"ProductPage_main__17-jh",cursor:"ProductPage_cursor__1_yxI",interactionArea:"ProductPage_interactionArea__3t7mz",leftClickArea:"ProductPage_leftClickArea__3KARR",rightClickArea:"ProductPage_rightClickArea__GJsPa",bgStyle:"ProductPage_bgStyle__3Dqw2",productName:"ProductPage_productName__1vWi3",productImage:"ProductPage_productImage__1QNF6",galleryCounter:"ProductPage_galleryCounter__1Lxtc",galleryCurrentIndex:"ProductPage_galleryCurrentIndex__1x-vu",side:"ProductPage_side__1EMj3",squares:"ProductPage_squares__1Owhh",square:"ProductPage_square__3d9LO",productPrice:"ProductPage_productPrice__3HgOA",buyButtons:"ProductPage_buyButtons__2rFCA",addToBag:"ProductPage_addToBag__2a5YA",buyNow:"ProductPage_buyNow__3U4IW"}},50:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t(1),r=t.n(i),s=t(29),n=t.n(s),l=(t(40),t(16)),d=t(21),o=t.n(d),g=t(25),p=t(30),m=t(31),h=t(34),u=t(33),b=t(3),j=t(7),y=t(12),x=t.n(y),_=t(8),v=t(26),f=t.n(v);var O=function(e){var a=e.text,t=e.onClick,i=e.path;return Object(c.jsx)(_.b,{onClick:t,className:f.a.link,to:i,children:Object(c.jsx)("div",{className:f.a.linkText,children:a})})},w=t(13),C=t.n(w);var N=function(e){var a,t=e.product,r=e.updateQuantity,s=t.category,n=t.id,l=t.name,d=t.price,o=t.image,g=t.quantity,p=Object(i.useRef)(null);return Object(c.jsx)(j.a,{children:Object(c.jsx)(j.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,y:20},transition:{duration:.2},children:Object(c.jsxs)("div",{className:C.a.cartContent,children:[Object(c.jsx)("img",{className:C.a.cartImage,src:o,alt:l}),Object(c.jsxs)("div",{className:C.a.cartDetails,children:[Object(c.jsx)("div",{className:C.a.cartCategory,children:s}),Object(c.jsx)("div",{className:C.a.cartName,children:l}),Object(c.jsxs)("div",{className:C.a.quantityController,children:[Object(c.jsx)("button",{onClick:function(){p.current.value=g-1,r(n,+p.current.value)},className:C.a.quantityControlButton,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M0 10h24v4h-24z"})})}),Object(c.jsx)("input",{ref:p,onChange:function(e){var a=e.target.value;r(n,+a)},type:"number",className:C.a.quantityDisplay,defaultValue:g}),Object(c.jsx)("button",{onClick:function(){p.current.value=g+1,r(n,+p.current.value)},className:C.a.quantityControlButton,children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"})})})]})]}),Object(c.jsx)("div",{className:C.a.cartPrice,children:(a=d,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a))})]})})})},k={visible:{opacity:1},hidden:{opacity:0}},S={hidden:{x:"100%"},visible:{x:"0"}};function P(e){var a,t=e.updateQuantity,i=e.totalPrice,r=e.cartContent,s=e.closeCart,n=e.showCart;return Object(c.jsx)(j.a,{children:n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.b.div,{variants:k,initial:"hidden",animate:"visible",exit:"hidden",onClick:s,transition:{ease:"easeOut",duration:.5},className:x.a.backdrop}),Object(c.jsx)(j.b.div,{variants:S,initial:"hidden",animate:"visible",exit:"hidden",transition:{ease:"easeOut",duration:.5},className:x.a.cart,children:Object(c.jsxs)("div",{className:x.a.container,children:[Object(c.jsx)("button",{onClick:s,className:x.a.close,children:Object(c.jsx)("svg",{className:x.a.svgClose,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"})})}),Object(c.jsxs)("div",{className:x.a.cartContentWrapper,children:[Object(c.jsxs)("h1",{className:x.a.title,children:["Your",Object(c.jsx)("br",{}),"Shopping",Object(c.jsx)("br",{}),"Bag"]}),Object(c.jsxs)("div",{className:x.a.cartList,children:[r&&r.length>0&&r.map((function(e){return Object(c.jsx)(N,{updateQuantity:t,product:e},e.id)})),r&&r.length>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:x.a.totalPrice,children:["Subtotal: ",(a=i,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a))]}),Object(c.jsx)(O,{onClick:s,text:"Checkout",path:"/"})]}),r&&0===r.length&&Object(c.jsx)("p",{className:x.a.subtitle,children:"Your bag is empty."})]})]}),r&&0===r.length&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("svg",{className:x.a.svgCart,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"})}),Object(c.jsx)(O,{onClick:s,text:"Browse Products",path:"/catalog"})]})]})})]})})}var I=t(15),B=t(6),z=t.n(B);var L=function(e){var a=e.openSearch,t=e.openCart,r=Object(i.useState)(null),s=Object(I.a)(r,2),n=s[0],l=s[1],d=Object(b.f)();return Object(i.useEffect)((function(){l("/"===d.pathname?"light":"dark")}),[d]),Object(c.jsxs)("header",{className:z.a.container,children:[Object(c.jsx)(_.b,{className:"light"===n?z.a.logo:z.a.logoBlack,to:"/",children:"Core Components"}),Object(c.jsxs)("nav",{className:z.a.nav,children:[Object(c.jsx)(_.b,{className:"light"===n?z.a.shop:z.a.shopBlack,to:"/catalog",children:"Shop"}),Object(c.jsx)("button",{onClick:a,className:"light"===n?z.a.btn:z.a.btnBlack,children:Object(c.jsx)("svg",{className:z.a.svgSearch,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"})})}),Object(c.jsxs)("div",{className:z.a.cartBtnContainer,children:[e.cartLength>0&&Object(c.jsxs)("div",{className:"light"===n?z.a.cartLength:z.a.cartLengthBlack,children:[e.cartLength,Object(c.jsx)("svg",{className:"light"===n?z.a.svgArrow:z.a.svgArrowBlack,xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M21 12l-18 12v-24z"})})]}),Object(c.jsx)("button",{onClick:t,className:"light"===n?z.a.btn:z.a.btnBlack,children:Object(c.jsx)("svg",{className:z.a.svgCart,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"})})})]})]})]})},T=t(14),M=t.n(T);var F=function(e){var a=e.setSearchFor,t=e.closeSearch,i=e.showSearch;return Object(c.jsx)(j.a,{children:i&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.b.div,{variants:{visible:{opacity:1},hidden:{opacity:0},exit:{opacity:0,transition:{duration:.2}}},initial:"hidden",animate:"visible",exit:"exit",onClick:t,transition:{ease:"easeOut",duration:.4},className:M.a.backdrop}),Object(c.jsx)("div",{className:M.a.search,children:Object(c.jsxs)("div",{className:M.a.container,children:[Object(c.jsx)(j.b.button,{variants:{visible:{opacity:1},hidden:{opacity:0},exit:{opacity:0,transition:{duration:.2}}},initial:"hidden",animate:"visible",exit:"exit",transition:{ease:"easeOut",duration:.4},onClick:t,className:M.a.close,children:Object(c.jsx)("svg",{className:M.a.svgClose,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"})})}),Object(c.jsxs)(j.b.div,{variants:{visible:{opacity:1,x:0},hidden:{opacity:0,x:20},exit:{opacity:0,transition:{duration:.2}}},initial:"hidden",animate:"visible",exit:"exit",transition:{ease:"easeOut",duration:.4},className:M.a.form,children:[Object(c.jsx)("svg",{className:M.a.svgSearch,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"})}),Object(c.jsx)("input",{onChange:function(e){var t=document.getElementById("enterBtn");e.target.value&&""!==e.target.value?t.style.opacity=1:t.style.opacity=0,a(e.target.value.trim())},className:M.a.textField,name:"searchFor",type:"text",placeholder:"Search Products",spellCheck:"false",autoComplete:"off",autoFocus:!0}),Object(c.jsx)("button",{id:"enterBtn",className:M.a.btn,children:"enter"})]}),Object(c.jsx)(j.b.div,{variants:{visible:{scale:1},hidden:{scale:0},exit:{opacity:0,transition:{duration:.2}}},initial:"hidden",animate:"visible",exit:"exit",transition:{ease:"easeOut",duration:.8},className:M.a.line})]})})]})})},X=t(18),D=t.n(X),A=t.p+"static/media/rtx-3090.3aed8e8a.jpg",R=function(e){return Object(c.jsx)("div",{className:D.a.container,children:Object(c.jsx)("main",{children:Object(c.jsxs)("section",{style:{backgroundImage:"url(".concat(A,")")},className:D.a.s1,children:[Object(c.jsx)("h1",{className:D.a.s1Title,children:"Nvidia GeForce RTX 3090"}),Object(c.jsx)("p",{className:D.a.s1Subtitle,children:"Now available for preorder, shipping December, 2020."}),Object(c.jsx)(_.b,{className:D.a.s1Link,to:"/catalog",children:"Shop now"})]})})})},H=t(5),q=t.n(H),U=t.p+"static/media/ryzen-5600X.3c121327.png",E=t.p+"static/media/ryzen-5800X.43379386.png",G=t.p+"static/media/ryzen-5900X.bb52bd98.png",Q=t.p+"static/media/ryzen-5950X.bb52bd98.png",K=t.p+"static/media/ryzen-5600X-preview.f2a69ce2.jpg",W=t.p+"static/media/ryzen-5800X-preview.61849f29.jpg",Y=t.p+"static/media/ryzen-5900X-preview.434ede16.jpg",V=t.p+"static/media/ryzen-5950X-preview.53c22972.jpg",Z=t.p+"static/media/ryzen-5600X-gallery-1.7fd5c6b4.png",J=t.p+"static/media/ryzen-5600X-gallery-2.79421884.png",$=t.p+"static/media/ryzen-5800X-gallery-1.aea94828.png",ee=t.p+"static/media/ryzen-5800X-gallery-2.4a274944.png",ae=t.p+"static/media/ryzen-5900X-gallery-1.08eaf4ff.png",te=t.p+"static/media/ryzen-5900X-gallery-2.e90d2e08.png",ce=[{category:"Processor",categoryId:"processors",id:"amd-ryzen-5-5600x",name:"AMD Ryzen 5 5600X",price:299,image:U,previewImage:K,gallery:[Z,J]},{category:"Processor",categoryId:"processors",id:"amd-ryzen-7-5800x",name:"AMD Ryzen 7 5800X",price:449,image:E,previewImage:W,gallery:[$,ee]},{category:"Processor",categoryId:"processors",id:"amd-ryzen-9-5900x",name:"AMD Ryzen 9 5900X",price:549,image:G,previewImage:Y,gallery:[ae,te]},{category:"Processor",categoryId:"processors",id:"amd-ryzen-9-5950x",name:"AMD Ryzen 9 5950X",price:799,image:Q,previewImage:V,gallery:[ae,te]}],ie=t.p+"static/media/kingston-fury-ddr3.d8760b09.png",re=t.p+"static/media/kingston-fury-ddr4.699e05e6.png",se=t.p+"static/media/kingston-fury-ddr4-rgb.59c93de9.png",ne=t.p+"static/media/kingston-predator-ddr4.652ad144.png",le=t.p+"static/media/kingston-predator-ddr4-rgb.66a3e735.png",de=t.p+"static/media/kingston-fury-ddr3-preview.d22f4284.jpg",oe=t.p+"static/media/kingston-fury-ddr4-preview.1f55871d.jpg",ge=t.p+"static/media/kingston-fury-ddr4-rgb-preview.c2fe8448.jpg",pe=t.p+"static/media/kingston-predator-ddr4-preview.6f0f3771.jpg",me=t.p+"static/media/kingston-predator-ddr4-rgb-preview.c407e71c.jpg",he=[{category:"Memory",categoryId:"memory",id:"kingston-hyperx-fury-ddr3",name:"Kingston HyperX FURY DDR3",price:47.53,image:ie,previewImage:de,gallery:[t.p+"static/media/kingston-fury-ddr3-gallery-1.6a564527.png",t.p+"static/media/kingston-fury-ddr3-gallery-2.66201598.png",t.p+"static/media/kingston-fury-ddr3-gallery-3.06900d16.png"]},{category:"Memory",categoryId:"memory",id:"kingston-hyperx-fury-ddr4",name:"Kingston HyperX FURY DDR4",price:36.99,image:re,previewImage:oe,gallery:[t.p+"static/media/kingston-fury-ddr4-gallery-1.3c855121.png",t.p+"static/media/kingston-fury-ddr4-gallery-2.e393c26f.png",t.p+"static/media/kingston-fury-ddr4-gallery-3.1e73deac.png"]},{category:"Memory",categoryId:"memory",id:"kingston-hyperx-fury-ddr4-rgb",name:"Kingston HyperX FURY DDR4 RGB",price:62.95,image:se,previewImage:ge,gallery:[t.p+"static/media/kingston-fury-ddr4-rgb-gallery-1.31a827b6.png",t.p+"static/media/kingston-fury-ddr4-rgb-gallery-2.aa19ddf6.png"]},{category:"Memory",categoryId:"memory",id:"kingston-hyperx-predator-ddr4",name:"Kingston HyperX Predator DDR4",price:44.36,image:ne,previewImage:pe,gallery:[t.p+"static/media/kingston-predator-ddr4-gallery-1.5adb54d3.png",t.p+"static/media/kingston-predator-ddr4-gallery-2.8bb4df40.png"]},{category:"Memory",categoryId:"memory",id:"kingston-hyperx-predator-ddr4-rgb",name:"Kingston HyperX Predator DDR4 RGB",price:53.99,image:le,previewImage:me,gallery:[le,t.p+"static/media/kingston-predator-ddr4-rgb-gallery-1.5b41e326.png",t.p+"static/media/kingston-predator-ddr4-rgb-gallery-2.e6bf75f5.png"]}],ue=t.p+"static/media/msi-b450-tomahawk-max.7660aed8.png",be=t.p+"static/media/asus-tuf-gaming.ed4d1e9b.png",je=t.p+"static/media/asus-rog-strix-b450f-gaming.101c584e.png",ye=t.p+"static/media/msi-b450-tomahawk-max-preview.909ab198.jpg",xe=t.p+"static/media/asus-tuf-gaming-preview.ff2d4823.jpg",_e=t.p+"static/media/asus-rog-strix-b450f-gaming-preview.adc1d6cf.jpg",ve=[{category:"Motherboard",categoryId:"motherboards",id:"msi-b450-tomahawk-max",name:"MSI B450 Tomahawk MAX",price:114.99,image:ue,previewImage:ye,gallery:[t.p+"static/media/msi-b450-tomahawk-max-gallery-1.7660aed8.png",t.p+"static/media/msi-b450-tomahawk-max-gallery-2.82ac5d27.png",t.p+"static/media/msi-b450-tomahawk-max-gallery-3.934b1095.png",t.p+"static/media/msi-b450-tomahawk-max-gallery-4.7e742928.png",t.p+"static/media/msi-b450-tomahawk-max-gallery-5.195e9d4c.png"]},{category:"Motherboard",categoryId:"motherboards",id:"asus-tuf-gaming-x570-plus-wifi",name:"Asus TUF Gaming X570-Plus (Wi-Fi)",price:189.99,image:be,previewImage:xe,gallery:[t.p+"static/media/asus-tuf-gaming-gallery-1.ed4d1e9b.png",t.p+"static/media/asus-tuf-gaming-gallery-2.c922742e.png",t.p+"static/media/asus-tuf-gaming-gallery-3.f484e67e.png"]},{category:"Motherboard",categoryId:"motherboards",id:"asus-rog-strix-b450-f-gaming",name:"Asus ROG STRIX B450-F GAMING",price:112.93,image:je,previewImage:_e,gallery:[t.p+"static/media/asus-rog-strix-b450f-gaming-gallery-1.101c584e.png",t.p+"static/media/asus-rog-strix-b450f-gaming-gallery-2.9ac2dd6a.png",t.p+"static/media/asus-rog-strix-b450f-gaming-gallery-3.ac4fc421.png",t.p+"static/media/asus-rog-strix-b450f-gaming-gallery-4.c357565f.png",t.p+"static/media/asus-rog-strix-b450f-gaming-gallery-5.a7c0c6be.png",t.p+"static/media/asus-rog-strix-b450f-gaming-gallery-6.577b18c7.png"]}],fe=t.p+"static/media/rtx-3070.719dea48.png",Oe=t.p+"static/media/rtx-3080.d6a2ae26.png",we=t.p+"static/media/rtx-3090.db9cab1d.png",Ce=t.p+"static/media/rtx-3070-preview.7153ecb3.jpg",Ne=t.p+"static/media/rtx-3080-preview.5b69147d.jpg",ke=t.p+"static/media/rtx-3090-preview.9a23cf51.jpg",Se=[{category:"Video Card",categoryId:"video-cards",id:"nvidia-geforce-rtx-3070",name:"Nvidia GeForce RTX 3070",price:499.99,image:fe,previewImage:Ce,gallery:[t.p+"static/media/rtx-3070-gallery-1.ab42866c.png"]},{category:"Video Card",categoryId:"video-cards",id:"nvidia-geforce-rtx-3080",name:"Nvidia GeForce RTX 3080",price:699.99,image:Oe,previewImage:Ne,gallery:[t.p+"static/media/rtx-3080-gallery-1.3a807259.png"]},{category:"Video Card",categoryId:"video-cards",id:"nvidia-geforce-rtx-3090",name:"Nvidia GeForce RTX 3090",price:1499.99,image:we,previewImage:ke,gallery:[t.p+"static/media/rtx-3090-gallery-1.b8e6a93e.png"]}],Pe=t.p+"static/media/fractal-design-meshify-c.fb74ef1d.png",Ie=t.p+"static/media/nzxt-h510-elite.32ced281.png",Be=t.p+"static/media/lian-li-pc-011-dynamic.b0e1ce19.png",ze=t.p+"static/media/fractal-design-meshify-c-preview.953896fe.jpg",Le=t.p+"static/media/nzxt-h510-elite-preview.e5bd07c1.jpg",Te=t.p+"static/media/lian-li-pc-011-dynamic-preview.550c0318.jpg",Me=[{category:"Chassis",categoryId:"chassis",id:"fractal-design-meshify-c",name:"Fractal Design Meshify C",price:95.99,image:Pe,previewImage:ze,gallery:[t.p+"static/media/fractal-design-meshify-c-gallery-1.6bfec972.png",t.p+"static/media/fractal-design-meshify-c-gallery-2.cddc171e.png",t.p+"static/media/fractal-design-meshify-c-gallery-3.d21fdf9d.png",t.p+"static/media/fractal-design-meshify-c-gallery-4.021c7ad1.png",t.p+"static/media/fractal-design-meshify-c-gallery-5.d1ccc157.png",t.p+"static/media/fractal-design-meshify-c-gallery-6.6d7af453.png",t.p+"static/media/fractal-design-meshify-c-gallery-7.b0fbe545.png",t.p+"static/media/fractal-design-meshify-c-gallery-8.00934d79.png",t.p+"static/media/fractal-design-meshify-c-gallery-9.a9ab7c53.png",t.p+"static/media/fractal-design-meshify-c-gallery-10.d3d4bdf6.png",t.p+"static/media/fractal-design-meshify-c-gallery-11.80f42916.png",t.p+"static/media/fractal-design-meshify-c-gallery-12.919fee20.png",t.p+"static/media/fractal-design-meshify-c-gallery-13.36c38092.png",t.p+"static/media/fractal-design-meshify-c-gallery-14.796fe9c8.png",t.p+"static/media/fractal-design-meshify-c-gallery-15.3a737916.png",t.p+"static/media/fractal-design-meshify-c-gallery-16.d41302d2.png",t.p+"static/media/fractal-design-meshify-c-gallery-17.da474c9a.png",t.p+"static/media/fractal-design-meshify-c-gallery-18.02f3f490.png",t.p+"static/media/fractal-design-meshify-c-gallery-19.0b1dec20.png",t.p+"static/media/fractal-design-meshify-c-gallery-20.41d4a20b.png",t.p+"static/media/fractal-design-meshify-c-gallery-21.57efa45e.png"]},{category:"Chassis",categoryId:"chassis",id:"nzxt-h510-elite",name:"NZXT H510 Elite",price:149.88,image:Ie,previewImage:Le,gallery:[t.p+"static/media/nzxt-h510-elite-gallery-1.32ced281.png",t.p+"static/media/nzxt-h510-elite-gallery-2.485eb319.png"]},{category:"Chassis",categoryId:"chassis",id:"lian-li-pc-011-dynamic",name:"Lian Li PC-O11 Dynamic",price:139.99,image:Be,previewImage:Te,gallery:[t.p+"static/media/lian-li-pc-011-dynamic-gallery-1.b0e1ce19.png",t.p+"static/media/lian-li-pc-011-dynamic-gallery-2.38826c6e.png",t.p+"static/media/lian-li-pc-011-dynamic-gallery-3.878b25de.png",t.p+"static/media/lian-li-pc-011-dynamic-gallery-4.aa5d3c33.png",t.p+"static/media/lian-li-pc-011-dynamic-gallery-5.9bc04baa.png",t.p+"static/media/lian-li-pc-011-dynamic-gallery-6.fd2ba41b.png"]}],Fe=[].concat(Object(l.a)(ce),Object(l.a)(he),Object(l.a)(ve),Object(l.a)(Se),Object(l.a)(Me)),Xe=function(e){var a="Component".split(""),t=Object(b.g)().productId,r=Fe.find((function(e){return e.id===t})),s=Object(i.useState)(0),n=Object(I.a)(s,2),l=n[0],d=n[1],o=Object(i.useState)(null),g=Object(I.a)(o,2),p=g[0],m=g[1],h=Object(i.useState)(!1),u=Object(I.a)(h,2),y=u[0],x=u[1];Object(i.useEffect)((function(){document.getElementById("image").style.opacity=1}),[]);var _,v=function(e){if(y){var a=document.getElementById("cursor");a.style.display="flex",a.style.top="".concat(e.pageY,"px"),a.style.left="".concat(e.pageX,"px")}x(!0)},f=function(){x(!1)},O=function(e){m("left"),v(e)},w=function(e){m("right"),v(e)},C=function(){e.addToCart(r)};return Object(c.jsxs)("div",{className:q.a.container,children:[Object(c.jsxs)("main",{className:q.a.main,children:[Object(c.jsx)(j.a,{children:y&&Object(c.jsxs)(j.b.div,{variants:{visible:{opacity:.8,scale:1,x:"-50%",y:"-50%"},hidden:{opacity:0,scale:.8,x:"-50%",y:"-50%"}},initial:"hidden",animate:"visible",exit:"hidden",transition:{ease:"easeOut",duration:.4},id:"cursor",className:q.a.cursor,children:[p&&"left"===p&&Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:Object(c.jsx)("path",{d:"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"})}),p&&"right"===p&&Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"#efece9",children:Object(c.jsx)("path",{d:"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"})})]})}),Object(c.jsxs)("div",{className:q.a.interactionArea,children:[Object(c.jsx)("div",{onMouseEnter:O,onMouseMove:O,onMouseLeave:f,onClick:function(){if(1===r.gallery.length)return null;var e=document.getElementById("image");e.style.opacity=0,setTimeout((function(){d(l>0?l-1:r.gallery.length-1),e.style.opacity=1}),100)},className:q.a.leftClickArea}),Object(c.jsx)("div",{onMouseEnter:w,onMouseMove:w,onMouseLeave:f,onClick:function(){if(1===r.gallery.length)return null;var e=document.getElementById("image");e.style.opacity=0,setTimeout((function(){l<r.gallery.length-1?d(l+1):d(0),e.style.opacity=1}),100)},className:q.a.rightClickArea})]}),Object(c.jsx)("div",{className:q.a.bgStyle}),Object(c.jsx)("h1",{className:q.a.productName,children:r.name}),Object(c.jsx)("img",{id:"image",src:r.gallery[l],alt:r.name,className:q.a.productImage}),Object(c.jsxs)("div",{className:q.a.galleryCounter,children:[Object(c.jsx)("span",{className:q.a.galleryCurrentIndex,children:(l+1).toString().padStart(3,"0")})," / ".concat(r.gallery.length.toString().padStart(3,"0"))]})]}),Object(c.jsxs)("aside",{className:q.a.side,children:[Object(c.jsx)("div",{className:q.a.squares,children:a&&a.map((function(e,a){return Object(c.jsx)("span",{className:q.a.square,children:e},a)}))}),Object(c.jsx)("div",{className:q.a.productPrice,children:(_=r.price,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(_))}),Object(c.jsxs)("div",{className:q.a.buyButtons,children:[Object(c.jsx)("button",{onClick:C,className:q.a.addToBag,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"Add to bag"}),Object(c.jsx)("span",{children:"Add to bag"})]})}),Object(c.jsx)("button",{onClick:C,className:q.a.buyNow,children:"Buy it now"})]})]})]})},De=t(2),Ae=t.n(De),Re=[{id:"processors",name:"Processors"},{id:"memory",name:"Memory"},{id:"motherboards",name:"Motherboards"},{id:"video-cards",name:"Video Cards"},{id:"chassis",name:"Chassis"}],He=function(e){var a=Object(b.g)().categoryId,t=Re.find((function(e){return e.id===a})),r=Object(i.useState)([]),s=Object(I.a)(r,2),n=s[0],l=s[1];Object(i.useEffect)((function(){if(t){var e=Fe.filter((function(e){return e.categoryId===t.id}));l(e)}}),[a,t]);var d=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)};return Object(c.jsx)("div",{className:Ae.a.container,children:Object(c.jsxs)("div",{className:Ae.a.wrapper,children:[Object(c.jsxs)("aside",{className:Ae.a.side,children:[Object(c.jsxs)("div",{className:Ae.a.sideTitleContainer,children:[Object(c.jsx)("div",{className:Ae.a.sideTitleShop,children:"Shop /"}),Object(c.jsx)("h1",{className:Ae.a.sideTitle,children:Object(c.jsxs)(b.c,{children:[Object(c.jsxs)(b.a,{exact:!0,path:"/catalog",children:[Object(c.jsx)("span",{children:"All"}),"Products"]}),Object(c.jsx)(b.a,{exact:!0,path:"/catalog/:categoryId",children:t&&t.name})]})})]}),Object(c.jsx)("ul",{className:Ae.a.categories,children:Re.map((function(e){return Object(c.jsx)(_.b,{to:"/catalog/".concat(e.id),className:Ae.a.categoryLink,children:Object(c.jsx)("li",{className:Ae.a.category,children:e.name})},e.id)}))})]}),Object(c.jsx)("main",{className:Ae.a.main,children:Object(c.jsx)("ul",{className:Ae.a.productList,children:Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/catalog",children:Fe&&Fe.map((function(e){return Object(c.jsx)("li",{className:Ae.a.product,children:Object(c.jsxs)(_.b,{to:"/products/".concat(e.id),className:Ae.a.productLink,children:[Object(c.jsxs)("div",{className:Ae.a.productImage,children:[Object(c.jsx)("img",{className:Ae.a.frontImage,src:e.image,alt:e.name}),Object(c.jsx)("img",{className:Ae.a.backImage,src:e.previewImage,alt:e.name})]}),Object(c.jsx)("div",{className:Ae.a.productName,children:e.name}),Object(c.jsx)("div",{className:Ae.a.productPrice,children:d(e.price)})]})},e.id)}))}),Object(c.jsx)(b.a,{exact:!0,path:"/catalog/:categoryId",children:n&&n.map((function(e){return Object(c.jsx)("li",{className:Ae.a.product,children:Object(c.jsxs)(_.b,{to:"/products/".concat(e.id),className:Ae.a.productLink,children:[Object(c.jsxs)("div",{className:Ae.a.productImage,children:[Object(c.jsx)("img",{className:Ae.a.frontImage,src:e.image,alt:e.name}),Object(c.jsx)("img",{className:Ae.a.backImage,src:e.previewImage,alt:e.name})]}),Object(c.jsx)("div",{className:Ae.a.productName,children:e.name}),Object(c.jsx)("div",{className:Ae.a.productPrice,children:d(e.price)})]})},e.id)}))})]})})})]})})},qe=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var c;return Object(p.a)(this,t),(c=a.call(this,e)).updateQuantity=function(){var e=Object(g.a)(o.a.mark((function e(a,t){var i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=c.state.cart,0!==t){e.next=6;break}return e.next=4,c.setState({cart:i.filter((function(e){return e.id!==a}))});case 4:e.next=11;break;case 6:return(r=i.find((function(e){return e.id===a}))).quantity=t,i.map((function(e){return e.id===a?r:null})),e.next=11,c.setState({cart:i});case 11:c.computeTotalPrice();case 12:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),c.computeTotalPrice=function(){var e=0;c.state.cart.forEach((function(a){var t=a.price*a.quantity;e+=t})),c.setState({totalPrice:e.toFixed(2)})},c.addToCart=function(){var e=Object(g.a)(o.a.mark((function e(a){var t,i,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.state.cart.filter((function(e){return e.id===a.id})),i=c.state.cart,1!==t.length){e.next=8;break}return i.map((function(e){return e.id===t[0].id?e.quantity=e.quantity+1:null})),e.next=6,c.setState({cart:i});case 6:e.next=13;break;case 8:return r=c.state.cart,(s=a).quantity=1,e.next=13,c.setState({cart:[].concat(Object(l.a)(r),[s])});case 13:c.computeTotalPrice(),c.setState({showCart:!0});case 15:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),c.openSearch=function(){c.setState({showSearch:!0})},c.setSearchFor=function(e){c.setState({searchFor:e})},c.closeSearch=function(){c.setState({showSearch:!1,searchFor:""})},c.openCart=function(){c.setState({showCart:!0})},c.closeCart=function(){c.setState({showCart:!1})},c.state={showSearch:!1,showCart:!1,searchFor:"",cart:[],totalPrice:0},c}return Object(m.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{cartLength:this.state.cart.length,openSearch:this.openSearch,closeSearch:this.closeSearch,openCart:this.openCart,closeCart:this.closeCart}),Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/products/:productId",children:Object(c.jsx)(Xe,{addToCart:this.addToCart})}),Object(c.jsx)(b.a,{exact:!0,path:"/products",children:Object(c.jsx)(Xe,{addToCart:this.addToCart})}),Object(c.jsx)(b.a,{exact:!0,path:"/catalog/:categoryId",children:Object(c.jsx)(He,{})}),Object(c.jsx)(b.a,{exact:!0,path:"/catalog",children:Object(c.jsx)(He,{})}),Object(c.jsx)(b.a,{exact:!0,path:"/",children:Object(c.jsx)(R,{})})]}),Object(c.jsx)(F,{setSearchFor:this.setSearchFor,closeSearch:this.closeSearch,showSearch:this.state.showSearch}),Object(c.jsx)(P,{updateQuantity:this.updateQuantity,totalPrice:this.state.totalPrice,cartContent:this.state.cart,closeCart:this.closeCart,showCart:this.state.showCart})]})}}]),t}(i.Component),Ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(a){var t=a.getCLS,c=a.getFID,i=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),c(e),i(e),r(e),s(e)}))};n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(_.a,{children:Object(c.jsx)(qe,{})})}),document.getElementById("root")),Ue()},6:function(e,a,t){e.exports={container:"Header_container__1EGzL",logo:"Header_logo__3az93",shop:"Header_shop__oQK8K",btn:"Header_btn__1F50s",cartLengthBlack:"Header_cartLengthBlack__ChUiR",logoBlack:"Header_logoBlack__2-zbV",shopBlack:"Header_shopBlack__2I48L",btnBlack:"Header_btnBlack__3hz8G",cartLength:"Header_cartLength__1CmcK",nav:"Header_nav__k74OO",svgSearch:"Header_svgSearch__3CjyM",cartBtnContainer:"Header_cartBtnContainer__7qiZ1",svgArrow:"Header_svgArrow__31QUZ",svgArrowBlack:"Header_svgArrowBlack__2-N38",svgCart:"Header_svgCart__182oV"}}},[[50,1,2]]]);
//# sourceMappingURL=main.179386ea.chunk.js.map