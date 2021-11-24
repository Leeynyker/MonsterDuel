import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAxios from 'vue-axios';
import axios from "axios";
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import "@/assets/css/general.css"

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

