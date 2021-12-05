import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniBars, uniFacebook, uniPhone, uniAt, uniWhatsapp
} from 'vue-unicons/dist/icons'


Unicon.add([
  uniBars, uniFacebook, uniPhone, uniAt, uniWhatsapp
])

Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
