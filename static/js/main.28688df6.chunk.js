(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),s=n(5),i=n(3),l=n(4),u=n(7),d=n(6),m=(n(13),function(){return fetch("https://mate.academy/students-api/goods").then((function(t){return t.json()}))}),f=function(t){var e=t.goods;return a.a.createElement("ul",{className:"list"},e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:t.color},className:"list__item"},t.name)})))},g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[],error:!1},t.getAllGoods=function(){m().then((function(e){t.setState({goods:e.data})})).catch((function(e){t.setState({error:e})}))},t.getFiveGoods=function(){m().then((function(e){t.setState({goods:Object(s.a)(e.data).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})})).catch((function(e){t.setState({error:e})}))},t.getRedGoods=function(){m().then((function(e){t.setState({goods:e.data.filter((function(t){return"red"===t.color}))})})).catch((function(e){t.setState({error:e})}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.error;return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",className:"button",onClick:this.getAllGoods},"All"),a.a.createElement("button",{type:"button",className:"button",onClick:this.getFiveGoods},"5 first goods"),a.a.createElement("button",{type:"button",className:"button",onClick:this.getRedGoods},"red goods"),n?a.a.createElement("div",{className:"error"},"Ooops! Something went wrong, maybe try later"):a.a.createElement(f,{goods:e}))}}]),n}(a.a.Component);c.a.render(a.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.28688df6.chunk.js.map