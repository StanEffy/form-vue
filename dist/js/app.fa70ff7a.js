(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("69fa")},"69fa":function(t,e,i){"use strict";i.r(e);var n=i("543b"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("form",{staticClass:"form",attrs:{action:"POST"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("fieldset",{staticClass:"form-fieldset"},[i("legend",{staticClass:"form-legend"},[t._v("Данные пациента:")]),i("div",{staticClass:"form-input-cover"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.surname,expression:"surname"}],staticClass:"form-input ",class:{"form-input-invalid":t.$v.surname.$error},attrs:{type:"text",id:"surname",name:"surname"},domProps:{value:t.surname},on:{blur:function(e){return t.$v.surname.$touch()},input:function(e){e.target.composing||(t.surname=e.target.value)}}}),t.$v.surname.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Необходимо заполнить данное поле ")]),i("label",{attrs:{for:"surname"}},[t._v("Фамилия: *")])]),i("div",{staticClass:"form-input-cover"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-input",class:{"form-input-invalid":t.$v.name.$error},attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.name},on:{blur:function(e){return t.$v.name.$touch()},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.$v.name.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Необходимо заполнить данное поле ")]),i("label",{attrs:{for:"name"}},[t._v(" Имя: *")])]),t._m(0),i("div",{staticClass:"form-input-cover"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.birth,expression:"birth"}],staticClass:"form-input",class:{"form-input-invalid":t.$v.birth.$error},attrs:{type:"date",id:"birth"},domProps:{value:t.birth},on:{blur:function(e){return t.$v.birth.$touch()},input:function(e){e.target.composing||(t.birth=e.target.value)}}}),t.$v.birth.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Необходимо заполнить данное поле ")]),i("label",{attrs:{for:"birth"}},[t._v("Дата рождения: *")])]),i("div",{staticClass:"form-input-cover"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-input",class:{"form-input-invalid":t.$v.phone.$error},attrs:{type:"phone",id:"phonenumber",placeholder:"+7-***-***-***-**"},domProps:{value:t.phone},on:{blur:function(e){return t.$v.phone.$touch()},input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t.$v.phone.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Необходимо заполнить данное поле ")]),t.$v.phone.validNumber?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Что-то телефон какой-то необычный... проверьте ещё разок! ")]),i("label",{attrs:{for:"phonenumber"}},[t._v("Телефон:")])]),i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input visually-hidden",attrs:{type:"radio",id:"gender-m",value:"male",name:"gender",checked:""}}),i("label",{attrs:{for:"gender-m",tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickIt(e)}}},[t._v("Мужской")])]),i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input visually-hidden",attrs:{type:"radio",id:"gender-f",value:"female",name:"gender"}}),i("label",{attrs:{for:"gender-f",tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickIt(e)}}},[t._v("Женский")])]),i("div",{staticClass:"clients-group__cover"},[i("label",{attrs:{for:"checkbox-clients-group",tabindex:"0"},on:{click:function(e){t.isActive=!t.isActive},keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.isActive=!t.isActive}}},[t._v("Группа клиентов: *")]),i("div",{staticClass:"clients-group-toggle",class:{"form-input-invalid":t.$v.clientsGroup.$error},attrs:{type:"text",tabindex:"0"},on:{click:function(e){t.isActive=!t.isActive}}},[t.clients.vip||t.clients.problem||t.clients.oms?t._e():i("span",[t._v("Выберите группу клиентов ")]),t.clients.vip?i("span",[t._v("VIP")]):t._e(),t.clients.problem?i("span",[t._v("Проблемные")]):t._e(),t.clients.oms?i("span",[t._v("ОМС")]):t._e()]),t.$v.clientsGroup.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Необходимо выбрать хотя бы один пункт ")]),i("ul",{staticClass:"checkbox-clients-group",class:{active:t.isActive},attrs:{id:"checkbox-clients-group"}},[i("li",{staticClass:"checkbox-list__item"},[i("input",{staticClass:"form-input visually-hidden",attrs:{type:"checkbox",value:"problem",id:"problem"}}),i("label",{attrs:{for:"problem",tabindex:"0"},on:{click:function(e){t.clients.problem=!t.clients.problem},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickIt(e)}}},[t._v("Проблемные")])]),i("li",{staticClass:"checkbox-list__item"},[i("input",{staticClass:"form-input visually-hidden",attrs:{type:"checkbox",value:"vip",id:"vip"}}),i("label",{attrs:{for:"vip",tabindex:"0"},on:{click:function(e){t.clients.vip=!t.clients.vip},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickIt(e)}}},[t._v("VIP")])]),i("li",{staticClass:"checkbox-list__item"},[i("input",{staticClass:"form-input visually-hidden",attrs:{type:"checkbox",value:"OMS",id:"oms"}}),i("label",{attrs:{for:"oms",tabindex:"0"},on:{click:function(e){t.clients.oms=!t.clients.oms},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickIt(e)}}},[t._v("OMC")])]),i("li",{staticClass:"button-close-cover"},[i("button",{staticClass:"button-close",attrs:{tabindex:"0"},on:{click:function(e){t.isActive=!t.isActive}}})])])]),t._m(1),i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input visually-hidden",attrs:{type:"checkbox",value:"no-SMS",id:"no-sms-checkbox"}}),i("label",{attrs:{for:"no-sms-checkbox",tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.clickIt(e)}}},[t._v("Не отправлять СМС")])])]),i("fieldset",{staticClass:"form-fieldset"},[i("legend",{staticClass:"form-legend"},[t._v("Адрес:")]),t._m(2),t._m(3),t._m(4),i("div",{staticClass:"form-input-cover"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-input",class:{"form-input-invalid":t.$v.city.$error},attrs:{type:"text",name:"city",id:"city"},domProps:{value:t.city},on:{blur:function(e){return t.$v.city.$touch()},input:function(e){e.target.composing||(t.city=e.target.value)}}}),t.$v.city.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Необходимо заполнить данное поле ")]),t.$v.city.minLength?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Какой у вас короткий город! Я бы переехал... ")]),i("label",{attrs:{for:"city"}},[t._v("Город: *")])]),t._m(5),t._m(6)]),i("fieldset",{staticClass:"form-fieldset"},[i("legend",{staticClass:"form-legend"},[t._v("Документ:")]),i("div",{staticClass:"form-input-cover input-type-of-doc"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.typeOfDoc,expression:"typeOfDoc"}],staticClass:"type-of-doc",class:{"form-input-invalid":t.$v.typeOfDoc.$error},attrs:{name:"type-of-doc",id:"type-of-doc"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.typeOfDoc=e.target.multiple?i:i[0]},function(e){return t.v.typeOfDoc.$touch()}]}},[i("option",{attrs:{value:"passport"}},[t._v("Паспорт")]),i("option",{attrs:{value:"birth-sertificate"}},[t._v("Свидетельство о рождении")]),i("option",{attrs:{value:"driver-lic"}},[t._v("Вод. удостоверение")])]),t.$v.typeOfDoc.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Усы, лапы и хвост - это, конечно, хорошо, но... ")]),t.$v.name.required?t._e():i("label",{attrs:{for:"type-of-doc"}},[t._v("Тип документа: *")])]),t._m(7),t._m(8),t._m(9),i("div",{staticClass:"form-input-cover"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.docDate,expression:"docDate"}],staticClass:"form-input",class:{"form-input-invalid":t.$v.docDate.$error},attrs:{type:"date",name:"docDate",id:"docDate"},domProps:{value:t.docDate},on:{change:function(e){return t.$v.docDate.$touch()},input:function(e){e.target.composing||(t.docDate=e.target.value)}}}),t.$v.docDate.required?t._e():i("div",{staticClass:"isInvalid"},[t._v(" Не хотите серию говорить, так хоть скажите когда! ")]),i("label",{attrs:{for:"docDate"}},[t._v("Дата выдачи: *")])])]),t._m(10),t._m(11)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",id:"fathersname"}}),i("label",{attrs:{for:"fathersname"}},[t._v("Отчество:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("select",{staticClass:"doctor",attrs:{name:"doctor",id:"doctor"}},[i("option",{attrs:{value:"Ivanov"}},[t._v("Иванов")]),i("option",{attrs:{value:"Zacharov"}},[t._v("Захаров")]),i("option",{attrs:{value:"Chernysheva"}},[t._v("Чернышева")])]),i("label",{attrs:{for:"doctor"}},[t._v("Лечащий врач:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"number",name:"address-index",id:"address-index"}}),i("label",{attrs:{for:"address-index"}},[t._v("Индекс:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",value:"",name:"country",id:"country"}}),i("label",{attrs:{for:"country"}},[t._v("Страна:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",name:"state",id:"state"}}),i("label",{attrs:{for:"state"}},[t._v("Область:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",name:"street",id:"street"}}),i("label",{attrs:{for:"street"}},[t._v("Улица:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",name:"building",id:"building"}}),i("label",{attrs:{for:"building"}},[t._v("Дом:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",name:"serial-number",id:"serial-number"}}),i("label",{attrs:{for:"serial-number"}},[t._v("Серия:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",name:"doc-number",id:"doc-number"}}),i("label",{attrs:{for:"doc-number"}},[t._v("Номер:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-input-cover"},[i("input",{staticClass:"form-input",attrs:{type:"text",name:"where-did-you-get-it",id:"where-did-you-get-it"}}),i("label",{attrs:{for:"where-did-you-get-it"}},[t._v("Кем выдан:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-submit-cover"},[i("button",{staticClass:"form-submit",attrs:{type:"submit"}},[t._v(" Отправить форму ")]),i("p",{staticClass:"submitStatus submitStatus--success  visually-hidden"},[t._v(" Анкета успешно отправлена! ")]),i("p",{staticClass:"submitStatus submitStatus--error visually-hidden"},[t._v(" Пожалуйста, проверьте отмеченные поля ещё раз. ")]),i("p",{staticClass:"submitStatus submitStatus--sending visually-hidden"},[t._v(" Отпраляю форму ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"announcement-cover"},[i("p",{staticClass:"announcement"},[t._v("* - поля обязательные для заполнения")])])}],a=(i("9989"),i("1ccd"),i("c68d")),o={name:"App",components:{},validations:{surname:{required:a["required"]},name:{required:a["required"]},birth:{required:a["required"]},docDate:{required:a["required"]},phone:{required:a["required"],validNumber:function(t){var e=/^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{10}$/;return!!t.match(e)}},clientsGroup:{atLeastOne:function(){return!!(this.clients.vip||this.clients.oms||this.clients.problem)}},city:{required:a["required"],minLength:Object(a["minLength"])(3)},typeOfDoc:{required:a["required"]}},methods:{submit:function(){var t=document.querySelector(".submitStatus--success");if(this.$v.$touch(),this.$v.$invalid){var e=document.querySelector(".submitStatus--error");e.classList.remove("visually-hidden"),setTimeout((function(){e.classList.add("visually-hidden")}),2e3)}else{var i=document.querySelector(".submitStatus--sending");i.classList.remove("visually-hidden"),setTimeout((function(){i.classList.add("visually-hidden")}),1e3),setTimeout((function(){t.classList.remove("visually-hidden")}),1e3),setTimeout((function(){t.classList.add("visually-hidden")}),5e3)}},clickIt:function(t){t.currentTarget.click()}},data:function(){return{name:"",surname:"",birth:"",phone:"",clientsGroup:"",city:"",typeOfDoc:"",docDate:"",clients:{vip:!1,problem:!1,oms:!1},isActive:!1}}},c=o,l=(i("b35e"),i("39da")),u=Object(l["a"])(c,r,s,!1,null,null,null),d=u.exports,v=i("eeee"),p=i.n(v);n["a"].config.productionTip=!1,n["a"].config.devtools=!0,n["a"].use(p.a),new n["a"]({render:function(t){return t(d)}}).$mount("#app")},"80c7":function(t,e,i){},b35e:function(t,e,i){"use strict";var n=i("80c7"),r=i.n(n);r.a}});
//# sourceMappingURL=app.fa70ff7a.js.map