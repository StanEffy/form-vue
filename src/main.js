import Vue from 'vue'
import App from './App.vue'
import vulidate from 'vuelidate'
Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(vulidate)

new Vue({
  render: h => h(App),
}).$mount('#app')
