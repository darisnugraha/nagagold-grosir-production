(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[169],{1214:function(a,e,t){"use strict";t.r(e);var c=t(52),l=t(53),n=t(54),s=t(55),r=t(0),o=t.n(r),i=t(304),m=t(440),b=t(441),h=t(460),p=t(33),d=Object(i.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),u=function(a){var e=a.input,t=a.label,c=a.type,l=a.limit,n=a.readOnly,s=a.meta,r=s.touched,i=s.error,m=s.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"text-black"},t),o.a.createElement("input",Object.assign({},e,{type:c,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),r&&(i&&o.a.createElement("p",{className:"invalid-feedback"},i)||m&&o.a.createElement("p",null,m)))},g=function(a){Object(n.a)(t,a);var e=Object(s.a)(t);function t(a){var l;return Object(c.a)(this,t),(l=e.call(this,a)).state={},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=0,e=0,t=0,c=JSON.parse(localStorage.getItem("alatBayarTunaiCashback"))?JSON.parse(localStorage.getItem("alatBayarTunaiCashback")):"kosong";"kosong"===c?(a=0,e=0,t=0):(a=c[0].cashback_rp,e=c[0].harg_emas,t=c[0].cashback_netto),this.props.change("cashback",a),this.props.change("harga",e),this.props.change("cashbackNetto",t)}},{key:"onChange",value:function(){this.props.change("cashbackNetto",this.props.cashbackNettoMurni)}},{key:"render",value:function(){return o.a.createElement("div",{className:this.props.visibility?"col-lg-6 mt-3":"col-lg-6 mt-3 d-none"},o.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},o.a.createElement("div",{className:"card mb-0 bg-dark"},o.a.createElement("div",{className:"card-header ",id:"headingOne"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("h5",{className:"m-0"},o.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseCashback","aria-expanded":"true","aria-controls":"collapseCashback"},"Cashback"))),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),o.a.createElement(m.a,Object.assign({name:"cashbackNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},d))))),o.a.createElement("div",{id:"collapseCashback",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},o.a.createElement("div",{className:"card-body bg-white"},o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Cashback"),o.a.createElement(m.a,{name:"cashback",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()})),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement(m.a,Object.assign({name:"cashbackNetto",label:"Netto",type:"telp",component:u,readOnly:!0},d))),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Simpan"))))))))))}}]),t}(r.Component);g=Object(b.a)({form:"AccordCashbackMurni",enableReinitialize:!0})(g);var k=Object(h.a)("AccordCashbackMurni"),N=Object(h.a)("PembayaranCustomer");e.default=Object(p.b)((function(a){var e=k(a,"harga","cashback").cashback,t=N(a,"totalHutangRP","totalHutangGr").totalHutangRP;return console.log(t),{visibility:a.provinsi.visible_cashback,cashbackNetto:parseFloat(e)/100*t,cashbackNettoMurni:parseFloat(e)/100*t}}))(g)}}]);