import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
const MainView = () => import("../views/MainView.vue")
const PresentationView = () => import("../views/PresentationView.vue")
const FootprintView = () => import("../views/FootprintView.vue")
const MemoryView = () => import("../views/MemoryView.vue")
const routes = [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/presentation',
    component: PresentationView
  },
  {
    path:'/footprint',
    component: FootprintView
  },
  {
    path:'/memory',
    component: MemoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
