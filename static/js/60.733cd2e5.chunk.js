"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[60],{14:function(e,r,t){t.d(r,{v:function(){return n}});var n={apiKey:"a3419bb2c415f83d30bbc28c2bb776df",baseUrl:"https://api.themoviedb.org/3"}},60:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),c=t(439),a=t(757),s=t.n(a),o=t(791),i=t(184),u=function(e){var r=e.onSearch,t=(0,o.useState)(""),n=(0,c.Z)(t,2),a=n[0],s=n[1];return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(a)},children:[(0,i.jsx)("input",{type:"text",className:"search-input",placeholder:"Search by name",style:{padding:"8px",width:"200px",marginRight:"8px"},value:a,onChange:function(e){s(e.target.value)}}),(0,i.jsx)("button",{type:"submit",className:"search-button",style:{padding:"8px 16px",backgroundColor:"#007bff",color:"#fff",border:"none",cursor:"pointer"},children:"Search"})]})},l=t(340),h=t(14),p=h.v.apiKey,d=h.v.baseUrl,f=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(d,"/search/movie?api_key=").concat(p),e.prev=1,e.next=4,l.Z.get(r);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),v=t(87),x=function(){var e=(0,o.useState)([]),r=(0,c.Z)(e,2),t=r[0],a=r[1],l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(r);case 3:t=e.sent,a(t.results||[]),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Search Movies"}),(0,i.jsx)(u,{onSearch:l}),t.length>0&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Search Results"}),(0,i.jsx)("ul",{children:t.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(v.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]}),0===t.length&&(0,i.jsx)("div",{children:(0,i.jsx)("h3",{children:"No results found"})})]})}}}]);
//# sourceMappingURL=60.733cd2e5.chunk.js.map