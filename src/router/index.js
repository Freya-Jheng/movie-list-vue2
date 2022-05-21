import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'root',
    redirect: '/movies/all',
  },
  {
    path: '/movies',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/movies/all',
        name: 'movies',
        component: () => import('@/views/Movies.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
})

export default router