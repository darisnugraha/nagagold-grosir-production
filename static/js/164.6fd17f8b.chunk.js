(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[164],{1153:function(e,a,s){"use strict";s.r(a);var n=s(52),t=s(53),r=s(54),l=s(55),o=s(0),c=s.n(o),i=s(33),d=s(440),m=s(441),p=s(48),u=function(e){var a={};return e.password?e.password.length<6&&(a.password="Password kurang dari 6"):a.password="Tidak Boleh kosong",e.rePassword?e.rePassword.length<6?a.rePassword="Password kurang dari 6":e.rePassword!==e.password&&(a.rePassword="Password tidak sama"):a.rePassword="Tidak Boleh kosong",e.namaLengkap||(a.namaLengkap="Tidak Boleh kosong"),e.level||(a.level="Tidak Boleh kosong"),a},w=s(183),v=s(1),b=s(184),g=function(e){Object(r.a)(s,e);var a=Object(l.a)(s);function s(e){var t;return Object(n.a)(this,s),(t=a.call(this,e)).state={response:"",status:"AKTIF",listProvinsi:[]},t}return Object(t.a)(s,[{key:"componentDidMount",value:function(){Object(v.qb)(),setTimeout((function(){Object(v.zb)("Nama Lengkap")}),300)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(w.a,{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:this.props.changePassword?"col-lg-4 d-none":"col-lg-4"},c.a.createElement(d.a,{name:"namaLengkap",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:p.b,label:"Nama Lengkap"})),c.a.createElement("div",{className:this.props.edit?"col-lg-4 d-none":"col-lg-4 "},c.a.createElement(d.a,{name:"userID",type:"text",component:p.b,label:"User ID"})),c.a.createElement("div",{className:this.props.changePassword?"col-lg-4 d-none":"col-lg-4"},c.a.createElement(d.a,{component:p.c,label:"Level",name:"level",options:[{value:"ADM",name:"ADMIN"},{value:"OWN",name:"OWNER"},{value:"MRK",name:"MARKETING"},{value:"SPV",name:"SUPERVISOR"}]})),this.props.changePassword?c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(d.a,{name:"passwordLama",type:"password",component:p.b,label:"Password Lama"})):null,this.props.edit?this.props.changePassword?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(d.a,{name:"password",type:"password",component:p.b,label:"Password Baru"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(d.a,{name:"rePassword",type:"password",component:p.b,label:"Retype Password Baru"}))):null:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(d.a,{name:"password",type:"password",component:p.b,label:"Password"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(d.a,{name:"rePassword",type:"password",component:p.b,label:"Retype Password"}))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(b.a,null)))))}}]),s}(o.Component);g=Object(m.a)({form:"AddUser",enableReinitialize:!0,validate:u})(g);a.default=Object(i.b)((function(e){return{initialValues:{namaLengkap:e.provinsi.editUser.namaUser,userID:e.provinsi.editUser.idUser,password:e.provinsi.editUser.password,rePassword:e.provinsi.editUser.password,level:{value:e.provinsi.editUser.level,label:e.provinsi.editUser.level}}}}),null)(g)}}]);