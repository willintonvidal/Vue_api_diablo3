import Vue from 'vue'
// BootstrapVue
import './plugins/bootstrapVue'

// Vue font-Awesome
import './plugins/fontAwesome'

import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import './assets/css/main.styl'

// Custom directives
import './directives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
