import Vue from "vue";
import App from "./App.vue";
import container from "./APPS/container";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: container.createStore(),
  router: container.createRouter()
}).$mount("#app");
