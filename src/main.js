import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d';
import Vuex from 'vuex'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Carousel3d);
Vue.use(VueScrollTo)
const store = new Vuex.Store({
  state: {},
  getters:{},
  mutations: {}
})

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
