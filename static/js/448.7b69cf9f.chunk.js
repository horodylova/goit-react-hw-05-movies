"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[448],{14:function(e,t,n){n.d(t,{v:function(){return a}});var a={apiKey:"a3419bb2c415f83d30bbc28c2bb776df",baseUrl:"https://api.themoviedb.org/3"}},448:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(861),i=n(439),r=n(757),s=n.n(r),o=n(791),c="FormSearch_search-input__8BD25",l="FormSearch_search-button__2x61q",v=n(184),m=function(e){var t=e.onSearch,n=(0,o.useState)(""),a=(0,i.Z)(n,2),r=a[0],s=a[1];return(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[(0,v.jsx)("input",{type:"text",className:c,placeholder:"Search by name",value:r,onChange:function(e){s(e.target.value)}}),(0,v.jsx)("button",{type:"submit",className:l,children:"Search"})]})},_=n(340),u=n(14),h=u.v.apiKey,p=u.v.baseUrl,f=function(){var e=(0,a.Z)(s().mark((function e(t){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/search/movie?api_key=").concat(h,"&query=").concat(t),e.prev=1,e.next=4,_.Z.get(n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),g=n(87),y=n(911),S=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],c=function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(t);case 3:n=e.sent,r(n.results||[]),console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{className:y.Z["movies-container"],children:[(0,v.jsx)("h2",{children:"Search Movies"}),(0,v.jsx)(m,{onSearch:c}),n.length>0&&(0,v.jsxs)("div",{className:y.Z["search-results"],children:[(0,v.jsx)("h3",{children:"Search Results"}),(0,v.jsx)("ul",{className:y.Z["movie-list"],children:n.map((function(e){return(0,v.jsx)("li",{className:y.Z["movie-item"],children:(0,v.jsx)(g.rU,{to:"/movies/".concat(e.id),className:y.Z["movie-link"],children:e.title})},e.id)}))})]})]})}},911:function(e,t){t.Z={"home-container":"PageStyles_home-container__hThpm","movie-list":"PageStyles_movie-list__9dx5e","movie-item":"PageStyles_movie-item__3WRpZ","movie-link":"PageStyles_movie-link__iNmaH","movies-container":"PageStyles_movies-container__I-vGq","search-results":"PageStyles_search-results__hOLzP","movie-details-container":"PageStyles_movie-details-container__iyGqo","movie-title":"PageStyles_movie-title__DJY7Y","movie-image":"PageStyles_movie-image__Q0FPF","movie-info":"PageStyles_movie-info__2OOdL","movie-genres":"PageStyles_movie-genres__E0lUx","movie-overview":"PageStyles_movie-overview__QV5hK","movie-nav":"PageStyles_movie-nav__nBHv4","movie-nav-list":"PageStyles_movie-nav-list__DTPOJ","movie-nav-item":"PageStyles_movie-nav-item__TiJWR","movie-nav-link":"PageStyles_movie-nav-link__3c282","movie-cast-reviews":"PageStyles_movie-cast-reviews__ygJws"}}}]);
//# sourceMappingURL=448.7b69cf9f.chunk.js.map