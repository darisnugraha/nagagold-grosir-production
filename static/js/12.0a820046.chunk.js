(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[12],{919:function(e,a,t){"use strict";t.r(a);var o=t(52),n=t(53),c=t(54),l=t(55),r=t(0),s=t.n(r),i=t(440),m=t(441),d=t(460),p=t(33),h=t(10),g=t(1),u=function(e){var a=e.input,t=e.label,o=e.type,n=e.limit,c=e.readOnly,l=e.meta,r=l.touched,i=l.error,m=l.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:o,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:c})),r&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},b=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.change("rongsokBruto",Object(g.D)(this.props.totalBrutoRongsok)),this.props.change("rongsokNetto",Object(g.D)(this.props.totalRongsok))}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",Object(g.D)(this.props.totalBrutoRongsok)),this.props.change("rongsokNetto",Object(g.D)(this.props.totalRongsok))}},{key:"showRongsokModal",value:function(){this.props.dispatch(Object(h.h)("RONGSOK")),this.props.dispatch(Object(h.j)())}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseRongsok","aria-expanded":"true","aria-controls":"collapseRongsok"},"Rongsok",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,{name:"rongsokNetto",type:"text",component:"input",className:"form-control",readOnly:!0})))),s.a.createElement("div",{id:"collapseRongsok",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-2"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("button",{className:"btn btn-primary btn-block",type:"button",onClick:function(){return e.showRongsokModal()}},"+")),s.a.createElement("div",{className:"col-lg-5 col-md-5"},s.a.createElement(i.a,{name:"rongsokBruto",label:"Brutto",type:"text",component:u,readOnly:!0,onBlur:this.setRongsok()})),s.a.createElement("div",{className:"col-lg-5 col-md-5"},s.a.createElement(i.a,{name:"rongsokNetto",label:"Netto",type:"text",component:u,readOnly:!0,onBlur:this.setRongsok()}))))))," "))}}]),t}(r.Component);b=Object(m.a)({form:"AccordRongsok",enableReinitialize:!0})(b);var k=Object(d.a)("AccordRongsok");a.default=Object(p.b)((function(e){var a=k(e,"harga","cash"),t=a.harga,o=a.cash;return{cashNetto:(parseFloat(o)/parseFloat(t)).toFixed(3)}}))(b)}}]);