(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(14),a=c.n(s),i=c(5),j=c(1),o=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"\u9996\u9801"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/about",children:"\u95dc\u65bc"})})]})})},u=function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("p",{children:"Copyright \xa9 2021 KAI"})})},h=c(7),b=c.n(h),l=c(13),p=c(8),d=function(e){var t=e.data;return Object(j.jsxs)("div",{className:"picture",children:[Object(j.jsx)("p",{children:t.photographer}),Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:t.src.large,alt:""})}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.src.large,children:"\u4e0b\u8f09\u5716\u7247"})]})},O=function(e){var t=e.search,c=e.setInput;return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{onChange:function(e){c(e.target.value)},type:"text"}),Object(j.jsx)("button",{onClick:t,children:"\u641c\u5716"})]})},x=c(34),f=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(p.a)(s,2),i=a[0],o=a[1],u=Object(n.useState)([]),h=Object(p.a)(u,2),f=h[0],v=h[1],m=Object(n.useState)(1),g=Object(p.a)(m,2),y=g[0],k=g[1],w="563492ad6f917000010000010c1cd66275e44e3181d0a33ddfb7a781",C="https://api.pexels.com/v1/curated?page=".concat(y,"&per_page=15"),S="https://api.pexels.com/v1/search?query=".concat(i,"&per_page=15&page=").concat(y),N=function(){var e=Object(l.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"content-type":"application/json",Authorization:w}});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,v(n.photos);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"content-type":"application/json",Authorization:w}});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,v(f.concat(n.photos));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k(1),N(""===i?C:S)}),[i]),Object(n.useEffect)((function(){1!==y&&E(""===i?C:S)}),[y]),Object(j.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(j.jsx)(O,{search:function(){o(c)},input:c,setInput:r}),Object(j.jsx)("div",{className:"pictures",children:f&&f.map((function(e){return Object(j.jsx)(d,{data:e},Object(x.a)())}))}),Object(j.jsx)("div",{className:"loadMore",children:Object(j.jsx)("button",{onClick:function(){k(y+1)},children:"\u8f09\u5165\u66f4\u591a"})})]})},v=function(){return Object(j.jsx)("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(j.jsx)("h1",{style:{color:"white"},children:"\u7df4\u7fd2\u4f5c\u54c1:\u4e32\u63a5Pexels api \u505a\u51fa\u641c\u5c0b\u5716\u7247\u529f\u80fd"})})},m=c(2),g=(c(31),function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/",children:Object(j.jsx)(f,{})}),Object(j.jsx)(m.a,{path:"/about",children:Object(j.jsx)(v,{})})]}),Object(j.jsx)(u,{})]})});a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(g,{})})}),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.908b9f9c.chunk.js.map