/*! For license information please see 139.74db481d.chunk.js.LICENSE.txt */
(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[139],{1310:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(6),o=a(182),l=a(52),i=a(53),s=a(54),c=a(55),u=a(0),p=a.n(u),h=a(33),m=a(88),d=a(15),f=a.n(d),g=a(39),y=a(20),b=a(96),_=a.n(b),v=a(3),k=a(302),E=a(5),x=a(1),O=a(303),T=a(306),j=a.n(T),w=a(440),B=a(441),R=a(48),S=a(51),N=a(56),G=a(243),A=a(9),P=a(849),C=a.n(P),I=function(){var t,e=Object(h.d)((function(t){return t.provinsi.data_cetak_ulang_lm}));return p.a.createElement("div",{style:{display:"none"}},p.a.createElement(C.a,{id:"cetak-ulang-pembayaran-lm-table-xls-button",className:"download-table-xls-button",table:"table-to-xls",filename:"pembayaran",sheet:"tablexls",buttonText:"Download as XLS"}),p.a.createElement("table",{id:"table-to-xls",style:{width:"100vw"}},p.a.createElement("thead",null,p.a.createElement("tr",{style:{height:"40px"}},p.a.createElement("th",{colspan:"4",style:{textAlign:"left"}},"no Trx : ",e.no_bon),p.a.createElement("th",{colspan:"4",style:{textAlign:"right"}},"Tanggal : ",e.tanggal)),p.a.createElement("tr",{style:{height:"50px"}},p.a.createElement("th",{colspan:"3",style:{textAlign:"left"}},"no Bon : ",e.no_bon),p.a.createElement("th",{colspan:"2",style:{textAlign:"center",marginLeft:"50px",marginRight:"50px",display:"none"}}),p.a.createElement("th",{colspan:"3",style:{textAlign:"right"}},"Customer : ",e.nama_toko," \\ ",e.nama_kecamatan))),p.a.createElement("tbody",null,p.a.createElement("tr",{style:{borderTop:"1px solid black",borderBottom:"1px solid black"}},p.a.createElement("td",null,"Jenis Pembayaran"),p.a.createElement("td",null,"Nama Barang"),p.a.createElement("td",null,"Gross Bayar"),p.a.createElement("td",null,"Harga"),p.a.createElement("td",null,"Kadar Cetak"),p.a.createElement("td",null,"Pkg"),p.a.createElement("td",null,"Gw+Pkg"),p.a.createElement("td",null,"Netto")),p.a.createElement("tr",null,p.a.createElement("td",null,"Tunai"),p.a.createElement("td",null,"Tunai"),p.a.createElement("td",null,Object(x.G)(e.detail_cash[0].cash_netto)),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null,Object(x.G)(e.detail_cash[0].cash_netto))),p.a.createElement("tr",null,p.a.createElement("td",null,"Transfer"),p.a.createElement("td",null,"Transfer"),p.a.createElement("td",null,Object(x.G)(null===(t=e.detail_trf[0])||void 0===t?void 0:t.transfer_netto)),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null,Object(x.G)(e.detail_trf[0].transfer_netto))),p.a.createElement("tr",null,p.a.createElement("td",null,"Giro"),p.a.createElement("td",null,"Giro"),p.a.createElement("td",null,Object(x.G)(e.detail_giro[0].giro_netto)),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null),p.a.createElement("td",null,Object(x.G)(e.detail_giro[0].giro_netto))),p.a.createElement("tr",{style:{borderTop:"1px solid black",borderBottom:"1px solid black"}},p.a.createElement("td",{colSpan:"8"},Object(x.G)(null===e||void 0===e?void 0:e.total_pembayaran))),p.a.createElement("tr",{style:{textAlign:"left"}},p.a.createElement("td",{colSpan:"8"},"User : ",Object(x.P)())),p.a.createElement("tr",{style:{textAlign:"left"}},p.a.createElement("td",{colSpan:"8"},"Tgl Cetak : ",Object(x.N)())),p.a.createElement("tr",null,p.a.createElement("br",null),p.a.createElement("br",null)),p.a.createElement("tr",{style:{textAlign:"center"}},p.a.createElement("td",{colSpan:"4"},"Diterima"),p.a.createElement("td",{colSpan:"4"},"Disetujui")),p.a.createElement("tr",null),p.a.createElement("tr",null),p.a.createElement("tr",null),p.a.createElement("tr",{style:{textAlign:"center"}},p.a.createElement("td",{colSpan:"4"},"(_____________)"),p.a.createElement("td",{colSpan:"4"},"(_____________)")))))},L=a(314),F=a(98),V=a(89),D=a.n(V);function W(){W=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,n=Object.defineProperty||function(t,e,a){t[e]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(B){s=function(t,e,a){return t[e]=a}}function c(t,e,a,r){var o=e&&e.prototype instanceof h?e:h,l=Object.create(o.prototype),i=new T(r||[]);return n(l,"_invoke",{value:k(t,a,i)}),l}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(B){return{type:"throw",arg:B}}}t.wrap=c;var p={};function h(){}function m(){}function d(){}var f={};s(f,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(j([])));y&&y!==e&&a.call(y,o)&&(f=y);var b=d.prototype=h.prototype=Object.create(f);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function v(t,e){var r;n(this,"_invoke",{value:function(n,o){function l(){return new e((function(r,l){!function n(r,o,l,i){var s=u(t[r],t,o);if("throw"!==s.type){var c=s.arg,p=c.value;return p&&"object"==typeof p&&a.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,l,i)}),(function(t){n("throw",t,l,i)})):e.resolve(p).then((function(t){c.value=t,l(c)}),(function(t){return n("throw",t,l,i)}))}i(s.arg)}(n,o,r,l)}))}return r=r?r.then(l,l):l()}})}function k(t,e,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return w()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var i=E(l,a);if(i){if(i===p)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=u(t,e,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}function E(t,e){var a=e.method,n=t.iterator[a];if(void 0===n)return e.delegate=null,"throw"===a&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==a&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,p;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:w}}function w(){return{value:void 0,done:!0}}return m.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=s(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(v.prototype),s(v.prototype,l,(function(){return this})),t.AsyncIterator=v,t.async=function(e,a,n,r,o){void 0===o&&(o=Promise);var l=new v(c(e,a,n,r),o);return t.isGeneratorFunction(a)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},_(b),s(b,i,"Generator"),s(b,o,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return l.type="throw",l.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=t,l.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),O(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:j(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},t}var H=p.a.lazy((function(){return Promise.all([a.e(15),a.e(42)]).then(a.bind(null,1273))})),U=function(t){Object(s.a)(a,t);var e=Object(c.a)(a);function a(t){var n;Object(l.a)(this,a),(n=e.call(this,t)).inputChange=function(t){return function(e){n.setState(Object(o.a)({},t,e.target.value))}};var r=new Date,i="".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate());return n.state={listSupplier:[],tanggal:i,bonBayar:"",detail:"",tipeTransaksi:"PENJUALAN",formPembayaran:"row ",pilihBon:"col-lg-12 d-none",total_netto:0,total_rp:0,listBon:[],columns:[{dataField:"no_bon",text:"Nomor Bon"},{dataField:"sisa_piutang_netto",text:"Piutang Netto",align:"right",headerAlign:"right",formatter:function(t){return Object(x.D)(t,3)}},{dataField:"sisa_piutang_rp",text:"Piutang Rupiah",align:"right",headerAlign:"right",formatter:function(t){return Object(x.G)(t)}},{dataField:"titip_gram",text:"Titip Gram",align:"right",headerAlign:"right"},{dataField:"titip_rp",text:"Titip Rupiah",align:"right",headerAlign:"right"}],noBon:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){Object(x.nb)(["PrintPembayaranSupplier","totalTunaiRp","alatBayarTunai","totalTrfRp","totalTitipRp","alatBayarTrf","ciokTemp","alatBayarCiok","totalCiok","totalBrutoCiok","rongsokTemp","alatBayarRosok","totalRongsok","totalBrutoRongsok","listHutang","discount","bonus","denda","cashTempRp","alatBayarTunaiRp","transferTempRp","alatBayarTrfRp","alatBayarTitipRp","noFaktur","alatBayarGiroRp","totalGiroRp","alatBayarGiro","totalGiro","FakturTerpilih","total_netto","total_rp"]),this.props.dispatch(Object(m.j)()),this.props.dispatch(Object(m.n)()),this.props.dispatch(Object(g.b)()),this.props.dispatch(Object(S.o)()),localStorage.removeItem("FakturTerpilih"),this.setState({noBon:Object(x.L)()+"/TTP-"+Object(x.J)()})}},{key:"componentWillUnmount",value:function(){Object(x.nb)(["PrintPembayaranSupplier","totalTunaiRp","alatBayarTunai","totalTrfRp","totalTitipRp","alatBayarTrf","ciokTemp","alatBayarCiok","totalCiok","totalBrutoCiok","rongsokTemp","alatBayarRosok","totalRongsok","totalBrutoRongsok","listHutang","discount","bonus","denda","cashTempRp","alatBayarTunaiRp","transferTempRp","alatBayarTrfRp","alatBayarTitipRp","noFaktur","alatBayarGiroRp","totalGiroRp","alatBayarGiro","totalGiro","FakturTerpilih","total_netto","total_rp"])}},{key:"handleSubmit",value:function(){var t=Object(r.a)(W().mark((function t(e){var a,r,o,l,i,s,c,u,p,h,m,d,b,_,k,O=this;return W().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.b)("customerSelected");case 2:if(r=t.sent,void 0!==(o=Object(x.tb)(e)).tanggal){t.next=9;break}return Object(y.e)("Mohon isi Tanggal"),t.abrupt("return",!1);case 9:if(null!==localStorage.getItem("alatBayarTrf")||null!==localStorage.getItem("alatBayarTunai")||null!==localStorage.getItem("alatBayarTunaiRp")||null!==localStorage.getItem("alatBayarTrfRp")||null!==localStorage.getItem("alatBayarGiro")||null!==localStorage.getItem("alatBayarGiroRp")||null!==localStorage.getItem("alatBayarTitip")||null!==localStorage.getItem("alatBayarTitipRp")){t.next=12;break}return Object(y.e)("Mohon Masukan Alat Pembayaran Paling Tidak 1 Jenis"),t.abrupt("return",!1);case 12:return l={cash_rp:0,harga_emas:0,cash_netto:0},i={titip_rp:0,harga_emas:0,titip_netto:0},s={transfer_rp:0,harga_emas:0,transfer_netto:0,tanggal_transfer:"2021-01-01",acc_from:"-",acc_to:"-"},c={giro_rp:0,harga_emas:0,giro_netto:0,tanggal_giro:"-",no_giro:"-",bank_giro:"-",acc_to:"-",bank_to:"-"},u=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[s],p=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[l],h=JSON.parse(localStorage.getItem("alatBayarGiroRp"))||[c],m=JSON.parse(localStorage.getItem("alatBayarTitipRp"))||[i],t.t0=this.state.noBon,t.t1=this.props.noFaktur,t.t2=Object(x.A)(o.tanggal),t.t3=parseFloat(o.totalHutangRP),t.t4=p,t.t5=p.map((function(t){return t.cash_rp})).reduce((function(t,e){return t+e}),0),t.t6=u,t.t7=u.map((function(t){return parseInt(t.transfer_rp)})).reduce((function(t,e){return t+e}),0),t.t8=h,t.t9=h.map((function(t){return parseInt(t.giro_rp)})).reduce((function(t,e){return t+e}),0),t.t10=m,t.t11=m.map((function(t){return t.titip_rp})).reduce((function(t,e){return t+e}),0),t.next=34,Object(A.b)("listHutang");case 34:t.t12=t.sent,d={kode_customer:"-",no_bon:t.t0,no_bayar:t.t1,tanggal:t.t2,type_bon:"BON RP",total_piutang:t.t3,detail_cash:t.t4,bayar_cash:t.t5,detail_trf:t.t6,bayar_trf:t.t7,detail_giro:t.t8,bayar_giro:t.t9,detail_titip:t.t10,bayar_titip:t.t11,detail_faktur:t.t12},this.props.dispatch({type:L.b,payload:Object(n.a)(Object(n.a)({},d),{},{nama_toko:r.split("-")[0],nama_kecamatan:r.split("-")[1],total_pembayaran:p.map((function(t){return t.cash_rp})).reduce((function(t,e){return t+e}),0)+u.map((function(t){return parseInt(t.transfer_rp)})).reduce((function(t,e){return t+e}),0)+h.map((function(t){return parseInt(t.giro_rp)})).reduce((function(t,e){return t+e}),0)})}),localStorage.setItem("notaPembayaranSupplier",JSON.stringify(d)),this.props.dispatch(Object(v.w)()),b=[],b="RUPIAH"===this.state.tipeTransaksi?[[{content:"Tunai",styles:{font:"Arial"}},{content:"Tunai",styles:{font:"Arial"}},{content:Object(x.G)(p[0].cash_rp),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(p[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(p[0].cash_netto),styles:{halign:"right",font:"Verdana"}}],[{content:"Transfer",styles:{font:"Arial"}},{content:"Transfer",styles:{font:"Arial"}},{content:Object(x.G)(u[0].transfer_rp),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(u[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(u[0].transfer_netto),styles:{halign:"right",font:"Verdana"}}],[{content:"Giro",styles:{font:"Arial"}},{content:"Giro",styles:{font:"Arial"}},{content:Object(x.G)(h[0].giro_rp),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(h[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(h[0].giro_netto),styles:{halign:"right"}}],[{content:"Titip",styles:{font:"Arial"}},{content:"Titip",styles:{font:"Arial"}},{content:Object(x.G)(m[0].titip_rp),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(m[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(m[0].titip_netto),styles:{halign:"right"}}]]:[[{content:"Tunai",styles:{font:"Arial"}},{content:"Tunai",styles:{font:"Arial"}},{content:Object(x.G)(p[0].cash_rp),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(p[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(p[0].cash_netto),styles:{halign:"right",font:"Verdana"}}],[{content:"Transfer",styles:{font:"Arial"}},{content:"Transfer",styles:{font:"Arial"}},{content:Object(x.G)(u.reduce((function(t,e){return t+e.transfer_rp}),0)),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(u[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(u.reduce((function(t,e){return t+e.transfer_netto}),0)),styles:{halign:"right",font:"Verdana"}}],[{content:"Giro",styles:{font:"Arial"}},{content:"Giro",styles:{font:"Arial"}},{content:Object(x.G)(h[0].giro_rp),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(h[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(h[0].giro_netto),styles:{halign:"right",font:"Verdana"}}],[{content:"Titip",styles:{font:"Arial"}},{content:"Titip",styles:{font:"Arial"}},{content:Object(x.G)(m[0].titip_rp),styles:{halign:"right",font:"Verdana"}},{content:Object(x.G)(m[0].harga_emas),styles:{halign:"right",font:"Verdana"}},"","","",{content:Object(x.G)(m[0].titip_netto),styles:{halign:"right"}}]],_=[[{content:"Total Pembayaran",styles:{halign:"right",font:"Arial"},colSpan:7},{content:Object(x.G)(o.totalBayarCash),styles:{halign:"right",font:"Verdana"}}]],(a=b).push.apply(a,_),k=[[{content:"Jenis \nPembayaran",styles:{font:"Arial"}},{content:"Nama \nBarang",styles:{font:"Arial"}},{content:"Gross \nBayar",styles:{halign:"right",font:"Arial"}},{content:"Harga",styles:{halign:"right",font:"Arial"}},{content:"Kadar Cetak",styles:{halign:"right",font:"Arial"}},{content:"Pkg",styles:{halign:"right",font:"Arial"}},{content:"Gw+Pkg",styles:{halign:"right",font:"Arial"}},{content:"Netto",styles:{halign:"right",font:"Arial"}}]],Object(E.f)("LM/pembayaran?type=".concat(this.state.tipeTransaksi),d).then((function(t){return f.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return O.props.dispatch(Object(v.m)())})).then((function(){return Object(x.nb)(["PrintPembayaranSupplier","totalTunaiRp","alatBayarTunai","alatBayarTitipRp","alatBayarTitip","totalTrfRp","alatBayarTrf","ciokTemp","alatBayarCiok","totalCiok","totalBrutoCiok","rongsokTemp","alatBayarRosok","totalRongsok","totalBrutoRongsok","listHutang","discount","bonus","denda","cashTempRp","alatBayarTunaiRp","transferTempRp","alatBayarTrfRp","noFaktur","alatBayarGiroRp","totalGiroRp","alatBayarGiro","totalGiro"])})).then((function(){return O.props.dispatch(Object(g.b)())})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return O.props.dispatch(Object(g.b)())})).then((function(){return O.props.history.push("KlasifikasiSupplier")})).then((function(){Object(x.W)()&&setTimeout((function(){document.getElementById("cetak-ulang-pembayaran-lm-table-xls-button").click()}),500);var t=new Date(o.input_date),e=D()(t).format("DD-MM-YYYY hh:mm:ss");Object(F.a)("No Bon",O.state.noBon,"Tanggal",Object(x.U)()?e:Object(x.C)(o.tanggal),"No Trx",O.state.noBon,"Customer",r.split("-")[0],"Daerah",r.split("-")[1],k,"NOTA PEMBAYARAN CUSTOMER",b,[Object(x.rb)(8,!0)],!1)})).then((function(){return window.history.back()}))})).catch((function(t){return f.a.fire({position:"top-end",icon:"error",text:(null===t||void 0===t?void 0:t.response.data)||"ERROR PRINT BUKTI",showConfirmButton:!1,timer:3e3}).then((function(){return O.props.dispatch(Object(v.m)())}))}));case 45:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getHutang",value:function(t){var e=this,a=Object(x.tb)(t),n=a.split("-")[0],r=a.split("-")[1];this.setState({customerTerpilih:r}),this.props.dispatch(Object(G.d)({customer:n})),Object(E.b)("pembayaran-lm/"+n).then((function(t){e.setState({total_piutang_customer_gr:t.data.total_netto,total_piutang_customer_rp:t.data.total_rp,total_netto:t.data.total_netto,total_rp:t.data.total_rp}),e.props.dispatch(Object(m.k)(t.data.total_netto)),e.props.dispatch(Object(m.l)(t.data.total_rp))})),Object(E.e)("trx-customer/get/piutang-titipan-customer",{tanggal:Object(N.b)(),kode_customer:n}).then((function(t){e.setState({hutangnya:t.data})})).then((function(){var t,a=e.state.hutangnya.filter((function(t){return"TITIPAN RUPIAH"!==t.keterangan&&"TITIPAN GRAM"!==t.keterangan})).map((function(t){return{no_faktur:t.no_ref,keterangan:t.keterangan,putus_titip:0,harga_emas:9e5,putus_titip_netto:0}}));console.log(a),localStorage.setItem("listHutang",JSON.stringify(a)),e.setState({listBon:null===(t=e.state.hutangnya)||void 0===t?void 0:t.filter((function(t){return"TITIPAN RUPIAH"!==t.keterangan&&"TITIPAN GRAM"!==t.keterangan}))})}))}},{key:"render",value:function(){return p.a.createElement("div",{className:"container-fluid",style:{color:"black"}},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-12"},p.a.createElement("div",{className:"card"},p.a.createElement(k.a,{title:"Pembayaran "+Object(x.jb)()}),p.a.createElement("div",{className:"card-body"},this.FormPembayaranCustomer(),this.FormPilihBon())))))}},{key:"FormPembayaranCustomer",value:function(){var t=this;return p.a.createElement("div",{className:this.state.formPembayaran},p.a.createElement("div",{className:"col-lg-12"},p.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},p.a.createElement("li",{className:"nav-item"},p.a.createElement("a",{href:"#jual","data-toggle":"tab","aria-expanded":"false",className:"nav-link rounded-0 active",onClick:function(){return t.setState({tipeTransaksi:"PENJUALAN"})}},p.a.createElement("i",{className:"mdi mdi-home-letiant d-lg-none d-block mr-1"}),p.a.createElement("span",{className:"d-none d-lg-block"},"Jual"))),p.a.createElement("li",{className:"nav-item"},p.a.createElement("a",{href:"#beli","data-toggle":"tab","aria-expanded":"true",className:"nav-link rounded-0 ",onClick:function(){return t.setState({tipeTransaksi:"PEMBELIAN"})}},p.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),p.a.createElement("span",{className:"d-none d-lg-block"},"Beli")))),p.a.createElement(I,null),p.a.createElement("div",{className:"tab-content"},p.a.createElement("div",{className:"tab-pane show active",id:"jual"},p.a.createElement(u.Suspense,{fallback:p.a.createElement(_.a,{width:"100%",height:200})},p.a.createElement(H,{tampungCiok:this.props.tampungCiok,tampungRongsok:this.props.tampungRongsok,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(e){return t.handleSubmit(e)},jenisTransaksi:"RUPIAH",onSend:this.props.onSend,total_netto:this.state.total_netto,total_rp:this.state.total_rp,from:"JUAL"}))),p.a.createElement("div",{className:"tab-pane",id:"beli"},p.a.createElement(u.Suspense,{fallback:p.a.createElement(_.a,{width:"100%",height:200})},p.a.createElement(H,{tampungCiok:this.props.tampungCiok,tampungRongsok:this.props.tampungRongsok,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(e){return t.handleSubmit(e)},jenisTransaksi:"RUPIAH",onSend:this.props.onSend,total_netto:this.state.total_netto,total_rp:this.state.total_rp,from:"BELI"}))))))}},{key:"FormPilihBon",value:function(){var t=this;return p.a.createElement("div",{className:this.state.pilihBon},p.a.createElement("div",{className:"col-md-4 col-lg-4"},p.a.createElement(w.a,{name:"customer",label:"Customer",className:"form-control",component:R.c,options:this.props.customer.map((function(t){return{value:t.kode_customer+"-"+t.nama_customer,name:t.nama_customer}})),defaultValue:"DEFAULT | DEFAULT",onChange:function(e){return t.getHutang(e)}})),p.a.createElement("div",{className:"col-lg-12 mt-3"},p.a.createElement(O.a,{keyField:"no_bon",data:this.state.listBon||[],columns:this.state.columns,search:!0,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:j()()})),p.a.createElement("div",{className:"col-lg-12"},p.a.createElement("div",{className:"text-right"},p.a.createElement("button",{className:"btn btn-primary",onClick:function(){t.props.change("totalHutangRP",t.state.total_rp),t.props.change("totalHutangGr",t.state.total_netto),t.setState({formPembayaran:"row",pilihBon:"col-lg-12 d-none"})}},"Next",p.a.createElement("i",{className:"fa fa-chevron-right ml-3"})))))}}]),a}(u.Component);U=Object(B.a)({form:"PembayaranCustomer"})(U);e.default=Object(h.b)((function(t){var e,a;return{pembayaranSupplierList:t.provinsi.PembayaranCustomer,tampungCiok:t.provinsi.tampungCiok,tampungRongsok:t.provinsi.tampungRongsok,totalCiok:t.provinsi.totalCiok,totalRongsok:t.provinsi.totalRongsok,totalBrutoCiok:t.provinsi.totalBrutoCiok,totalBrutoRongsok:t.provinsi.totalBrutoRongsok,alert:t.provinsi.alert,error:t.provinsi.error,noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,customer:t.customerState.listCustomer||[],onSend:t.provinsi.onSend,customerSelected:null===(e=t.form.PembayaranCustomer)||void 0===e||null===(a=e.values)||void 0===a?void 0:a.customer}}),null)(U)},849:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),r=a(0),o=i(r),l=i(a(7));function i(t){return t&&t.__esModule?t:{default:t}}var s={table:l.default.string.isRequired,filename:l.default.string.isRequired,sheet:l.default.string.isRequired,id:l.default.string,className:l.default.string,buttonText:l.default.string},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return a.handleDownload=a.handleDownload.bind(a),a}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"handleDownload",value:function(){if(!document)return null;if(1!==document.getElementById(this.props.table).nodeType||"TABLE"!==document.getElementById(this.props.table).nodeName)return null;var t=document.getElementById(this.props.table).outerHTML,a=String(this.props.sheet),n=String(this.props.filename)+".xls",r={worksheet:a||"Worksheet",table:t};if(window.navigator.msSaveOrOpenBlob){var o=new Blob(['<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>'+t+"</body></html>"]);return document.getElementById("react-html-table-to-excel").click()((function(){window.navigator.msSaveOrOpenBlob(o,n)})),!0}var l=window.document.createElement("a");return l.href="data:application/vnd.ms-excel;base64,"+e.base64(e.format('<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>{table}</body></html>',r)),l.download=n,document.body.appendChild(l),l.click(),document.body.removeChild(l),!0}},{key:"render",value:function(){return o.default.createElement("button",{id:this.props.id,className:this.props.className,type:"button",onClick:this.handleDownload},this.props.buttonText)}}],[{key:"base64",value:function(t){return window.btoa(unescape(encodeURIComponent(t)))}},{key:"format",value:function(t,e){return t.replace(/{(\w+)}/g,(function(t,a){return e[a]}))}}]),e}(r.Component);c.propTypes=s,c.defaultProps={id:"button-download-as-xls",className:"button-download",buttonText:"Download"},e.default=c}}]);