import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import AOS from 'aos'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css'
import 'aos/dist/aos.css'

import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.component('v-select', vSelect)

new Vue({
  created() {
    AOS.init({
      duration: 1000,
    });
  },
  render: h => h(App),
}).$mount('#app')
