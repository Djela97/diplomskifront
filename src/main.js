import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSimpleAlert from 'vue-simple-alert';

import 'bootstrap/dist/css/bootstrap.min.css'
import'@/assets/css/main.css'

Vue.config.productionTip = false;
Vue.use(VueSimpleAlert);

export const eventBus = new Vue();

new Vue({
  e1: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
