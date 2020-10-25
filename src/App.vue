<template>
  <div id="app">
    <form action="POST" class="form" @submit.prevent="submit">
      <fieldset class="form-fieldset">
        <legend class="form-legend">Данные пациента:</legend>
        <div class="form-input-cover">
          <input
            class="form-input "
            type="text"
            id="surname"
            name="surname"
            v-model="surname"
            @blur="$v.surname.$touch()"
            @keydown="preventSubmit($event)"
            :class="{ 'form-input-invalid': $v.surname.$error }"
          />
          <div class="isInvalid" v-if="!$v.surname.required">
            Необходимо заполнить данное поле
          </div>
          <label for="surname">Фамилия: *</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            id="name"
            name="name"
            v-model="name"
            @blur="$v.name.$touch()"
            @keydown="preventSubmit($event)"
            :class="{ 'form-input-invalid': $v.name.$error }"
          />
          <div class="isInvalid" v-if="!$v.name.required">
            Необходимо заполнить данное поле
          </div>
          <label for="name"> Имя: *</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            id="fathersname"
            @keydown="preventSubmit($event)"
          />
          <label for="fathersname">Отчество:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="date"
            id="birth"
            v-model="birth"
            @blur="$v.birth.$touch()"
            @keydown="preventSubmit($event)"
            :class="{ 'form-input-invalid': $v.birth.$error }"
          />
          <div class="isInvalid" v-if="!$v.birth.required">
            Необходимо заполнить данное поле
          </div>
          <label for="birth">Дата рождения: *</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="phone"
            id="phonenumber"
            placeholder="+7-***-***-***-**"
            v-model="phone"
            @blur="$v.phone.$touch()"
            :class="{ 'form-input-invalid': $v.phone.$error }"
            @keydown="preventSubmit($event)"
          />
          <div class="isInvalid" v-if="!$v.phone.required">
            Необходимо заполнить данное поле
          </div>
          <div class="isInvalid" v-if="!$v.phone.validNumber">
            Что-то телефон какой-то необычный... проверьте ещё разок!
          </div>
          <label for="phonenumber">Телефон:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input visually-hidden"
            type="radio"
            id="gender-m"
            value="male"
            name="gender"
            checked
          /><label for="gender-m" tabindex="0" @keydown.enter="clickIt($event)"
            >Мужской</label
          >
        </div>

        <div class="form-input-cover">
          <input
            class="form-input visually-hidden"
            type="radio"
            id="gender-f"
            value="female"
            name="gender"
          /><label for="gender-f" tabindex="0" @keydown.enter="clickIt($event)"
            >Женский</label
          >
        </div>

        <div class="clients-group__cover">
          <label
            for="checkbox-clients-group"
            @click="isActive = !isActive"
            tabindex="0"
            @keydown.enter="isActive = !isActive"
            >Группа клиентов: *</label
          >
          <div
            type="text"
            class="clients-group-toggle"
            :class="{ 'form-input-invalid': $v.clientsGroup.$error }"
            @click="isActive = !isActive"
            tabindex="0"
          >
            <span v-if="!clients.vip && !clients.problem && !clients.oms"
              >Выберите группу клиентов
            </span>
            <span v-if="clients.vip">VIP</span>
            <span v-if="clients.problem">Проблемные</span>
            <span v-if="clients.oms">ОМС</span>
          </div>
          <div class="isInvalid" v-if="!$v.clientsGroup.required">
            Необходимо выбрать хотя бы один пункт
          </div>
          <ul
            class="checkbox-clients-group"
            id="checkbox-clients-group"
            :class="{ active: isActive }"
          >
            <li class="checkbox-list__item">
              <input
                class="form-input visually-hidden"
                type="checkbox"
                value="problem"
                id="problem"
              />
              <label
                for="problem"
                tabindex="0"
                @click="clients.problem = !clients.problem"
                @keydown.enter="clickIt($event)"
                >Проблемные</label
              >
            </li>
            <li class="checkbox-list__item">
              <input
                class="form-input visually-hidden"
                type="checkbox"
                value="vip"
                id="vip"
              />
              <label
                for="vip"
                tabindex="0"
                @click="clients.vip = !clients.vip"
                @keydown.enter="clickIt($event)"
                >VIP</label
              >
            </li>
            <li class="checkbox-list__item">
              <input
                class="form-input visually-hidden"
                type="checkbox"
                value="OMS"
                id="oms"
              />
              <label
                for="oms"
                tabindex="0"
                @click="clients.oms = !clients.oms"
                @keydown.enter="clickIt($event)"
                >OMC</label
              >
            </li>
            <li class="button-close-cover">
              <button
                class="button-close"
                @click="isActive = !isActive"
                tabindex="0"
              ></button>
            </li>
          </ul>
        </div>

        <div class="form-input-cover">
          <select name="doctor" id="doctor" class="doctor">
            <option value="Ivanov">Иванов</option>
            <option value="Zacharov">Захаров</option>
            <option value="Chernysheva">Чернышева</option>
          </select>
          <label for="doctor">Лечащий врач:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input visually-hidden"
            type="checkbox"
            value="no-SMS"
            id="no-sms-checkbox"
          />
          <label
            for="no-sms-checkbox"
            tabindex="0"
            @keydown.enter="clickIt($event)"
            >Не отправлять СМС</label
          >
        </div>
      </fieldset>
      <fieldset class="form-fieldset">
        <legend class="form-legend">Адрес:</legend>
        <div class="form-input-cover">
          <input
            class="form-input"
            type="number"
            name="address-index"
            id="address-index"
            @keydown="preventSubmit($event)"
          /><label for="address-index">Индекс:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            value=""
            name="country"
            id="country"
            @keydown="preventSubmit($event)"
          />
          <label for="country">Страна:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            name="state"
            id="state"
            @keydown="preventSubmit($event)"
          />
          <label for="state">Область:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            name="city"
            id="city"
            v-model="city"
            @blur="$v.city.$touch()"
            @keydown="preventSubmit($event)"
            :class="{ 'form-input-invalid': $v.city.$error }"
          />
          <div class="isInvalid" v-if="!$v.city.required">
            Необходимо заполнить данное поле
          </div>
          <div class="isInvalid" v-if="!$v.city.minLength">
            Какой у вас короткий город! Я бы переехал...
          </div>
          <label for="city">Город: *</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            name="street"
            id="street"
            @keydown="preventSubmit($event)"
          />
          <label for="street">Улица:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            name="building"
            id="building"
            @keydown="preventSubmit($event)"
          />
          <label for="building">Дом:</label>
        </div>
      </fieldset>
      <fieldset class="form-fieldset">
        <legend class="form-legend">Документ:</legend>

        <div class="form-input-cover input-type-of-doc">
          <select
            name="type-of-doc"
            id="type-of-doc"
            class="type-of-doc"
            v-model="typeOfDoc"
            @change="v.typeOfDoc.$touch()"
            :class="{ 'form-input-invalid': $v.typeOfDoc.$error }"
          >
            <option value="passport">Паспорт</option>
            <option value="birth-sertificate">Свидетельство о рождении</option>
            <option value="driver-lic">Вод. удостоверение</option>
          </select>
          <div class="isInvalid" v-if="!$v.typeOfDoc.required">
            Усы, лапы и хвост - это, конечно, хорошо, но...
          </div>
          <label for="type-of-doc" v-if="!$v.name.required"
            >Тип документа: *</label
          >
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            name="serial-number"
            id="serial-number"
            @keydown="preventSubmit($event)"
          />
          <label for="serial-number">Серия:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            name="doc-number"
            id="doc-number"
            @keydown="preventSubmit($event)"
          />
          <label for="doc-number">Номер:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="text"
            name="where-did-you-get-it"
            id="where-did-you-get-it"
            @keydown="preventSubmit($event)"
          />
          <label for="where-did-you-get-it">Кем выдан:</label>
        </div>

        <div class="form-input-cover">
          <input
            class="form-input"
            type="date"
            name="docDate"
            id="docDate"
            v-model="docDate"
            @change="$v.docDate.$touch()"
            :class="{ 'form-input-invalid': $v.docDate.$error }"
          />
          <div class="isInvalid" v-if="!$v.docDate.required">
            Не хотите серию говорить, так хоть скажите когда!
          </div>
          <label for="docDate">Дата выдачи: *</label>
        </div>
      </fieldset>
      <div class="form-submit-cover">
        <button class="form-submit" type="submit">
          Отправить форму
        </button>
        <p class="submitStatus submitStatus--success  visually-hidden">
          Анкета успешно отправлена!
        </p>
        <p class="submitStatus submitStatus--error visually-hidden">
          Пожалуйста, проверьте отмеченные поля ещё раз.
        </p>
        <p class="submitStatus submitStatus--sending visually-hidden">
          Отпраляю форму
        </p>
      </div>
      <div class="announcement-cover">
        <p class="announcement">* - поля обязательные для заполнения</p>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "App",
  components: {},
  validations: {
    surname: {
      required,
    },
    name: {
      required,
    },
    birth: {
      required,
    },
    docDate: {
      required,
    },
    phone: {
      required,
      validNumber: function(num) {
        const regex = /^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{10}$/;
        if (num.match(regex)) {
          return true;
        } else return false;
      },
    },
    clientsGroup: {
      atLeastOne: function() {
        if (this.clients.vip || this.clients.oms || this.clients.problem) {
          return true;
        } else return false;
      },
    },
    city: {
      required,
      minLength: minLength(3),
    },
    typeOfDoc: {
      required,
    },
  },
  methods: {
    preventSubmit($event) {
      if ($event.keyCode == 13) {
        $event.preventDefault();
        return false;
      }
    },
    submit() {
      const success = document.querySelector(".submitStatus--success");

      this.$v.$touch();
      if (this.$v.$invalid) {
        const err = document.querySelector(".submitStatus--error");
        err.classList.remove("visually-hidden");
        setTimeout(() => {
          err.classList.add("visually-hidden");
        }, 2000);
      } else {
        // do your submit logic here
        const sending = document.querySelector(".submitStatus--sending");
        sending.classList.remove("visually-hidden");
        setTimeout(() => {
          sending.classList.add("visually-hidden");
        }, 1000);
        setTimeout(() => {
          success.classList.remove("visually-hidden");
        }, 1000);
        setTimeout(() => {
          success.classList.add("visually-hidden");
        }, 5000);
      }
    },
    clickIt($event) {
      $event.currentTarget.click();
    },
  },
  data() {
    return {
      name: "",
      surname: "",
      birth: "",
      phone: "",
      clientsGroup: "",
      city: "",
      typeOfDoc: "",

      docDate: "",
      clients: {
        vip: false,
        problem: false,
        oms: false,
      },
      isActive: false,
    };
  },
};
</script>

<style>
@media (max-width: 600px) {
  .form-fieldset {
    margin: 20px 0px;
    width: 100%;
  }
}
.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;
  content: "";
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  white-space: nowrap;
  border: 0;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  display: none;
}

body {
  font-family: Roboto, sans-serif;
  font-size: 18px;
}

.form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.form-fieldset {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 2px solid #3931a3;
  border-radius: 4px;
  margin: 10px;
  border-radius: 2px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.form-legend {
  text-transform: uppercase;
  font-weight: bold;
}

.form-input-cover,
.checkbox-list__item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row-reverse;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  min-height: 36px;
  position: relative;
}

.checkbox-list__item {
  min-height: 25px;
  flex-direction: row;
  padding-right: 40px;
}
.checkbox-list__item:focus {
  outline: none;
  box-shadow: 1px 1px 7px 3px #a4af67;
}
.form-input,
.type-of-doc,
.clients-group,
.doctor {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-left: 20px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid #3644bf;
  padding-left: 20px;
}
.form-input:focus,
.type-of-doc:focus,
.clients-group:focus,
.doctor:focus {
  outline: none;
  box-shadow: 0px 0px 5px 0px #95964c;
}

.form-input-invalid {
  border: 2px solid #ff0000;
  position: relative;
}

.clients-group__cover {
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.clients-group-toggle {
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
  margin-left: 20px;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 9px;
  box-sizing: border-box;
  text-align: center;
  border: 2px solid rgb(23, 20, 180);
  border-radius: 4px;
  width: 200px;
}
.clients-group-toggle {
  box-shadow: 0px 0px 5px 0px #95964c;
}

.clients-group-toggle:hover {
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px #95964c;
}
.checkbox-clients-group {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 10px;
  border: 2px solid rgb(57, 55, 197);
  border-radius: 4px;
  width: 200px;
  position: absolute;
  background-color: #ffffff;
  right: 0;
  top: 40px;
  box-shadow: 1px 1px 7px 3px #a4af67;
  z-index: 1;
}

input[type="radio"] + label,
input[type="checkbox"] + label {
  position: relative;
  padding-right: 40px;
}
input[type="radio"] + label::after,
input[type="checkbox"] + label::after {
  position: absolute;
  display: block;
  border: 2px solid #3644bf;
  width: 25px;
  height: 25px;
  content: "";
  border-radius: 3px;
  right: -25px;
  top: -4px;
}

input[type="radio"]:checked + label::before,
input[type="checkbox"]:checked + label::before {
  position: absolute;
  display: block;
  border-top: 2px solid #3644bf;
  border-right: 2px solid #3644bf;
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  width: 15px;
  height: 7px;
  content: "";
  border-radius: 0px;
  right: -19px;
  top: 4px;
}

.form-input-cover:focus,
.clients-group__cover:focus {
  outline: none;
}
.clients-group__cover:focus label,
.form-input-cover:focus label,
.clients-group__cover label:focus,
.form-input-cover label:focus {
  outline: none;
  box-shadow: 0px 0px 5px 0px #95964c;
}
.form-submit-cover {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}

.form-submit {
  font-weight: bold;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #4b5cd7;
  color: #ffee73;
  border: 2px solid #081472;
}
.form-submit:hover {
  background-color: #2b3479;
  color: #a59a48;
  border: 2px solid #2a3270;
}
.form-submit:active {
  background-color: #3143cf;
  color: #ffee73;
  border: 2px solid #081472;
  box-shadow: inset 0px 0px 3px 0px black;
}
.form-submit:focus {
  box-shadow: 1px 1px 7px 3px #a4af67;
}
.submitStatus {
  position: absolute;
  border: 2px solid #ff0000;
  background-color: #ffffff;
  padding: 20px 10px;
  bottom: 0;
}
.announcement-cover {
  width: 100%;
}

.announcement {
  font-style: italic;
  padding-left: 10px;
}
.active {
  display: block;
}
.isInvalid {
  display: none;
  position: absolute;
  bottom: -14px;
  right: 0;
  color: #ff0000;
  font-size: 12px;
}
.form-input-invalid + .isInvalid {
  display: block;
}
.form-input-invalid {
  border: 2px solid #ff0000;
  position: relative;
}
.button-close-cover {
  position: relative;
}
.button-close {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #ff0000;
  top: 10px;
  right: 14px;
}
.button-close:focus {
  box-shadow: 0px 0px 5px 2px #000000;
}
.button-close:after {
  display: block;
  background-color: #ffffff;
  width: 20px;
  height: 3px;
  position: relative;
  content: "";
  transform: rotate(45deg);
  left: -3px;
  top: -3px;
}
.button-close:before {
  display: block;
  background-color: #ffffff;
  width: 20px;
  height: 3px;
  position: relative;
  content: "";
  transform: rotate(-45deg);
  left: -3px;
}
</style>
