import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './api/http'
import plugin from './plugin'
import less from 'less'
import scroll from 'vue-seamless-scroll'
import animated from 'animate.css'
Vue.use(animated) 
Vue.use(scroll) 
Vue.use(less)
Vue.use(plugin, { router: router })
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
      if (
          to.matched.length > 0 &&
          !to.matched.some(record => record.meta.requiresAuth)
      ) {
          next()
      } else {
          next({ path: '/login' })
      }
  } else {
      if (!store.state.permission.permissionList) {
          store.dispatch('permission/FETCH_PERMISSION').then(() => {
              next({ path: to.path })
          })
      } else {
          if (to.path !== '/login') {
              next()
          } else {
              next(from.fullPath)
          }
      }
  }
})

router.afterEach((to, from, next) => {
  var routerList = to.matched
  store.commit('setCrumbList', routerList)
  store.commit('permission/SET_CURRENT_MENU', to.name)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
