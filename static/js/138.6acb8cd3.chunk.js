(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[138],{1241:function(e,a,t){"use strict";t.r(a);var n=t(52),o=t(53),c=t(54),i=t(55),l=t(0),r=t.n(l),s=t(33),u=t(10),d=t(302),m=t(215),h=t(440),b=t(441),p=t(48),v=t(183),f=t(184),k=t(1),E=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={response:"",kode_bank:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(k.qb)(),setTimeout((function(){Object(k.zb)("Kode Tahun")}),300)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement(v.a,{onSubmit:this.props.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement(h.a,{name:"kodeTahun",component:p.b,label:"Kode Tahun",normalize:k.e})),r.a.createElement("div",{className:"col-md-12 col-lg-12 mt-5"},r.a.createElement(f.a,null)))))}}]),t}(l.Component);E=Object(b.a)({form:"DataTahun",enableReinitialize:!0})(E);var j=Object(s.b)()(E),T=t(808),O=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={response:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(k.qb)(),setTimeout((function(){Object(k.zb)("Kode Tahun")}),300)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement(v.a,{onSubmit:this.props.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement(h.a,{name:"kodeTahun",type:"tel",component:p.b,label:"Kode Tahun",readOnly:!0})),r.a.createElement("div",{className:"col-md-12 col-lg-12 mt-5"},r.a.createElement(f.a,null)))))}}]),t}(l.Component);O=Object(b.a)({form:"FormTahunEdit",validate:T.a,enableReinitialize:!0})(O);var N=Object(s.b)((function(e){return{initialValues:{kodeTahun:e.provinsi.editDataTahun.kodeTahun}}}),null)(O),S=t(303),g=t(305),y=[{dataField:"kode_tahun",order:"asc"}],D=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).updateStatus=function(e){o.setState({response:e}),o.props.dispatch(Object(m.c)())},o.state={Tahun:[],response:"",columns:[{dataField:"kode_tahun",text:"Kode Tahun"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-danger mr-2","data-tut":"reactour_3",onClick:function(){return o.props.dispatch(Object(m.b)(a.kode_tahun))}},r.a.createElement("i",{className:"fa fa-trash mr-1"}),"Hapus"))}}]},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.c)())}},{key:"handleSubmit",value:function(){this.props.dispatch(Object(m.e)())}},{key:"handleEdit",value:function(){this.props.dispatch(Object(m.d)())}},{key:"tambahModal",value:function(){this.props.dispatch(Object(u.j)()),this.setState({isEdit:!1})}},{key:"edithModal",value:function(){this.props.dispatch(Object(u.j)()),this.setState({isEdit:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid",style:{color:"black"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card"},r.a.createElement(d.a,{title:"Data Tahun"}),r.a.createElement("div",{className:"card-body"},r.a.createElement(g.default,{size:"modal-m",content:this.state.isEdit?r.a.createElement(N,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleEdit(a)},onSend:this.props.onSend}):r.a.createElement(j,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleSubmit(a)},onSend:this.props.onSend}),title:this.state.isEdit?"Edit Data Tahun":"Tambah Data Tahun"}),r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Tahun"))),r.a.createElement("div",{className:"col-lg-12","data-tut":"reactour_2"},r.a.createElement(S.a,{data:this.props.daftarTahun,columns:this.state.columns,defaultSorted:y,keyField:"kode_tahun"})))))))}}]),t}(l.Component);a.default=Object(s.b)((function(e){return{daftarTahun:e.tahunState.listTahun||[],alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(D)},808:function(e,a,t){"use strict";a.a=function(e){var a={};return e.noRekening?e.noRekening.length<8&&(a.noRekening="Sepertinya Norekening Salah"):a.noRekening="Tidak Boleh Kosong",e.namaBank?e.namaBank.length>30&&(a.namaBank="Nama Terlalu Panjang"):a.namaBank="Tidak Boleh Kosong",e.atasNama?e.atasNama>30&&(a.atasNama="Nama Terlalu Panjang"):a.atasNama="Tidak Boleh Kosong","DEFAULT"===e.mataUang&&(a.mataUang="Tidak Boleh Kosong"),a}}}]);