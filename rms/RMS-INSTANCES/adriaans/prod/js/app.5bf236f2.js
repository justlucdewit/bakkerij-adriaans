(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/bakkerij-adriaans/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00ae":function(t,e,n){},"09f7":function(t,e,n){"use strict";n("e172")},"14c9":function(t,e,n){"use strict";n("ae39")},"21bb":function(t,e,n){"use strict";n("2dad")},"2dad":function(t,e,n){},3609:function(t,e,n){"use strict";n("719d")},4266:function(t,e,n){"use strict";n("927d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{logo:t.companyInfo.companyLogo,navLinks:t.navLinks,linkWidth:78}}),n("div",{staticStyle:{margin:"50px","flex-grow":"1"}},[n("router-view")],1),n("Footer",{attrs:{socials:t.companyInfo.socials,image:t.companyInfo.companyLogo}})],1)},o=[],i=n("1da1"),c=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("div",{staticClass:"header"},[t.logo?n("span",{attrs:{id:"logo"}},[n("img",{attrs:{src:t.logo,alt:"logo"}})]):t._e(),t.title?n("span",{attrs:{id:"title"}},[t._v(" "+t._s(t.title)+" ")]):t._e(),n("span",{attrs:{id:"navbar"}},t._l(t.navLinks,(function(e){return n("router-link",{key:e.to,staticClass:"router-link",style:"width: "+t.linkWidth+"px;",attrs:{to:e.to}},[t._v(" "+t._s(e.name)+" ")])})),1)]),n("div",{staticClass:"navigator"},t._l(t.navLinks,(function(e){return n("router-link",{key:e.to,staticClass:"router-link",style:"width: "+t.linkWidth+"px;",attrs:{to:e.to}},[t._v(" "+t._s(e.name)+" ")])})),1),t.navLinks.length>0?n("div",{staticClass:"mobile-navigator"},[n("button",{staticClass:"btn",on:{click:t.toggleBurger}},[n("unicon",{attrs:{name:"bars",fill:"black"}})],1),t.burgerOpen?n("div",{staticClass:"link-list"},t._l(t.navLinks,(function(e){return n("router-link",{key:e.to,staticClass:"router-link",attrs:{to:e.to},nativeOn:{click:function(e){t.burgerOpen=!1}}},[t._v(" "+t._s(e.name)+" ")])})),1):t._e()]):t._e()])}),l=[],u=(n("a9e3"),{props:{title:{type:String,default:null},logo:{type:String,default:null},navLinks:{type:Array,default:function(){return[]}},linkWidth:{type:Number,default:40}},data:function(){return{burgerOpen:!1}},methods:{toggleBurger:function(){this.burgerOpen=!this.burgerOpen}}}),d=u,p=(n("3609"),n("2877")),m=Object(p["a"])(d,c,l,!1,null,"3de1626d",null),f=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("DoubleSection",{scopedSlots:t._u([{key:"left",fn:function(){return[n("span",{attrs:{id:"image-and-version"}},[n("div",[t.image?n("img",{staticStyle:{width:"200px",padding:"20px 20px 20px 0px"},attrs:{src:t.image,alt:"footer image"}}):t._e()]),n("div",[t._v(" v"+t._s(t.version)+" ")])])]},proxy:!0},{key:"right",fn:function(){return[n("span",{attrs:{id:"socials"}},[n("a",{attrs:{rel:"noopener",href:"https://www.facebook.com/"+t.socials.facebook,target:"_blank"}},[n("div",{staticClass:"social"},[n("unicon",{attrs:{name:"facebook"}}),t._v(" "+t._s(t.socials.facebook)+" ")],1)]),n("a",{attrs:{rel:"noopener",href:"mailto:"+t.socials.email,target:"_blank"}},[n("div",{staticClass:"social"},[n("unicon",{attrs:{name:"at"}}),t._v(" "+t._s(t.socials.email)+" ")],1)]),n("a",{attrs:{rel:"noopener",href:"tel:"+t.socials.tel,target:"_blank"}},[n("div",{staticClass:"social"},[n("unicon",{attrs:{name:"phone"}}),t._v(" "+t._s(t.socials.tel)+" ")],1)]),n("a",{attrs:{rel:"noopener",href:"https://api.whatsapp.com/send?phone="+t.socials.tel+"&app=DWWSite",target:"_blank"}},[n("div",{staticClass:"social"},[n("unicon",{attrs:{name:"whatsapp"}}),t._v(" "+t._s(t.socials.tel)+" ")],1)])])]},proxy:!0}])})],1)},b=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"double-section"},[n("span",{staticClass:"left"},[t._t("left")],2),n("span",[t._t("right")],2)])},h=[],k={},w=k,_=(n("14c9"),Object(p["a"])(w,g,h,!1,null,"5a86c134",null)),y=_.exports,C=n("9224"),j={components:{DoubleSection:y},props:{socials:{type:Array,default:function(){return[]}},image:{type:String,default:null}},data:function(){return{version:C["a"]}}},x=j,O=(n("4266"),Object(p["a"])(x,v,b,!1,null,"57dc8036",null)),S=O.exports,P=(n("99af"),n("bc3a")),E=n.n(P),z={socials:{facebook:"BakkerijAdriaans",email:"bakkerijadriaans@gmail.com",tel:"0624939954"},server_url:"https://rhino-ms.herokuapp.com",company_id:2},L={},D=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!L[e]){t.next=4;break}return t.abrupt("return",L[e]);case 4:return t.next=6,n();case 6:return L[e]=t.sent,t.abrupt("return",L[e]);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),W=function(){return D("getCompanyInfo",Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(z.server_url,"/api/open/").concat(z.company_id,"/general/get-info"),t.next=3,E.a.get(e);case 3:return n=t.sent,n.data.socials=z.socials,t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)}))))},$=function(){return D("getCompanyProducts",Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(z.server_url,"/api/open/").concat(z.company_id,"/products/all"),t.next=3,E.a.get(e);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)}))))},N={getCompanyInfo:W,getProductList:$},R={components:{Header:f,Footer:S},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.getCompanyInfo();case 2:t.companyInfo=e.sent,document.title=t.companyInfo.companyName;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{companyInfo:{},navLinks:[{name:"Home",to:"/home"},{name:"Producten",to:"/producten"}],socials:[{type:"facebook",link:"https://www.facebook.com/De-Wit-Worstenbrood-100184555272377/",name:"De Wit Worstenbrood"},{type:"at",link:"mailto:john@dewitworstenbrood.nl",name:"john@dewitworstenbrood.nl"},{type:"phone",link:"tel:31610184265",name:"31610184265"},{type:"whatsapp",link:"https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=Hallo, ik zou graag <aantal> <product> willen afhalen, wanneer kan ik ze komen ophalen?",name:"31610184265"}]}}},T=R,A=(n("5c0b"),Object(p["a"])(T,s,o,!1,null,null,null)),I=A.exports,q=n("cb81"),B=n.n(q),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("OverlayPopup",{ref:"orderCount"},[n("div",{staticClass:"order-count-wrapper"},[n("div",{staticClass:"order-count-announcement"},[t._v(" U staat op het punt om '"+t._s(t.activeProduct.name)+"' toe te voegen aan uw winkelmand ")]),n("div",{staticClass:"order-count-counter"},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("Hoeveelheid: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.productCount,expression:"productCount"}],attrs:{type:"number"},domProps:{value:t.productCount},on:{input:function(e){e.target.composing||(t.productCount=e.target.value)}}})]),n("div",{staticClass:"order-count-counter"},[n("span",{staticStyle:{"margin-right":"20px"}},[t._v("Minder pittig: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lessSpicy,expression:"lessSpicy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.lessSpicy)?t._i(t.lessSpicy,null)>-1:t.lessSpicy},on:{change:function(e){var n=t.lessSpicy,a=e.target,r=!!a.checked;if(Array.isArray(n)){var s=null,o=t._i(n,s);a.checked?o<0&&(t.lessSpicy=n.concat([s])):o>-1&&(t.lessSpicy=n.slice(0,o).concat(n.slice(o+1)))}else t.lessSpicy=r}}})]),n("span",[n("button",{staticClass:"btn cancle",staticStyle:{"margin-right":"20px"},on:{click:function(e){t.$refs.orderCount.show=!1}}},[t._v(" ANNULEER ")]),n("button",{staticClass:"btn confirm",on:{click:t.addProductsToBasket}},[t._v(" TOEVOEGEN € "+t._s((t.productCount*t.activeProduct.price).toFixed(2))+" ")])])])]),n("OverlayPopup",{ref:"basketView"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[n("div",{staticClass:"order-count-wrapper"},[n("div",{staticClass:"order-count-announcement"},[t._v(" Winkelmand • "),n("span",{staticClass:"price"},[t._v("€ "+t._s(t.basketTotal.toFixed(2)))])]),n("table",{staticClass:"basket-list"},[n("thead",[n("tr",[n("th",[t._v("Product")]),n("th",[t._v("Aantal")]),n("th",[t._v("Prijs totaal")])])]),n("tbody",t._l(Object.entries(t.basket),(function(e,a){return n("tr",{key:a},[n("td",[t._v(" "+t._s(e[0])+" ")]),n("td",[t._v(" "+t._s(e[1].count)+" ")]),n("td",[t._v(" € "+t._s((e[1].count*e[1].price).toFixed(2))+" ")])])})),0)]),n("span",[n("span",[t._v("Ophaal datum   ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pickupDate,expression:"pickupDate"}],staticStyle:{width:"120px","margin-bottom":"20px"},attrs:{type:"date"},domProps:{value:t.pickupDate},on:{input:function(e){e.target.composing||(t.pickupDate=e.target.value)}}})]),n("span",[n("button",{class:{"btn confirm":!0},staticStyle:{"margin-right":"20px"},on:{click:function(e){t.$refs.basketView.show=!1}}},[t._v(" VERDER WINKELEN ")]),n("button",{class:{"btn confirm":!0,disabled:""===t.pickupDate},attrs:{disabled:""===t.pickupDate},on:{click:function(e){t.$refs.basketView.show=!1,t.$refs.orderPlacer.show=!0}}},[t._v(" BESTELLEN € "+t._s(t.basketTotal.toFixed(2))+" ")])])])])])]),n("OverlayPopup",{ref:"orderPlacer"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[n("div",{staticClass:"order-count-wrapper"},[n("div",{staticClass:"order-count-announcement"},[t._v(" Bestellen ")]),n("div",{staticStyle:{"margin-bottom":"40px"}},[t._v(" Kies Uw methode om te bestellen: ")]),n("div",{staticClass:"order-methods"},[n("a",{staticClass:"order-method-card",attrs:{rel:"noopener",href:"https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text="+t.GetOrderMessage(),target:"_blank"}},[n("unicon",{attrs:{name:"whatsapp"}})],1),n("a",{staticClass:"order-method-card",attrs:{rel:"noopener",href:"mailto:john@dewitworstenbrood.nl?subject=bestelling&body="+t.GetOrderMessage(),target:"_blank"}},[n("unicon",{attrs:{name:"envelope"}})],1)]),n("span",{staticStyle:{"margin-top":"40px"}},[n("button",{staticClass:"btn cancle",staticStyle:{"margin-right":"20px"},on:{click:function(e){t.$refs.orderPlacer.show=!1}}},[t._v(" TERUG ")])])])])])]),t._m(0)],1)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"50px","flex-grow":"1"}},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content"},[n("span",{staticClass:"center",staticStyle:{padding:"20px 0px"}},[n("h1",[t._v("Bakkerij Adriaans")]),n("h3",{staticStyle:{"margin-top":"-30px"}},[t._v("Lorem Ipsum")]),n("p",[t._v(" lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),n("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio officiis consequatur, facilis sapiente ipsum commodi eos ullam tenetur iste corrupti nam quas nobis illo id odit natus nihil temporibus? ")])]),n("br"),n("br"),n("br")])])])}],H=(n("e9c4"),n("b0c0"),n("d81d"),n("4fad"),n("d3b7"),n("159b"),n("b680"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"overlay"},[t._t("default")],2):t._e()}),J=[],M={data:function(){return{show:!1}}},V=M,G=(n("86e8"),Object(p["a"])(V,H,J,!1,null,null,null)),X=G.exports,K={components:{OverlayPopup:X},methods:{orderItem:function(t){this.productCount=1,this.lessSpicy=!1,this.activeProduct=JSON.parse(JSON.stringify(this.products[t])),this.$refs.orderCount.show=!0},addProductsToBasket:function(){this.lessSpicy&&(this.activeProduct.name+=" (minder pittig)");var t=this.basket[this.activeProduct.name];t?t.count=Number(t.count)+Number(this.productCount):this.basket[this.activeProduct.name]={count:this.productCount,price:this.activeProduct.price},this.$refs.orderCount.show=!1,this.$refs.basketView.show=!0,this.calcBasketTotal()},calcBasketTotal:function(){var t=Object.entries(this.basket).map((function(t){return t[1]}));this.basketTotal=t.reduce((function(t,e){return t+e.price*e.count}),0)},GetOrderMessage:function(){var t="Beste John, ik zou graag een bestelling willen plaatsen bij de Wit worstenbroodjes. %0A%0AIk zou graag het volgende willen bestellen:%0A";return Object.entries(this.basket).forEach((function(e){t+="".concat(e[1].count,"x ").concat(e[0]," %0A")})),t+="%0ADat wordt dan in totaal ".concat(this.basketTotal.toFixed(2)," euro, en ik zou de bestelling graag af willen halen op ").concat(this.pickupDate),t}},data:function(){return{basketTotal:0,lessSpicy:!1,pickupDate:"",activeProduct:{},basket:{},productCount:1,products:[{image:"products/worstenbroodje.jpg",name:"Worstenbroodjes",description:["Normaal standaard worstenbroodje zijn altijd vers gebakken uit de oven, en handgemaakt door een hobbybakker.   Ze zijn in te vriezen als u ze heeft opgehaald.","Houd je niet van pittig bestel dan de mildere versie."],weight:"90 - 95 gram",price:1},{image:"products/worstenbroodje-klein.png",name:"Worstenbroodjes klein",description:["Deze worstenbroodjes zijn de kleinere variant van onze standaard worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper. Ze zijn in te vriezen als u ze heeft opgehaald.","Houd je niet van pittig bestel dan de mildere versie."],weight:"40 - 45 gram",price:.5},{image:"products/worstenbol.jpg",name:"Witbollen",description:["Deze worstenbroodjes zijn de bol vormige variant van onze standaard pittige worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper.","hou je niet van pittig? dan kun je ook in de bestelling aangeven dat je het worstenbroodje wat milder wilt hebben."],weight:"40 - 45 gram",price:.5},{image:"products/worstenbrood-xxxl.png",name:"Worstenbrood XXXL",description:["Op verzoek maken we ook XXXL worstenbroodjes. Deze worstenbroodjes zijn rond de 200 gram dus bijna een maaltijd. Leuk om cadeau te geven.","Het is ook mogelijk om er een cijfer in te laten bakken."],weight:"200 gram",price:2.5}]}}},Y=K,Z=(n("21bb"),Object(p["a"])(Y,F,U,!1,null,null,null)),Q=Z.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products-wrapper"},[n("div",{staticClass:"products"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"zoeken..."}}),n("ProductList",{attrs:{products:t.products}})],1)])},et=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-list"},t._l(t.products,(function(e,a){return n("div",{key:a},[n("DoubleSection",[n("p",{staticClass:"product-image-wrapper",attrs:{slot:"left"},slot:"left"},[n("img",{staticClass:"product-image",attrs:{src:e.image,alt:e.name+" product image"}})]),n("div",{staticClass:"product-info",attrs:{slot:"right"},slot:"right"},[n("div",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"weight"},[t._v(" "+t._s(e.weight)+" • "),n("span",{staticClass:"price"},[t._v("€ "+t._s(e.basePrice.toFixed(2)))]),t._v(" per stuk ")]),n("div",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")]),n("div",[n("button",{staticClass:"btn",on:{click:function(e){return t.$emit("order",a)}}},[t._v("BESTELLEN € "+t._s(e.basePrice.toFixed(2))+" ")])])])]),n("br"),n("hr",{staticStyle:{color:"white"}}),n("br"),n("br"),n("br")],1)})),0)},at=[],rt={props:{products:{type:Array,required:!0}},components:{DoubleSection:y}},st=rt,ot=(n("60f0"),Object(p["a"])(st,nt,at,!1,null,"131a0b6c",null)),it=ot.exports,ct={components:{DoubleSection:y,ProductList:it},data:function(){return{products:[]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.getProductList();case 2:t.products=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},lt=ct,ut=(n("8f27"),Object(p["a"])(lt,tt,et,!1,null,"33689443",null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reviews-wrapper"},[n("div",{staticClass:"reviews"},[n("div",{staticClass:"section"},[n("div",{staticClass:"question"},[t._v("Hoeveel sterren geef jij mijn worstenbroodjes?")]),n("div",{staticClass:"entry stars"},[n("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=1?"gold":"gray"},on:{click:function(e){t.form.stars=1}}}),n("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=2?"gold":"gray"},on:{click:function(e){t.form.stars=2}}}),n("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=3?"gold":"gray"},on:{click:function(e){t.form.stars=3}}}),n("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=4?"gold":"gray"},on:{click:function(e){t.form.stars=4}}}),n("Unicon",{staticClass:"star",attrs:{name:"star",fill:t.form.stars>=5?"gold":"gray"},on:{click:function(e){t.form.stars=5}}})],1)]),n("div",{staticClass:"section"},[n("div",{staticClass:"question"},[t._v("Wat is jouw naam?")]),n("div",{staticClass:"entry stars"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),n("div",{staticClass:"section"},[n("div",{staticClass:"question"},[t._v("Wanneer heb jij jouw worstenbroodjes afgehaald?")]),n("div",{staticClass:"entry stars"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.date,expression:"form.date"}],attrs:{type:"date"},domProps:{value:t.form.date},on:{input:function(e){e.target.composing||t.$set(t.form,"date",e.target.value)}}})])]),n("div",{staticClass:"section"},[n("div",{staticClass:"question"},[t._v("Waarom vind je mijn worstenbroodjes zo lekker?")]),n("div",{staticClass:"entry stars"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],attrs:{resize:"none"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}})])]),n("button",{class:{"section btn confirm":!0,disabled:!t.formCompleted},attrs:{disabled:!t.formCompleted},on:{click:t.sendForm}},[t._v("Verstuur beoordeling")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),t._v(" Reviews van anderen: "),n("div",{staticClass:"review-list"},t._l(t.reviews,(function(e){return n("div",{key:"review-"+e.id,staticClass:"review-item"},[n("hr",{staticStyle:{border:"1px solid #ddd"}}),n("div",{staticClass:"top"},[n("span",{staticClass:"reviewer"},[t._v(" "+t._s(e.name)+" ")]),t._l(e.stars,(function(t){return n("span",{key:"star-"+t,staticClass:"star"},[n("Unicon",{attrs:{name:"star",fill:"gold"}})],1)}))],2),n("div",{staticClass:"mid"},[t._v(" "+t._s(e.date.split(" ")[0])+" ")]),n("div",{staticClass:"bottom"},[t._v(" "+t._s(e.comment)+" ")])])})),0)])])},mt=[],ft={data:function(){return{reviews:[],form:{stars:4,name:"",comment:"",date:""}}},computed:{formCompleted:function(){return""!==this.form.name&&""!==this.form.comment&&""!==this.form.date}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.dewitworstenbrood.nl/reviews");case 2:n=e.sent,t.reviews=n.data;case 4:case"end":return e.stop()}}),e)})))()},methods:{sendForm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("https://api.dewitworstenbrood.nl/reviews",t.form);case 2:e.sent,location.reload();case 4:case"end":return e.stop()}}),e)})))()}}},vt=ft,bt=(n("09f7"),Object(p["a"])(vt,pt,mt,!1,null,"60b7b958",null)),gt=bt.exports,ht=n("a584"),kt=n("d327");B.a.add([kt["b"],kt["d"],kt["e"],kt["a"],kt["g"],kt["c"],kt["f"]]),a["a"].use(B.a),a["a"].use(r["a"]),a["a"].use(ht["a"],{config:{id:"G-LLJJC2YYJ6"},appName:"Dewit worstenbrood website",pageTrackerScreenviewEnabled:!0},_t);var wt=[{path:"/",component:Q,name:"home"},{path:"*",component:Q,name:"home"},{path:"/home",component:Q,name:"home"},{path:"/producten",component:dt,name:"producten"},{path:"/reviews",component:gt,name:"reviews"}],_t=new r["a"]({routes:wt});a["a"].config.productionTip=!1,new a["a"]({router:_t,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"60f0":function(t,e,n){"use strict";n("00ae")},"6d3d":function(t,e,n){},"719d":function(t,e,n){},"86e8":function(t,e,n){"use strict";n("6d3d")},"8f27":function(t,e,n){"use strict";n("e1c4")},9224:function(t){t.exports=JSON.parse('{"a":"1.5.0"}')},"927d":function(t,e,n){},"9c0c":function(t,e,n){},ae39:function(t,e,n){},e172:function(t,e,n){},e1c4:function(t,e,n){}});
//# sourceMappingURL=app.5bf236f2.js.map