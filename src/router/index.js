import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// Home page
// OrderList page

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bestellijst',
    name: 'Bestel lijst',
    component: () => import('../views/OrderPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.name} - De Wit`;
  next();
});

export default router
