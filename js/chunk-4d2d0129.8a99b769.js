(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d2d0129"],{8418:function(t,a,s){"use strict";var i=s("c04e"),e=s("9bf2"),r=s("5c6c");t.exports=function(t,a,s){var n=i(a);n in t?e.f(t,n,r(0,s)):t[n]=s}},"99af":function(t,a,s){"use strict";var i=s("23e7"),e=s("d039"),r=s("e8b5"),n=s("861d"),l=s("7b0b"),c=s("50c4"),o=s("8418"),u=s("65f0"),f=s("1dde"),d=s("b622"),v=s("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",C=v>=51||!e((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),w=function(t){if(!n(t))return!1;var a=t[p];return void 0!==a?!!a:r(t)},_=!C||!b;i({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,i,e,r,n=l(this),f=u(n,0),d=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],w(r)){if(e=c(r.length),d+e>h)throw TypeError(m);for(s=0;s<e;s++,d++)s in r&&o(f,d,r[s])}else{if(d>=h)throw TypeError(m);o(f,d++,r)}return f.length=d,f}})},d504:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"layout"},[s("div",[s("customerNavbar"),s("router-view")],1),s("footer",[s("customerFooter"),s("scrolltop",{style:{opacity:t.isOpacity}})],1)])},e=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sticky-top"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark w-100 navbar-bg",class:{active:t.isScroll}},[s("div",{staticClass:"container-xl"},[s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[s("h1",{staticClass:"h2 text-white mb-0"},[t._v("FAIRY TREE")])]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav h6 ml-auto font-weight-bold"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{"px-2":!t.iswidth},attrs:{to:"/customerProducts"}},[s("span",[t._v("商品列表")]),t.iswidth?t._e():s("i",{staticClass:"fas fa-store pl-1"})])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{"px-2":!t.iswidth},attrs:{to:"/favorites"}},[s("span",[t._v("我的收藏")]),t.iswidth?t._e():s("i",{staticClass:"far fa-heart pl-1"})])],1),s("li",{staticClass:"nav-item navbar-cart"},[s("router-link",{staticClass:"nav-link",class:{"px-2":!t.iswidth},attrs:{to:"/cart"}},[s("span",[t._v("購物車")]),t.iswidth?t._e():s("i",{staticClass:"fas fa-shopping-cart pl-1"}),t.cartLength?s("span",[t._v("("+t._s(t.cartLength)+")")]):t._e()])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",class:{"px-2":!t.iswidth},attrs:{to:"/login"}},[s("span",[t._v("後台登入")]),t.iswidth?t._e():s("i",{staticClass:"fas fa-user-cog pl-1"})])],1)])])],1)])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],l=(s("99af"),{name:"CustomerNavber",data:function(){return{carts:"",scroll:"",width:"",iswidth:!1,isScroll:!1}},methods:{getCartLength:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io/","api/").concat("minjia","/cart"),s=[];t.$http.get(a).then((function(a){s=a.data.data.carts,t.carts=s}))}},computed:{cartLength:function(){var t=this;return t.getCartLength(),t.carts.length}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scroll=document.documentElement.scrollTop,0!==t.scroll?t.isScroll=!0:t.isScroll=!1})),window.onresize=function(){t.width=document.documentElement.clientWidth,t.width>992?t.iswidth=!1:t.iswidth=!0}},created:function(){this.getCartLength()}}),c=l,o=s("2877"),u=Object(o["a"])(c,r,n,!1,null,null,null),f=u.exports,d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-12"},[s("div",{staticClass:"bg-primary py-3"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"input-group position-relative"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control py-6 pl-8",staticStyle:{"background-clip":"border-box"},attrs:{type:"email","aria-describedby":"button-addon2",id:"mail",placeholder:"請輸入Email，獲取最新消息與優惠碼"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-third px-5 text-primary rounded-0",attrs:{type:"button",id:"button-addon2"},on:{click:t.subscribe}},[s("i",{staticClass:"fas fa-arrow-right"})])])])])])])]),s("div",{staticClass:"bg-secondary pt-8 pb-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justi"},[s("div",{staticClass:"col-md-4 text-right"},[s("div",{staticClass:"text-white"},[s("h6",[t._v("關於Fairy Tree")]),s("ul",{staticClass:"footer-list"},[s("li",{staticClass:"mb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fas fa-truck-moving"}),t._v(" 運送方式")])]),s("li",{staticClass:"mb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fas fa-question-circle"}),t._v(" 常見問題")])]),s("li",{staticClass:"mb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fas fa-user-secret"}),t._v(" 隱私政策")])])])])]),s("div",{staticClass:"col-md-4 text-center"},[s("div",{staticClass:"text-white"},[s("h6",[t._v("關注我們")]),s("ul",{staticClass:"footer-list"},[s("li",{staticClass:"mb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fab fa-facebook-square"}),t._v(" Facebook")])]),s("li",{staticClass:"mb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fab fa-instagram"}),t._v(" Instagram")])]),s("li",{staticClass:"mb-1"},[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fab fa-github-square"}),t._v(" 關於作者")])])])])]),s("div",{staticClass:"col-md-4 text-left"},[s("div",{staticClass:"text-white"},[s("h6",[t._v("客戶服務")]),s("ul",{staticClass:"footer-list"},[s("li",[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fas fa-phone-square-alt"}),t._v("：0912-666-333")])]),s("li",[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fas fa-clock"}),t._v("：9am － 8pm")])]),s("li",[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"far fa-envelope"}),t._v("：fairytree@fairytree.com")])]),s("li",[s("a",{staticClass:"text-white",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("i",{staticClass:"fab fa-line"}),t._v("：@fairytree")])])])])])]),t._m(2)])])])},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-6 mt-auto mb-auto"},[s("p",{staticClass:"text-white mb mb-md-0 h4 text-left"},[t._v(" 訂閱仙女樹獲取最新消息 ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("label",{staticClass:"position-absolute footer-form-icon-position h4 text-primary",attrs:{for:"mail"}},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-white text-center"},[s("p",[t._v(" © Fairy Tree 本網站僅供練習 "),s("br"),t._v("圖資來源為網路資源，無任何商業營利用途 ")])])}],p={name:"CustomerFooter",data:function(){return{email:""}},methods:{subscribe:function(){var t=this,a=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;a.test(t.email)?(t.$swal.fire({position:"center",width:"20rem",icon:"success",title:"感謝訂閱",text:"優惠碼：FairyTree"}),t.email=""):(t.$swal.fire({position:"top",width:"20rem",icon:"error",title:"請輸入正確格式",showConfirmButton:!1,timer:1e3}),t.email="")}}},h=p,m=Object(o["a"])(h,d,v,!1,null,null,null),C=m.exports,b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"ScrollTop rounded-left"},[s("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.scrollTop(a)}}},[s("i",{staticClass:"fas fa-angle-up"})])])},w=[],_=s("1157"),g=s.n(_),x={name:"ScrollTop",methods:{scrollTop:function(){g()("html ,body").animate({scrollTop:0},1e3)}}},k=x,y=Object(o["a"])(k,b,w,!1,null,null,null),E=y.exports,T={name:"Index",data:function(){return{scrollTop:"",isOpacity:0}},components:{customerNavbar:f,customerFooter:C,scrolltop:E},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollTop=document.documentElement.scrollTop,t.scrollTop>150?t.isOpacity=1:t.isOpacity=0}))}},$=T,D=Object(o["a"])($,i,e,!1,null,null,null);a["default"]=D.exports}}]);
//# sourceMappingURL=chunk-4d2d0129.8a99b769.js.map