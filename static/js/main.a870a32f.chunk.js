(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),m=a.n(n),l=a(3),o=a.n(l),r=(a(16),a(4)),c=a(1),u=a(5),i=a(6),s=a(8),d=a(7),v=a(9),f=(a(17),function(e){return m.a.createElement("option",null,e.value)}),h=(a(18),[{value:7},{value:8},{value:9},{value:10},{value:11},{value:12},{value:13},{value:14},{value:15},{value:16},{value:17},{value:18},{value:19},{value:20}]),p=[{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8}],E=function(e){var t=h.map(function(e){return m.a.createElement(f,{key:e.value,value:e.value})}),a=p.map(function(e){return m.a.createElement(f,{key:e.value,value:e.value})});return m.a.createElement(m.a.Fragment,null," ",m.a.createElement("form",null,m.a.createElement("label",{htmlFor:"mandate"},"Ilo\u015b\u0107 mandat\xf3w w okr\u0119gu:"),m.a.createElement("select",{name:"mandate",id:"mandate",onChange:e.handleSelectMandate},t)),m.a.createElement("form",null,m.a.createElement("label",{htmlFor:"committee"},"Ilo\u015b\u0107 komitet\xf3w:"),m.a.createElement("select",{name:"committee",id:"committee",onChange:e.handleSelectCommittee},a)))},g=(a(19),function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"group"},m.a.createElement("div",{className:"box"},m.a.createElement("input",{required:"required",onChange:e.handleInputCommittee,type:"text",id:"nameCommittee",name:e.numberCommittee}),m.a.createElement("label",{htmlFor:"nameCommittee"},"Nazwa Komitetu:")),m.a.createElement("div",{className:"box"},m.a.createElement("input",{required:"required",onChange:e.handleInputCommittee,type:"number",id:"vote",name:e.numberCommittee,min:"1"}),m.a.createElement("label",{htmlFor:"vote"},"Ilo\u015b\u0107 G\u0142os\xf3w:"))))}),y=(a(20),function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement("li",null,"Komitet ",e.committee.name," zdoby\u0142"," ",m.a.createElement("span",null,e.committee.mandates)," ",1===e.committee.mandates?"mandat":0===e.committee.mandates||e.committee.mandates>4?"mandat\xf3w":e.committee.mandates>1&&e.committee.mandates<5?"mandaty":void 0,", przy"," ",(e.committee.vote/e.sumOfVotes*100).toFixed(2)," % g\u0142os\xf3w"))}),b=function(e){var t=e.committees.map(function(t){return m.a.createElement(y,{key:t.id,committee:t,sumOfVotes:e.sumOfVotes})});return m.a.createElement(m.a.Fragment,null,m.a.createElement("ul",null,t))},w=(a(21),function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"info"},m.a.createElement("h1",null,"Kalkulator:"),m.a.createElement("p",null,"1. Pokazuje podzia\u0142 ilo\u015bci mandat\xf3w pomi\u0119dzy komitety wyborcze."),m.a.createElement("p",null,"2. Uwzgl\u0119dnia ilo\u015b\u0107 mandat\xf3w w wyborach do Sejmu."),m.a.createElement("p",null,"3. Nie uwzgl\u0119dnia progu wyborczego 5%."),m.a.createElement("p",null,"4. Dotyczy podzia\u0142u w ramach okr\u0119gu wyborczego, a nie w skali kraju."),m.a.createElement("i",{className:"fas fa-times",onClick:function(){return e.setInfo(!1)}})))}),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,m=new Array(n),l=0;l<n;l++)m[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(m)))).state={info:!1,mandate:7,sumOfVotes:0,displayResault:!1,committees:[{id:0,name:"",vote:null,mandates:0},{id:1,name:"",vote:null,mandates:0}]},a.handleSelectCommittee=function(e){var t=parseInt(e.target.value),n=Object(c.a)(a.state.committees);if(t>a.state.committees.length)for(var m=a.state.committees.length;m<t;m++)n.push({id:m,name:"",vote:null,mandates:0});else t<a.state.committees.length&&n.splice(t,n.length-t);var l=a.count(n);a.checkResault(l),a.setState({committees:l})},a.handleSelectMandate=function(e){var t=e.target.id,n=parseInt(e.target.value);a.setState(Object(r.a)({},t,n));var m=a.count(a.state.committees,n);a.checkResault(m),a.setState({committees:m})},a.handleInputCommittee=function(e){var t=a.state.committees.map(function(t){return t.id===parseInt(e.target.name)&&("number"===e.target.type&&(t.vote=parseInt(e.target.value)),"text"===e.target.type&&(t.name=e.target.value)),t}),n=a.count(t);a.checkResault(n),a.setState({committees:n})},a.count=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.mandate,n=0,m=0;m<e.length;m++)n+=e[m].vote;for(var l=[],o=0;o<e.length;o++){for(var r=[],u=1;u<t+1;u++)r.push({id:e[o].id,n:e[o].vote/u});l.push(r)}for(var i=[],s=0;s<l.length;s++)i.push.apply(i,Object(c.a)(l[s]));i.sort(function(e,t){return t.n-e.n});var d=i.splice(0,t);return e.forEach(function(e){var t=0;return d.forEach(function(a){a.id===e.id&&t++}),e.mandates=t,e}),a.state.sumOfVotes!==n&&a.setState({sumOfVotes:n}),e},a.checkResault=function(e){var t=!0;e.forEach(function(e){e.name&&e.vote||(t=!1)}),a.setState({displayResault:t})},a.setInfo=function(e){a.setState({info:e})},a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.committees.map(function(t){return m.a.createElement(g,{key:t.id,numberCommittee:t.id,handleInputCommittee:e.handleInputCommittee})});return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"App"},m.a.createElement("header",null,"Kalkulator metody d\u2019Hondta"),m.a.createElement("div",{className:"select"},m.a.createElement(E,{handleSelectMandate:this.handleSelectMandate,handleSelectCommittee:this.handleSelectCommittee})),m.a.createElement("div",{className:"input"},t),this.state.displayResault&&m.a.createElement(b,{committees:this.state.committees,sumOfVotes:this.state.sumOfVotes,mandate:this.state.mandate})),m.a.createElement("i",{className:"fas fa-info",onClick:function(){return e.setInfo(!0)}}),this.state.info&&m.a.createElement(w,{setInfo:this.setInfo}))}}]),t}(n.Component);o.a.render(m.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.a870a32f.chunk.js.map