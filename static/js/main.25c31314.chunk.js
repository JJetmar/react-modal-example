(this["webpackJsonpreact-hooks-example"]=this["webpackJsonpreact-hooks-example"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(9),s=n.n(a),i=n(3),o=Object(c.createContext)({context:{appName:"Moje applika\u010dka"},modalsDispatch:[],itemsDispatch:[],setContext:function(){}}),r=n(2),l=n(4),d=n.n(l),u=n(0);function b(e){var t=e.items,n=Object(c.useState)(!1),a=Object(i.a)(n,2),s=a[0],l=a[1],b=Object(c.useState)(null),j=Object(i.a)(b,2),m=j[0],p=j[1],f=Object(c.useState)([]),O=Object(i.a)(f,2),h=O[0],v=O[1],x=Object(c.useContext)(o),y=x.modalsDispatch,N=x.itemsDispatch,g=x.alertsDispatch,C=Object(c.useRef)(null),k=Object(c.useCallback)((function(e){var t=e.target.value;if(t){var n=d()();console.log("ADDING",{id:n,name:t}),N({type:"add",payload:{id:n,name:t}}),g({type:"add",payload:{id:n,content:'Tab "'.concat(t,'" was added!'),type:"success"}}),p(n)}l(!1)}),[t]),w=Object(c.useCallback)((function(e){N({type:"remove",payload:{id:e}});var n=h.filter((function(t){return t!==e}));v(n),e===m&&p(n[n.length-1]);var c=t.find((function(t){return t.id===e}));g({type:"add",payload:{id:e,content:'Tab "'.concat(c.name,'" was deleted!'),type:"danger"}})}),[m]),D=Object(c.useCallback)((function(e){switch(e.key){case"Esc":case"Escape":e.target.value="";case"Enter":C.current.focus(),e.preventDefault()}}),[C]);Object(c.useEffect)((function(){if(m){var e=h.filter((function(e){return e!==m}));e.push(m),v(e)}}),[m]);var E=t.find((function(e){return e.id===m}));return Object(u.jsxs)("div",{children:[Object(u.jsxs)("ul",{className:"nav mb-2",children:[t.map((function(e){var t=e.id,n=e.name;return Object(u.jsx)("li",{className:"nav-item me-2 mb-2",children:Object(u.jsxs)("div",{className:"btn-group mr-2",children:[Object(u.jsx)("button",{className:"btn btn-sm btn-".concat(m===t?"primary":"secondary"),onClick:function(){p(t)},children:n}),Object(u.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){y({type:"add",payload:{disposable:!0,title:'Delete "'.concat(n,'"?'),content:Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at cursus dolor. Proin placerat elementum ex id ornare. Nullam nec finibus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis interdum blandit sollicitudin. Curabitur ac sem eleifend, tincidunt neque sit amet, pellentesque odio."}),footer:function(e){var n=e.dispose;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){w(t),n()},children:"Delete"}),Object(u.jsx)("button",{className:"btn btn-secondary",autoFocus:!0,onClick:function(){n()},children:"Cancel"}),Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){y({type:"add",payload:{title:"test1",content:Object(u.jsxs)(u.Fragment,{children:["LOL ",Object(u.jsx)("input",{})]}),footer:function(e){var t=e.dispose;return Object(u.jsx)("button",{onClick:function(){return t()},className:"btn btn-primary",children:"A DOST!"})}}})},children:"Novy"})]})}}})},children:"\ud83d\uddd9"})]})},t)})),s&&Object(u.jsx)("li",{className:"nav-item me-2 mb-2",children:Object(u.jsx)("input",{className:"form-control form-control-sm",type:"text",placeholder:"New tab name",autoFocus:!0,onBlur:k,onKeyDown:D})},"new-item"),Object(u.jsx)("li",{className:"nav-item me-2 mb-2",children:Object(u.jsx)("button",{ref:C,className:"btn btn-sm btn-success",onClick:function(){l(!0)},children:"+ Add tab"})},"new-item-button")]}),Object(u.jsx)("div",{className:"tab-content",children:Object(u.jsx)("div",{className:"tab-panel",children:E&&Object(u.jsx)("textarea",{className:"form-control",rows:8,placeholder:'Content of tab "'.concat(E.name,'".'),onChange:function(e){N({type:"edit",payload:Object(r.a)(Object(r.a)({},E),{},{content:e.target.value})})},value:null===E||void 0===E?void 0:E.content})})})]})}function j(e){var t=e.id,n=e.title,a=e.content,s=e.footer,i=e.active,r=void 0!==i&&i,l=e.disposable,d=void 0!==l&&l,b=Object(c.useContext)(o).modalsDispatch,j=Object(c.useCallback)((function(){b({type:"delete",payload:{id:t}})}),[t,b]);return Object(u.jsx)("div",{className:"modal fade show",style:{display:"block",zIndex:r?null:1039},onClick:function(){d&&b({type:"delete",payload:{id:t}})},children:Object(u.jsx)("div",{className:"modal-dialog",onClick:function(e){e.stopPropagation()},children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",children:n}),d&&Object(u.jsx)("button",{className:"btn-close",onClick:function(){j()}})]}),Object(u.jsx)("div",{className:"modal-body",children:a}),Object(u.jsx)("div",{className:"modal-footer",children:"function"===typeof s?s({dispose:j}):s})]})})})}function m(e){var t=e.modals,n=void 0===t?[]:t,a=Object(c.useState)(null),s=Object(i.a)(a,2),l=s[0],d=s[1],b=Object(c.useContext)(o).modalsDispatch,m=Object(c.useCallback)((function(e){if(l){var t=l.id;switch(e.key){case"Escape":b({type:"delete",payload:{id:t}})}}}),[l,b]);return Object(c.useEffect)((function(){if(l&&l.disposable)return document.addEventListener("keydown",m),function(){document.removeEventListener("keydown",m)}}),[l,m]),Object(c.useEffect)((function(){d(n.length?n[n.length-1]:null)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"modal-backdrop fade show"}),l&&n.map((function(e){var t="function"===typeof e?e():e,n=t.id;return Object(u.jsx)(j,Object(r.a)(Object(r.a)({},t),{},{active:n===l.id}),n)}))]})}function p(e){var t=e.id,n=e.type,a=e.content,s=Object(c.useContext)(o).alertsDispatch,i=Object(c.useCallback)((function(){s({type:"delete",payload:{id:t}})}),[t]);return Object(c.useEffect)((function(){setTimeout((function(){i()}),10500)}),[]),Object(u.jsx)("div",{className:"toast align-items-center text-white bg-primary border-0 show bg-".concat(n),role:"alert","aria-live":"assertive","aria-atomic":"true",children:Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)("div",{className:"toast-body",children:a}),Object(u.jsx)("button",{type:"button",className:"btn-close btn-close-white me-2 m-auto",onClick:function(){i()}})]})})}function f(e){var t=e.alerts,n=void 0===t?[]:t;return Object(u.jsx)(u.Fragment,{children:n.length>0&&Object(u.jsx)("div",{className:"position-fixed bottom-0 end-0 p-1",children:Object(u.jsx)("div",{className:"position-relative",children:Object(u.jsx)("div",{className:"toast-container top-0 end-0 p-3",children:n.map((function(e){return Object(c.createElement)(p,Object(r.a)(Object(r.a)({},e),{},{key:e.id}))}))})})})})}var O=n(5);function h(e,t){var n=t.type,c=t.payload;switch(n){case"add":var a=d()();return[].concat(Object(O.a)(e),[Object(r.a)(Object(r.a)({},c),{},{id:a})]);case"set":return[c];case"delete":return e.filter((function(e){return e.id!==c.id}));default:throw new Error("Invalid type for ".concat(this.name," (type = ").concat(n,")."))}}function v(e,t){var n=t.type,c=t.payload;switch(n){case"add":return c.name?[].concat(Object(O.a)(e),[Object(r.a)({content:""},c)]):e;case"edit":return e.map((function(e){return e.id===c.id?Object(r.a)(Object(r.a)({},e),c):e}));case"remove":return e.filter((function(e){return e.id!==c.id}));default:throw new Error("Invalid type for ".concat(this.name," (type = ").concat(n,")."))}}function x(e,t){var n=t.type,c=t.payload;switch(n){case"add":var a=d()();return[].concat(Object(O.a)(e),[Object(r.a)(Object(r.a)({},c),{},{id:a})]);case"set":return[c];case"delete":return e.filter((function(e){return e.id!==c.id}));default:throw new Error("Invalid type for ".concat(this.name," (type = ").concat(n,")."))}}function y(){var e=Object(c.useState)({appName:"My application"}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useReducer)(x,[]),r=Object(i.a)(s,2),l=r[0],d=r[1],j=Object(c.useReducer)(v,[]),p=Object(i.a)(j,2),O=p[0],y=p[1],N=Object(c.useReducer)(h,[]),g=Object(i.a)(N,2),C=g[0],k=g[1];return Object(u.jsxs)(o.Provider,{value:{context:n,setContext:a,modalsDispatch:d,itemsDispatch:y,alertsDispatch:k},children:[Object(u.jsx)("main",{className:"container mt-5",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(b,{items:O})})}),l.length>0&&Object(u.jsx)(m,{modals:l}),C.length>0&&Object(u.jsx)(f,{alerts:C})]})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};s.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.25c31314.chunk.js.map