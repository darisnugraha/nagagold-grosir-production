(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[181],{1144:function(e,a,t){"use strict";t.r(a);var n=t(52),o=t(53),l=t(54),r=t(55),s=t(0),c=t.n(s),i=t(33),m=t(440),p=t(441),d=t(460),b=t(304),u=t(48),g=t(1),k=t(183),h=t(184),E=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),v=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={kodeBarang:[],non_aksesoris:"col-lg-12 row",aksesoris:"col-lg-12 row d-none"},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(g.qb)(),console.log(this.props.type_transaksi.value)}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross),this.props.change("discGlobalGr",this.props.discGlobalGr),this.props.change("totalRupiah",Object(g.b)(this.props.netto)*this.props.hargaPerGram),this.props.change("nettoDiscGlobalExt",Object(g.D)(Object(g.xb)(this.props.netto)-Object(g.xb)(this.props.discGlobalGr)))}},{key:"pilihBarang",value:function(e){var a=e,t=this.props.KodeBarangList.filter((function(e){return e.kode_jenis===a}));this.setState({kodeJenis:t[0].kode_jenis,namaJenis:t[0].nama_jenis,kadarCetak:t[0].kadar_cetak,kadarJual:t[0].kadar_jual,kadarBeli:t[0].kadar_beli,kodeKategori:t[0].kode_kategori,namaKategori:t[0].nama_kategori,diskon:0,harga_jual:0,stockBruto:0,stockNetto:0}),this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarJual),this.props.change("kodeKategori",this.state.kodeKategori),this.props.change("namaKategori",this.state.namaKategori),this.props.change("harga_jual",this.state.harga_jual),Object(g.zb)("Kadar")}},{key:"setBruto",value:function(){this.props.change("bruto",localStorage.getItem("Timbangan"))}},{key:"render",value:function(){var e=this;return c.a.createElement(k.a,{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},c.a.createElement(m.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:u.b,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"kodeBarang",label:"Kode Model",component:u.c,className:"form-control",onChange:function(a){return e.pilihBarang(a.value)},options:this.props.KodeBarangList.map((function(e){return{value:e.kode_jenis,name:e.nama_jenis}})),readOnly:!0})),c.a.createElement("div",{className:(this.state.aksesoris,"col-md-3 col-lg-3 d-none")},c.a.createElement(m.a,{name:"kadar",label:"Kadar Jual",type:"number",component:u.b,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},c.a.createElement(m.a,{name:"kadar_cetak",label:"Kadar Jual",type:"number",component:u.b})),c.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},c.a.createElement(m.a,{name:"kodeKategori",label:"Kadar Jual",type:"number",component:u.b})),c.a.createElement("div",{className:"col-md-8 col-lg-8"},c.a.createElement(m.a,{name:"keterangan",label:"Keterangan",type:"text",component:u.b,normalize:function(e){return null===e||void 0===e?void 0:e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},c.a.createElement(m.a,{name:"namaKategori",label:"Kadar Jual",type:"number",component:u.b})),c.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},c.a.createElement(m.a,{name:"pkg",label:"Pkg (Gr)",type:"text",component:u.b,onBlur:function(){return e.onclick1()},normalize:g.c})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"kadarCustomer",label:"Kadar",normalize:g.c,component:u.b,readOnly:"TITIP-RP|TITIPAN RUPIAH"===this.props.type_transaksi.value||"AMBIL TITIP-RP|AMBIL TITIPAN RUPIAH"===this.props.type_transaksi.value})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"bruto",label:"Berat (Gr)",type:"text",component:u.b,onChange:this.onclick1(),normalize:g.c,readOnly:"TITIP-RP|TITIPAN RUPIAH"===this.props.type_transaksi.value||"AMBIL TITIP-RP|AMBIL TITIPAN RUPIAH"===this.props.type_transaksi.value})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"kadarTransaksi",label:"Dasar",type:"number",component:u.b,readOnly:!this.props.is_ct,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},c.a.createElement(m.a,Object.assign({name:"hargaPerGram",label:"Harga / Gram",type:"tel",component:u.b,onChange:this.onclick1()},E))),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"netto",label:"Netto (Gr)",type:"text",component:u.b,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,Object.assign({name:"hargaPerGram",label:"Harga / Gr",type:"tel",component:u.b},E,{readOnly:"TITIP|TITIPAN GRAM"===this.props.type_transaksi.value||"AMBIL TITIP|AMBIL TITIPAN GRAM"===this.props.type_transaksi.value}))),c.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},c.a.createElement(m.a,{name:"gross",label:"Gross (Gr)",type:"text",component:u.b,readOnly:!0})),c.a.createElement("div",{className:(Object(g.cb)(),"col-md-3 col-lg-3 d-none")},c.a.createElement(m.a,{name:"discGlobalPr",label:"Diskon (%)",type:"number",component:u.b,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:(Object(g.cb)(),"col-md-3 col-lg-3 d-none")},c.a.createElement(m.a,{name:"discGlobalGr",label:"Diskon (Gr)",type:"text",component:u.b,readOnly:!0})),c.a.createElement("div",{className:(Object(g.cb)(),"col-md-3 col-lg-3 d-none")},c.a.createElement(m.a,{name:"nettoDiscGlobalExt",label:"Netto - Diskon (Gr)",type:"text",component:u.b,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},c.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),c.a.createElement(m.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},E))),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement("label",{htmlFor:""},"Total (Rp)"),c.a.createElement(m.a,Object.assign({name:"totalRupiah",component:"input",type:"tel",className:"form-control"},E,{readOnly:!0}))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(h.a,null))))}}]),t}(s.Component);v=Object(p.a)({form:"FormTambahTitipLMEEdit",enableReinitialize:!0})(v);var O=Object(d.a)("FormTambahTitipLMEEdit");a.default=Object(i.b)((function(e){var a,t,n=O(e,"bruto","kadarTransaksi","pkg","discGlobalPr","kadarCustomer","hargaPerGram"),o=n.bruto,l=n.kadarTransaksi,r=n.pkg,s=n.discGlobalPr,c=n.kadarCustomer,i=n.hargaPerGram;return{netto:Object(g.D)(parseFloat(Object(g.xb)(o)||0)*(parseFloat(Object(g.xb)(c)||0)/100)/(parseFloat(Object(g.xb)(l)||0)/100)),gross:Object(g.D)(parseFloat(Object(g.xb)(o)||0)+parseFloat(Object(g.xb)(r)||0)),discGlobalGr:Object(g.D)(parseFloat(Object(g.xb)(o)||0)*(parseFloat(Object(g.xb)(s)||0)/100)),KodeBarangList:e.rosokCiokimState.listRosokCiokim||[],is_ct:(null===(a=e.transaksiLM)||void 0===a||null===(t=a.edit24K)||void 0===t?void 0:t.is_ct)||!1,hargaPerGram:i,onSend:e.provinsi.onSend}}))(v)}}]);