(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[82],{1219:function(e,a,t){"use strict";t.r(a);var n=t(52),o=t(53),l=t(54),r=t(55),c=t(0),s=t.n(c),m=t(33),i=t(440),d=t(441),p=t(460),u=t(304),b=t(48),k=t(96),g=t.n(k),h=t(76),E=t(1),v=t(5),j=t(20),O=t(183),f=t(804),y=t(312),N=t(796),_=Object(u.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),K=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={kodeBarang:[],non_aksesoris:"col-lg-12 row",aksesoris:"col-lg-12 row d-none"},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(h.k)()),this.props.dispatch(Object(y.c)())}},{key:"componentWillUnmount",value:function(){}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross),this.props.change("discGlobalGr",this.props.discGlobalGr),this.props.change("nettoDiscGlobalExt",Object(E.D)(Object(E.xb)(this.props.netto)-Object(E.xb)(this.props.discGlobalGr)))}},{key:"pilihBarang",value:function(e){var a=this,t=e,n=this.props.KodeBarangList.filter((function(e){return e.kode_jenis===t})),o=localStorage.getItem("customer_1")||"-";Object(v.b)("/kelompok-harga/get/by-jenis-and-customer/".concat(o,"&").concat(e,"&").concat("SALES"===this.props.lokasi?this.props.sales:this.props.lokasi)).then((function(e){var t,o,l,r,c,s,m,i,d;return(null===(t=e.data)||void 0===t?void 0:t.total_netto)<1?(Object(j.e)("Stock Barang Kurang Dari 1"),a.props.change("kodeBarang"),!1):void 0===(null===(o=e.data)||void 0===o?void 0:o.kode_tukar_normal)||"undefined"===(null===(l=e.data)||void 0===l?void 0:l.kode_tukar_normal)?(Object(j.e)("Kadar Jual Belum Ditentukan ,Mohon tentukan Kadar Jual di menu kelompok harga"),a.props.change("kodeBarang"),!1):("AKSESORIS"===(null===(r=e.data)||void 0===r?void 0:r.kode_kelompok)?a.setState({non_aksesoris:"col-lg-12 row d-none",aksesoris:"col-lg-12 row"}):a.setState({non_aksesoris:"col-lg-12 row",aksesoris:"col-lg-12 row d-none"}),a.setState({kodeJenis:n[0].kode_jenis,namaJenis:n[0].nama_jenis,kadarCetak:null===(c=e.data)||void 0===c?void 0:c.kode_tukar_normal,kadarJual:null===(s=e.data)||void 0===s?void 0:s.kode_tukar_normal,kodeKategori:null===(m=e.data)||void 0===m?void 0:m.kode_kategori,namaKategori:null===(i=e.data)||void 0===i?void 0:i.nama_kategori,harga_jual:(null===(d=e.data)||void 0===d?void 0:d.harga_aksesoris)||0}),a.props.change("keterangan",n[0].nama_jenis),a.props.change("kadar",n[0].kadar_cetak),a.props.change("kadarTransaksi",n[0].kadar_jual),a.props.change("kodeKategori",n[0].kode_kategori),a.props.change("namaKategori",n[0].nama_kategori),a.props.change("harga_jual",0),void Object(E.zb)("Plastik"))}))}},{key:"setBruto",value:function(){this.props.change("bruto",localStorage.getItem("Timbangan"))}},{key:"render",value:function(){var e=this;return s.a.createElement(O.a,{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},s.a.createElement(i.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:b.b,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},""!==String(this.props.KodeBarangList)?s.a.createElement(i.a,{name:"kodeBarang",label:"Kode Model",component:b.c,disabled:!0,className:"form-control",onChange:function(a){return e.pilihBarang(a.value)},options:this.props.KodeBarangList.filter((function(e){return"PERHIASAN"===e.kode_kelompok||"AKSESORIS"===e.kode_kelompok})).map((function(e){return{value:e.kode_jenis,name:e.nama_jenis}}))}):s.a.createElement(g.a,{width:"100%",height:50})),s.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},s.a.createElement(i.a,{name:"kode_barocde",label:"Kode Barcode",type:"text",component:b.b,placeholder:"Biarkan Kosong jika Tidak Digunakan",normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:(this.state.aksesoris,"col-md-3 col-lg-3 d-none")},s.a.createElement(i.a,{name:"kadar",label:"Kadar Jual",type:"number",component:b.b})),s.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},s.a.createElement(i.a,{name:"kodeKategori",label:"Kadar Jual",type:"number",component:b.b})),s.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},s.a.createElement(i.a,{name:"kode_kategori",label:"Kode Kategori",type:"text",component:b.b})),s.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},s.a.createElement(i.a,{name:"no_urut",label:"No Urut",type:"text",component:b.b})),s.a.createElement("div",{className:this.state.non_aksesoris},s.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},s.a.createElement(i.a,{name:"keterangan",label:"Keterangan",type:"text",component:b.b,normalize:function(e){return null===e||void 0===e?void 0:e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},s.a.createElement(i.a,{name:"namaKategori",label:"Kadar Jual",type:"number",component:b.b})),s.a.createElement("div",{className:Object(E.cb)()?"col-md-3 col-lg-3 d-none":"col-md-3 col-lg-3 "},s.a.createElement(i.a,{name:"p",label:"Plastik",type:"number",component:b.b,normalize:E.c})),s.a.createElement("div",{className:Object(E.cb)()?"col-md-3 col-lg-3 d-none":"col-md-3 col-lg-3 "},s.a.createElement(i.a,{name:"k",label:"Kertas",type:"number",component:b.b,normalize:E.c})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(i.a,{name:"pkg",label:"Pkg (Gr)",type:"text",component:b.b,onBlur:function(){return e.onclick1()},normalize:E.c})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(i.a,{name:"bruto",label:"Berat (Gr)",type:"text",component:b.b,onChange:this.onclick1(),normalize:E.c})),s.a.createElement(N.a,null),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(i.a,{name:"kadarTransaksi",label:"Kadar Jual",type:"number",component:b.b,onBlur:function(){return e.onclick1()},readOnly:Object(E.z)()})),s.a.createElement("div",{className:"col-md-3 col-lg-3 d-none"},s.a.createElement(i.a,{name:"initKadarTransaksi",label:"Kadar Jual",type:"number",component:b.b,readOnly:Object(E.z)()})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(i.a,{name:"netto",label:"Netto (Gr)",type:"text",component:b.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(i.a,{name:"gross",label:"Gross (Gr)",type:"text",component:b.b,readOnly:!0})),s.a.createElement("div",{className:Object(E.cb)()?"col-md-3 col-lg-3 d-none":"col-md-3 col-lg-3 "},s.a.createElement(i.a,{name:"discGlobalPr",label:"Diskon (%)",type:"number",component:b.b,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(i.a,{name:"discGlobalGr",label:"Diskon (Gr)",type:"text",component:b.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement(i.a,{name:"nettoDiscGlobalExt",label:"Netto - Diskon (Gr)",type:"text",component:b.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 col-lg-3"},s.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),s.a.createElement(i.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},_)))),s.a.createElement("div",{className:this.state.aksesoris},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(i.a,{name:"qty",label:"Qty",type:"number",component:b.b})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(i.a,Object.assign({name:"harga_jual",label:"Harga Jual",type:"telp",component:b.b},_)))),s.a.createElement("div",{className:"col-md-12 form-group mt-3"},s.a.createElement(f.a,{kadar:this.props.kadar,prevKadar:this.props.prevKadar,statusAuth:this.props.statusAuth,handleOtorisasi:function(){return e.props.dispatch(Object(y.b)())}}))))}}]),t}(c.Component);K=Object(d.a)({form:"FormTransaksiPenjualanEdit",enableReinitialize:!0})(K);var x=Object(p.a)("FormTransaksiPenjualanEdit");a.default=Object(m.b)((function(e){var a=x(e,"bruto","kadarTransaksi","pkg","discGlobalPr","initKadarTransaksi"),t=a.bruto,n=a.kadarTransaksi,o=a.pkg,l=a.discGlobalPr,r=a.initKadarTransaksi;return{netto:Object(E.D)(parseFloat(Object(E.xb)(t)||0)*(parseFloat(Object(E.xb)(n)||0)/100)),gross:Object(E.D)(parseFloat(Object(E.xb)(t)||0)+parseFloat(Object(E.xb)(o)||0)),discGlobalGr:Object(E.D)(parseFloat(Object(E.xb)(t)||0)*(parseFloat(Object(E.xb)(l)||0)/100)),kadar:n,prevKadar:r,statusAuth:e.authorizationState.statusAuthorization,KodeBarangList:e.kodeBarangState.listKodeBarang||[],onSend:e.provinsi.onSend}}))(K)},796:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(440),r=t(1),c=t(48);a.a=function(e){var a,t,n;return o.a.createElement("div",{className:Object(r.Db)()?"col-md-".concat(null!==(a=e.width)&&void 0!==a?a:3," form-group"):"col-md-".concat(null!==(t=e.width)&&void 0!==t?t:3," form-group d-none")},o.a.createElement(l.a,{name:null!==(n=e.name)&&void 0!==n?n:"qty",label:"Quantity",type:"number",normalize:r.e,component:c.b}))}},804:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(440),r=t(441),c=t(184),s=t(1),m=t(48);a.a=Object(r.a)({form:"authorizationForm"})((function(e){return Object(s.Cb)()?e.isUpperThan?e.kadar>e.prevKadar?e.statusAuth?o.a.createElement(c.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",null),o.a.createElement("div",{className:"col-lg-12 row justify-content-end"},o.a.createElement("div",{className:"col-md-3 form-group"},o.a.createElement(l.a,{name:"user_id",label:"User ID",type:"text",component:m.b})),o.a.createElement("div",{className:"col-md-3 form-group"},o.a.createElement(l.a,{name:"password",label:"Password",type:"password",component:m.b})),o.a.createElement("div",{className:"col-md-3 form-group"},o.a.createElement("label",{htmlFor:""},"\xa0"),o.a.createElement("button",{className:"btn btn-primary btn-block",type:"button",onClick:function(){return e.handleOtorisasi()}},"Otorisasi")))):o.a.createElement(c.a,null):e.kadar<e.prevKadar?e.statusAuth?o.a.createElement(c.a,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",null),o.a.createElement("div",{className:"col-lg-12 row justify-content-end"},o.a.createElement("div",{className:"col-md-3 form-group"},o.a.createElement(l.a,{name:"user_id",label:"User ID",type:"text",component:m.b})),o.a.createElement("div",{className:"col-md-3 form-group"},o.a.createElement(l.a,{name:"password",label:"Password",type:"password",component:m.b})),o.a.createElement("div",{className:"col-md-3 form-group"},o.a.createElement("label",{htmlFor:""},"\xa0"),o.a.createElement("button",{className:"btn btn-primary btn-block",type:"button",onClick:function(){return e.handleOtorisasi()}},"Otorisasi")))):o.a.createElement(c.a,null):o.a.createElement(c.a,null)}))}}]);