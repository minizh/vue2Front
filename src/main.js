import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/utils/veevalidate'
import Alert from '@/components/modules/alert'

Vue.use(Alert)

Vue.config.productionTip = false

axios.default.baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'http://your.domain.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
