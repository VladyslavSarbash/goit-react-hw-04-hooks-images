(this["webpackJsonpreact-config-hw"]=this["webpackJsonpreact-config-hw"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),o=a.n(r),s=(a(14),a(15),a(8)),i=a(3),l=(a(16),"23120149-b9b49e6d85d17734323f46136"),u="https://pixabay.com/api/";function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(u,"?q=").concat(e,"&page=").concat(t,"&key=").concat(l,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}var b=a(1);function m(e){var t=e.onSubmit,a=e.setPage,c=Object(n.useState)(""),r=Object(i.a)(c,2),o=r[0],s=r[1];return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),j(o).then((function(e){return t({arrayImg:e.hits,searchInput:o})})).finally((function(){a(1),s("")}))},children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(b.jsx)("input",{className:"SearchForm-input",value:o,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){var t=e.target;s(t.value)}})]})})}function d(e){return e.arrayImg.map((function(e){return Object(b.jsx)("li",{className:"ImageGalleryItem",children:Object(b.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image","data-large":e.largeImageURL})},e.id)}))}function h(e){var t=e.arrayImg,a=e.openModal;return Object(b.jsx)("ul",{className:"ImageGallery",onClick:a,children:Object(b.jsx)(d,{arrayImg:t})})}var O=a(9),f=a.n(O);function g(e){var t=e.searchInput,a=e.loadMore,c=e.page,r=e.setPage,o=Object(n.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1];return Object(n.useEffect)((function(){1!==c&&(u(!0),j(t,c).then((function(e){return a(e.hits)})).finally(u(!1)))}),[c]),l?Object(b.jsx)("div",{className:"Loader",children:Object(b.jsx)(f.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50,timeout:3e3})}):l?void 0:Object(b.jsx)("div",{className:"Btn_load-more",children:Object(b.jsx)("button",{className:"Button",type:"button",onClick:function(){return r(c+1)},children:"Load more"})})}var p=document.querySelector("#modal-root");function v(e){var t=e.onClose,a=e.children,c=function e(a){var n=a.target;"Escape"===a.code&&t(e),"IMG"!==n.nodeName&&t(e)};return Object(n.useEffect)((function(){window.addEventListener("keydown",c)}),[]),Object(r.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:c,children:Object(b.jsx)("div",{className:"Modal",children:a})}),p)}var x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(n.useState)(!1),d=Object(i.a)(j,2),O=d[0],f=d[1],p=Object(n.useState)(""),x=Object(i.a)(p,2),y=x[0],S=x[1],I=Object(n.useState)(1),N=Object(i.a)(I,2),w=N[0],F=N[1];return Object(n.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[a]),Object(b.jsxs)(b.Fragment,{children:[O&&Object(b.jsx)(v,{onClose:function(e){f(!O),window.removeEventListener("keydown",e)},children:Object(b.jsx)("img",{src:l,alt:""})}),Object(b.jsx)(m,{onSubmit:function(e){var t=e.arrayImg,a=e.searchInput;c(t),S(a)},setPage:F}),Object(b.jsx)(h,{arrayImg:a,openModal:function(e){var t=e.target,a=t.dataset;"IMG"===t.nodeName&&(u(a.large),f(!O))}}),0!==a.length&&Object(b.jsx)(g,{searchInput:y,loadMore:function(e){c([].concat(Object(s.a)(a),Object(s.a)(e)))},page:w,setPage:F})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a24e8d72.chunk.js.map