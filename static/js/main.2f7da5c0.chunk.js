(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.0decbbc9.jpg"},function(e,t,a){e.exports=a.p+"static/media/header4.1e178383.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.26a6830d.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.70a52587.jpg"},function(e,t,a){e.exports=a.p+"static/media/error1.d614620e.jpg"},,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=(a(32),a(9)),o=a(10),u=a(12),m=a(11),s=a(13),p=(a(33),a(2)),d=a(6),E=(a(34),a(15)),h=a.n(E),f=a(22),g=a.n(f),v=a(23),b=a.n(v),j=a(16),x=a.n(j),y=a(24),k=a.n(y),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:h.a,alt:"las"})}}),r.a.createElement(d.c,{path:"/products",render:function(){return r.a.createElement("img",{src:g.a,alt:"gory"})}}),r.a.createElement(d.c,{path:"/product/:idProduct",render:function(){return r.a.createElement("img",{src:h.a,alt:"las"})}}),r.a.createElement(d.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:b.a,alt:"szopa"})}}),r.a.createElement(d.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:x.a,alt:"most"})}}),r.a.createElement(d.c,{path:"/login",render:function(){return r.a.createElement("img",{src:x.a,alt:"most"})}}),r.a.createElement(d.c,{render:function(){return r.a.createElement("img",{src:k.a,alt:"error"})}})))},q=(a(40),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"Panel admina",path:"/login"}]),z=function(){var e=q.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},O=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:16}},a),r.a.createElement("p",{style:{fontSize:15}},n))},S=[{id:1,title:"Wiewi\xf3rki uciekaj\u0105 z las\xf3w",author:"Tomasz Dzik",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi ipsum ad excepturi magni dolores quam quo, quae veritatis aspernatur facilis ipsam ut molestiae vero quidem quas nemo, a minus."},{id:2,title:"Koty nie chodz\u0105 po \u015bcianach",author:"Anna Pingwin",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi ipsum ad excepturi magni dolores quam quo, quae veritatis aspernatur facilis ipsam ut molestiae vero quidem quas nemo, a minus."},{id:3,title:"M\xf3j pies nie je mi\u0119sa",author:"Roman Kloczkowski",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi ipsum ad excepturi magni dolores quam quo, quae veritatis aspernatur facilis ipsam ut molestiae vero quidem quas nemo, a minus."}],N=function(){var e=S.map(function(e){return r.a.createElement(O,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},P=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},L=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(P,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t do list produkt\xf3w"))},C=(a(41),["samoch\xf3d","rower","motor"]),F=function(){var e=C.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},J=(a(42),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:""})},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107"}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(d.a,{when:this.state.value,message:"Nie doko\u0144czy\u0142e\u015b formularza. Czy na pewno chcesz opu\u015bci\u0107 stron\u0119?"}))}}]),t}(r.a.Component)),B=function(){return r.a.createElement(d.c,{render:function(){return r.a.createElement(d.b,{to:"/login"})}})},T=function(){return r.a.createElement("div",null,"Strona o podanym adresie nie istnieje")},W=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Podaj login",r.a.createElement("input",{type:"text"})),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Zaloguj"))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,component:N}),r.a.createElement(d.c,{path:"/products",component:F}),r.a.createElement(d.c,{path:"/product/:id",component:L}),r.a.createElement(d.c,{path:"/contact",component:J}),r.a.createElement(d.c,{path:"/admin",component:B}),r.a.createElement(d.c,{path:"/login",component:W}),r.a.createElement(d.c,{component:T})))},D=(a(43),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(d.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,"stronie g\u0142\xf3wnej"))}}),r.a.createElement(d.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.page))}}),r.a.createElement(d.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.params.idProduct))}}))}),K=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(w,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(z,null)),r.a.createElement("section",{className:"page"},r.a.createElement(A,null))),r.a.createElement("footer",null,r.a.createElement(D,null))))}}]),t}(n.Component);l.a.render(r.a.createElement(K,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.2f7da5c0.chunk.js.map