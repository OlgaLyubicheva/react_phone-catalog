(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=a(2),u=a(14),i=a(7),s=Object(n.createContext)({}),m=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Home"))},p=a(8),h=a(11),f=a(12),d=a(15),E=a(13),v=a(17),g=(a(33),a(6)),b=a.n(g),y=(a(36),function(e){var t=e.history,a=Object(n.useContext)(s).setStorage,c=localStorage.buy&&localStorage.buy.split("&").map(function(e){return e.split("*")}),o=function(e){var t=e.map(function(e){return e.join("*")}).join("&");localStorage.setItem("buy",t)},u=function(e){var t=c.filter(function(t){return t[0]!==e});localStorage.removeItem(e),0!==t.length?o(t):localStorage.removeItem("buy"),a(function(e){return e-1})};return r.a.createElement("div",{className:"basket"},r.a.createElement("ul",{className:"basket__list"},c?c.map(function(e,a){return r.a.createElement("li",{className:"basket__list--item"},r.a.createElement("div",null,r.a.createElement("span",null,"".concat(a+1,".  ")),r.a.createElement(l.b,{to:"/phones/".concat(e[0]),className:""},localStorage[e[0]])),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return function(e){var a=Object(p.a)(c),n=c.indexOf(e);+e[1]-1!==0?(a[n]=[e[0],+e[1]-1],o(a),t.replace(t.location)):u(e[0])}(e)}},"-"),r.a.createElement("input",{className:"basket__count",value:e[1]}),r.a.createElement("button",{type:"button",onClick:function(){return function(e){var a=Object(p.a)(c);a[c.indexOf(e)]=[e[0],+e[1]+1],o(a),t.replace(t.location)}(e)}},"+"),r.a.createElement("button",{className:"basket__delete",type:"button",onClick:function(){return u(e[0])}},"x")))}):r.a.createElement("div",{className:"basket__empty"},"Cart is empty")))});y.Count=function(e){var t=e.countOfItem;return 0!==t&&r.a.createElement("div",{className:"header__basket--count"},t)},(y.AddButton=function(e){var t=e.phone;return r.a.createElement(s.Consumer,null,function(e){var a=e.setStorage;return r.a.createElement("button",{type:"button",disabled:localStorage.getItem(t.id)&&!0,className:"phone-catalog__phone--buy",onClick:function(){return function(e,t,a){localStorage.getItem("buy")?localStorage.buy+="&".concat(e,"*1"):localStorage.buy="".concat(e,"*1"),localStorage.setItem(e,t),a(function(e){return e+1})}(t.id,t.name,a)}},localStorage.getItem(t.id)?"Added to cart":"Buy")})}).propTypes={phone:b.a.shape({id:b.a.string,name:b.a.string}).isRequired};var _=y,j=Object(i.f)(function(e){var t=e.phones,a=e.match.url;return r.a.createElement("main",{className:"phone-catalog"},t.map(function(e){return r.a.createElement("div",{className:"phone-catalog__phone",key:e.id},r.a.createElement("div",{className:"phone-catalog__phone--img"},r.a.createElement("img",{src:"./".concat(e.imageUrl),alt:""})),r.a.createElement("div",{className:"phone-catalog__phone--info"},r.a.createElement(l.b,{to:"".concat(a,"/").concat(e.id)},e.name),r.a.createElement("p",null,e.snippet)),r.a.createElement(_.AddButton,{phone:e}))}))}),N=a(16),O=(a(39),Object(i.f)(function(e){var t=e.history,a=e.searchValues,n=t.location.pathname,c=function(e){var r=e.target,c=r.name,o=r.value,l=Object(N.a)({},a);if(o!==l[c]){l[c]=o;var u=Object.entries(l).filter(function(e){return""!==e[1]}).map(function(e){return"".concat(e[0],"=").concat(e[1])});t.push("".concat(n,"?").concat(encodeURI(u.join("&"))))}};return r.a.createElement("div",{className:"filter"},r.a.createElement("input",{className:"filter__query",type:"search",name:"query",value:a.query,onChange:function(e){return c(e)}}),r.a.createElement("select",{className:"filter__sort",name:"sort",value:a.sort,onChange:function(e){return c(e)}},r.a.createElement("option",{value:""},"Sort by"),r.a.createElement("option",{value:"name*1"},"Name (a-z)"),r.a.createElement("option",{value:"name*-1"},"Name (z-a)"),r.a.createElement("option",{value:"age*1"},"Newest")))})),k=a(9),S=a.n(k),w=a(18),I="https://mate-academy.github.io/phone-catalogue-static/api",C=function(){var e=Object(w.a)(S.a.mark(function e(t){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(w.a)(S.a.mark(function e(){var t,a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(I,"/phones.json"),e.next=3,C(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(w.a)(S.a.mark(function e(t){var a,n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(I,"/phones/").concat(t,".json"),e.next=3,C(a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A=(a(41),function(e){var t=e.split("*"),a=t[0],n=+t[1];switch(a){case"age":return function(e,t){return n*(e[a]-t[a])};case"name":return function(e,t){return n*e[a].localeCompare(t[a])};default:return function(e,t){return 0}}}),F=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={phones:[]},a.getFiltredPhones=function(e){var t=[],n=a.state.phones;return t=e.query?n.filter(function(t){return t.name.toLowerCase().includes(e.query)}):Object(p.a)(n),e.sort&&(t=Object(p.a)(t).sort(A(e.sort))),t},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;x().then(function(t){e.setState({phones:Object(p.a)(t)})})}},{key:"render",value:function(){var e=this.props.location.search,t={query:"",sort:""};if(e)for(var a=decodeURI(e).slice(1).split("&"),n=0;n<a.length;n+=1){var c=a[n].split("="),o=Object(u.a)(c,2),l=o[0],i=o[1];t[l]=i}var s=this.getFiltredPhones(t);return r.a.createElement("div",{className:"phones-page"},r.a.createElement(O,{searchValues:t}),r.a.createElement("div",null,r.a.createElement(j,{phones:s})))}}]),t}(r.a.Component),B=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404 Not Found"),r.a.createElement("div",null,"You may go to ",r.a.createElement(l.b,{to:"/"},"Home page")," and try find what you look for"))},P=(a(42),function(e){var t=e.phone;return r.a.createElement("div",{className:"phone-details"},r.a.createElement("h3",null,"Specification"),0!==t.length&&r.a.createElement("table",{className:"phone-details__tabl"},["android","battery","camera","connectivity","storage","hardware","sizeAndWeight"].map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{className:"phone-details__tabl--property",colSpan:"2"},e),Object.entries(t[e]).map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e[0]),r.a.createElement("td",null,function(e){switch(typeof e){case"boolean":return e?"Yes":!e&&"No";case"object":return e.join(", ");default:return e}}(e[1])))}))})))}),z=(a(43),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={phone:[],mainImg:"",isError:""},a.changeImg=function(e){return a.setState({mainImg:e})},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.phoneId;q(t).then(function(t){e.setState({phone:Object(N.a)({},t),mainImg:t.images[0]})}).catch(function(t){e.setState({isError:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.phone,n=t.mainImg,c=t.isError;return r.a.createElement("div",{className:"phone-details-page"},c?r.a.createElement("div",null,"Sorry, we cannot find a page."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"phone-details-page__main-img"},r.a.createElement("img",{src:n,alt:"phone"})),r.a.createElement("div",{className:"phone-details-page__info"},r.a.createElement("div",{className:"phone-details-page__info--name"},r.a.createElement("h1",null,a.name),r.a.createElement(_.AddButton,{phone:a})),r.a.createElement("p",null,a.description),r.a.createElement("div",{className:"phone-details-page__info--imges"},a.images&&a.images.map(function(t){return r.a.createElement("div",{className:"phone-details-page__info--img\n                              ".concat(n===t?"select":void 0)},r.a.createElement("img",{src:"./".concat(t),alt:"what the phone looks",onClick:function(){return e.changeImg(t)}}))}))),r.a.createElement("div",{id:"details",className:"phone-details-page__details"},r.a.createElement(P,{phone:a}))))}}]),t}(r.a.Component)),H=(a(44),function(){var e=Object(n.useState)(function(){return localStorage.buy?localStorage.buy.split("&").length:0}),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){return function(){localStorage.clear()}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"header__nav"},r.a.createElement("ul",{className:"header__nav--list"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/phones"},"Phones")))),r.a.createElement("div",{className:"header__basket"},r.a.createElement(l.c,{to:"/basket"},r.a.createElement("img",{src:"./img/ico/cart-icon.png",alt:"The buy basket"}))),r.a.createElement(_.Count,{countOfItem:a})),r.a.createElement("div",null,r.a.createElement(s.Provider,{value:{setStorage:c}},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:m}),r.a.createElement(i.a,{path:"/phones/:phoneId",component:z}),r.a.createElement(i.a,{path:"/phones",component:F}),r.a.createElement(i.a,{path:"/basket",component:_}),r.a.createElement(i.a,{component:B})))))});o.a.render(r.a.createElement(l.a,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6235a3e6.chunk.js.map