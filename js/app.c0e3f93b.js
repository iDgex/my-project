(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/my-project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"093a":function(t,e,a){},"0f43":function(t,e,a){},"19b3":function(t,e,a){},"3d13":function(t,e,a){"use strict";var n=a("093a"),r=a.n(n);r.a},"538d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("537a");var n=a("ac28"),r=(a("a52c"),a("2ed4")),s=(a("7844"),a("5596")),i=(a("4b0a"),a("2bb1")),o=(a("3df5"),a("2830")),c=(a("0ec5"),a("21ab")),l=(a("4056"),a("44bf")),u=(a("2994"),a("2bdd")),d=(a("5246"),a("6b41")),v=(a("81e6"),a("9ffb")),f=(a("4d48"),a("d1e1")),p=(a("c3a6"),a("ad06")),m=(a("5852"),a("d961")),h=(a("66b9"),a("b650")),_=(a("570a"),a("1d36")),b=(a("a39e"),a("241e")),g=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[a("router-view")],1),a("van-tabbar",{attrs:{fixed:!0,border:!0,route:!0,"active-color":"#ee0a24"},on:{change:t.setTabbarIndex},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.list,(function(e,n){return a("van-tabbar-item",{key:n,class:{"van-tabbar-active ":n==t.active},attrs:{icon:e.icon}},[t._v(t._s(e.text))])})),1)],1)},x=[],y=(a("b0c0"),{data:function(){return{active:0,list:[{name:"Home",icon:"wap-home-o",text:"首页"},{name:"Sort",icon:"apps-o",text:"分类"},{name:"ShoppingCart",icon:"shopping-cart-o",text:"购物车"},{name:"My",icon:"user-o",text:"我"}]}},mounted:function(){},methods:{setTabbarIndex:function(t){this.$router.push({name:this.list[t].name})}}}),w=y,A=(a("7faf"),a("2877")),S=Object(A["a"])(w,C,x,!1,null,null,null),j=S.exports,k=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("van-search",{staticClass:"van-hairline--bottom home_search",attrs:{placeholder:"请输入搜索关键词",disabled:"","input-align":"center"}}),t.banner.length>0?a("van-swipe",{staticClass:"home_swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.banner,(function(t){return a("van-swipe-item",{key:t.id},[a("van-image",{attrs:{height:"100%",fit:"cover",src:t.img.url}})],1)})),1):t._e(),t.floor.length>0?a("van-grid",{staticClass:"floor",attrs:{border:!1,"column-num":t.floor.length/2}},t._l(t.floor,(function(e){return a("van-grid-item",{key:e.id,staticClass:"floor_item"},[a("van-image",{attrs:{src:e.img,width:"0.4rem",radius:"100%"}}),a("span",{staticClass:"text",domProps:{textContent:t._s(e.name)}})],1)})),1):t._e(),a("van-nav-bar",{staticClass:"list_title",attrs:{title:"为你推荐",border:!1}}),a("van-list",{attrs:{finished:t.finished,"finished-text":"我已经到底了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("van-grid",{staticClass:"home_goods",attrs:{border:!1,"column-num":2}},t._l(t.list,(function(e){return a("van-grid-item",{key:e,attrs:{default:""}},[a("div",{staticClass:"home_goods_item"},[a("van-image",{attrs:{fit:"cover",width:"100%",height:"1.8rem",src:"https://pop.nosdn.127.net/90d9a7d24dcf4b06a2c5a041c8e6ee9b_800_800.jpg?imageView&thumbnail=345x345&quality=95&type=webp"}}),a("div",{staticClass:"text van-multi-ellipsis--l2"},[t._v("Adidas阿迪达斯Superstar经典款贝壳头男女运动板鞋小白鞋钻闪F33889 金标C77124/C77154升级版FU7712/EG4958")]),a("div",{staticClass:"current"},[a("span",[t._v("319")])])],1)])})),1)],1)],1)},E=[],P={name:"home",data:function(){return{banner:[],floor:[],list:[],loading:!1,finished:!1}},created:function(){var t=this,e=this.SHA1.get(),a="https://d.apicloud.com/mcm/api/floor";this.axios.get(a,{params:{limit:10},headers:e}).then((function(e){t.floor=e.data})),this.axios.get("https://d.apicloud.com/mcm/api/banner",{params:{limit:10},headers:e}).then((function(e){t.banner=e.data}))},methods:{onLoad:function(){var t=this;setTimeout((function(){for(var e=0;e<10;e++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)}),1e3)}}},$=P,M=(a("d120"),Object(A["a"])($,O,E,!1,null,"6f119ee6",null)),F=M.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shopping_cart"},[a("van-nav-bar",{attrs:{title:"购物车",fixed:!0}}),a("van-row",{staticClass:"page_null",attrs:{type:"flex",justify:"center",align:"center"}},[a("div",{staticClass:"text"},[t._v("您的购物车还没有商品")]),a("van-button",{attrs:{type:"default",round:"",size:"small",text:"去逛逛",color:"#f32d2e"}})],1)],1)},T=[],I={name:"shopping_cart"},L=I,U=(a("78d7"),Object(A["a"])(L,H,T,!1,null,"65806516",null)),D=U.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sort"},[a("van-nav-bar",{attrs:{title:"分类",fixed:!0}}),a("van-sidebar",{staticClass:"sort_sidebar scroller_y",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.list,(function(t,e){return a("van-sidebar-item",{key:e,attrs:{title:t.name}})})),1),t._l(t.list,(function(e,n){return a("transition",{key:n,attrs:{name:"van-fade"}},[a("van-grid",{directives:[{name:"show",rawName:"v-show",value:n==t.active,expression:"index == active"}],staticClass:"sort_list",attrs:{"column-num":3,border:!1}},t._l(e.list,(function(t,e){return a("van-grid-item",{key:e,attrs:{text:t.name,icon:t.img}})})),1)],1)}))],2)},X=[],Z={name:"sort",data:function(){return{list:[],active:0}},computed:{sortList:function(){return this.list[this.active].list}},mounted:function(){var t=this,e=this.SHA1.get();this.axios.get("https://d.apicloud.com/mcm/api/sort",{params:{limit:10},headers:e}).then((function(e){t.list=e.data}))}},q=Z,z=(a("6f2b"),Object(A["a"])(q,J,X,!1,null,"0e9bd72c",null)),B=z.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my"},[a("van-row",{staticClass:"sign_in",attrs:{type:"flex",align:"center"}},[a("van-icon",{staticClass:"img flex_center",attrs:{name:"manager"}}),a("span",[t._v("登陆/注册")])],1),a("van-row",{staticClass:"user_vip",attrs:{type:"flex",justify:"space-around"}},[a("div",{staticClass:"icon_vip"},[t._v("精选会员")]),a("div",{staticClass:"text"},[t._v("优选好货低至7折")]),a("div",{staticClass:"btn flex_center"},[a("span",[t._v("开通享特权")]),a("van-icon",{attrs:{name:"arrow"}})],1)]),a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"more flex_center"},[a("span",[t._v("全部订单")]),a("van-icon",{attrs:{name:"arrow"}})],1),a("van-grid",{staticClass:"box order_form",attrs:{border:!1,"column-num":"5"}},[a("van-grid-item",{attrs:{icon:"card",text:"待付款"}}),a("van-grid-item",{attrs:{icon:"todo-list",text:"待发货"}}),a("van-grid-item",{attrs:{icon:"send-gift",text:"待收货"}}),a("van-grid-item",{attrs:{icon:"comment",text:"待评价"}}),a("van-grid-item",{attrs:{icon:"gold-coin",text:"退款/售后"}})],1)],1),a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"more flex_center"},[a("span",[t._v("进入钱包")]),a("van-icon",{attrs:{name:"arrow"}})],1),a("van-grid",{staticClass:"box wallet",attrs:{border:!1,"column-num":"3"}},[a("van-grid-item",[a("van-row",{attrs:{type:"flex",align:"center"}},[a("span",{staticClass:"text"},[t._v("0")]),a("span",[t._v("优惠券")])])],1),a("van-grid-item",[a("van-row",{attrs:{type:"flex",align:"center"}},[a("span",{staticClass:"text"},[t._v("0")]),a("span",[t._v("店铺会员")])])],1),a("van-grid-item",[a("van-row",{attrs:{type:"flex",align:"center"}},[a("span",{staticClass:"text"},[t._v("0.00")]),a("span",[t._v("分期支付")])])],1)],1)],1),a("div",{staticClass:"container"},[t._m(2),a("van-grid",{staticClass:"box wallet",attrs:{border:!1,"column-num":"4"}},[a("van-grid-item",[a("van-row",{attrs:{type:"flex",align:"center"}},[a("span",{staticClass:"text"},[t._v("0")]),a("span",[t._v("关注商品")])])],1),a("van-grid-item",[a("van-row",{attrs:{type:"flex",align:"center"}},[a("span",{staticClass:"text"},[t._v("0")]),a("span",[t._v("关注店铺")])])],1),a("van-grid-item",[a("van-row",{attrs:{type:"flex",align:"center"}},[a("span",{staticClass:"text"},[t._v("0")]),a("span",[t._v("喜欢内容")])])],1),a("van-grid-item",[a("van-row",{attrs:{type:"flex",align:"center"}},[a("span",{staticClass:"text"},[t._v("0")]),a("span",[t._v("浏览商品")])])],1)],1),a("van-row",{staticClass:"btn_other border_t",attrs:{type:"flex",justify:"space-between"}},[a("van-col",{staticClass:"flex_center",attrs:{span:"12"}},[a("span",{staticClass:"btn_other_icon flex_center"},[a("van-icon",{attrs:{name:"service"}})],1),a("span",[t._v("在线客服")])]),a("van-col",{staticClass:"flex_center",attrs:{span:"12"}},[a("span",{staticClass:"btn_other_icon flex_center on"},[a("van-icon",{attrs:{name:"shop"}})],1),a("span",[t._v("我要开店")])])],1)],1)],1)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("我的订单")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("我的钱包")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("我的工具")])])}],N={name:"my"},V=N,Q=(a("3d13"),Object(A["a"])(V,G,K,!1,null,"ddcb1862",null)),R=Q.exports;g["a"].use(k["a"]);var W=[{path:"/Home",name:"Home",component:F},{path:"/Sort",name:"Sort",component:B},{path:"/ShoppingCart",name:"ShoppingCart",component:D},{path:"/My",name:"My",component:R}],Y=new k["a"]({routes:W}),tt=Y,et=a("bc3a"),at=a.n(et),nt=(a("d3b7"),a("ac1f"),a("25f0"),a("5319"),{init:function(t){function e(t,e){var a=t<<e|t>>>32-e;return a}function a(t){var e,a,n="";for(e=7;e>=0;e--)a=t>>>4*e&15,n+=a.toString(16);return n}function n(t){t=t.replace(/\r\n/g,"\n");for(var e="",a=0;a<t.length;a++){var n=t.charCodeAt(a);n<128?e+=String.fromCharCode(n):n>127&&n<2048?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128))}return e}var r,s,i,o,c,l,u,d,v,f=new Array(80),p=1732584193,m=4023233417,h=2562383102,_=271733878,b=3285377520;t=n(t);var g=t.length,C=new Array;for(s=0;s<g-3;s+=4)i=t.charCodeAt(s)<<24|t.charCodeAt(s+1)<<16|t.charCodeAt(s+2)<<8|t.charCodeAt(s+3),C.push(i);switch(g%4){case 0:s=2147483648;break;case 1:s=t.charCodeAt(g-1)<<24|8388608;break;case 2:s=t.charCodeAt(g-2)<<24|t.charCodeAt(g-1)<<16|32768;break;case 3:s=t.charCodeAt(g-3)<<24|t.charCodeAt(g-2)<<16|t.charCodeAt(g-1)<<8|128;break}C.push(s);while(C.length%16!=14)C.push(0);for(C.push(g>>>29),C.push(g<<3&4294967295),r=0;r<C.length;r+=16){for(s=0;s<16;s++)f[s]=C[r+s];for(s=16;s<=79;s++)f[s]=e(f[s-3]^f[s-8]^f[s-14]^f[s-16],1);for(o=p,c=m,l=h,u=_,d=b,s=0;s<=19;s++)v=e(o,5)+(c&l|~c&u)+d+f[s]+1518500249&4294967295,d=u,u=l,l=e(c,30),c=o,o=v;for(s=20;s<=39;s++)v=e(o,5)+(c^l^u)+d+f[s]+1859775393&4294967295,d=u,u=l,l=e(c,30),c=o,o=v;for(s=40;s<=59;s++)v=e(o,5)+(c&l|c&u|l&u)+d+f[s]+2400959708&4294967295,d=u,u=l,l=e(c,30),c=o,o=v;for(s=60;s<=79;s++)v=e(o,5)+(c^l^u)+d+f[s]+3395469782&4294967295,d=u,u=l,l=e(c,30),c=o,o=v;p=p+o&4294967295,m=m+c&4294967295,h=h+l&4294967295,_=_+u&4294967295,b=b+d&4294967295}var x=a(p)+a(m)+a(h)+a(_)+a(b);return x.toLowerCase()},get:function(){var t="A6038157885892",e="13CE293C-F069-E01F-D206-A6B18F8EF427",a=Date.now(),n=nt.init(t+"UZ"+e+"UZ"+a)+"."+a;return{"X-APICloud-AppId":t,"X-APICloud-AppKey":n}}}),rt=nt;g["a"].config.productionTip=!1,g["a"].prototype.SHA1=rt,g["a"].prototype.axios=at.a,g["a"].use(n["a"]).use(r["a"]).use(s["a"]).use(i["a"]).use(o["a"]).use(c["a"]).use(l["a"]).use(u["a"]).use(d["a"]).use(v["a"]).use(f["a"]).use(p["a"]).use(m["a"]).use(h["a"]).use(_["a"]).use(b["a"]),new g["a"]({router:tt,render:function(t){return t(j)}}).$mount("#app")},"6f2b":function(t,e,a){"use strict";var n=a("0f43"),r=a.n(n);r.a},"78d7":function(t,e,a){"use strict";var n=a("19b3"),r=a.n(n);r.a},"7faf":function(t,e,a){"use strict";var n=a("b8ff"),r=a.n(n);r.a},b8ff:function(t,e,a){},d120:function(t,e,a){"use strict";var n=a("538d"),r=a.n(n);r.a}});
//# sourceMappingURL=app.c0e3f93b.js.map