(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,o=n(7),r=n.n(o),a=n(2),c=n(3),i=n(5),l=n(4),u=n(1),h=n.n(u),d=(n(12),n(13),n(0));!function(t){t.Name="name",t.Length="nameLength",t.Default=""}(s||(s={}));var b=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortBy:s.Default,goodLength:0},t.availLengthOfSelect=[0,1,2,3,4,5,6,7,8,9,10],t.reset=function(){t.setState((function(){return{isReversed:!1,sortBy:s.Default}}))},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortFunction=function(e){t.setState((function(){return{sortBy:e}}))},t.handleChange=function(e){var n=e.target.value;t.setState({goodLength:+n})},t.preparedGoodsList=function(){var e=t.props.goods,n=t.state,s=n.isReversed,o=n.sortBy,r=n.goodLength,a=e.filter((function(t){return t.length>r}));return a.sort((function(t,e){switch(o){case"name":return t.localeCompare(e);case"nameLength":return t.length-e.length;default:return 0}})),s&&a.reverse(),a},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goodLength,n=this.preparedGoodsList();return Object(d.jsxs)("article",{className:"goods",children:[Object(d.jsx)("select",{className:"goods__select",name:"itemLength",value:e,onChange:this.handleChange,children:this.availLengthOfSelect.map((function(t){return Object(d.jsx)("option",{value:t,children:t?"Good length more than: ".concat(t):"Choose good length"},t)}))}),Object(d.jsx)("ul",{className:"goods__list",children:n.map((function(t){return Object(d.jsx)("li",{className:"goods__item",children:t},t)}))}),Object(d.jsxs)("div",{className:"goods__buttons",children:[Object(d.jsx)("button",{type:"button",className:"goods__buttons-item",onClick:this.reverse,children:"Reversed"}),Object(d.jsx)("button",{type:"button",className:"goods__buttons-item",onClick:function(){return t.sortFunction(s.Name)},children:"Sort \u2018a-z\u2019"}),Object(d.jsx)("button",{type:"button",className:"goods__buttons-item",onClick:function(){return t.sortFunction(s.Length)},children:"Sort by name length"}),Object(d.jsx)("button",{type:"button",className:"goods__buttons-item",onClick:this.reset,children:"Reset"})]})]})}}]),n}(h.a.Component),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={isVisibly:!1},t.showGoods=function(){t.setState((function(){return{isVisibly:!0}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.isVisibly;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__title",children:"Goods"}),t?Object(d.jsx)(b,{goods:g}):Object(d.jsx)("button",{type:"button",className:"App__button",onClick:this.showGoods,children:"Start"})]})}}]),n}(h.a.Component);r.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.27e1b3d9.chunk.js.map