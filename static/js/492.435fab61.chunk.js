"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[492,166],{14:function(e,t,r){r.d(t,{v:function(){return n}});var n={apiKey:"a3419bb2c415f83d30bbc28c2bb776df",baseUrl:"https://api.themoviedb.org/3"}},166:function(e,t,r){r.r(t),r.d(t,{FormSearch:function(){return u}});var n=r(439),a=r(791),i=r(87),s="FormSearch_search-input__8BD25",o="FormSearch_search-button__2x61q",c=r(184),u=function(e){e.onSearch;var t=(0,a.useState)(""),r=(0,n.Z)(t,2),u=r[0],v=r[1],l=(0,i.lr)(),_=(0,n.Z)(l,2)[1];return(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_({searchquery:u})},children:[(0,c.jsx)("input",{type:"text",className:s,placeholder:"Search by name",value:u,onChange:function(e){v(e.target.value)}}),(0,c.jsx)("button",{type:"submit",className:o,children:"Search"})]})}},368:function(e,t,r){r.d(t,{e:function(){return s}});r(791);var n=r(689),a=r(87),i=r(184),s=function(e){var t=e.trendingMovies,r=e.searchQuery,s=e.searchResults,o=(0,n.TH)();return(0,i.jsx)("ul",{children:t.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:o,searchResults:s,searchQuery:r},children:e.title})},e.id)}))})}},492:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(861),a=r(439),i=r(757),s=r.n(i),o=r(791),c=r(87),u=r(166),v=r(368),l=r(340),_=r(14),m=_.v.apiKey,h=_.v.baseUrl,f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(h,"/search/movie?api_key=").concat(m,"&query=").concat(t),e.prev=1,e.next=4,l.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=r(911),y=r(184),g=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1],l=(0,c.lr)(),_=(0,a.Z)(l,1)[0].get("searchquery");return(0,o.useEffect)((function(){if(_){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(_);case 3:t=e.sent,i(t.results),console.log(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]),(0,y.jsxs)("div",{className:p.Z["movies-container"],children:[(0,y.jsx)("h2",{children:"Search Movies"}),(0,y.jsx)(u.FormSearch,{}),r.length>0&&(0,y.jsxs)("div",{className:p.Z["search-results"],children:[(0,y.jsx)("h3",{children:"Search Results"}),(0,y.jsx)(v.e,{trendingMovies:r})]})]})}},911:function(e,t){t.Z={"home-container":"PageStyles_home-container__hThpm","movie-list":"PageStyles_movie-list__9dx5e","movie-item":"PageStyles_movie-item__3WRpZ","movie-link":"PageStyles_movie-link__iNmaH","movies-container":"PageStyles_movies-container__I-vGq","search-results":"PageStyles_search-results__hOLzP","movie-details-container":"PageStyles_movie-details-container__iyGqo","movie-title":"PageStyles_movie-title__DJY7Y","movie-image":"PageStyles_movie-image__Q0FPF","movie-info":"PageStyles_movie-info__2OOdL","movie-genres":"PageStyles_movie-genres__E0lUx","movie-overview":"PageStyles_movie-overview__QV5hK","movie-nav":"PageStyles_movie-nav__nBHv4","movie-nav-list":"PageStyles_movie-nav-list__DTPOJ","movie-nav-item":"PageStyles_movie-nav-item__TiJWR","movie-nav-link":"PageStyles_movie-nav-link__3c282","movie-cast-reviews":"PageStyles_movie-cast-reviews__ygJws","back-button":"PageStyles_back-button__ZMA1q"}}}]);
//# sourceMappingURL=492.435fab61.chunk.js.map