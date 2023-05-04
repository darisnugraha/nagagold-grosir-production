/*! For license information please see 105.cb0147c1.chunk.js.LICENSE.txt */
(this.webpackJsonpmonica=this.webpackJsonpmonica||[]).push([[105],{1232:function(e,t,n){"use strict";n.r(t);var a=n(52),r=n(53),o=n(54),i=n(55),l=n(0),c=n.n(l),u=n(302),s=n(1),h=n(33),d=n(148),m=n(76),f=n(440),p=n(460),v=n(441),g=n(48),b=function(e){var t={};return e.bruto_asal||(t.bruto_asal="Tidak Boleh kosong"),e.dari||(t.dari="Tidak Boleh kosong"),e.tujuan||(t.tujuan="Tidak Boleh kosong"),e.bruto_tujuan||(t.bruto_tujuan="Tidak Boleh kosong"),t},y=n(792),j=n(56),E=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={},r}return Object(r.a)(n,[{key:"handleChangeAsal",value:function(e){var t=this.props.listLM.find((function(t){return t.kode_jenis===e}));this.props.change("kadar_asal",t.kadar_jual)}},{key:"handleChangeTujuan",value:function(e){var t=this.props.listBarang.find((function(t){return t.kode_jenis===e}));this.props.change("kadar_tujuan",t.kadar_jual)}},{key:"setNettoAsal",value:function(){this.props.change("netto_asal",this.props.netto_asal)}},{key:"setNettoTujuan",value:function(){this.props.change("netto_tujuan",this.props.netto_tujuan)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement(y.a,null),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(f.a,{label:"Keterangan",name:"keterangan",component:g.b})),c.a.createElement("div",{className:"col-lg-4"}),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Dari",name:"kode_jenis_asal",component:g.c,options:this.props.listBarangAll.map((function(e){return{value:e.kode_jenis,name:e.nama_jenis}})),onChange:function(t){return e.handleChangeAsal(t.value)}})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Bruto Asal",name:"bruto_asal",component:g.b,normalize:s.c,onChange:this.setNettoAsal()})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Kadar",name:"kadar_asal",component:g.b,normalize:s.c})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Netto Asal",name:"netto_asal",component:g.b,normalize:s.c,readOnly:!0})),c.a.createElement("div",{className:"col-lg-12 text-center mb-1 mt-1"},c.a.createElement("i",{className:"fa fa-exchange-alt"}," ")),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Tujuan",name:"kode_jenis_tujuan",component:g.c,options:this.props.listBarangAll.map((function(e){return{value:e.kode_jenis,name:e.nama_jenis}})),onChange:function(t){return e.handleChangeTujuan(t.value)}})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Bruto Tujuan",name:"bruto_tujuan",component:g.b,normalize:s.c,onChange:this.setNettoTujuan()})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Kadar",name:"kadar_tujuan",component:g.b,normalize:s.c})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(f.a,{label:"Netto Tujuan",name:"netto_tujuan",component:g.b,normalize:s.c,readOnly:!0})),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,type:"submit"},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Selesai",c.a.createElement("i",{className:"fa fa-paper-plane ml-3","aria-hidden":"true"})))))))}}]),n}(l.Component),k=Object(h.b)((function(e){var t=Object(p.a)("KonversiLMForm")(e,"bruto_asal","kadar_asal","bruto_tujuan","kadar_tujuan"),n=t.bruto_asal,a=t.kadar_asal,r=t.bruto_tujuan,o=t.kadar_tujuan;return{netto_asal:parseFloat(n)*(parseFloat(a)/100)||0,netto_tujuan:parseFloat(r)*(parseFloat(o)/100)||0,listLM:e.rosokCiokimState.listRosokCiokim||[],listBarang:e.kodeBarangState.listKodeBarang||[],listBarangAll:e.provinsi.listBarangAll||[],initialValues:{tanggal:Object(j.c)()}}}))(Object(v.a)({form:"KonversiLMForm",validate:b,enableReinitialize:!0})(E)),w=n(6),_=n(8),O=n(5),N=n(19),x=n(3),L=n(4);function S(){S=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new O(r||[]);return a(i,"_invoke",{value:E(e,n,l)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var h={};function d(){}function m(){}function f(){}var p={};c(p,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==t&&n.call(g,o)&&(p=g);var b=f.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,l){var c=s(e[r],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,l)}))}l(c.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function E(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return x()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var l=k(i,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=s(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function k(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return m.prototype=f,a(b,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:m,configurable:!0}),m.displayName=c(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(j.prototype),c(j.prototype,i,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new j(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(b),c(b,l,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var C=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={columns:[{dataField:"kode_jenis",text:"Kode Model",headerStyle:function(){return{width:"35%"}}},{dataField:"nama_jenis",text:"Nama Model",headerStyle:function(){return{width:"20%"}}},{dataField:"total_bruto",text:"Bruto (Gr)",align:"right",headerAlign:"right",formatter:function(e){return Object(s.D)(e)},headerStyle:function(){return{width:"10%"}}},{dataField:"total_netto",text:"Netto (Gr)",align:"right",headerAlign:"right",formatter:function(e){return Object(s.D)(e,3)},headerStyle:function(){return{width:"10%"}}}]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.d)()),this.props.dispatch(Object(m.k)()),this.props.dispatch(Object(m.l)())}},{key:"handleSubmit",value:function(e){var t;this.props.dispatch((t=e,function(){var e=Object(w.a)(S().mark((function e(n,a){var r,o;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a(),(o=Object(s.tb)(t)).tanggal=Object(s.A)(r.date.data),n(Object(x.w)()),e.prev=4,delete o.kadar_asal,delete o.kadar_tujuan,o.no_bon=Object(s.L)()+"/KLM/"+Object(s.J)(),void 0!==o.keterangan){e.next=11;break}return _.b.error("Keterangan Harus Diisi"),e.abrupt("return",!1);case 11:return e.next=13,_.b.promise(Object(O.f)("lm/konversi",o),N.b);case 13:n(Object(x.m)()),n(Object(L.b)("KonversiLM")),n(Object(L.b)("KonversiLMForm")),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0),n(Object(x.m)());case 22:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t,n){return e.apply(this,arguments)}}()))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement(u.a,{title:"Konversi "+Object(s.jb)()}),c.a.createElement("div",{className:"card-body"},c.a.createElement(k,{onSubmit:function(t){return e.handleSubmit(t)}}))),c.a.createElement("br",null)))}}]),n}(l.Component);t.default=Object(h.b)()(C)},460:function(e,t,n){"use strict";var a=n(97),r=n.n(a),o=n(29);t.a=function(e){var t=e.getIn;return function(e,n){r()(e,"Form value must be specified");var a=n||function(e){return t(e,"form")};return function(n){for(var i=arguments.length,l=new Array(i>1?i-1:0),c=1;c<i;c++)l[c-1]=arguments[c];return r()(l.length,"No fields specified"),1===l.length?t(a(n),e+".values."+l[0]):l.reduce((function(r,i){var l=t(a(n),e+".values."+i);return void 0===l?r:o.a.setIn(r,i,l)}),{})}}}(o.a)},792:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),o=n(440),i=n(48),l=n(33),c=n(43);function u(e){var t=Object(l.d)((function(e){return e.date.data})),n=Object(l.c)();return r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:e.name||"tanggal",component:i.a,label:e.label||"Tanggal",type:"text",placeholder:e.label?"Masukan ".concat(e.label):"Masukan Tanggal Awal",readOnly:e.readOnly,onChange:function(t){void 0!==e.onChange&&e.onChange(t),n(Object(c.j)(new Date(t)))},selected:new Date(t.split("-").reverse().join("-"))}))}function s(e){var t=Object(l.d)((function(e){return e.date})),n=t.from,a=t.to,u=Object(l.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglFrom",component:i.a,label:"Mulai Dari",type:"text",placeholder:"Masukan Tanggal Awal",readOnly:e.readOnly,onChange:void 0!==e.onChange?e.onChange:function(e){return u(Object(c.k)(new Date(e)))},selected:new Date(n.split("-").reverse().join("-"))})),r.a.createElement("div",{className:e.className||"col-lg-3"},r.a.createElement(o.a,{name:"tglTo",component:i.a,label:"Sampai Dengan",type:"text",placeholder:"Masukan Tanggal Akhir",readOnly:e.readOnly,onChange:void 0!==e.onChange?e.onChange:function(e){return u(Object(c.l)(new Date(e)))},selected:new Date(a.split("-").reverse().join("-"))})))}}}]);