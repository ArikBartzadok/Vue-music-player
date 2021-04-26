import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins"

import "./assets/styles/_main.scss"
Vue.config.productionTip = false;

Vue.filter('currency', value => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
