(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[46],{1318:function(e,a,t){"use strict";t.r(a);var n=t(182),r=t(52),o=t(53),i=t(54),l=t(55),c=t(0),s=t.n(c),m=t(15),u=t.n(m),d=t(323),p=t(33),g=t(440),b=t(441),h=t(460),k=t(302),f=t(39),v=t(51),E=t(129),O=t(20),j=t(1),N=t(303),y=t(309),T=t(830),S=t(304),B=t(793),_=t(48),A=Object(S.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),C=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).onclick1=n.onclick1.bind(Object(y.a)(n)),n.state={kodeBarang:[],DataSupplier:[],kode_barang:"",keterangan:"INI KETERANGAN",kadar:"",P:"",K:"",bungkus:"",berat:"",harga:"",murni:"",ongkos:"",status:"",kadarCetak:"",kadarBeli:"",namaJenis:"",kodeJenis:""},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(B.b)(this.props.change)}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("pkg",this.props.pkg)}},{key:"pilihBarang",value:function(e){var a=e,t=this.props.KodeBarangList.find((function(e){return e.kode_jenis===a}));this.props.change("keterangan",t.nama_jenis),this.props.change("kadar",t.kadar_cetak),this.props.change("kadarTransaksi",t.kadar_jual),this.props.change("kode_jenis",t.kode_jenis),this.props.change("nama_jenis",t.nama_jenis),Object(j.zb)("Berat (Gr)")}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},s.a.createElement(g.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:_.b,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-4 form-group"},""!==String(this.props.KodeBarangList)?s.a.createElement(g.a,{label:"Kode Model",name:"kodeJenis",component:_.c,options:this.props.KodeBarangList.filter((function(e){return"PERHIASAN"===e.kode_kelompok})).map((function(e){return{value:e.kode_jenis,name:e.nama_jenis}})),onChange:function(a){return e.pilihBarang(a.value)},placeholder:"Silahkan Pilih"}):s.a.createElement(j.m,{label:"Kode Model"})),s.a.createElement("div",{className:"col-md-8 form-group"},s.a.createElement(g.a,{name:"keterangan",label:"Keterangan",type:"text",component:_.b,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(g.a,{name:"kadar",label:"Kadar Cetak",type:"number",component:_.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group d-none"},s.a.createElement(g.a,{name:"kode_jenis",label:"Kadar Jual",type:"number",component:_.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group d-none"},s.a.createElement(g.a,{name:"nama_jenis",label:"Kadar Jual",type:"number",component:_.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group d-none"},s.a.createElement(g.a,{name:"kadar_jual",label:"Kadar Jual",type:"number",component:_.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(g.a,{name:"pkg",label:"Bungkus (Gr)",type:"number",component:_.b,onBlur:function(){return e.onclick1()},readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(g.a,{name:"bruto",id:"bruto",label:"Berat (Gr)",type:"number",component:_.b,onBlur:this.onclick1(),normalize:j.c})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(g.a,{name:"kadarTransaksi",label:"Kadar Jual",type:"number",component:_.b,onBlur:this.onclick1(),readOnly:Object(j.z)()})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(g.a,{name:"gross",label:"Gross (Gr)",type:"number",component:_.b,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(g.a,{name:"netto",label:"Murni (Gr)",type:"number",component:_.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),s.a.createElement(g.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},A))),s.a.createElement("div",{className:"col-md-12 form-group mt-3"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan")))))}}]),t}(c.Component);C=Object(b.a)({form:"FormPengambilanTimbangan",validate:T.a,enableReinitialize:!0})(C);var F=Object(h.a)("FormPengambilanTimbangan"),x=Object(p.b)((function(e){var a=F(e,"bruto","kadarTransaksi","gross"),t=a.bruto,n=a.kadarTransaksi,r=a.gross;return{KodeBarangList:e.kodeBarangState.listKodeBarang||[],netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3),pkg:(parseFloat(r)-parseFloat(t)).toFixed(3)}}))(C),D=t(429),R=t(305),I=t(10),P=t(76),w=t(792),K=t(56),M=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).inputChange=function(e){return function(a){o.setState(Object(n.a)({},e,a.target.value))}},o.state={jenisTransaksi:[{value:"RETUR SUPPLIER",name:"RETUR SUPPLIER"},{value:"PENERIMAAN SUPPLIER",name:"PENERIMAAN SUPPLIER"},{value:"PINDAH BARANG",name:"PINDAH BARANG"},{value:"PENJUALAN",name:"PENJUALAN"},{value:"RETUR CUSTOMER",name:"RETUR CUSTOMER"}],columns:[{dataField:"kode_jenis",text:"Kode Model"},{dataField:"gross",text:"Gross",align:"right",headerAlign:"right",formatter:function(e){return Object(j.D)(e)}},{dataField:"pkg",text:"Pkg\n(Gr)",align:"right",headerAlign:"right",headerStyle:function(){return{width:"7%"}},formatter:function(e){return Object(j.D)(e)}},{dataField:"bruto",text:"Berat\n(Gr)",align:"right",headerAlign:"right",formatter:function(e){return Object(j.D)(e)}},{dataField:"kadar_cetak",text:"Kadar",align:"right",headerAlign:"right",formatter:function(e){return Object(j.D)(e)}},{dataField:"kadar",text:"Kadar Jual\n(%)",align:"right",headerAlign:"right",formatter:function(e){return Object(j.D)(e)}},{dataField:"netto",text:"Murni\n(Gr)",align:"right",headerAlign:"right",footerClasses:"sum-netto-terima-supplier",formatter:function(e){return Object(j.D)(e,3)}},{dataField:"ongkos_rp",text:"Ongkos\n(RP)",align:"right",headerAlign:"right",formatter:function(e){return Object(j.G)(e)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-danger mr-2","data-tut":"reactour_4",onClick:function(){return o.hapus_barcode(t)}},s.a.createElement("i",{className:"fa fa-trash mr-1"}),"Hapus"))}}],kode_supplier:"",kode_customer:"",kode_lokasi_asal:"",kode_lokasi_tujuan:"",tanggal:""},o}return Object(o.a)(t,[{key:"hapus_barcode",value:function(e){var a=this;u.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){if(a.isConfirmed){var t=JSON.parse(localStorage.getItem("pengambilanBarcode_temp"));t.splice(e,1),localStorage.setItem("pengambilanBarcode_temp",JSON.stringify(t))}})).then((function(){return a.props.dispatch(Object(d.b)())}))}},{key:"componentDidMount",value:function(){Object(j.nb)(["pengambilanBarcode_temp"]),this.props.change("tanggal",Object(K.c)()),this.props.dispatch(Object(D.d)()),this.props.dispatch(Object(f.b)()),this.props.dispatch(Object(v.o)()),this.props.dispatch(Object(E.h)()),this.props.dispatch(Object(E.g)()),this.props.dispatch(Object(P.k)())}},{key:"handleSubmit",value:function(e){this.props.dispatch(Object(D.b)())}},{key:"pengambilanBarcodeSubmit",value:function(){return""===this.state.kode_customer?(Object(O.e)("Mohon Isi Nama Toko"),!1):""===this.props.tanggal?(Object(O.e)("Mohon Isi Tanggal"),!1):void this.props.dispatch(Object(D.c)())}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid",style:{color:"black"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card"},s.a.createElement(k.a,{title:"Timbang Barang"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"row"},s.a.createElement(w.a,{className:"col-lg-4"}),s.a.createElement("div",{className:"col-md-5 col-lg-4"},s.a.createElement(g.a,{options:this.props.customer.map((function(e){return{value:e.kode_customer,name:e.nama_customer}})),name:"kode_customer",component:_.c,label:"Nama Toko",placeholder:"Silahkan Pilih",onChange:function(a){e.setState({kode_customer:a})}})),s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-4"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"}),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",disabled:""===this.state.kode_customer,onClick:function(){return e.props.dispatch(Object(I.j)())}},"Tambah Data"))))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(N.a,{keyField:"kodeJenis",data:this.props.listTimbanganTemp||[],columns:this.state.columns,textEmpty:"Silahkan Tambah Data Dengan Klik Tombol Biru Diatas"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.pengambilanBarcodeSubmit()},disabled:this.props.onSend},"Selesai",s.a.createElement("i",{className:"fa fa-paper-plane ml-3","aria-hidden":"true"}))))))))),s.a.createElement(R.default,{content:s.a.createElement(x,{kode_customer:this.state.kode_customer,onSubmit:function(a){return e.handleSubmit(a)},noFaktur:this.props.noFaktur}),title:"Tambah Barang Timbangan"})))}}]),t}(c.Component);M=Object(b.a)({form:"TransaksiTimbanganBarang",enableReinitialize:!0})(M);var J=Object(h.a)("TransaksiTimbanganBarang");a.default=Object(p.b)((function(e){return{listTimbanganTemp:e.provinsi.listTimbanganTemp,noFaktur:e.provinsi.noFaktur,customer:e.customerState.listCustomer||[],supplier:e.supplierState.listSupplier||[],lokasi:e.provinsi.dataLokasiPindah,onSend:e.provinsi.onSend,tanggal:J(e,"tanggal")}}))(M)},460:function(e,a,t){"use strict";var n=t(97),r=t.n(n),o=t(29);a.a=function(e){var a=e.getIn;return function(e,t){r()(e,"Form value must be specified");var n=t||function(e){return a(e,"form")};return function(t){for(var i=arguments.length,l=new Array(i>1?i-1:0),c=1;c<i;c++)l[c-1]=arguments[c];return r()(l.length,"No fields specified"),1===l.length?a(n(t),e+".values."+l[0]):l.reduce((function(r,i){var l=a(n(t),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},792:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n),o=t(440),i=t(48),l=t(33),c=t(43);function s(e){var a=Object(l.d)((function(e){return e.date.data})),t=Object(l.c)();return r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:e.name||"tanggal",component:i.a,label:e.label||"Tanggal",type:"text",placeholder:e.label?"Masukan ".concat(e.label):"Masukan Tanggal Awal",readOnly:e.readOnly,onChange:function(a){void 0!==e.onChange&&e.onChange(a),t(Object(c.j)(new Date(a)))},selected:new Date(a.split("-").reverse().join("-"))}))}function m(e){var a=Object(l.d)((function(e){return e.date})),t=a.from,n=a.to,s=Object(l.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglFrom",component:i.a,label:"Mulai Dari",type:"text",placeholder:"Masukan Tanggal Awal",readOnly:e.readOnly,onChange:void 0!==e.onChange?e.onChange:function(e){return s(Object(c.k)(new Date(e)))},selected:new Date(t.split("-").reverse().join("-"))})),r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglTo",component:i.a,label:"Sampai Dengan",type:"text",placeholder:"Masukan Tanggal Akhir",readOnly:e.readOnly,onChange:void 0!==e.onChange?e.onChange:function(e){return s(Object(c.l)(new Date(e)))},selected:new Date(n.split("-").reverse().join("-"))})))}},793:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return s}));var n=t(187),r=t(802),o=localStorage.getItem("namaTimbangan"),i=localStorage.getItem("enableTimbangan"),l=function(e){i&&n.a.database().ref(o).on("value",(function(a){var t=a.val();e("bruto",t.nilai)}))},c=function(e){var a=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));a.on("connect",(function(){console.log("SOCKET CONNECTED : ",a.connected)}));var t=localStorage.getItem("username");a.on("timbangan-emit",(function(a){var n;(null===(n=a.user_id)||void 0===n?void 0:n.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase())&&(localStorage.setItem("timbangan-active","true"),e(document.activeElement.name,a.value))}))},s=function(){var e=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));localStorage.setItem("timbangan-active","false"),e.disconnect()}},830:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kodeJenis||(a.kodeJenis="Tidak Boleh kosong, silahkan isi"),e.pkg||(a.pkg="Tidak Boleh kosong, silahkan isi"),e.p||(a.p="Tidak Boleh kosong, silahkan isi"),e.k||(a.k="Tidak Boleh kosong, silahkan isi"),e.bruto||(a.bruto="Tidak Boleh kosong, silahkan isi"),e.gross||(a.gross="Tidak Boleh kosong, silahkan isi"),a}}}]);