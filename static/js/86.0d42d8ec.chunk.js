(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[86],{1311:function(e,t,a){"use strict";a.r(t);var i=a(182),n=a(52),o=a(53),s=a(54),r=a(55),l=a(0),c=a.n(l),d=a(829),m=a(33),u=a(163),p=a(440),v=a(441),h=a(816),k=a(48),b=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={response:"",status:"AKTIF"},i}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.kode,t=this.props.nama;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement(p.a,{name:e.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:k.b,readOnly:!0,label:this.props.kode})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(p.a,{name:t.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:k.b,label:this.props.nama})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"submit",id:"simpan",className:"btn btn-primary",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Selesai"))))))}}]),a}(l.Component);b=Object(v.a)({form:"ProvinsiEdit",validate:h.a,enableReinitialize:!0})(b);var f=Object(m.b)((function(e){return{initialValues:{NamaProvinsi:e.provinsi.editProvinsi.namaProvinsi,KodeProvinsi:e.provinsi.editProvinsi.kodeProvinsi,status:e.provinsi.editProvinsi.statusAktif}}}),null)(b),E=a(305),P=a(10),K=a(302),N=a(303),g=[{dataField:"kodeProvinsi",order:"asc"}],S=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).updateStatus=function(e){o.setState({response:e}),o.props.dispatch(Object(u.f)())},o.edit=function(e){return function(t){o.setState(Object(i.a)({},e,t.target.value))}},o.openTour=function(){o.setState({isTourOpen:!0})},o.closeTour=function(){o.setState({isTourOpen:!1})},o.state={provinsi:[],provinsi_array:[],response:"",namaProvinsi:"",kodeProvinsi:"",columns:[{dataField:"kode_provinsi",text:"Kode Provinsi",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"nama_provinsi",text:"Nama Provinsi",sort:!0},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){var a={namaProvinsi:t.nama_provinsi,kodeProvinsi:t.kode_provinsi,statusAktif:t.statusAktif};return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return o.props.dispatch(Object(u.c)(t.kode_provinsi))}},c.a.createElement("i",{className:"fa fa-trash mr-1"}),"Hapus"),c.a.createElement("button",{className:"btn btn-warning mr-2","data-toggle":"modal","data-target":"#editModal",onClick:function(){return o.editModal(a)},"data-tut":"reactour_4"},c.a.createElement("i",{className:"fa fa-edit mr-1"}),"Edit"))}}],showModal:!0},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.f)())}},{key:"handleSubmit",value:function(){this.props.dispatch(Object(u.g)())}},{key:"handleEdit",value:function(){this.props.dispatch(Object(u.d)())}},{key:"tambahModal",value:function(){this.props.dispatch(Object(P.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(e){this.props.dispatch(Object(P.j)()),this.props.dispatch(Object(u.e)(e)),this.setState({isEdit:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},c.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")),c.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),c.a.createElement(E.default,{content:this.state.isEdit?c.a.createElement(f,{nama:"Nama Provinsi",kode:"Kode Provinsi",from:"provinsi",edit:this.edit,updateStatus:this.updateStatus,onSubmit:function(t){return e.handleEdit(t)},onSend:this.props.onSend}):c.a.createElement(d.a,{nama:"Nama Provinsi",isiNama:this.state.namaProvinsi,kode:"Kode Provinsi",isikode:this.state.kodeProvinsi,status:this.state.status,from:"provinsi",edit:this.edit,updateStatus:this.updateStatus,onSubmit:function(t){return e.handleSubmit(t)},showModal:this.state.showModal,onSend:this.props.onSend}),title:this.state.isEdit?"Edit Data Provinsi":"Tambah Data Provinsi"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(K.a,{title:"Data Provinsi"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{name:"simpan",id:"simpan",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Provinsi"))),c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5","data-tut":"reactour_2"},c.a.createElement(N.a,{columns:this.state.columns,data:this.props.provinsiList,defaultSorted:g,keyField:"kode_provinsi"})))))))}}]),a}(l.Component);t.default=Object(m.b)((function(e){return{provinsiList:e.provinsiState.listProvinsi||[],alert:e.provinsi.alert,error:e.provinsi.error,status:e.provinsi.status,onSend:e.provinsi.onSend}}),null)(S)},816:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=function(e){var t={};return e.KodeProvinsi?e.KodeProvinsi.length>5&&(t.KodeProvinsi="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeProvinsi="Tidak Boleh kosong",e.NamaProvinsi||(t.NamaProvinsi="Tidak Boleh kosong"),e.KodeKota?e.KodeKota.length>5&&(t.KodeKota="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeKota="Tidak Boleh kosong",e.kodeProvinsi?"DEFAULT"===e.kodeProvinsi&&(t.kodeProvinsi="Silahkan Pilih Provinsi"):t.kodeProvinsi="Tidak Boleh Kosong",e.NamaKota||(t.NamaKota="Tidak Boleh Kosong"),e.KodeArea?e.KodeArea.length>5&&(t.KodeArea="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeArea="Tidak Boleh kosong",e.kodeKota?"DEFAULT"===e.kodeKota&&(t.kodeKota="Silahkan Pilih Provinsi"):t.kodeKota="Tidak Boleh Kosong",e.NamaArea||(t.NamaArea="Tidak Boleh Kosong"),e.KodeLokasi?e.KodeLokasi.length>5&&(t.KodeLokasi="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeLokasi="Tidak Boleh kosong",e.NamaLokasi||(t.NamaLokasi="Tidak Boleh kosong"),t}},829:function(e,t,a){"use strict";var i=a(52),n=a(53),o=a(54),s=a(55),r=a(0),l=a.n(r),c=a(33),d=a(440),m=a(441),u=a(816),p=a(48),v=a(5),h=a(20),k=a(1),b=a(183),f=a(184),E=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={response:"",status:"AKTIF",listProvinsi:[],listKota:[],isiNama:"",isikode:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(v.b)("provinsi/get/all").then((function(t){return e.setState({listProvinsi:t.data})})).catch((function(e){})),Object(v.b)("kota/get/all").then((function(t){return e.setState({listKota:t.data})})).catch((function(e){return Object(h.a)("Error Get Data Kota")}))}},{key:"render",value:function(){var e=this.props.kode,t=this.props.nama;return l.a.createElement("div",null,l.a.createElement(b.a,{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},"kota"===this.props.from?l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},""!==String(this.state.listProvinsi)?l.a.createElement(d.a,{component:p.c,label:this.props.kode_ext,name:"kodeProvinsi",value:this.props.status,className:"form-control",options:this.state.listProvinsi.map((function(e){return{value:e.kode_provinsi,name:e.nama_provinsi}}))}):l.a.createElement(k.m,{label:this.props.kode_ext}))):null,"area"===this.props.from?l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},""!==String(this.state.listKota)?l.a.createElement(d.a,{component:p.c,label:this.props.kode_ext,name:"kota"===this.props.from?"kodeProvinsi":"kodeKota",value:this.props.status,className:"form-control",options:this.state.listKota.map((function(e){return{value:e.kode_kota,name:e.nama_kota}}))}):l.a.createElement(k.m,{label:this.props.kode_ext}))):null,l.a.createElement("div",{className:"col-md-2"},l.a.createElement(d.a,{name:e.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:p.b,limit:5,label:this.props.kode})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(d.a,{name:t.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:p.b,label:this.props.nama})),"area"===this.props.from?l.a.createElement("div",{className:"col-lg-3"},l.a.createElement(d.a,{name:"kodePos",component:p.b,type:"number",label:"Kode Pos",placeholder:"Masukan Kode Pos"})):null,l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement(f.a,null)))))}}]),a}(r.Component);E=Object(m.a)({form:"Provinsi",validate:u.a,enableReinitialize:!0})(E),t.a=Object(c.b)((function(e){return{limit:e.config.limit,error:e.alert.Error,editProvinsi:e.provinsi.editProvinsi}}),null)(E)}}]);