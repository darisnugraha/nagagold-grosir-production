/*! For license information please see 100.4fb7f3fe.chunk.js.LICENSE.txt */
(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[100],{1274:function(t,e,n){"use strict";n.r(e);var a=n(182),r=n(52),o=n(53),i=n(54),c=n(55),l=n(0),s=n.n(l),u=n(33),h=n(12),f=n(1),d=n(8),m=n(4),p=n(5),g=n(76),v=n(129),b=n(303),y=n(302),j=n(39),O=n(812),E=n(6),w=n(314),_=n(98),k=n(89),x=n.n(k);function N(){N=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(A){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new k(r||[]);return a(i,"_invoke",{value:O(t,n,c)}),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(A){return{type:"throw",arg:A}}}t.wrap=s;var h={};function f(){}function d(){}function m(){}var p={};l(p,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(x([])));v&&v!==e&&n.call(v,o)&&(p=v);var b=m.prototype=f.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){var r;a(this,"_invoke",{value:function(a,o){function i(){return new e((function(r,i){!function a(r,o,i,c){var l=u(t[r],t,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return a("throw",t,i,c)}))}c(l.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function O(t,e,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return L()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(t,e,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function E(t,e){var n=e.method,a=t.iterator[n];if(void 0===a)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=u(a,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,r=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=m,a(b,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},y(j.prototype),l(j.prototype,i,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,a,r,o){void 0===o&&(o=Promise);var i=new j(s(e,n,a,r),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(b),l(b,c,"Generator"),l(b,o,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var a in e)n.push(a);return n.reverse(),function t(){for(;n.length;){var a=n.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return i.type="throw",i.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var L=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).inputChange=function(t){return function(e){o.setState(Object(a.a)({},t,e.target.value))}},o.pilihSupplier=function(t){return function(t){var e=(t.target.value?t.target.value:"DEFALT | DEFAULT").split("|");o.setState({kodeSupplier:e[0],namaSupplier:e[1]})}},o.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal",formatter:function(t){return Object(f.C)(t)}},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"nama_toko",text:"Nama Toko"},{dataField:"total_netto",text:"Netto (Gr)",align:"right",headerAlign:"right",formatter:function(t){return Object(f.D)(t)}},{dataField:"total_netto_disc_ext",text:"Netto Ext (Gr)",align:"right",headerAlign:"right",formatter:function(t){return Object(f.D)(t)}},{dataField:"total_harga_jual",text:"Harga Jual",align:"right",headerAlign:"right",formatter:function(t){return Object(f.G)(t)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return o.print(e)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(v.h)()),this.props.dispatch(Object(j.b)()),this.props.dispatch(Object(g.k)())}},{key:"getData",value:function(t){var e=this,n=Object(f.tb)(t);if(void 0===n.kode_customer)return d.b.warning("Mohon Pilih Customer"),!1;Object(p.e)("LM/cetak-ulang/pembelian",{kode_customer:n.kode_customer,start_date:Object(f.A)(this.props.start_date),end_date:Object(f.A)(this.props.end_date)}).then((function(t){Object(f.u)(t.data)&&e.setState({listPenerimaan:t.data})})),this.props.dispatch(Object(m.a)("FormLaporanBuktiPenjualanLMHead","tglFrom",this.props.start_date)),this.props.dispatch(Object(m.a)("FormLaporanBuktiPenjualanLMHead","tglTo",this.props.end_date))}},{key:"print",value:function(t){this.props.dispatch(function(t){return function(){var e=Object(E.a)(N().mark((function e(n,a){var r,o,i,c,l,s,u,h,d;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:w.b,payload:t}),i=[],t.detail_barang.forEach((function(t,e){var n=[{content:++e,styles:{font:"Arial"}},{content:t.kode_jenis,styles:{font:"Arial"}},{content:Object(f.D)(t.bruto),styles:{halign:"right",font:"Verdana"}},{content:t.kadar_customer,styles:{halign:"right",font:"Verdana"}},{content:Object(f.D)(t.netto,3),styles:{halign:"right",font:"Verdana"}},{content:Object(f.G)(t.harga_jual),styles:{halign:"right",font:"Verdana"}},{content:Object(f.G)(t.harga_jual*t.netto),styles:{halign:"right",font:"Verdana"}}];i.push(n)})),c=["","",{content:Object(f.D)(t.detail_barang.map((function(t){return parseFloat(t.bruto)})).reduce((function(t,e){return t+e}),0)),styles:{halign:"right",font:"Verdana"}},"",{content:Object(f.D)(t.detail_barang.map((function(t){return parseFloat(Object(f.xb)(t.netto))})).reduce((function(t,e){return t+e}),0)),styles:{halign:"right",font:"Verdana"}},{content:Object(f.G)(t.detail_barang.map((function(t){return parseInt(t.harga_jual)})).reduce((function(t,e){return t+e}),0)),styles:{halign:"right",font:"Verdana"}},{content:Object(f.G)(t.detail_barang.map((function(t){return parseInt(t.harga_jual*t.netto)})).reduce((function(t,e){return t+e}),0)),styles:{halign:"right",font:"Verdana"}}],l=[c],s=[{content:"Valid By : ".concat(null!==(r=t.validate_by)&&void 0!==r?r:""," / Valid Date : ").concat(null!==(o=t.validate_at)&&void 0!==o?o:""),styles:{halign:"left",font:"Arial",fontSize:"9"},colSpan:8}],u=[[{content:"No",styles:{font:"Arial"}},{content:"Kode Barang",styles:{font:"Arial"}},{content:"Berat (Gr)",styles:{halign:"right",font:"Arial"}},{content:"Kadar (Gr)",styles:{halign:"right",font:"Arial"}},{content:"Netto (Gr)",styles:{halign:"right",font:"Arial"}},{content:"Harga (Rp)",styles:{halign:"right",font:"Arial"}},{content:"Total (Rp)",styles:{halign:"right",font:"Arial"}}]],Object(f.W)()&&setTimeout((function(){}),500),h=new Date(t.input_date),d=x()(h).format("DD-MM-YYYY hh:mm:ss"),Object(_.a)("No Trx",t.no_penjualan,"Tanggal",Object(f.U)()?d:Object(f.C)(t.tanggal),"No Bon",t.no_bon,"Customer","".concat(t.nama_toko),"Daerah","".concat(t.nama_kecamatan),u,"Pembelian "+Object(f.jb)(),i,[].concat(l,[Object(f.rb)(8,!0),s]),!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}(t))}},{key:"render",value:function(){var t=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(h.b,{to:"/cetakUlang"+Object(f.jb)()},s.a.createElement("button",{type:"button",className:"btn btn-secondary"},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(y.a,{title:"Cetak Ulang Bukti Pembelian LM"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(O.a,{onSubmit:function(e){return t.getData(e)}})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(b.a,{keyField:"no_bon",data:this.state.listPenerimaan,columns:this.state.columns})))))))}}]),n}(l.Component);e.default=Object(u.b)((function(t){return{listBarang:t.kodeBarangState.listKodeBarang||[],start_date:t.date.from,end_date:t.date.to}}))(L)},792:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var a=n(0),r=n.n(a),o=n(440),i=n(48),c=n(33),l=n(43);function s(t){var e=Object(c.d)((function(t){return t.date.data})),n=Object(c.c)();return r.a.createElement("div",{className:t.className||"col-lg-3"},r.a.createElement(o.a,{name:t.name||"tanggal",component:i.a,label:t.label||"Tanggal",type:"text",placeholder:t.label?"Masukan ".concat(t.label):"Masukan Tanggal Awal",readOnly:t.readOnly,onChange:function(e){void 0!==t.onChange&&t.onChange(e),n(Object(l.j)(new Date(e)))},selected:new Date(e.split("-").reverse().join("-"))}))}function u(t){var e=Object(c.d)((function(t){return t.date})),n=e.from,a=e.to,s=Object(c.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglFrom",component:i.a,label:"Mulai Dari",type:"text",placeholder:"Masukan Tanggal Awal",readOnly:t.readOnly,onChange:void 0!==t.onChange?t.onChange:function(t){return s(Object(l.k)(new Date(t)))},selected:new Date(n.split("-").reverse().join("-"))})),r.a.createElement("div",{className:t.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglTo",component:i.a,label:"Sampai Dengan",type:"text",placeholder:"Masukan Tanggal Akhir",readOnly:t.readOnly,onChange:void 0!==t.onChange?t.onChange:function(t){return s(Object(l.l)(new Date(t)))},selected:new Date(a.split("-").reverse().join("-"))})))}},812:function(t,e,n){"use strict";var a=n(52),r=n(53),o=n(54),i=n(55),c=n(0),l=n.n(c),s=n(33),u=n(440),h=n(441),f=n(51),d=n(145),m=n(56),p=n(48),g=n(792),v=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.f)()),this.props.dispatch(Object(f.o)())}},{key:"render",value:function(){var t=this,e=[{value:"ALL",name:"SEMUA"}];return this.props.customer.map((function(t){return e.push({value:t.kode_customer,name:t.nama_toko+" / "+t.nama_kecamatan}),!0})),l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(u.a,{name:"kode_customer",component:p.c,options:e,type:"text",label:"Customer",placeholder:"Pilih Customer"})),l.a.createElement(g.b,{className:"col-lg-4"}),l.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){t.props.change("")}},l.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data")))))))}}]),n}(c.Component);v=Object(h.a)({form:"FormLaporanBuktiPenjualanLMHead",enableReinitialize:!0})(v),e.a=Object(s.b)((function(t){return{salesman:t.salesmanState.listSalesman||[],customer:t.customerState.listCustomer||[],dataLokasiPindah:t.provinsi.dataLokasiPindah,tglFrom:t.date.from,tglTo:t.date.to,initialValues:{tglFrom:Object(m.c)(),tglTo:Object(m.c)()}}}))(v)}}]);