(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{10:function(e,t,n){e.exports={movie:"Movie_movie__30v9p",movie__img:"Movie_movie__img__3xuxJ",movie__title:"Movie_movie__title__2Ilcr",movie__year:"Movie_movie__year__fi9mU",movie__genres:"Movie_movie__genres__1outW"}},14:function(e,t,n){e.exports={container:"Home_container__2mTGB",loader:"Home_loader__MkUFv",movies:"Home_movies__2X8jx"}},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(19),s=n.n(r),a=n(12),o=n(2),j=n(8),m=n.n(j),v=n(13),u=n(9),l=n(1);var _=function(e){var t=e.coverImg,n=e.title,c=e.summary,i=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:t,alt:n}),Object(l.jsx)("h2",{children:n}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("ul",{children:i.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var d=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),a=s[0],j=s[1],d=Object(o.f)().id,b=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(d));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j([t.data.movie]),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),console.log(a),Object(l.jsx)("div",{children:n?Object(l.jsx)("h1",{children:"Loading..."}):a.map((function(e){return Object(l.jsx)(_,{coverImg:e.medium_cover_image,title:e.title,summary:e.description_intro,genres:e.genres},e.id)}))})},b=n(10),x=n.n(b);var O=function(e){var t=e.id,n=e.coverImg,c=e.title,i=e.year,r=e.summary,s=e.genres;return Object(l.jsxs)("div",{className:x.a.movie,children:[Object(l.jsx)("img",{src:n,alt:c,className:x.a.movie__img}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:x.a.movie__title,children:Object(l.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(l.jsx)("h3",{className:x.a.movie__year,children:i}),Object(l.jsx)("p",{children:r.length>235?"".concat(r.slice(0,235),"..."):r}),Object(l.jsx)("ul",{className:x.a.movie__genres,children:s.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})]})},h=n(14),f=n.n(h);var p=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),a=s[0],o=s[1],j=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,o(t.data.movies),i(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(l.jsx)("div",{className:f.a.container,children:n?Object(l.jsx)("div",{className:f.a.loader,children:Object(l.jsx)("span",{children:"Loading..."})}):Object(l.jsx)("div",{className:f.a.movies,children:a.map((function(e){return Object(l.jsx)(O,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var g=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/movie/:id",children:Object(l.jsx)(d,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(p,{})})]})})};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2fdff58b.chunk.js.map