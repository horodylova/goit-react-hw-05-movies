"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[471],{14:function(e,t,a){a.d(t,{v:function(){return n}});var n={apiKey:"a3419bb2c415f83d30bbc28c2bb776df",baseUrl:"https://api.themoviedb.org/3"}},471:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var n=a(861),s=a(439),r=a(757),i=a.n(r),c=a(791),o=a(689),l=a(340),v=a(14),u=v.v.apiKey,m=v.v.baseUrl,_=function(){var e=(0,n.Z)(i().mark((function e(t){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(m,"/movie/").concat(t,"?api_key=").concat(u),e.prev=1,e.next=4,l.Z.get(a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(m,"/movie/").concat(t,"/credits?api_key=").concat(u),e.prev=1,e.next=4,l.Z.get(a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(t){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(m,"/movie/").concat(t,"/reviews?api_key=").concat(u),e.prev=1,e.next=4,l.Z.get(a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=a(87),f=a(184),x=function(e){var t=e.src,a=void 0===t?"":t,n=e.fallback,s=e.alt,r="null"===a?null:a||n||"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";return(0,f.jsx)("img",{src:r,alt:s,width:250})},w=x,g="Cast_cast-container__VofqV",y="Cast_cast-title__lvYvA",j="Cast_cast-list__ond-A",k="Cast_cast-item__6xvgR",Z="Cast_cast-image__Lf-J8",b="Cast_cast-name__4kFaz",N=function(e){var t=e.cast;return(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("h2",{className:y,children:"Cast"}),(0,f.jsx)("ul",{className:j,children:t.map((function(e){return(0,f.jsxs)("li",{className:k,children:[(0,f.jsx)(w,{src:null,alt:"".concat(e.name," profile"),className:Z}),(0,f.jsx)("p",{className:b,children:e.name})]},e.id)}))})]})},S="Reviews_reviews-container__lVMo7",P="Reviews_review-list__ufE75",C="Reviews_review-item__86X7d",R="Reviews_review-author__0+Qct",U="Reviews_review-content__zziG0",O=function(e){var t=e.reviews;return(0,f.jsx)("div",{className:S,children:(0,f.jsx)("ul",{className:P,children:t.map((function(e){return(0,f.jsxs)("li",{className:C,children:[(0,f.jsx)("p",{className:R,children:e.author}),(0,f.jsx)("p",{className:U,children:e.content})]},e.id)}))})})},q=a(911),A=function(e){var t,a,r,l=e.setSearchQuery,v=(0,o.UO)().movieId,u=(0,c.useState)(null),m=(0,s.Z)(u,2),w=m[0],g=m[1],y=(0,c.useState)(null),j=(0,s.Z)(y,2),k=j[0],Z=j[1],b=(0,c.useState)([]),S=(0,s.Z)(b,2),P=S[0],C=S[1],R=(0,o.TH)(),U=(0,c.useState)("cast"),A=(0,s.Z)(U,2),G=A[0],J=A[1],Q=null!==(t=null===R||void 0===R||null===(a=R.state)||void 0===a?void 0:a.from)&&void 0!==t?t:"/",V=null===R||void 0===R||null===(r=R.state)||void 0===r?void 0:r.searchQuery;(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(v);case 3:t=e.sent,g(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),(0,c.useEffect)((function(){V&&l(V)}),[V,l]);var z=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(v);case 3:t=e.sent,Z(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(v);case 3:t=e.sent,C(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(e){J(e)};if(!w)return(0,f.jsx)("div",{children:"Loading..."});var T=w.title,D=w.genres,F=w.overview,H=w.release_date,K=w.vote_average;return(0,f.jsxs)("div",{className:q.Z["movie-details-container"],children:[(0,f.jsxs)(h.rU,{className:q.Z["back-button"],to:Q,children:["Go Back"," "]}),(0,f.jsx)("h2",{className:q.Z["movie-title"],children:T}),(0,f.jsx)(x,{src:null,alt:T}),(0,f.jsxs)("div",{className:q.Z["movie-info"],children:[(0,f.jsxs)("p",{className:q.Z["movie-genres"],children:["Genres: ",D.map((function(e){return e.name})).join(", ")]}),(0,f.jsxs)("p",{className:q.Z["movie-overview"],children:["Overview: ",F]}),(0,f.jsxs)("p",{children:["Release Date: ",H]}),(0,f.jsxs)("p",{children:["Vote Average: ",K]})]}),(0,f.jsx)("nav",{className:q.Z["movie-nav"],children:(0,f.jsxs)("ul",{className:q.Z["movie-nav-list"],children:[(0,f.jsx)("li",{className:q.Z["movie-nav-item"],children:(0,f.jsx)(h.rU,{to:"cast",className:"".concat(q.Z["movie-nav-link"]," ").concat("cast"===G&&q.Z["active-tab"]),onClick:function(){z(),L("cast")},children:"Cast"})}),(0,f.jsx)("li",{className:q.Z["movie-nav-item"],children:(0,f.jsx)(h.rU,{to:"reviews",className:"".concat(q.Z["movie-nav-link"]," ").concat("reviews"===G&&q.Z["active-tab"]),onClick:function(){E(),L("reviews")},children:"Reviews"})})]})}),(0,f.jsxs)("div",{className:q.Z["movie-cast-reviews"],children:["cast"===G&&k&&(0,f.jsx)(N,{cast:k}),"reviews"===G&&P&&(0,f.jsx)(O,{fetchReviews:E,reviews:P})]})]})}},911:function(e,t){t.Z={"home-container":"PageStyles_home-container__hThpm","movie-list":"PageStyles_movie-list__9dx5e","movie-item":"PageStyles_movie-item__3WRpZ","movie-link":"PageStyles_movie-link__iNmaH","movies-container":"PageStyles_movies-container__I-vGq","search-results":"PageStyles_search-results__hOLzP","movie-details-container":"PageStyles_movie-details-container__iyGqo","movie-title":"PageStyles_movie-title__DJY7Y","movie-image":"PageStyles_movie-image__Q0FPF","movie-info":"PageStyles_movie-info__2OOdL","movie-genres":"PageStyles_movie-genres__E0lUx","movie-overview":"PageStyles_movie-overview__QV5hK","movie-nav":"PageStyles_movie-nav__nBHv4","movie-nav-list":"PageStyles_movie-nav-list__DTPOJ","movie-nav-item":"PageStyles_movie-nav-item__TiJWR","movie-nav-link":"PageStyles_movie-nav-link__3c282","movie-cast-reviews":"PageStyles_movie-cast-reviews__ygJws","back-button":"PageStyles_back-button__ZMA1q"}}}]);
//# sourceMappingURL=471.0772d6ff.chunk.js.map