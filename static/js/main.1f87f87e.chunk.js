(this["webpackJsonpspotify-scroll"]=this["webpackJsonpspotify-scroll"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(15),o=n.n(a),s=(n(21),n(22),n(6)),i=n(16),l=n.n(i).a.get,j=n(0),u=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),o=Object(s.a)(a,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){l("".concat("https://afternoon-tor-36303.herokuapp.com","/track/recent/random")).then((function(e){return e.data})).then(u).then((function(){return c(!1)})).catch((function(){return c(!0)}))}),[]),n?Object(j.jsx)(j.Fragment,{children:"Unable to find a random track"}):i?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("a",{href:i.external_urls.spotify,target:"_blank",rel:"noreferrer noopener",children:Object(j.jsx)("img",{src:i.album.images[0].url,alt:i.album.name})})}):Object(j.jsx)(j.Fragment,{children:"Searching for a track..."})},f=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)("p",{children:["Scroll\xa0",Object(j.jsx)("a",{className:"App-link",href:"https://www.spotify.com",target:"_blank",rel:"noopener noreferrer",children:"Spotify"})]})}),Object(j.jsx)(u,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),h()}},[[42,1,2]]]);
//# sourceMappingURL=main.1f87f87e.chunk.js.map