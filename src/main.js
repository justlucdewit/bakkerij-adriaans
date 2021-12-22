import Vue from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniBars, uniFacebook, uniPhone, uniAt, uniWhatsapp, uniEnvelope
} from 'vue-unicons/dist/icons'


Unicon.add([
  uniBars, uniFacebook, uniPhone, uniAt, uniWhatsapp, uniEnvelope
])

Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
