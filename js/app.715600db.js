(function(e){function t(t){for(var a,c,o=t[0],b=t[1],u=t[2],d=0,l=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&l.push(s[c][0]),s[c]=0;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);j&&j(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var b=n[c];0!==s[b]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3d119186","chunk-2d225495":"7ca7e76c"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=a);var r,b=document.createElement("script");b.charset="utf-8",b.timeout=120,o.nc&&b.setAttribute("nonce",o.nc),b.src=c(e);var u=new Error;r=function(t){b.onerror=b.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}s[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:b})}),12e4);b.onerror=b.onload=r,document.head.appendChild(b)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var b=window["webpackJsonp"]=window["webpackJsonp"]||[],u=b.push.bind(b);b.push=t,b=b.slice();for(var d=0;d<b.length;d++)t(b[d]);var j=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"463d":function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),s=Object(a["o"])("div",{class:"logo"},null,-1),r=Object(a["o"])("span",null,"首页",-1),c=Object(a["o"])("span",null,[Object(a["o"])("span",null,"楠哥")],-1),o=Object(a["n"])(" 个人简介 "),b=Object(a["o"])("span",null,[Object(a["o"])("span",null,"关于我")],-1),u=Object(a["n"])(" This page was designed by MoonDrinkWind. "),d=Object(a["o"])("br",null,null,-1),j=Object(a["n"])(" In order to give our respectful Nan Ge! ");function l(e,t,n,l,f,i){var p=this,O=Object(a["N"])("a-menu-item"),m=Object(a["N"])("mail-outlined"),h=Object(a["N"])("a-sub-menu"),y=Object(a["N"])("a-menu"),v=Object(a["N"])("a-layout-sider"),g=Object(a["N"])("a-layout-header"),k=Object(a["N"])("router-view"),z=Object(a["N"])("a-layout-content"),w=Object(a["N"])("a-layout-footer"),_=Object(a["N"])("a-layout");return Object(a["G"])(),Object(a["k"])(_,{style:{"min-height":"100vh"}},{default:Object(a["db"])((function(){return[Object(a["o"])(v,{collapsed:e.collapsed,"onUpdate:collapsed":t[4]||(t[4]=function(t){return e.collapsed=t}),collapsible:"",theme:"light"},{default:Object(a["db"])((function(){return[s,Object(a["o"])(y,{theme:"Light",selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[3]||(t[3]=function(t){return e.selectedKeys=t}),mode:"inline"},{default:Object(a["db"])((function(){return[Object(a["o"])(O,{onClick:t[1]||(t[1]=function(e){return p.$router.push("/")}),key:"1"},{default:Object(a["db"])((function(){return[r]})),_:1}),Object(a["o"])(h,null,{title:Object(a["db"])((function(){return[c]})),default:Object(a["db"])((function(){return[Object(a["o"])(O,{key:"2",onClick:t[2]||(t[2]=function(e){return p.$router.push("/introduction")})},{icon:Object(a["db"])((function(){return[Object(a["o"])(m)]})),default:Object(a["db"])((function(){return[o]})),_:1})]})),_:1}),Object(a["o"])(O,{key:"4"},{default:Object(a["db"])((function(){return[b]})),_:1})]})),_:1},8,["selectedKeys"])]})),_:1},8,["collapsed"]),Object(a["o"])(_,null,{default:Object(a["db"])((function(){return[Object(a["o"])(g,{style:{padding:0,background:"#fff"}}),Object(a["o"])(z,null,{default:Object(a["db"])((function(){return[Object(a["o"])(k)]})),_:1}),Object(a["o"])(w,{style:{"text-align":"center"}},{default:Object(a["db"])((function(){return[u,d,j]})),_:1})]})),_:1})]})),_:1})}var f=n("53fa"),i=Object(a["p"])({components:{MailOutlined:f["a"]}});i.render=l;var p=i,O=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m=n("bb51"),h=[{path:"/",name:"Home",component:m["default"]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/introduction",name:"introduction",component:function(){return n.e("chunk-2d225495").then(n.bind(null,"e46f"))}}],y=Object(O["a"])({history:Object(O["b"])(),routes:h}),v=y,g=n("2fb8"),k=n("1f17"),z=(n("6089"),n("3e5d"),Object(a["j"])(p).use(v));z.use(g["a"]),z.use(v),z.use(k["a"]),z.mount("#app")},aaf1:function(e,t,n){var a={"./af":"0674","./af.js":"0674","./ar":"6cc2","./ar-dz":"b1de","./ar-dz.js":"b1de","./ar-kw":"7d0b","./ar-kw.js":"7d0b","./ar-ly":"4064","./ar-ly.js":"4064","./ar-ma":"56ad","./ar-ma.js":"56ad","./ar-sa":"adaa","./ar-sa.js":"adaa","./ar-tn":"5221","./ar-tn.js":"5221","./ar.js":"6cc2","./az":"1a3f","./az.js":"1a3f","./be":"84b2","./be.js":"84b2","./bg":"a213","./bg.js":"a213","./bm":"8b34","./bm.js":"8b34","./bn":"3482","./bn-bd":"98bb","./bn-bd.js":"98bb","./bn.js":"3482","./bo":"a3f6","./bo.js":"a3f6","./br":"72ea","./br.js":"72ea","./bs":"fa2c","./bs.js":"fa2c","./ca":"f217","./ca.js":"f217","./cs":"1b54","./cs.js":"1b54","./cv":"ae9c","./cv.js":"ae9c","./cy":"7554","./cy.js":"7554","./da":"b478","./da.js":"b478","./de":"35a9","./de-at":"5b88","./de-at.js":"5b88","./de-ch":"7475","./de-ch.js":"7475","./de.js":"35a9","./dv":"4c16","./dv.js":"4c16","./el":"3f33","./el.js":"3f33","./en-au":"73ff","./en-au.js":"73ff","./en-ca":"bfc9","./en-ca.js":"bfc9","./en-gb":"428a","./en-gb.js":"428a","./en-ie":"6b5c","./en-ie.js":"6b5c","./en-il":"eb4a","./en-il.js":"eb4a","./en-in":"3fbf","./en-in.js":"3fbf","./en-nz":"89f8","./en-nz.js":"89f8","./en-sg":"13d6","./en-sg.js":"13d6","./eo":"dfd6","./eo.js":"dfd6","./es":"5221e","./es-do":"7a70","./es-do.js":"7a70","./es-mx":"a656","./es-mx.js":"a656","./es-us":"3081","./es-us.js":"3081","./es.js":"5221e","./et":"45f3","./et.js":"45f3","./eu":"d1a1","./eu.js":"d1a1","./fa":"6773","./fa.js":"6773","./fi":"259f","./fi.js":"259f","./fil":"32e2","./fil.js":"32e2","./fo":"0e60","./fo.js":"0e60","./fr":"0600","./fr-ca":"6520","./fr-ca.js":"6520","./fr-ch":"2b9c","./fr-ch.js":"2b9c","./fr.js":"0600","./fy":"23bb","./fy.js":"23bb","./ga":"f9bb","./ga.js":"f9bb","./gd":"088a","./gd.js":"088a","./gl":"da3a","./gl.js":"da3a","./gom-deva":"e728","./gom-deva.js":"e728","./gom-latn":"b781","./gom-latn.js":"b781","./gu":"ab1a","./gu.js":"ab1a","./he":"2e9a","./he.js":"2e9a","./hi":"77d9","./hi.js":"77d9","./hr":"334c","./hr.js":"334c","./hu":"9f96","./hu.js":"9f96","./hy-am":"f2d9","./hy-am.js":"f2d9","./id":"7e6f","./id.js":"7e6f","./is":"770b","./is.js":"770b","./it":"aed5","./it-ch":"72a8","./it-ch.js":"72a8","./it.js":"aed5","./ja":"d546","./ja.js":"d546","./jv":"63b1","./jv.js":"63b1","./ka":"517d","./ka.js":"517d","./kk":"1320","./kk.js":"1320","./km":"b9f3","./km.js":"b9f3","./kn":"d861","./kn.js":"d861","./ko":"ce13","./ko.js":"ce13","./ku":"ecb8","./ku.js":"ecb8","./ky":"885a","./ky.js":"885a","./lb":"aa9d","./lb.js":"aa9d","./lo":"579e","./lo.js":"579e","./lt":"b8d7","./lt.js":"b8d7","./lv":"1bb4","./lv.js":"1bb4","./me":"673d","./me.js":"673d","./mi":"26ae","./mi.js":"26ae","./mk":"e174","./mk.js":"e174","./ml":"4a84","./ml.js":"4a84","./mn":"aadd","./mn.js":"aadd","./mr":"a2a5","./mr.js":"a2a5","./ms":"d18a","./ms-my":"66b0","./ms-my.js":"66b0","./ms.js":"d18a","./mt":"7fb0","./mt.js":"7fb0","./my":"74d1","./my.js":"74d1","./nb":"5fd8","./nb.js":"5fd8","./ne":"4e84","./ne.js":"4e84","./nl":"6f41","./nl-be":"6f69","./nl-be.js":"6f69","./nl.js":"6f41","./nn":"e69e","./nn.js":"e69e","./oc-lnc":"8d28","./oc-lnc.js":"8d28","./pa-in":"b000","./pa-in.js":"b000","./pl":"510c","./pl.js":"510c","./pt":"714b","./pt-br":"e9f3","./pt-br.js":"e9f3","./pt.js":"714b","./ro":"a876","./ro.js":"a876","./ru":"ba7c","./ru.js":"ba7c","./sd":"25dc","./sd.js":"25dc","./se":"d540","./se.js":"d540","./si":"1b0a","./si.js":"1b0a","./sk":"bfa3","./sk.js":"bfa3","./sl":"d112","./sl.js":"d112","./sq":"8f41","./sq.js":"8f41","./sr":"61ee","./sr-cyrl":"17eb","./sr-cyrl.js":"17eb","./sr.js":"61ee","./ss":"0d66","./ss.js":"0d66","./sv":"820c","./sv.js":"820c","./sw":"dbbf","./sw.js":"dbbf","./ta":"70b6","./ta.js":"70b6","./te":"67e8","./te.js":"67e8","./tet":"9609","./tet.js":"9609","./tg":"a19a","./tg.js":"a19a","./th":"459d","./th.js":"459d","./tk":"b2a1","./tk.js":"b2a1","./tl-ph":"341b","./tl-ph.js":"341b","./tlh":"b24c","./tlh.js":"b24c","./tr":"8f6c","./tr.js":"8f6c","./tzl":"fea0","./tzl.js":"fea0","./tzm":"9828","./tzm-latn":"a859","./tzm-latn.js":"a859","./tzm.js":"9828","./ug-cn":"0a67","./ug-cn.js":"0a67","./uk":"82cc","./uk.js":"82cc","./ur":"ad72","./ur.js":"ad72","./uz":"015a","./uz-latn":"35be","./uz-latn.js":"35be","./uz.js":"015a","./vi":"90db","./vi.js":"90db","./x-pseudo":"7eee","./x-pseudo.js":"7eee","./yo":"b9ec","./yo.js":"b9ec","./zh-cn":"10ef","./zh-cn.js":"10ef","./zh-hk":"c3a6","./zh-hk.js":"c3a6","./zh-mo":"9218","./zh-mo.js":"9218","./zh-tw":"0144","./zh-tw.js":"0144"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="aaf1"},bb51:function(e,t,n){"use strict";var a=n("d66d"),s=n("cbd6");s["default"].render=a["a"],t["default"]=s["default"]},cbd6:function(e,t,n){"use strict";var a=n("463d"),s=n.n(a);n.d(t,"default",(function(){return s.a}))},d66d:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("7a23"),s={style:{textAlign:"center"}},r=Object(a["o"])("h2",null,"本页面仅致敬赵氏楠哥——赵楠",-1),c=Object(a["o"])("br",null,null,-1),o=Object(a["o"])("br",null,null,-1),b=Object(a["o"])("h4",null,"以下为 Q/A 内容 如需直接了解赵楠",-1),u=Object(a["o"])("h4",null,"点击左侧楠神栏目",-1),d=Object(a["o"])("br",null,null,-1),j=Object(a["o"])("br",null,null,-1),l=Object(a["o"])("span",{style:{"font-size":"medium"}}," A: 仅仅为了迫害楠哥 ",-1),f=Object(a["o"])("span",{style:{"font-size":"medium"}}," A: 现三中高二四班赵楠(楠神) ",-1),i=Object(a["o"])("span",{style:{"font-size":"medium"}}," A: 楠哥是我好大哥 ",-1),p=Object(a["o"])("span",{style:{"font-size":"medium"}}," A: 月饮风——一届码农而已 ",-1);function O(e,t,n,O,m,h){var y=Object(a["N"])("a-card");return Object(a["G"])(),Object(a["k"])("div",s,[r,c,o,b,u,d,j,Object(a["o"])(y,{bordered:"true",style:{width:"25%",float:"left"},title:"Q: 本网站存在的目的?"},{default:Object(a["db"])((function(){return[l]})),_:1}),Object(a["o"])(y,{bordered:"true",style:{width:"25%",float:"left"},title:"Q: 赵楠 or 赵氏楠哥是谁?"},{default:Object(a["db"])((function(){return[f]})),_:1}),Object(a["o"])(y,{bordered:"true",style:{width:"25%",float:"left"},title:"Q: 你为什么知道这么多?"},{default:Object(a["db"])((function(){return[i]})),_:1}),Object(a["o"])(y,{bordered:"true",style:{width:"25%",float:"left"},title:"Q: 你是谁?"},{default:Object(a["db"])((function(){return[p]})),_:1})])}}});
//# sourceMappingURL=app.715600db.js.map