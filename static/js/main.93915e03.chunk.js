(this.webpackJsonpmyAppNew=this.webpackJsonpmyAppNew||[]).push([[1],{59:function(e,i,t){var n={"./ion-action-sheet.entry.js":[85,5],"./ion-alert.entry.js":[86,6],"./ion-app_8.entry.js":[87,7],"./ion-avatar_3.entry.js":[88,17],"./ion-back-button.entry.js":[89,18],"./ion-backdrop.entry.js":[90,43],"./ion-button_2.entry.js":[91,19],"./ion-card_5.entry.js":[92,20],"./ion-checkbox.entry.js":[93,21],"./ion-chip.entry.js":[94,22],"./ion-col_3.entry.js":[95,44],"./ion-datetime_3.entry.js":[96,10],"./ion-fab_3.entry.js":[97,23],"./ion-img.entry.js":[98,45],"./ion-infinite-scroll_2.entry.js":[99,46],"./ion-input.entry.js":[100,24],"./ion-item-option_3.entry.js":[101,25],"./ion-item_8.entry.js":[102,26],"./ion-loading.entry.js":[103,27],"./ion-menu_3.entry.js":[104,28],"./ion-modal.entry.js":[105,8],"./ion-nav_2.entry.js":[106,14],"./ion-popover.entry.js":[107,9],"./ion-progress-bar.entry.js":[108,29],"./ion-radio_2.entry.js":[109,30],"./ion-range.entry.js":[110,31],"./ion-refresher_2.entry.js":[111,11],"./ion-reorder_2.entry.js":[112,16],"./ion-ripple-effect.entry.js":[113,47],"./ion-route_4.entry.js":[114,32],"./ion-searchbar.entry.js":[115,33],"./ion-segment_2.entry.js":[116,34],"./ion-select_3.entry.js":[117,35],"./ion-slide_2.entry.js":[118,48],"./ion-spinner.entry.js":[119,13],"./ion-split-pane.entry.js":[120,49],"./ion-tab-bar_2.entry.js":[121,36],"./ion-tab_2.entry.js":[122,15],"./ion-text.entry.js":[123,37],"./ion-textarea.entry.js":[124,38],"./ion-toast.entry.js":[125,39],"./ion-toggle.entry.js":[126,12],"./ion-virtual-scroll.entry.js":[127,50]};function a(e){if(!t.o(n,e))return Promise.resolve().then((function(){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}));var i=n[e],a=i[0];return t.e(i[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(n)},a.id=59,e.exports=a},61:function(e,i,t){var n={"./ion-icon.entry.js":[128,57]};function a(e){if(!t.o(n,e))return Promise.resolve().then((function(){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}));var i=n[e],a=i[0];return t.e(i[1]).then((function(){return t(a)}))}a.keys=function(){return Object.keys(n)},a.id=61,e.exports=a},69:function(e,i,t){},81:function(e,i,t){},82:function(e,i,t){},83:function(e,i,t){"use strict";t.r(i);var n=t(0),a=t.n(n),s=t(32),r=t.n(s),c=t(20),o=t(11),l=t(48),d=t(5),j=t(6),m=t(7),b=t(8),p=(t(69),t.p+"static/media/ambadi1.af14120d.jpeg"),g=t.p+"static/media/ambadi2.466e0d8f.jpeg",u=t.p+"static/media/ambadi3.44daa788.jpeg",v=t.p+"static/media/ambadi4.d74861f5.jpeg",h=t.p+"static/media/ambadi5.263a9a54.jpeg",y=t.p+"static/media/ambadi6.043074ee.jpeg",f=t.p+"static/media/ambadi7.10feb280.jpeg",O=t.p+"static/media/ambadi8.67fdd84f.jpeg",x=t.p+"static/media/ambadi9.2ede5e6e.jpeg",_=t.p+"static/media/ambadi10.013381f0.jpeg",S=t.p+"static/media/ambadi11.d53c581b.jpeg",N=t.p+"static/media/ambadi12.33de1cc6.jpeg",w=t.p+"static/media/ambadi13.0830e410.jpeg",k=t.p+"static/media/ambadi1.c32fe028.JPG",L=t.p+"static/media/ambadi2.8570b651.jpg",I=t.p+"static/media/ambadi4.dd7b76eb.jpg",E=t(4),C=function(e){Object(m.a)(t,e);var i=Object(b.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=i.call(this,e)).addOne=function(){var e=n.state.activeItem,i=n.state.activeItem,t=n.state.imagesList;if(e===t.length-1)for(var a=0;a<t.length;a++)0===a?(t[a].visible=!0,i=0):t[a].visible=!1;else for(var s=0;s<t.length;s++)s===e+1?(t[s].visible=!0,i+=1):t[s].visible=!1;n.setState({imagesList:t,activeItem:i})},n.state={imagesList:[{imgSrc:p,alt:"ambadi1",visible:!0},{imgSrc:g,alt:"ambadi2",visible:!1},{imgSrc:u,alt:"ambadi2",visible:!1},{imgSrc:v,alt:"ambadi2",visible:!1},{imgSrc:h,alt:"ambadi2",visible:!1},{imgSrc:y,alt:"ambadi2",visible:!1},{imgSrc:k,alt:"ambadi2",visible:!1},{imgSrc:L,alt:"ambadi2",visible:!1},{imgSrc:I,alt:"ambadi2",visible:!1},{imgSrc:f,alt:"ambadi2",visible:!1},{imgSrc:O,alt:"ambadi2",visible:!1},{imgSrc:x,alt:"ambadi2",visible:!1},{imgSrc:_,alt:"ambadi2",visible:!1},{imgSrc:S,alt:"ambadi2",visible:!1},{imgSrc:N,alt:"ambadi2",visible:!1},{imgSrc:w,alt:"ambadi2",visible:!1}],activeItem:0,index:0},n}return Object(j.a)(t,[{key:"scrollLeft",value:function(){var e;setInterval((function(){var i=document.getElementById("designRow");i.scrollLeft+=10,e===i.scrollLeft&&0!==i.scrollLeft&&(i.scrollLeft=0),e=i.scrollLeft}),500)}},{key:"componentDidMount",value:function(){this.scrollLeft()}},{key:"render",value:function(){return Object(E.jsxs)("div",{className:"photoAlbum row px-0",children:[Object(E.jsxs)("div",{className:"balooons",children:[Object(E.jsx)("span",{className:"baloon1"}),Object(E.jsx)("span",{className:"baloon2"})]}),Object(E.jsx)("div",{className:"birthday",children:Object(E.jsx)("div",{})}),Object(E.jsx)("div",{className:"animals",children:Object(E.jsx)("div",{children:Object(E.jsxs)("div",{className:"msg",children:[Object(E.jsx)("span",{className:"our",children:"Our"}),Object(E.jsx)("span",{className:"name",children:"Ambadi"}),Object(E.jsx)("span",{className:"turn",children:"is Turning"})]})})}),Object(E.jsx)("div",{className:"locateUs",children:Object(E.jsx)("a",{href:"https://goo.gl/maps/yrgxEEe8Cjaij6rp8",target:"_blank"})}),Object(E.jsx)("div",{className:"col-12 col-md-7 imagesPlot p-0",children:Object(E.jsxs)("div",{className:"anim",children:[Object(E.jsx)("div",{id:"designRow",children:this.state.imagesList.map((function(e,i){return Object(E.jsx)("div",{style:{backgroundImage:"url('".concat(e.imgSrc,"')")}},i)}))}),Object(E.jsx)("span",{})]})}),Object(E.jsx)("div",{class:"marquee",children:Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{children:"Join us on"}),"\xa0",Object(E.jsx)("span",{children:"8th April 2021"}),"\xa0",Object(E.jsx)("span",{children:"(4pm - 8pm)"})]})})]})}}]),t}(a.a.Component),D=(t(71),t(72),t(73),t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(81),t(82),function(){return Object(E.jsx)(o.a,{children:Object(E.jsx)(l.a,{children:Object(E.jsxs)(o.c,{children:[Object(E.jsx)(c.a,{path:"/",exact:!0,children:Object(E.jsx)(C,{})}),Object(E.jsx)(c.a,{path:"/home",exact:!0,children:Object(E.jsx)(C,{})})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=function(e){e&&e instanceof Function&&t.e(58).then(t.bind(null,145)).then((function(i){var t=i.getCLS,n=i.getFID,a=i.getFCP,s=i.getLCP,r=i.getTTFB;t(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),F()}},[[83,3,4]]]);
//# sourceMappingURL=main.93915e03.chunk.js.map