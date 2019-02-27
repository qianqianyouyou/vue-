// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: routers

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
Vue.use(VueRouter)
Vue.use(VueResource)
