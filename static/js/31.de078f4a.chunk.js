/*! For license information please see 31.de078f4a.chunk.js.LICENSE.txt */
(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[31],{1323:function(e,t,a){"use strict";a.r(t);var n=a(182),r=a(52),o=a(53),i=a(54),l=a(55),c=a(0),s=a.n(c),u=a(33),p=a(39),m=a(15),d=a.n(m),h=a(58),g=a(440),f=a(441),b=a(20),k=a(308),v=a(96),y=a.n(v),O=a(10),j=a(302),E=a(129),S=a(48),x=a(303),N=a(893),w=a(12),_=a(6),T=a(4),F=a(1),D=a(3),L=a(23),B=a(5),A=a(57),C=a(8),G=a(19),K=a(9);function M(){M=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(_){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),l=new x(r||[]);return n(i,"_invoke",{value:O(e,a,l)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var p={};function m(){}function d(){}function h(){}var g={};c(g,o,(function(){return this}));var f=Object.getPrototypeOf,b=f&&f(f(N([])));b&&b!==t&&a.call(b,o)&&(g=b);var k=h.prototype=m.prototype=Object.create(g);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"==typeof p&&a.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(p).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function O(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return w()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=j(i,a);if(l){if(l===p)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function j(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:w}}function w(){return{value:void 0,done:!0}}return d.prototype=h,n(k,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},v(y.prototype),c(y.prototype,i,(function(){return this})),e.AsyncIterator=y,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new y(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(k),c(k,l,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),S(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;S(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:N(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}function P(e,t,a,n){var r=[];e.forEach((function(e,t){var a=[++t,e.kode_jenis,{content:e.kadar_cetak,styles:{halign:"right"}},{content:Object(F.D)(e.p),styles:{halign:"right"}},{content:Object(F.D)(e.k),styles:{halign:"right"}},{content:Object(F.D)(e.pkg),styles:{halign:"right"}},{content:Object(F.D)(e.bruto),styles:{halign:"right"}},{content:e.kadar_beli,styles:{halign:"right"}},{content:Object(F.D)(e.netto),styles:{halign:"right"}},{content:Object(F.G)(e.ongkos_rp),styles:{halign:"right"}}];r.push(a)}));var o=["","","","","",{content:Object(F.D)(e.map((function(e){return Object(F.xb)(e.pkg)})).reduce((function(e,t){return e+t}),0)),styles:{halign:"right"}},{content:Object(F.D)(e.map((function(e){return Object(F.xb)(e.bruto)})).reduce((function(e,t){return e+t}),0)),styles:{halign:"right"}},"",{content:Object(F.D)(e.map((function(e){return Object(F.xb)(e.netto)})).reduce((function(e,t){return e+t}),0)),styles:{halign:"right"}},{content:Object(F.G)(e.map((function(e){return e.ongkos_rp})).reduce((function(e,t){return e+t}),0)),styles:{halign:"right"}}];Object(A.a)("No Bon",t,"Tanggal",a,"Supplier",n,"","",Object(F.P)(),Object(L.b)(),"",[["No","Kode Model",{content:"Kadar Cetak",styles:{halign:"right"}},{content:"P",styles:{halign:"right"}},{content:"K",styles:{halign:"right"}},{content:"Bungkus(Gr)",styles:{halign:"right"}},{content:"Berat(Gr)",styles:{halign:"right"}},{content:"Harga(Gr)",styles:{halign:"right"}},{content:"Murni(Gr)",styles:{halign:"right"}},{content:"Ongkos(Rp)",styles:{halign:"right"}}]],"Tolakan Return Barang Supplier",r,[o])}var I=a(792),H=a(56),J=Object(c.lazy)((function(){return Promise.resolve().then(a.bind(null,305))})),U=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;Object(r.a)(this,a);var i=new Date,l="".concat(i.getFullYear(),"-").concat(i.getMonth()+1,"-").concat(i.getDate());return(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");o.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},o.state={supplierList:[],DataSupplier:[],startDate:l,kodeSupplier:"",namaSupplier:"",tanggal:l,noBon:"",status:"",tampungBarang:[],columns:[{dataField:"kode_jenis",text:"Kode Model"},{dataField:"kadar_cetak",text:"Kadar Cetak(%)",align:"right",headerAlign:"right"},{dataField:"p",text:"P",align:"right",headerAlign:"right",formatter:function(e){return Object(F.D)(e)}},{dataField:"k",text:"K",align:"right",headerAlign:"right",formatter:function(e){return Object(F.D)(e)}},{dataField:"pkg",text:"Bungkus(Gr)",align:"right",headerAlign:"right",formatter:function(e){return Object(F.D)(e)}},{dataField:"bruto",text:"Berat(Gr)",align:"right",headerAlign:"right",formatter:function(e){return Object(F.D)(e)}},{dataField:"kadar_beli",text:"Kadar Beli",align:"right",headerAlign:"right"},{dataField:"netto",text:"Murni(Gr)",align:"right",headerAlign:"right",formatter:function(e){return Object(F.D)(e)},footerClasses:"sum-netto-terima-supplier"},{dataField:"ongkos_rp",text:"Ongkos(RP)",align:"right",headerAlign:"right",formatter:function(e){return s.a.createElement("span",null,"Rp. ",parseFloat(e).toLocaleString("ID-id"))}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return o.delete(a)}},s.a.createElement(k.a,{id:"hapus",type:"dark",effect:"solid"},s.a.createElement("span",null,"Hapus")),s.a.createElement("i",{className:"fa fa-trash mr-1"})),s.a.createElement("br",null))}}]},o}return Object(o.a)(a,[{key:"delete",value:function(e){var t=this;d.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){if(a.isConfirmed){var n=JSON.parse(localStorage.getItem("TolakHutangSupplier"))||[];n.splice(e,1),localStorage.setItem("TolakHutangSupplier",JSON.stringify(n)),d.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return t.props.dispatch(Object(h.j)())})).then((function(){return t.setState({key:"updated"})}))}}))}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(E.h)()),this.props.dispatch(Object(p.b)()),this.props.dispatch(Object(h.j)())}},{key:"handleSubmit",value:function(){this.props.dispatch(function(){var e=Object(_.a)(M().mark((function e(t,a){var n,r,o,i,l,c;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a(),r=n.form.TerimaSupplier.values,o=Object(F.tb)(r),i=o.kodeJenis?o.kodeJenis:"DEFAULT|DEFAULT|DEFAULT|DEFAULT",l=i.split("|"),c={kode_kategori:o.kode_kategori,kode_jenis:l[0],kadar_cetak:parseFloat(o.kadar).toString(),kadar_beli:parseFloat(Object(F.xb)(o.kadarTransaksi)),no_barcode:"-",qty:1,p:parseFloat(Object(F.xb)(o.p)),k:parseFloat(Object(F.xb)(o.k)),pkg:parseFloat(Object(F.xb)(o.pkg)),gross:parseFloat(Object(F.xb)(o.gross)),bruto:parseFloat(Object(F.xb)(o.bruto)),netto:parseFloat(Object(F.xb)(o.netto)),ongkos_rp:parseFloat(o.rp||0),harga_beli:0},e.next=8,Object(D.v)({name:"TolakHutangSupplier",value:o.kode_kategori,target:"kode_kategori",payload:c});case 8:t(Object(O.g)()),t(Object(h.j)()),t(Object(T.b)("TerimaSupplier"));case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},{key:"returnSupplierSubmit",value:function(){return""===this.state.noBon?(Object(b.e)("Mohon isi nomor bon"),!1):""===this.state.tanggal?(Object(b.e)("Mohon isi Tanggal"),!1):0===JSON.parse(localStorage.getItem("TolakHutangSupplier")||"[]").length?(Object(b.e)("Barang masih kosong, silahkan tambahkan barang"),!1):""===this.state.kodeSupplier?(Object(b.e)("Mohon pilih Supplier"),!1):void this.props.dispatch(function(){var e=Object(_.a)(M().mark((function e(t,a){var n,r,o,i,l,c,s,u,m,d,g,f,b,k;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(D.w)()),n=a(),r=n.form.TolakHutangSupplier.values,o=Object(F.tb)(r),e.next=6,Object(K.b)("TolakHutangSupplier");case 6:return i=e.sent,l=i.length,c=i.map((function(e){return parseFloat(e.p)})).reduce((function(e,t){return e+t}),0),s=i.map((function(e){return parseFloat(e.k)})).reduce((function(e,t){return e+t}),0),u=i.map((function(e){return parseFloat(e.pkg)})).reduce((function(e,t){return e+t}),0),m=i.map((function(e){return parseFloat(Object(F.xb)(e.bruto))})).reduce((function(e,t){return e+t}),0),d=i.map((function(e){return parseFloat(Object(F.xb)(e.netto))})).reduce((function(e,t){return e+t}),0),g=i.map((function(e){return parseFloat(e.ongkos_rp)})).reduce((function(e,t){return e+t}),0),f=Object(F.L)()+"/TPHS-"+Object(F.J)(),e.next=17,Object(K.b)("TolakHutangSupplier");case 17:return b=e.sent,k={no_tolak:n.provinsi.noFaktur,tanggal:Object(F.A)(n.date.data),no_bon:o.no_bon||f,kode_supplier:o.supplier,jenis_trx:"PEMBAYARAN",total_qty:l,total_p:c,total_k:s,total_pkg:u,total_bruto:m,total_netto:d,total_ongkos:g,detail_barang:b},e.prev=19,e.next=22,C.b.promise(Object(B.f)("trx-tolakan-supplier/simpan",k),G.b);case 22:P(i,k.no_bon,n.date.data,k.kode_supplier),Object(F.nb)(["TolakHutangSupplier","noFaktur"]),t(Object(D.m)()),t(Object(p.b)()),t(Object(h.j)()),t(Object(T.b)("TolakHutangSupplier")),e.next=33;break;case 30:e.prev=30,e.t0=e.catch(19),t(Object(D.m)());case 33:case"end":return e.stop()}}),e,null,[[19,30]])})));return function(t,a){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid",style:{color:"black"}},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(w.b,{to:"/KlasifikasiSupplier"},s.a.createElement("button",{type:"button",className:"btn btn-secondary"},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card"},s.a.createElement(j.a,{title:"Tolakan Pembayaran Hutang Supplier"}),s.a.createElement("div",{className:"card-body"},s.a.createElement(J,{content:s.a.createElement(c.Suspense,{fallback:s.a.createElement(y.a,{width:"100%",height:400})},s.a.createElement(N.a,{from:"tolakan",onSubmit:function(t){return e.handleSubmit(t)},noFaktur:this.props.noFaktur})),title:"Tambah Data Barang"}),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("form",{id:"myForm"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"supplier",component:S.c,options:this.props.supplier.map((function(e){return{value:e.kode_supplier,name:e.nama_supplier}})),type:"text",label:"Supplier",placeholder:"Masukan Supplier",onChange:function(t){e.setState({kodeSupplier:t.value})}})),s.a.createElement(I.a,{className:"col-lg-4"}),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"no_bon",component:S.b,type:"text",label:"Nomor Bon",placeholder:"Masukan Nomor Bon",onChange:function(t){e.setState({noBon:t.target.value})}}))))),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"}),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(O.j)())}},"Tambah Data",s.a.createElement("i",{className:"fa fa-plus ml-3","aria-hidden":"true"})))))),s.a.createElement("div",{className:"col-lg-12 mt-3"},s.a.createElement(x.a,{keyField:"id",data:this.props.listTolakanHutangSupplier,columns:this.state.columns}),s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return e.returnSupplierSubmit()}},this.props.onSend?s.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Selesai",s.a.createElement("i",{className:"fa fa-paper-plane ml-3","aria-hidden":"true"})))))))))))}}]),a}(c.Component);U=Object(f.a)({form:"TolakHutangSupplier"})(U);t.default=Object(u.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,listTolakanHutangSupplier:e.provinsi.listTolakanHutangSupplier,alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend,supplier:e.supplierState.listSupplier||[],initialValues:{tanggal:Object(H.c)()}}}),null)(U)},460:function(e,t,a){"use strict";var n=a(97),r=a.n(n),o=a(29);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var i=arguments.length,l=new Array(i>1?i-1:0),c=1;c<i;c++)l[c-1]=arguments[c];return r()(l.length,"No fields specified"),1===l.length?t(n(a),e+".values."+l[0]):l.reduce((function(r,i){var l=t(n(a),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},792:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n),o=a(440),i=a(48),l=a(33),c=a(43);function s(e){var t=Object(l.d)((function(e){return e.date.data})),a=Object(l.c)();return r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:e.name||"tanggal",component:i.a,label:e.label||"Tanggal",type:"text",placeholder:e.label?"Masukan ".concat(e.label):"Masukan Tanggal Awal",readOnly:e.readOnly,onChange:function(t){void 0!==e.onChange&&e.onChange(t),a(Object(c.j)(new Date(t)))},selected:new Date(t.split("-").reverse().join("-"))}))}function u(e){var t=Object(l.d)((function(e){return e.date})),a=t.from,n=t.to,s=Object(l.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglFrom",component:i.a,label:"Mulai Dari",type:"text",placeholder:"Masukan Tanggal Awal",readOnly:e.readOnly,onChange:void 0!==e.onChange?e.onChange:function(e){return s(Object(c.k)(new Date(e)))},selected:new Date(a.split("-").reverse().join("-"))})),r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglTo",component:i.a,label:"Sampai Dengan",type:"text",placeholder:"Masukan Tanggal Akhir",readOnly:e.readOnly,onChange:void 0!==e.onChange?e.onChange:function(e){return s(Object(c.l)(new Date(e)))},selected:new Date(n.split("-").reverse().join("-"))})))}},793:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(187),r=a(802),o=localStorage.getItem("namaTimbangan"),i=localStorage.getItem("enableTimbangan"),l=function(e){i&&n.a.database().ref(o).on("value",(function(t){var a=t.val();e("bruto",a.nilai)}))},c=function(e){var t=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));t.on("connect",(function(){console.log("SOCKET CONNECTED : ",t.connected)}));var a=localStorage.getItem("username");t.on("timbangan-emit",(function(t){var n;(null===(n=t.user_id)||void 0===n?void 0:n.toLowerCase())===(null===a||void 0===a?void 0:a.toLowerCase())&&(localStorage.setItem("timbangan-active","true"),e(document.activeElement.name,t.value))}))},s=function(){var e=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));localStorage.setItem("timbangan-active","false"),e.disconnect()}},830:function(e,t,a){"use strict";t.a=function(e){var t={};return e.kodeJenis||(t.kodeJenis="Tidak Boleh kosong, silahkan isi"),e.pkg||(t.pkg="Tidak Boleh kosong, silahkan isi"),e.p||(t.p="Tidak Boleh kosong, silahkan isi"),e.k||(t.k="Tidak Boleh kosong, silahkan isi"),e.bruto||(t.bruto="Tidak Boleh kosong, silahkan isi"),e.gross||(t.gross="Tidak Boleh kosong, silahkan isi"),t}},893:function(e,t,a){"use strict";var n=a(52),r=a(53),o=a(309),i=a(54),l=a(55),c=a(0),s=a.n(c),u=a(440),p=a(441),m=a(460),d=a(33),h=a(830),g=a(793),f=a(48),b=a(5),k=a(1),v=a(183),y=a(184),O=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onclick1=r.onclick1.bind(Object(o.a)(r)),r.state={kodeBarang:[],DataSupplier:[],kode_barang:"",keterangan:"INI KETERANGAN",kadar:"",P:"",K:"",bungkus:"",berat:"",harga:"",murni:"",ongkos:"",status:"",kadarCetak:"",kadarBeli:"",namaJenis:"",kodeJenis:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(k.qb)(),Object(b.b)("jenis/get/all-no-image").then((function(t){return e.setState({kodeBarang:t.data.filter((function(e){return"PERHIASAN"!==e.kode_kelompok&&"AKSESORIS"!==e.kode_kelompok}))})})).catch((function(e){return console.log(e)})),Object(g.b)(this.props.change)}},{key:"onclick1",value:function(){this.props.change("netto",Object(k.D)(Object(k.b)(this.props.netto))),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",Object(k.D)(Object(k.b)(this.props.gross)))}},{key:"pilihBarang",value:function(e){var t=(e||"DEFAULT | DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenis:t[0],namaJenis:t[1],kadarCetak:t[2],kadarBeli:t[3],kodeKategori:t[4]}),this.props.change("keterangan",t[1]),this.props.change("kadar",t[2]),this.props.change("kadarTransaksi",t[3]),this.props.change("kode_kategori",t[4]),Object(k.zb)("Plastik")}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli),this.props.change("kode_kategori",this.state.kodeKategori)}},{key:"render",value:function(){var e=this;return s.a.createElement(v.a,{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},s.a.createElement(u.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:f.b,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-4 form-group"},s.a.createElement(u.a,{label:"Kode Model",name:"kodeJenis",component:f.c,options:this.state.kodeBarang.map((function(e){return{value:e.kode_jenis+"|"+e.nama_jenis+"|"+e.kadar_cetak+"|"+e.kadar_beli+"|"+e.kode_kategori,name:e.nama_jenis}})),onChange:function(t){return e.setState({},(function(){e.pilihBarang(t.value)}))},placeholder:"Silahkan Pilih"})),s.a.createElement("div",{className:"col-md-8 form-group",style:"terima"===this.props.from?null:{visibility:"hidden"}},s.a.createElement(u.a,{name:"keterangan",label:"Keterangan",type:"text",component:f.b,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"kadar",label:"Kadar Jual",type:"text",component:f.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"p",label:"Plastik",type:"number",component:f.b})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"k",label:"Kertas",type:"number",component:f.b})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"pkg",label:"Bungkus (Gr)",type:"number",component:f.b,onChange:function(){return e.setState({},e.onclick1())},onBlur:this.onclick1()})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:f.b,onChange:function(){return e.setState({},e.onclick1())},onBlur:this.onclick1(),normalize:k.c})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"kadarTransaksi",label:"Kadar Beli",type:"number",component:f.b,onChange:function(){return e.setState({},e.onclick1())},onBlur:this.onclick1()})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"gross",label:"Gross (Gr)",type:"text",component:f.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"netto",label:"Murni (Gr)",type:"text",component:f.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group d-none"},s.a.createElement(u.a,{name:"kode_kategori",label:"Kode Kategori",type:"number",component:f.b,readOnly:!0})),s.a.createElement("div",{className:"col-md-12 form-group mt-3"},s.a.createElement(y.a,null))))}}]),a}(c.Component);O=Object(p.a)({form:"TerimaSupplier",validate:h.a,enableReinitialize:!0})(O);var j=Object(m.a)("TerimaSupplier");t.a=Object(d.b)((function(e){var t=j(e,"bruto","kadarTransaksi","pkg"),a=t.bruto,n=t.kadarTransaksi,r=t.pkg;return{netto:Object(k.D)(parseFloat(a)*(parseFloat(n)/100))||0,gross:Object(k.D)(parseFloat(a)+parseFloat(r))||0,initialValues:{p:0,k:0,pkg:0,bruto:0,kadarTransaksi:0}}}))(O)}}]);