/*! For license information please see 45.88455843.chunk.js.LICENSE.txt */
(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[45],{1229:function(t,e,n){"use strict";n.r(e);var a=n(6),r=n(182),o=n(52),i=n(53),c=n(54),l=n(55),s=n(0),u=n.n(s),d=n(33),h=n(15),p=n.n(h),f=n(308),m=n(4),g=n(188),b=n(39),v=n(3),k=n(57),y=n(20),j=n(803),O=n(305),E=n(5),w=n(96),_=n.n(w),S=n(302),x=n(1),N=n(440),B=n(441),L=n(51),C=n(116),T=n(122),F=n(10),K=n(129),I=n(56),D=n(303),A=n(48),P=n(183),M=n(184),G=n(792);var J=function(){var t=Object(d.d)((function(t){return t.listTokoState.listToko})),e=Object(d.c)();return u.a.createElement(N.a,{component:A.c,label:"Nama Toko",name:"kode_toko",onChange:function(t){return e(Object(T.f)(t.value))},options:t.map((function(t){return{value:t.kode_toko+"|"+t.kode_toko+"|"+t.ip_address,name:t.kode_toko}}))})},Y=n(436),z=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={supplier:!1,columns:[{dataField:"kode_jenis_internal",text:"Kode Model Internal"},{dataField:"kode_jenis",text:"Kode Model Tujuan"},{dataField:"qty",text:"Quantity",align:"right",headerAlign:"right"},{dataField:"bruto",text:"Bruto (Gr)",align:"right",formatter:function(t){return Object(x.D)(t)},headerAlign:"right"},{dataField:"kadar_modal",text:"Kadar Beli",align:"right",formatter:function(t){return t},headerAlign:"right"},{dataField:"netto",text:"Netto (Gr)",align:"right",headerAlign:"right",formatter:function(t){return Object(x.D)(t,3)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e,n){return u.a.createElement("div",{className:"text-center"},u.a.createElement("button",{"data-tip":!0,type:"button","data-for":"hapus",className:"btn btn-danger",onClick:function(){return a.deleteIndex(n)}},u.a.createElement(f.a,{id:"hapus",type:"dark",effect:"solid"},u.a.createElement("span",null,"Hapus")),u.a.createElement("i",{className:"fa fa-trash"})),u.a.createElement("br",null))}}],lokasi_asal:"",lokasi_tujuan:""},a}return Object(i.a)(n,[{key:"deleteIndex",value:function(t){var e=this;p.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.isConfirmed){var a=JSON.parse(localStorage.getItem("kirimStock"));a.splice(t,1),localStorage.setItem("kirimStock",JSON.stringify(a)),p.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return e.props.dispatch(Object(T.h)())}))}}))}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(K.g)()),this.props.dispatch(Object(L.o)()),this.props.dispatch(Object(C.j)()),this.props.change("tanggal",Object(I.c)()),Object(x.qb)()}},{key:"tambahModal",value:function(){this.props.dispatch(Object(F.j)()),this.setState({isEdit:!1})}},{key:"render",value:function(){var t=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement(P.a,{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement(G.a,null),u.a.createElement("div",{className:Object(x.hb)()?"col-md-4 form-group d-none":"col-md-4 form-group"},u.a.createElement(N.a,{component:A.c,label:"Nama Cabang",name:"kode_customer",value:this.props.status,onChange:function(e){return t.props.dispatch(Object(T.f)(e.value))},options:this.props.listCabang.map((function(t){return{value:t.kode_cabang+"|"+t.nama_cabang+"|"+t.ip_address,name:t.nama_cabang}}))})),u.a.createElement("div",{className:Object(x.l)("col-md-4 form-group")},u.a.createElement(N.a,{component:A.c,label:"Nama Cabang",name:"kode_cabang",value:this.props.status,onChange:function(e){return t.props.dispatch(Object(Y.b)(e.value))},options:this.props.listCabang.map((function(t){return{value:t.kode_cabang,name:t.nama_cabang}}))})),u.a.createElement("div",{className:Object(x.l)("col-md-4")},u.a.createElement(J,null)),u.a.createElement("div",{className:"col-lg-12 col-md-12 mb-3"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.props.tambahModal()}},"Tambah Barang",u.a.createElement("i",{className:"fa fa-plus ml-3"})))),u.a.createElement("div",{className:"col-md-12 col-lg-12"},u.a.createElement(D.a,{keyField:"KodeBarang",data:this.props.kirimStock||[],columns:this.state.columns,bordered:!0,headerClasses:"header-table"}))),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement(M.a,null))))}}]),n}(s.Component);z=Object(B.a)({form:"HeadKirimStock",enableReinitialize:!0})(z);var q=Object(d.b)((function(t){return{dataLokasiPindah:t.provinsi.dataLokasiPindah,listBarang:t.provinsi.pindahBarang,listCabang:t.cabangState.listCabang||[],listKategori:t.kategoriState.listKategori||[],kirimStock:t.kirimStock.list_barang}}))(z),H=n(460),Q=n(793),U=n(8),R=n(9);function V(){V=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new _(r||[]);return a(i,"_invoke",{value:j(t,n,c)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var d={};function h(){}function p(){}function f(){}var m={};l(m,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==e&&n.call(b,o)&&(m=b);var v=f.prototype=h.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var r;a(this,"_invoke",{value:function(a,o){function i(){return new e((function(r,i){!function a(r,o,i,c){var l=u(t[r],t,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return a("throw",t,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function j(t,e,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return x()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(t,e,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=u(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return p.prototype=f,a(v,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},k(y.prototype),l(y.prototype,i,(function(){return this})),t.AsyncIterator=y,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var i=new y(s(e,n,a,r),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(v),l(v,c,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return i.type="throw",i.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var W=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(o.a)(this,n),(r=e.call(this,t)).handleChange=function(){var t=Object(a.a)(V().mark((function t(e){var n,a,o,i,c;return V().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.props.KodeBarangList.find((function(t){return t.kode_jenis===e.value})),!Object(x.bb)()){t.next=19;break}return t.prev=2,t.next=5,Object(E.e)("jenis/check-stock",{kode_jenis:e.value});case 5:return a=t.sent,r.setState({disabled:!1,canSendData:!0}),t.next=9,Object(R.b)("kirimStock");case 9:o=t.sent,-1!==(i=o.findIndex((function(t){return t.kode_jenis_internal===e.value})))?r.props.change("netto_tersedia",Object(x.D)(null!==(c=a.data.result-o[i].netto)&&void 0!==c?c:0)):r.props.change("netto_tersedia",Object(x.D)(a.data.result-0)),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(2),U.b.error("Mohon Maaf, Stock Tidak Tersedia Untuk Model Ini"),r.setState({disabled:!0,canSendData:!1}),r.props.change("netto_tersedia",0);case 19:r.props.change("kadarTransaksi",n.kadar_beli),Object(x.zb)("Bruto");case 21:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),r.setNetto=Object(a.a)(V().mark((function t(){return V().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Object(x.bb)()){t.next=8;break}if(!(parseFloat(Object(x.xb)(r.props.netto))>parseFloat(Object(x.xb)(r.props.netto_tersedia)))){t.next=7;break}return U.b.error("Netto Tidak Boleh Melebihi Stock Yang Tersedia"),r.setState({canSendData:!1}),t.abrupt("return",!1);case 7:r.setState({canSendData:!0});case 8:r.props.change("netto",r.props.netto);case 9:case"end":return t.stop()}}),t)}))),r.state={listBarang:[],disabled:!1,canSendData:!0,kodeJenis:"",kadarCetak:"",kadarBeli:"",non_aksesoris:"col-lg-12 row",aksesoris:"col-lg-12 row d-none"},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){Object(x.qb)(2),Object(Q.b)(this.props.change)}},{key:"render",value:function(){var t,e=this;return u.a.createElement(P.a,{number:2,onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-3 form-group"},""!==String(this.props.KodeBarangList)?u.a.createElement(N.a,{name:"kodeBarangInternal",label:"Kode Model Asal",component:A.c,onChange:function(t){return e.handleChange(t)},options:this.props.KodeBarangList.map((function(t){return{value:t.kode_jenis,name:t.nama_jenis}}))}):u.a.createElement(x.m,{label:"Kode Model Asal"})),u.a.createElement("div",{className:Object(x.hb)()?"col-md-3 form-group d-none":"col-md-3 form-group"},""!==String(this.props.listJenisCabang)?u.a.createElement(N.a,{name:"kodeBarang",label:"Kode Model Tujuan",component:A.c,options:this.props.listJenisCabang.map((function(t){return{value:t.kode_dept,name:t.nama_dept}}))}):u.a.createElement(x.m,{label:"Kode Model Tujuan"})),u.a.createElement("div",{className:Object(x.bb)()?"col-md-2 form-group":"col-md-2 form-group d-none"},u.a.createElement(N.a,{name:"netto_tersedia",label:"Netto Tersedia",component:A.b,type:"text",readOnly:!0,normalize:x.c})),u.a.createElement("div",{className:Object(x.w)("col-md-2 form-group")},u.a.createElement(N.a,{name:"qty",label:"Quantity",component:A.b,type:"number",normalize:x.e,readOnly:this.state.disabled})),u.a.createElement("div",{className:"col-md-2 form-group"},u.a.createElement(N.a,{name:"bruto",label:"Bruto",component:A.b,onChange:function(){e.setState({},e.setNetto)},type:"text",normalize:x.c,readOnly:this.state.disabled})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(N.a,{name:"kadarTransaksi",label:"Kadar Beli",component:A.b,type:"text",readOnly:null!==(t=Object(x.z)())&&void 0!==t?t:this.state.disabled,normalize:x.c,onChange:function(){e.setState({},e.setNetto)}})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(N.a,{name:"netto",label:"Netto",component:A.b,type:"text",normalize:function(t){return t&&t.toUpperCase()},readOnly:this.state.disabled})),u.a.createElement("div",{className:"col-md-12 form-group"},u.a.createElement(M.a,{number:2,disabled:!this.state.canSendData}))))}}]),n}(s.Component);W=Object(B.a)({form:"FormKirimStock",enableReinitialize:!0})(W);var X=Object(H.a)("FormKirimStock"),Z=Object(d.b)((function(t){var e,n,a,r,o,i,c=X(t,"bruto","kadarTransaksi","netto_tersedia"),l=c.bruto,s=c.kadarTransaksi,u=c.netto_tersedia;return{KodeBarangList:t.kodeBarangState.listKodeBarang||[],listJenisCabang:t.provinsi.listJenisCabang||[],netto_tersedia:u,kodeKategori:(null===(e=t.form)||void 0===e||null===(n=e.HeadKirimStock)||void 0===n||null===(a=n.values)||void 0===a?void 0:a.kode_kategori)||(null===(r=t.form)||void 0===r||null===(o=r.HeadKirimStockEdit)||void 0===o||null===(i=o.values)||void 0===i?void 0:i.kode_kategori),netto:Object(x.D)(parseFloat(l)*(parseFloat(s)/100)||"0"),initialValues:{bruto:t.kirimStock.bruto,kodeBarang:t.kirimStock.kodeBarang}}}))(W),$=n(23),tt=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={listGambar:[],columns:[{dataField:"no_bon",text:"Nomor Bon"},{dataField:"tanggal",text:"Tanggal"},{dataField:"kode_customer",text:"Kode Customer"},{dataField:"kode_kategori",text:"Kode Kategori"},{dataField:"total_bruto",text:"Total Bruto",align:"right",formatter:function(t){return Object(x.D)(t,3)},headerAlign:"right"},{dataField:"total_netto",text:"Total Netto",align:"right",formatter:function(t){return Object(x.D)(t)},headerAlign:"right"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e,n){return u.a.createElement("div",{className:"text-center"},u.a.createElement("button",{id:"btn_packing_pilih"+n,className:"btn btn-warning mr-2",onClick:function(){return a.props.setEdit(e)},disabled:a.props.onSend},"Pilih"))}}]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(T.g)())}},{key:"render",value:function(){return u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement(D.a,{keyField:"no_packing",data:this.props.list_kirim_stock_valid,columns:this.state.columns,textEmpty:"Data Timbangan Kosong"}))}}]),n}(s.Component),et=Object(d.b)((function(t){return{listPacking:t.provinsi.listPacking,onSend:t.provinsi.onSend,kodeBarang:t.kodeBarangState.listKodeBarang||[],list_kirim_stock_valid:t.kirimStock.list_kirim_stock_valid}}))(tt),nt=n(76),at=n(195);function rt(){rt=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(N){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new _(r||[]);return a(i,"_invoke",{value:j(t,n,c)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var d={};function h(){}function p(){}function f(){}var m={};l(m,o,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==e&&n.call(b,o)&&(m=b);var v=f.prototype=h.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var r;a(this,"_invoke",{value:function(a,o){function i(){return new e((function(r,i){!function a(r,o,i,c){var l=u(t[r],t,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return a("throw",t,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function j(t,e,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return x()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(t,e,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=u(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return p.prototype=f,a(v,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},k(y.prototype),l(y.prototype,i,(function(){return this})),t.AsyncIterator=y,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var i=new y(s(e,n,a,r),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(v),l(v,c,"Generator"),l(v,o,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return i.type="throw",i.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}var ot=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onChange=function(t){return function(e){a.setState(Object(r.a)({},t,e.target.value))}},a.state={dari:[],kepada:[],tanggal:"",dariIsi:"",ke:"",noBon:"",kategori:"",kodeJenis:"",keterangan:"",isEdit:!1,handleEdit:!1,columns:[{dataField:"kode_jenis",text:"Kode Model"},{dataField:"bruto",text:"Bruto (Gr)",align:"right",formatter:function(t){return Object(x.D)(t)},headerAlign:"right"},{dataField:"netto",text:"Netto (Gr)",align:"right",headerAlign:"right",formatter:function(t){return Object(x.D)(t,3)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e,n){return u.a.createElement("div",{className:"text-center"},u.a.createElement("button",{"data-tip":!0,"data-for":"hapus",type:"button",className:"btn btn-danger",onClick:function(){return Object(j.a)("pindahBarang",n,a.props.dispatch,Object(g.f)())}},u.a.createElement(f.a,{id:"hapus",type:"dark",effect:"solid"},u.a.createElement("span",null,"Hapus")),u.a.createElement("i",{className:"fa fa-trash"})),u.a.createElement("br",null))}}]},a}return Object(i.a)(n,[{key:"setEdit",value:function(t){this.props.dispatch(Object(T.i)(t)),this.props.dispatch(Object(T.h)()),this.setState({handleEdit:!0})}},{key:"getTabelData",value:function(){this.props.dispatch(Object(g.f)())}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(nt.k)()),this.props.dispatch(Object(T.h)()),this.props.dispatch(Object(b.b)()),this.props.dispatch(Object(at.e)()),this.dataEditPindahBarang(),localStorage.removeItem("kirimStock"),this.setState({noBon:Object(x.J)()})}},{key:"handleSubmit",value:function(){var t=Object(a.a)(rt().mark((function t(e){var n,a,r;return rt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.tb)(e),a=n.kodeBarangInternal,this.setState({kodeJenis:a}),r={kode_jenis_internal:n.kodeBarangInternal,kode_jenis:Object(x.hb)()?"-":n.kodeBarang,kadar_cetak:"100",kadar_modal:n.kadarTransaksi,bruto:n.bruto,qty:n.qty||1,netto:Object(x.b)(n.netto)},t.next=6,Object(v.v)({value:n.kodeBarang,target:"kode_jenis",payload:r,name:"kirimStock",isUpdate:!0});case 6:this.props.dispatch(Object(m.b)("FormKirimStock")),this.props.dispatch(Object(T.h)()),U.b.success("Tambah barang berhasil");case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"SubmitPindah",value:function(){var t=Object(a.a)(rt().mark((function t(e){var n,a,r,o,i,c=this;return rt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(x.tb)(e),t.next=3,Object(R.b)("kirimStock");case 3:if(null!==(a=t.sent)){t.next=7;break}return Object(y.e)("Mohon Tambahkan Barang Yang akan dipindahkan"),t.abrupt("return",!1);case 7:r={no_kirim:n.no_kirim||this.props.noFaktur,no_bon:n.no_bon||Object(x.L)()+"/KB-"+this.state.noBon,tanggal:Object(x.A)(this.props.tanggal),kode_cabang:Object(x.hb)()?n.kode_cabang:n.kode_customer.split("|")[0],kode_toko:Object(x.hb)()?n.kode_toko.split("|")[0]:"",total_bruto:a.map((function(t){return parseFloat(t.bruto)})).reduce((function(t,e){return t+e}),0),total_netto:a.map((function(t){return parseFloat(t.netto)})).reduce((function(t,e){return t+e}),0),detail_barang:a},Object(x.hb)()||delete r.kode_toko,this.props.dispatch(Object(v.w)()),o=[],a.forEach((function(t,e){var n=Object(x.hb)()?[++e,t.kode_jenis_internal,{content:t.qty,styles:{halign:"right"}},{content:Object(x.D)(t.bruto),styles:{halign:"right"}},{content:t.kadar_modal,styles:{halign:"right"}},{content:Object(x.D)(t.netto),styles:{halign:"right"}}]:[++e,t.kode_jenis_internal,t.kode_jenis,{content:t.qty,styles:{halign:"right"}},{content:Object(x.D)(t.bruto),styles:{halign:"right"}},{content:t.kadar_modal,styles:{halign:"right"}},{content:Object(x.D)(t.netto),styles:{halign:"right"}}];o.push(n)})),i=Object(x.hb)()?[[{content:"No"},{content:"Kode Jenis Asal"},{content:"Quantity",styles:{halign:"right"}},{content:"Bruto (Gr)",styles:{halign:"right"}},{content:"Kadar Beli",styles:{halign:"right"}},{content:"Netto (Gr)",styles:{halign:"right"}}]]:[[{content:"No"},{content:"Kode Jenis Asal"},{content:"Kode Jenis Tujuan"},{content:"Quantity",styles:{halign:"right"}},{content:"Bruto (Gr)",styles:{halign:"right"}},{content:"Kadar Beli",styles:{halign:"right"}},{content:"Netto (Gr)",styles:{halign:"right"}}]],Object(E.f)("/kirim-stock/simpan",r).then((function(t){return p.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return c.props.dispatch(Object(v.m)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return Object(k.a)("Tanggal",Object($.b)(),"Customer",Object(x.hb)()?n.kode_toko.split("|")[1]:n.kode_customer.split("|")[1],"Nomor Bon",t.data.no_bon,"","",Object(x.P)(),Object($.b)(),"",i,"Kirim Stock",o)})).then((function(){return localStorage.removeItem("kirimStock")})).then((function(){return c.props.dispatch(Object(m.b)("headKirimStock"))}))})).then((function(){return c.props.dispatch(Object(v.m)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return localStorage.removeItem("kirimStock")})).then((function(){return c.props.dispatch(Object(b.b)())})).then((function(){return c.props.dispatch(Object(T.h)())})).then((function(){return c.props.dispatch(Object(m.a)("HeadKirimStock","tanggal",Object(I.c)()))})).catch((function(t){var e;return p.a.fire({position:"top-end",icon:"error",text:(null===t||void 0===t||null===(e=t.response)||void 0===e?void 0:e.data)||"Terjadi Kesalahan Internal, Silahkan Hubungi Admin",showConfirmButton:!1,timer:1500}).then((function(){return c.props.dispatch(Object(v.m)())}))}));case 15:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"resetField",value:function(){localStorage.removeItem("editPindahBarang"),localStorage.removeItem("pindahBarang"),this.props.dispatch(Object(b.b)()),this.props.dispatch(Object(g.f)()),this.setState({tanggal:"",dariIsi:"",ke:"",noBon:"",kategori:"",kodeJenis:"",keterangan:""})}},{key:"dataEditPindahBarang",value:function(){var t=JSON.parse(localStorage.getItem("editPindahBarang"))||[];this.setState({dariIsi:t.kodeLokasiAsal,ke:t.kodeLokasiTujuan,tanggal:t.tanggal,keterangan:t.keterangan,noBon:t.noBon}),this.props.dispatch(Object(g.f)())}},{key:"showTambahBarang",value:function(){this.setState({isEdit:!1}),this.props.dispatch(Object(F.j)())}},{key:"showEditKirimStock",value:function(){this.setState({isEdit:!0}),this.props.dispatch(Object(F.j)())}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"container-fluid",style:{color:"black"}},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"card"},u.a.createElement(S.a,{title:"Kirim Stock",listDeleteLocal:["editPindahBarang","pindahBarang","kirimStock","noFaktur"]}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"row"},u.a.createElement(O.default,{content:this.state.isEdit?u.a.createElement(s.Suspense,{fallback:u.a.createElement(_.a,{width:"100%",height:50,count:3})},u.a.createElement(et,{setEdit:function(e){return t.setEdit(e)}})):u.a.createElement(s.Suspense,{fallback:u.a.createElement(_.a,{width:"100%",height:50,count:3})},u.a.createElement(Z,{onSubmit:function(e){return t.handleSubmit(e)}})),title:"Tambah Data Kirim Barang"}),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement(q,{onSubmit:function(e){return t.SubmitPindah(e)},onSend:this.props.onSend,tambahModal:function(){return t.showTambahBarang()}}))))))))}}]),n}(s.Component);e.default=Object(d.b)((function(t){return{listBarang:t.provinsi.pindahBarang,listEditPindahBarang:t.provinsi.listEditPindahBarang,noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,onSend:t.provinsi.onSend,kirimStock:t.kirimStock.list_barang,tanggal:t.date.data}}),null)(ot)},460:function(t,e,n){"use strict";var a=n(97),r=n.n(a),o=n(29);e.a=function(t){var e=t.getIn;return function(t,n){r()(t,"Form value must be specified");var a=n||function(t){return e(t,"form")};return function(n){for(var i=arguments.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=arguments[l];return r()(c.length,"No fields specified"),1===c.length?e(a(n),t+".values."+c[0]):c.reduce((function(r,i){var c=e(a(n),t+".values."+i);return void 0===c?r:o.a.setIn(r,i,c)}),{})}}}(o.a)},792:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var a=n(0),r=n.n(a),o=n(440),i=n(48),c=n(33),l=n(43);function s(t){var e=Object(c.d)((function(t){return t.date.data})),n=Object(c.c)();return r.a.createElement("div",{className:t.className||"col-lg-3"},r.a.createElement(o.a,{name:t.name||"tanggal",component:i.a,label:t.label||"Tanggal",type:"text",placeholder:t.label?"Masukan ".concat(t.label):"Masukan Tanggal Awal",readOnly:t.readOnly,onChange:function(e){void 0!==t.onChange&&t.onChange(e),n(Object(l.j)(new Date(e)))},selected:new Date(e.split("-").reverse().join("-"))}))}function u(t){var e=Object(c.d)((function(t){return t.date})),n=e.from,a=e.to,s=Object(c.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglFrom",component:i.a,label:"Mulai Dari",type:"text",placeholder:"Masukan Tanggal Awal",readOnly:t.readOnly,onChange:void 0!==t.onChange?t.onChange:function(t){return s(Object(l.k)(new Date(t)))},selected:new Date(n.split("-").reverse().join("-"))})),r.a.createElement("div",{className:t.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglTo",component:i.a,label:"Sampai Dengan",type:"text",placeholder:"Masukan Tanggal Akhir",readOnly:t.readOnly,onChange:void 0!==t.onChange?t.onChange:function(t){return s(Object(l.l)(new Date(t)))},selected:new Date(a.split("-").reverse().join("-"))})))}},793:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return s}));var a=n(187),r=n(802),o=localStorage.getItem("namaTimbangan"),i=localStorage.getItem("enableTimbangan"),c=function(t){i&&a.a.database().ref(o).on("value",(function(e){var n=e.val();t("bruto",n.nilai)}))},l=function(t){var e=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));e.on("connect",(function(){console.log("SOCKET CONNECTED : ",e.connected)}));var n=localStorage.getItem("username");e.on("timbangan-emit",(function(e){var a;(null===(a=e.user_id)||void 0===a?void 0:a.toLowerCase())===(null===n||void 0===n?void 0:n.toLowerCase())&&(localStorage.setItem("timbangan-active","true"),t(document.activeElement.name,e.value))}))},s=function(){var t=Object(r.a)("http://103.119.55.52:8010/api/v1/".replace(/\/api\/v1\//,""));localStorage.setItem("timbangan-active","false"),t.disconnect()}},803:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(15),r=n.n(a),o=function(t,e,n,a){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(t))||[];i.splice(e,1),localStorage.setItem(t,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return n(a)}))}}))}}}]);