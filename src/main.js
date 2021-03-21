import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d';
import Vuex from 'vuex'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Carousel3d);
Vue.use(VueSweetalert2);
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
