(this["webpackJsonpmy-pokedex"]=this["webpackJsonpmy-pokedex"]||[]).push([[0],{18:function(e,a,t){e.exports=t(39)},23:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),o=(t(23),t(24),t(25),t(26),t(28),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"bg-black"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("img",{className:"logo",src:"https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png",alt:"",style:{width:"200px"}}),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",target:"blank",href:"https://pokeapi.co/"},r.a.createElement("i",{className:"fas fa-database fa-2x"}),r.a.createElement("span",null,"PokeApi"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",target:"blank",href:"https://reactjs.org/"},r.a.createElement("i",{className:"fab fa-react fa-2x"}),r.a.createElement("span",null,"React"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",target:"blank",href:"https://getbootstrap.com/"},r.a.createElement("i",{className:"fab fa-bootstrap fa-2x"}),r.a.createElement("span",null,"Bootstrap"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("span",{className:"nav-link dropdown-toggle active float-right",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",null,"danielPantalena")),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",target:"blank",href:"https://danielpantalena.github.io"},"Page"),r.a.createElement("a",{className:"dropdown-item",target:"blank",href:"https://www.linkedin.com/in/danielpantalena/"},"LinkedIn"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",target:"blank",href:"https://github.com/danielPantalena"},"GitHub"))))))))}),s=t(6),m=t(1),i=t(4),u=t(5),p=t.n(u),d=t(8),f=function(){var e=Object(d.a)(p.a.mark((function e(a,t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(a,"&offset=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(p.a.mark((function e(a){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=(t(30),function(e){var a=Object(n.useState)(Object),t=Object(i.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(!0),m=Object(i.a)(o,2),u=m[0],p=m[1];return r.a.useEffect((function(){var a=e.name;E(a).then((function(e){l(e),p(!1)}))}),[e]),u?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{to:"/".concat(c.name),className:"pokemon"},r.a.createElement("p",{className:"pokemon-id"},"#".concat(c.id)),r.a.createElement("img",{src:c.sprites.front_default,alt:"pokemon"}),r.a.createElement("h3",{className:"pokemon-name"},c.name)))}),g=(t(35),function(){var e=r.a.useState([]),a=Object(i.a)(e,2),t=a[0],n=a[1],c=r.a.useState(!1),l=Object(i.a)(c,2),o=l[0],s=l[1];return r.a.useEffect((function(){f(151,0).then((function(e){n(e),s(!0)}))}),[]),o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokedex"},t.map((function(e){return r.a.createElement(b,{key:e.name,name:e.name})})))):r.a.createElement("div",null,"Carregando...")}),h=(t(36),function(e){var a=e.pokemon;return console.log(a),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(a.id,".png"),alt:"a poke"})),r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",{className:"mx-auto pokemon-name"},a.name),a.stats.map((function(e){var a=e.stat,t=e.base_stat;return r.a.createElement("div",{key:a.name,className:"row align-items-center"},r.a.createElement("div",{className:"col-12 col-md-3"},a.name.toUpperCase()),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",style:{width:"".concat(t,"%")}},r.a.createElement("span",{className:"base-stat"},t)))))})))))}),k=(t(37),{bug:"b1c12e",dark:"4f3a2d",dragon:"755edf",electric:"fcbc17",fairy:"f4b1f4",fighting:"823851d",fire:"e73b0c",flying:"a3b3f7",ghost:"6060b2",grass:"74c236",ground:"d3b257",ice:"a3e7fd",normal:"c8c4bc",psychic:"FF1493",poison:"934594",rock:"b9a156",steel:"b5b5c3",water:"3295f6"}),N=function(e){var a=e.match,t=r.a.useState(!0),n=Object(i.a)(t,2),c=n[0],l=n[1],o=r.a.useState(Object),m=Object(i.a)(o,2),u=m[0],p=m[1],d=r.a.useState("URLnotFound"),E=Object(i.a)(d,2),b=E[0],g=E[1];r.a.useEffect((function(){f(151,0).then((function(e){var t,n,r=null!==(t=null===(n=e.find((function(e){return e.name===a.params.name})))||void 0===n?void 0:n.url)&&void 0!==t?t:"URLnotFound";g(r)}))}),[a]),r.a.useEffect((function(){"URLnotFound"!==b&&v(b).then((function(e){p(e),l(!1)}))}),[b]);var N=function(e){if(!function(e){return e in k}(e))throw Error("".concat(e," was NOT found as keyof TYPE_COLORS"));return"#".concat(k[e])};return c?r.a.createElement("div",null,"Carregando..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content",style:{height:"100vh"}},r.a.createElement(s.b,{to:"/",className:"text-white back-link"},r.a.createElement("div",{className:"link-to-back"},r.a.createElement("i",{className:"fas fa-arrow-left"}),r.a.createElement("span",{className:"link-to-back-text"},"Voltar"))),r.a.createElement("div",{className:"col mt-3 pt-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("h3",{className:"pokemon-name"},"#","".concat(u.id)," ",u.name)),r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"float-right"},u.types.map((function(e){var a=e.type;return r.a.createElement("span",{key:a.name,className:"badge badge-primary badge-pill mr-1 type-name",style:{backgroundColor:"".concat(N(a.name))}},a.name)})))))),r.a.createElement(h,{pokemon:u})))))},w=function(){return r.a.createElement(s.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:g}),r.a.createElement(m.a,{path:"/:name",component:N})))};t(38);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.74f1a255.chunk.js.map