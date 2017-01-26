require('./bootstrap')
import App from './App.vue'
import store from './vuex'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

export default new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})