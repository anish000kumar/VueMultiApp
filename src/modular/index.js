import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

export default class VueContainer {
  constructor(apps) {
    this.apps = apps;
  }
  // todo
  createStore(config) {
    Vue.use(Vuex);
    let modules = {};

    this.apps.forEach(appObj => {
      modules[appObj.store] = appObj.app.store;
    });

    return new Vuex.Store({
      modules,
      ...config
    });
  }
  //todo
  createRouter(config = {}) {
    Vue.use(VueRouter);
    const routes = [];
    this.apps.forEach(appObj => {
      let config = {
        path: appObj.route,
        component: appObj.app.root
      };
      const children = appObj.app.routes;
      if (children) {
        config.children = children;
      }
      routes.push(config);
    });
    return new VueRouter({ routes, ...config });
  }
}
