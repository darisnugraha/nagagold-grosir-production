(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[61],{1265:function(e,t,a){"use strict";a.r(t);var n=a(182),r=a(52),o=a(53),i=a(54),l=a(55),s=a(0),c=a.n(s),m=a(307),u=a.n(m),d=a(39),p=a(33),h=a(440),g=a(441),E=a(460),f=a(87),k=a.n(f),b=a(15),T=a.n(b),N=function(e){var t={};return"DEFAULT"===!e.kodeBarang?t.kodeBarang="Tidak Boleh kosong":e.kodeBarang||(t.kodeBarang="Tidak Boleh Kosong"),e.bruto||(t.bruto="Tidak Boleh kosong"),e.nettoTerima||(t.nettoTerima="Tidak boleh kosong"),t},v=a(793),A=a(1),_=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,s=i.error,m=i.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(s&&c.a.createElement("p",{className:"invalid-feedback"},s)||m&&c.a.createElement("p",null,m)))},C=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://103.119.55.52:8010/api/v1/",REACT_APP_TOKO:"PAKET",REACT_APP_TYPE:"real",REACT_APP_MODE:"development",REACT_APP_DEBUG_MODE:"true",REACT_APP_IS_ENCRYPT_AXIOS:"false",REACT_APP_PUTUS_HARGA:"0",REACT_APP_STORE_CODE:"NGG",REACT_APP_LM_NAME:"BTG",REACT_APP_TOKEN_PUSAT:"",REACT_APP_URL:"/"}).REACT_APP_BACKEND_URL_NON_MASTER,S=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.handleChange=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");o.setState({kodeJenis:t[0],kadarCetak:t[1],kadarJual:t[2],namaJenis:t[3]}),o.props.change("kadar",t[1]),o.props.change("kadarTransaksi",t[2]),o.props.change("keterangan",t[3])}},o.searchMasak=function(e){return function(e){console.log("MEMULAI PENCARIAN"),console.log(e.target.value),k.a.get(C+"item/dc/kirimmasak/detail?noFaktur="+e.target.value).then((function(e){return o.setState({hasilBarang:e.data.footerItem.totalNetto,kodeTukang:e.data.kodeLokasi,noKirim:e.data.noFaktur})})).then((function(e){return o.props.change("nettoKirim",o.state.hasilBarang)})).then((function(){return o.props.change("kodeTukang",o.state.kodeTukang)})).then((function(){return o.props.change("noKirim",o.state.noKirim)})).catch((function(e){return T.a.fire({position:"top-right",icon:"error",text:"Barang Masak Tidak Ditemukan, periksa lagi Nomornya..",timer:1500,showConfirmButton:!1}).then((function(){return console.log(e)}))}))}},o.state={listBarang:[],hasilBarang:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://103.119.55.52:8010/api/v1/subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listBarang:t.data})})).catch((function(e){return console.log(e)})),Object(v.b)(this.props.change)}},{key:"setNetto",value:function(){this.props.change("nettoTerima","NaN"===this.props.netto?0:this.props.netto),this.props.change("nettoSelisih","NaN"===this.props.nettoSelisih?0:this.props.nettoSelisih)}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 col-lg-6 form-group"},c.a.createElement("label",{htmlFor:""},"Nomor Kirim"),c.a.createElement("input",{type:"text",id:"noKirim",name:"noKirim",className:"form-control",onBlur:this.searchMasak("kode")})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group d-none"},c.a.createElement(h.a,{name:"noKirim",label:"Nomor Kirim",component:_,type:"text",onBlur:this.setNetto()})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group d-none"},c.a.createElement(h.a,{name:"kodeTukang",label:"Nomor Kirim",component:_,type:"text",onBlur:this.setNetto()})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement("label",{htmlFor:""},"Kode Model"),c.a.createElement(h.a,{component:"select",name:"kodeBarang",className:"form-control",onChange:this.handleChange(),onBlur:this.handleChange()},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listBarang.map((function(e){return c.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(h.a,{name:"kadarTransaksi",label:"Kadar Cetak",component:_,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(h.a,{name:"bruto",label:"Bruto (Gr)",component:_,type:"text",onBlur:this.setNetto(),normalize:A.c})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(h.a,{name:"nettoTerima",label:"Netto Terima",component:_,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(h.a,{name:"nettoKirim",label:"Netto Kirim",component:_,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement(h.a,{name:"nettoSelisih",label:"Netto Selisih",component:_,type:"text",onBlur:this.setNetto(),readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group d-none"},c.a.createElement(h.a,{name:"keterangan",label:"Netto Selisih",component:_,type:"text",onBlur:this.setNetto(),normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-lg-12 col-md-12 mb-3 mt-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Tambah Data"))))))}}]),a}(s.Component);S=Object(g.a)({form:"FormTerimaMasak",enableReinitialize:!0,validate:N})(S);var O=Object(E.a)("FormTerimaMasak"),P=Object(p.b)((function(e){var t=O(e,"bruto","kadarTransaksi","nettoKirim","nettoTerima"),a=t.bruto,n=t.kadarTransaksi,r=t.nettoKirim,o=t.nettoTerima;return{netto:(parseFloat(a)*(parseFloat(n)/100)).toFixed(3),nettoSelisih:(parseFloat(o||0)-parseFloat(r||0)).toFixed(3)}}))(S),B=a(422),F=a(3),K=a(57),y=a(20),D=a(4),R=a(308),M=a(803),U=a(302),j=Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://103.119.55.52:8010/api/v1/",REACT_APP_TOKO:"PAKET",REACT_APP_TYPE:"real",REACT_APP_MODE:"development",REACT_APP_DEBUG_MODE:"true",REACT_APP_IS_ENCRYPT_AXIOS:"false",REACT_APP_PUTUS_HARGA:"0",REACT_APP_STORE_CODE:"NGG",REACT_APP_LM_NAME:"BTG",REACT_APP_TOKEN_PUSAT:"",REACT_APP_URL:"/"}).REACT_APP_BACKEND_URL_NON_MASTER,I=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.submit=function(){if(null===localStorage.getItem("terimaMasak"))return Object(y.e)("Data belum timbahkan, Silahkan Tambahkan data dahulu"),!1;if(""===o.state.tanggal)return Object(y.e)("Mohon isi tanggal"),!1;var e={noFaktur:o.props.noFaktur.toUpperCase(),kodeLokasi:"PUSAT",noBon:o.props.noFaktur.toUpperCase(),tanggal:o.state.tanggal.toUpperCase(),barangDetails:JSON.parse(localStorage.getItem("terimaMasak")),footerItem:{totalNetto:o.props.sumNetto,totalBruto:o.props.sumBruto,totalNettoExt:0,totalP:0,totalGross:0,totalQty:o.props.sumQty,totalpkg:0,totalRp:0,totalK:0},footerDocument:{inputBy:o.props.username}};o.props.dispatch(Object(F.w)());var t=[];JSON.parse(localStorage.getItem("terimaMasak")).forEach((function(e,a){var n=[a++,e.kodeJenis,e.kodeTukang,e.bruto,e.kadarTransaksi,e.nettoTerima,e.nettoKirim,e.nettoSelisih];t.push(n)})),console.log(t);var a=["No","Kode Jenis","Kode Tukang","Bruto","Harga (%)","Netto Terima","Netto Kirim","Netto Selisih"];k.a.post(j+"item/dc/terimamasak",e).then((function(){return T.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}).then((function(){return o.props.dispatch(Object(F.m)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return Object(K.a)("Tanggal",o.state.tanggal.toUpperCase(),"","","No Faktur",o.props.noFaktur.toUpperCase(),"","","ADMIN",o.state.tanggal.toUpperCase(),"",a,"BUKTI TERIMA MASAK",t)})).then((function(){return localStorage.removeItem("terimaMasak")})).then((function(){return o.props.dispatch(Object(D.b)("FormTerimaMasak"))})).then((function(){return o.setState({tanggal:""})})).then((function(){return o.props.dispatch(Object(d.b)())})).then((function(){return o.props.dispatch(Object(B.b)())}))})).catch((function(e){return T.a.fire({position:"top-right",icon:"error",text:"Sepertinya ada gangguan, Silahkan Check Koneksi anda",timer:1500,showConfirmButton:!1}).then((function(){return console.log(e)})).then((function(){return o.props.dispatch(Object(F.m)())}))}))},o.state={products:[],no:0,no_kirim:"",kode_barang:"",kadar_cetak:"",bruto:0,netto_terima:0,netto_selisih:0,netto_kirim:0,status:"",tanggal:"",columns:[{dataField:"kodeJenis",text:"Kode Model",footer:""},{dataField:"kodeTukang",text:"Kode Tukang",footer:""},{dataField:"kadarCetak",text:"Kadar Cetak",footer:""},{dataField:"bruto",text:"Bruto(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"nettoTerima",text:"Netto Terima(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"nettoKirim",text:"Netto Kirim(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"nettoSelisih",text:"Netto Selisih(Gr)",footer:function(e){return e.reduce((function(e,t){return e+t}),0)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(M.a)("terimaMasak",a,o.props.dispatch,Object(B.b)())}},c.a.createElement(R.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(B.b)()),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(F.q)("terimaMasak")),this.props.dispatch(Object(F.n)("terimaMasak")),this.props.dispatch(Object(F.t)("terimaMasak"))}},{key:"handleSubmit",value:function(e){var t=this,a=(e.kodeBarang?e.kodeBarang:"DEFUALT|DEFUALT|DEFAULT|DEFAULT").split("|"),n={noFaktur:this.props.noFaktur.toUpperCase(),kadarTransaksi:parseFloat(e.kadarTransaksi),kodeTukang:e.kodeTukang.toUpperCase(),kodeLokasi:"PUSAT",kodeKategori:"-",kadarCetak:a[1].toUpperCase(),kodeJenis:a[0].toUpperCase(),noKirim:e.noKirim.toUpperCase(),brutoTerima:parseFloat(e.bruto),bruto:parseFloat(e.bruto),nettoTerima:parseFloat(e.nettoTerima),nettoKirim:parseFloat(e.nettoKirim)?parseFloat(e.nettoKirim):0,nettoSelisih:parseFloat(e.nettoSelisih)?parseFloat(e.nettoSelisih):0},r=JSON.parse(localStorage.getItem("terimaMasak"))||[];r.push(n),localStorage.setItem("terimaMasak",JSON.stringify(r)),T.a.fire({position:"top-right",icon:"success",text:"Data Berhasi Ditambahkan",timer:1500,showConfirmButton:!1}).then((function(){return t.props.dispatch(Object(B.b)())})).then((function(){return t.props.dispatch(Object(D.b)("FormTerimaMasak"))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement(U.a,{title:"Terima Masak"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-lg-3 form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggal",className:"form-control",onChange:this.inputChange("tanggal"),value:this.state.tanggal})),c.a.createElement("div",{className:"col-md-9 col-lg-9"})),c.a.createElement("div",{className:"col-lg-12 col-md-12 mb-3 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return e.submit()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahModal","data-toggle":"modal"},"Tambah Data",c.a.createElement("i",{className:"fa fa-plus ml-3"})))))),this.props.listTerimaMasak?c.a.createElement(u.a,{keyField:"id",data:this.props.listTerimaMasak,columns:this.state.columns,bordered:!0,headerClasses:"header-table"}):c.a.createElement(u.a,{keyField:"id",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))),c.a.createElement("div",{id:"tambahModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(P,{onSubmit:function(t){return e.handleSubmit(t)}}))))))}}]),a}(s.Component);t.default=Object(p.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,listTerimaMasak:e.provinsi.listTerimaMasak,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumNetto,sumQty:e.perhitungan.sumQty,onSend:e.provinsi.onSend}}),null)(I)},460:function(e,t,a){"use strict";var n=a(97),r=a.n(n),o=a(29);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return r()(l.length,"No fields specified"),1===l.length?t(n(a),e+".values."+l[0]):l.reduce((function(r,i){var l=t(n(a),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},793:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return c}));var n=a(187),r=a(802),o=localStorage.getItem("namaTimbangan"),i=localStorage.getItem("enableTimbangan"),l=function(e){i&&n.a.database().ref(o).on("value",(function(t){var a=t.val();e("bruto",a.nilai)}))},s=function(e){var t=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));t.on("connect",(function(){console.log("SOCKET CONNECTED : ",t.connected)}));var a=localStorage.getItem("username");t.on("timbangan-emit",(function(t){var n;(null===(n=t.user_id)||void 0===n?void 0:n.toLowerCase())===(null===a||void 0===a?void 0:a.toLowerCase())&&(localStorage.setItem("timbangan-active","true"),e(document.activeElement.name,t.value))}))},c=function(){var e=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));localStorage.setItem("timbangan-active","false"),e.disconnect()}},803:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(15),r=a.n(n),o=function(e,t,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(e))||[];i.splice(t,1),localStorage.setItem(e,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))}}}]);