import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../views/HomeView.vue'
const MainView = () => import("../views/MainView.vue");
const FootprintView = () => import("../views/FootprintView.vue");
const MemoryView = () => import("../views/MemoryView.vue");
const NanjingView = () => import("../views/presentation/NanjingView.vue");
const WuhanView = () => import("../views/presentation/WuhanView.vue");
const YichangView = () => import("../views/presentation/YichangView.vue");
const ChongqingView = () => import("../views/presentation/ChongqingView.vue");
const JiujiangView = () => import("../views/presentation/JiujiangView.vue");
const ChengduView = () => import("../views/presentation/ChengduView.vue");
const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/nanjing",
    component: NanjingView,
  },
  {
    path: "/wuhan",
    component: WuhanView,
  },
  {
    path: "/yichang",
    component: YichangView,
  },
  {
    path: "/chongqing",
    component: ChongqingView,
  },
  {
    path: "/jiujiang",
    component: JiujiangView,
  },
  {
    path: "/chengdu",
    component: ChengduView,
  },
  {
    path: "/footprint",
    component: FootprintView,
  },
  {
    path: "/memory",
    component: MemoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
