"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[492,166],{14:function(e,t,n){n.d(t,{v:function(){return a}});var a={apiKey:"a3419bb2c415f83d30bbc28c2bb776df",baseUrl:"https://api.themoviedb.org/3"}},166:function(e,t,n){n.r(t),n.d(t,{FormSearch:function(){return c}});var a=n(439),r=n(791),i="FormSearch_search-input__8BD25",s="FormSearch_search-button__2x61q",o=n(184),c=function(e){var t=e.onSearch,n=(0,r.useState)(""),c=(0,a.Z)(n,2),l=c[0],v=c[1];return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(l)},children:[(0,o.jsx)("input",{type:"text",className:i,placeholder:"Search by name",value:l,onChange:function(e){v(e.target.value)}}),(0,o.jsx)("button",{type:"submit",className:s,children:"Search"})]})}},492:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(861),r=n(439),i=n(757),s=n.n(i),o=n(791),c=n(166),l=n(340),v=n(14),m=v.v.apiKey,u=v.v.baseUrl,_=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u,"/search/movie?api_key=").concat(m,"&query=").concat(t),e.prev=1,e.next=4,l.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=n(87),p=n(911),f=n(184),S=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],l=function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:n=e.sent,i(n.results||[]),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:p.Z["movies-container"],children:[(0,f.jsx)("h2",{children:"Search Movies"}),(0,f.jsx)(c.FormSearch,{onSearch:l}),n.length>0&&(0,f.jsxs)("div",{className:p.Z["search-results"],children:[(0,f.jsx)("h3",{children:"Search Results"}),(0,f.jsx)("ul",{className:p.Z["movie-list"],children:n.map((function(e){return(0,f.jsx)("li",{className:p.Z["movie-item"],children:(0,f.jsx)(h.rU,{to:"/movies/".concat(e.id),className:p.Z["movie-link"],children:e.title})},e.id)}))})]})]})}},911:function(e,t){t.Z={"home-container":"PageStyles_home-container__hThpm","movie-list":"PageStyles_movie-list__9dx5e","movie-item":"PageStyles_movie-item__3WRpZ","movie-link":"PageStyles_movie-link__iNmaH","movies-container":"PageStyles_movies-container__I-vGq","search-results":"PageStyles_search-results__hOLzP","movie-details-container":"PageStyles_movie-details-container__iyGqo","movie-title":"PageStyles_movie-title__DJY7Y","movie-image":"PageStyles_movie-image__Q0FPF","movie-info":"PageStyles_movie-info__2OOdL","movie-genres":"PageStyles_movie-genres__E0lUx","movie-overview":"PageStyles_movie-overview__QV5hK","movie-nav":"PageStyles_movie-nav__nBHv4","movie-nav-list":"PageStyles_movie-nav-list__DTPOJ","movie-nav-item":"PageStyles_movie-nav-item__TiJWR","movie-nav-link":"PageStyles_movie-nav-link__3c282","movie-cast-reviews":"PageStyles_movie-cast-reviews__ygJws","back-button":"PageStyles_back-button__ZMA1q"}}}]);
//# sourceMappingURL=492.be71f08a.chunk.js.map