(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[89],{1262:function(e,a,t){"use strict";t.r(a);var n=t(52),i=t(53),l=t(54),r=t(55),o=t(0),c=t.n(o),s=t(33),m=t(440),u=t(441),d=t(808),p=t(48),b=t(152),k=t(1),h=t(183),g=t(184),v=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={response:"",no_rekening:"",nama_bank:"",atas_nama:"",mata_uang:"RUPIAH"},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(b.e)()),Object(k.qb)(),setTimeout((function(){Object(k.zb)("Nomor Rekening")}),300)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(h.a,{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"noRekening",type:"tel",component:p.b,label:"Nomor Rekening",onChange:function(){return e.props.change("mataUang","DEFAULT")}})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"kodeBank",component:p.c,options:this.props.listBank.map((function(e){return{value:e.kode_bank+"-"+e.nama_bank,name:e.kode_bank+"-"+e.nama_bank}})),onChange:function(a){return e.props.change("namaBank",a.value.split("-")[1])},label:"Kode Bank"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"namaBank",type:"telp",normalize:function(e){return e&&e.toUpperCase()},component:p.b,label:"Nama Bank",readOnly:!0})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"atasNama",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:p.b,label:"Atas Nama"})),c.a.createElement("div",null,c.a.createElement("label",null,"Mata Uang"),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement(m.a,{name:"status_currency",component:"input",type:"radio",value:"USD",className:"mr-3"}),"USD"),c.a.createElement("label",{className:"ml-3"},c.a.createElement(m.a,{name:"status_currency",component:"input",type:"radio",value:"RUPIAH",className:"mr-3"}),"RUPIAH"))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-5"},c.a.createElement(g.a,null)))))}}]),t}(o.Component);v=Object(u.a)({form:"DataRekening",validate:d.a,enableReinitialize:!0})(v);var E=Object(s.b)((function(e){return{listBank:e.bankState.listBank||[]}}))(v),f=t(147),N=t(15),y=t.n(N),O=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).state={response:""},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(b.e)()),Object(k.qb)()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(h.a,{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"noRekening",type:"tel",component:p.b,label:"Nomor Rekening",readOnly:!0})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"kodeBank",component:p.c,options:this.props.listBank.map((function(e){return{value:e.kode_bank+"-"+e.nama_bank,name:e.kode_bank+"-"+e.nama_bank}})),onChange:function(a){return e.props.change("namaBank",a.value.split("-")[1])},label:"Kode Bank"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"namaBank",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:p.b,label:"Nama Bank",readOnly:!0})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(m.a,{name:"atasNama",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:p.b,label:"Atas Nama"})),c.a.createElement("div",null,c.a.createElement("label",null,"Mata Uang"),c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement(m.a,{name:"status_currency",component:"input",type:"radio",value:"USD",className:"mr-3"}),"USD"),c.a.createElement("label",{className:"ml-3"},c.a.createElement(m.a,{name:"status_currency",component:"input",type:"radio",value:"RUPIAH",className:"mr-3"}),"RUPIAH"))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-5"},c.a.createElement(g.a,null)))))}}]),t}(o.Component);O=Object(u.a)({form:"FormRekeningEdit",validate:d.a,enableReinitialize:!0})(O);var j=Object(s.b)((function(e){return{listBank:e.bankState.listBank||[],initialValues:{noRekening:e.provinsi.editDataRekening.noRekening,atasNama:e.provinsi.editDataRekening.atasNama,namaBank:e.provinsi.editDataRekening.namaBank,status_currency:e.provinsi.editDataRekening.statusCurrency,kodeBank:e.provinsi.editDataRekening.kodeBank,mataUang:e.provinsi.editDataRekening.mataUang}}}),null)(O),B=t(10),R=t(305),_=t(302),S=t(810),C=t(303);var D=[{dataField:"nomorRekening",order:"asc"}],U=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).updateStatus=function(e){i.setState({response:e}),i.props.dispatch(Object(f.e)())},i.state={Rekening:[],response:"",columns:[{dataField:"no_rekening",text:"Nomor Rekening"},{dataField:"nama_bank",text:"Nama Bank"},{dataField:"atas_nama",text:"Atas Nama"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-danger mr-2","data-tut":"reactour_3",onClick:function(){return e=i.props.dispatch,t=a.no_rekening,void y.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&e(Object(f.c)(t))}));var e,t}},c.a.createElement("i",{className:"fa fa-trash mr-1"}),"Hapus"),c.a.createElement("button",{className:"btn btn-warning","data-tut":"reactour_4",onClick:function(){return i.props.dispatch(Object(f.d)(a.no_rekening,a.atas_nama,a.kode_bank,a.nama_bank,"RP",a.status_currency,i.edithModal()))}},c.a.createElement("i",{className:"fa fa-edit mr-2"}),"Edit"))}}]},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.e)()),this.props.dispatch(Object(b.e)())}},{key:"handleSubmit",value:function(){this.props.dispatch(Object(f.g)())}},{key:"handleEdit",value:function(){this.props.dispatch(Object(f.f)())}},{key:"tambahModal",value:function(){this.props.dispatch(Object(B.j)()),this.setState({isEdit:!1})}},{key:"edithModal",value:function(){this.props.dispatch(Object(B.j)()),this.setState({isEdit:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},c.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")),c.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),c.a.createElement(S.a,{tourConfig:["Untuk Menambahkan Data Rekening Bank, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah data Rekening Bank yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol untuk mengubah data pada baris yang dipilih"]}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(_.a,{title:"Data Rekening"}),c.a.createElement("div",{className:"card-body"},c.a.createElement(R.default,{content:this.state.isEdit?c.a.createElement(j,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleEdit(a)},onSend:this.props.onSend}):c.a.createElement(E,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleSubmit(a)},onSend:this.props.onSend}),title:this.state.isEdit?"Edit Data Rekening":"Tambah Data Rekening"}),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Rekening"))),c.a.createElement("div",{className:"col-lg-12","data-tut":"reactour_2"},c.a.createElement(C.a,{data:this.props.daftarList,columns:this.state.columns,defaultSorted:D,keyField:"no_rekening"})))))))}}]),t}(o.Component);a.default=Object(s.b)((function(e){return{daftarList:e.rekeningState.listRekening||[],alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(U)},808:function(e,a,t){"use strict";a.a=function(e){var a={};return e.noRekening?e.noRekening.length<8&&(a.noRekening="Sepertinya Norekening Salah"):a.noRekening="Tidak Boleh Kosong",e.namaBank?e.namaBank.length>30&&(a.namaBank="Nama Terlalu Panjang"):a.namaBank="Tidak Boleh Kosong",e.atasNama?e.atasNama>30&&(a.atasNama="Nama Terlalu Panjang"):a.atasNama="Tidak Boleh Kosong","DEFAULT"===e.mataUang&&(a.mataUang="Tidak Boleh Kosong"),a}},810:function(e,a,t){"use strict";var n=t(52),i=t(53),l=t(54),r=t(55),o=t(0),c=t.n(o),s=t(33),m=t(10),u=t(827),d=t(824),p=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).disableBody=function(e){return Object(d.a)(e)},i.enableBody=function(e){return Object(d.b)(e)},i.state={},i}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.tourConfig.map((function(e,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:e}}));return c.a.createElement(u.a,{onRequestClose:function(){return e.props.dispatch(Object(m.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),t}(o.Component);a.a=Object(s.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)}}]);