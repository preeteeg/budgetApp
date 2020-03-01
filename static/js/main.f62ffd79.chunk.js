(this.webpackJsonpmybudget=this.webpackJsonpmybudget||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(14),a(7)),m=a(8),s=a(2),i=a(5),u=a.n(i),d=(a(15),function(e){var t=e.type,a=e.text;return c.a.createElement("div",{className:"alert alert-".concat(t)},a)}),g=a(1),h=function(e){var t=e.amount,a=e.charge,n=e.handleAmount,l=e.handleCharge,r=e.handleSubmit,o=e.isEditMode;return c.a.createElement("form",{onSubmit:r},c.a.createElement("div",{className:"form-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"charge"},"Charge"),c.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"e.g. rent",value:a,onChange:l})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"Amount"},"Amount"),c.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"e.g. 100",value:t,onChange:n}))),c.a.createElement("button",{type:"submit",className:"btn"},o?"Edit Item":"Add Item",c.a.createElement(g.c,{className:"btn-icon"})))},b=function(e){var t=e.expense,a=e.editItem,n=e.deleteItem,l=t.id,r=t.charge,o=t.amount;return c.a.createElement("li",{className:"item"},c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"expense"},r),c.a.createElement("span",{className:"amount"},"$",o)),c.a.createElement("div",null,c.a.createElement("button",{className:"edit-btn","arial-label":"edit button",onClick:function(){return a(l)}},c.a.createElement(g.b,null)),c.a.createElement("button",{className:"clear-btn","arial-label":"delete button",onClick:function(){return n(l)}},c.a.createElement(g.a,null))))},p=function(e){var t=e.expenses,a=e.clearList,n=e.handleEditItem,l=e.handelDeleteItem;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list"},t.map((function(e){return c.a.createElement(b,{key:e.id,expense:e,editItem:n,deleteItem:l})}))),t.length>0&&c.a.createElement("button",{className:"btn",onClick:a},"clear expenses",c.a.createElement(g.a,{className:"btn-icon"})))},f=a(6),E=a.n(f),v=function(e){var t=e.income,a=e.handleIncome,n=e.handleSubmit;return c.a.createElement("form",{onSubmit:n},c.a.createElement("div",{className:"form-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"income"},"Income"),c.a.createElement("input",{type:"number",className:"form-control",id:"income",name:"income",placeholder:"e.g. salary",value:t,onChange:a}))),c.a.createElement("button",{type:"submit",className:"btn"},"Add Income",c.a.createElement(g.c,{className:"btn-icon"})))},N=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[],S=localStorage.getItem("income")?JSON.parse(localStorage.getItem("income")):0;localStorage.getItem("saving")&&JSON.parse(localStorage.getItem("saving"));var I=function(){var e=Object(n.useState)(N),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),g=i[0],b=i[1],f=Object(n.useState)(""),I=Object(s.a)(f,2),O=I[0],x=I[1],y=Object(n.useState)(S),j=Object(s.a)(y,2),w=j[0],A=j[1],C=Object(n.useState)(0),k=Object(s.a)(C,2),J=k[0],F=k[1],D=Object(n.useState)({show:!1}),$=Object(s.a)(D,2),B=$[0],T=$[1],L=Object(n.useState)(!1),M=Object(s.a)(L,2),W=M[0],z=M[1],H=Object(n.useState)(0),P=Object(s.a)(H,2),q=P[0],G=P[1],K=a.reduce((function(e,t){return e+parseInt(t.amount)}),0);function Q(){setTimeout((function(){T({show:!1})}),3e3)}return Object(n.useEffect)((function(){localStorage.setItem("expenses",JSON.stringify(a)),localStorage.setItem("income",JSON.stringify(w)),localStorage.setItem("saving",JSON.stringify(J))}),[a,w,J]),c.a.createElement(c.a.Fragment,null,B.show&&c.a.createElement(d,{type:B.type,text:B.text}),c.a.createElement(d,null),c.a.createElement("h1",null,"Budget App",c.a.createElement("img",{src:u.a,style:{height:53,width:36,verticalAlign:"bottom"},alt:"website logo"})),c.a.createElement("main",{className:"App"},c.a.createElement(v,{income:w,handleIncome:function(e){return A(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),!(w<0||""==w))return a.length>0?F(w-K):F(w);T({show:!0,type:"danger",text:"Income cannot be less than zero"}),Q()}}),c.a.createElement(h,{amount:O,charge:g,handleAmount:function(e){return x(e.target.value)},handleCharge:function(e){return b(e.target.value)},handleSubmit:function(e){if(e.preventDefault(),""!=g&&O>0){if(W){var t=a.map((function(e){return e.id==q?Object(m.a)({},e,{charge:g,amount:O}):e}));l(t),z(!1)}else l([].concat(Object(o.a)(a),[{id:E()(),charge:g,amount:O}])),T({show:!0,type:"success",text:"Expense was added"}),Q();b(""),x(""),F(w-O)}else T({show:!0,type:"danger",text:"Please add expense item"}),Q()},isEditMode:W}),c.a.createElement(p,{expenses:a,clearList:function(e){l([]),T({show:!0,type:"success",text:"Items deleted"}),Q(),z(!1)},handleEditItem:function(e){var t=a.find((function(t){return t.id===e})),n=t.amount,c=t.charge;z(!0),b(c),x(n),G(e),console.log(t)},handelDeleteItem:function(e){var t=a.filter((function(t){return t.id!=e}));l(t)}})),c.a.createElement("div",{className:"textHolder"},c.a.createElement("span",{className:"total"},"Total spending :"," ","$",K),c.a.createElement("span",{className:"total"},"Total Saving :"," ","$",w>0?w-K:0,"  ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a.p+"static/media/logo.8f2597c7.svg"},9:function(e,t,a){e.exports=a(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.f62ffd79.chunk.js.map