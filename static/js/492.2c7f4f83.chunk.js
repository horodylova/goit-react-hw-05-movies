"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[492,166],{14:function(e,t,r){r.d(t,{v:function(){return n}});var n={apiKey:"a3419bb2c415f83d30bbc28c2bb776df",baseUrl:"https://api.themoviedb.org/3"}},166:function(e,t,r){r.r(t),r.d(t,{FormSearch:function(){return u}});var n=r(439),a=r(791),s=r(87),i="FormSearch_search-input__8BD25",c="FormSearch_search-button__2x61q",o=r(184),u=function(e){var t=e.onSearch,r=(0,a.useState)(""),u=(0,n.Z)(r,2),l=u[0],v=u[1],m=(0,s.lr)(),h=(0,n.Z)(m,2)[1];return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h({query:l}),t(l)},children:[(0,o.jsx)("input",{type:"text",className:i,placeholder:"Search by name",value:l,onChange:function(e){v(e.target.value)}}),(0,o.jsx)("button",{type:"submit",className:c,children:"Search"})]})}},368:function(e,t,r){r.d(t,{e:function(){return i}});r(791);var n=r(689),a=r(87),s=r(184),i=function(e){var t=e.trendingMovies,r=e.searchQuery,i=e.searchResults,c=(0,n.TH)();return(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:{pathname:"/movies/".concat(e.id),search:"?searchQuery=".concat(r)},state:{from:c,searchResults:i||[],searchQuery:r||""},children:e.title})},e.id)}))})}},492:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(87),u=r(689),l=r(564),v=r(166),m=r(368),h=r(294),_=r(14),f=_.v.apiKey,p=_.v.baseUrl,d=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/search/movie?api_key=").concat(f,"&query=").concat(t),e.prev=1,e.next=4,h.Z.get(r);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),y=r(911),g=r(184),S=function(){var e,t=(0,c.useState)([]),r=(0,a.Z)(t,2),s=r[0],h=r[1],_=(0,o.lr)(),f=(0,a.Z)(_,1)[0],p=(0,l.k)().setResults,S=(0,u.s0)(),b=(0,u.TH)(),x=f.get("searchquery");(0,c.useEffect)((function(){b.state={from:b.pathname}}),[b]),(0,c.useEffect)((function(){if(x){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(x);case 3:t=e.sent,h(t.results),p(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x,p]);var k=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:r=e.sent,h(r.results),p(r.results),S("/movies?searchquery=".concat(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:y.Z["movies-container"],children:[(0,g.jsx)("h2",{children:"Search Movies"}),(0,g.jsx)(v.FormSearch,{onSearch:k}),s.length>0&&(0,g.jsxs)("div",{className:y.Z["search-results"],children:[(0,g.jsx)("h3",{children:"Search Results"}),(0,g.jsx)(m.e,{trendingMovies:s})]}),(null===(e=b.state)||void 0===e?void 0:e.from)&&(0,g.jsx)("div",{className:y.Z["back-button-container"],children:(0,g.jsx)("button",{className:y.Z["back-button"],onClick:function(){return S(b.state.from)},children:"Go Back"})})]})}},911:function(e,t){t.Z={"home-container":"PageStyles_home-container__hThpm","movie-list":"PageStyles_movie-list__9dx5e","movie-item":"PageStyles_movie-item__3WRpZ","movie-link":"PageStyles_movie-link__iNmaH","movies-container":"PageStyles_movies-container__I-vGq","search-results":"PageStyles_search-results__hOLzP","movie-details-container":"PageStyles_movie-details-container__iyGqo","movie-title":"PageStyles_movie-title__DJY7Y","movie-image":"PageStyles_movie-image__Q0FPF","movie-info":"PageStyles_movie-info__2OOdL","movie-genres":"PageStyles_movie-genres__E0lUx","movie-overview":"PageStyles_movie-overview__QV5hK","movie-nav":"PageStyles_movie-nav__nBHv4","movie-nav-list":"PageStyles_movie-nav-list__DTPOJ","movie-nav-item":"PageStyles_movie-nav-item__TiJWR","movie-nav-link":"PageStyles_movie-nav-link__3c282","movie-cast-reviews":"PageStyles_movie-cast-reviews__ygJws","back-button":"PageStyles_back-button__ZMA1q"}}}]);
//# sourceMappingURL=492.2c7f4f83.chunk.js.map