import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../views/HomeView.vue'
const MainView = () => import("../views/MainView.vue");
const MemoryView = () => import("../views/MemoryView.vue");
const ResearchNanjingView = () =>
  import("../views/Research demeanor/NanjingView.vue");
const ResearchWuhanView = () =>
  import("../views/Research demeanor/WuhanView.vue");
const ResearchYichangView = () =>
  import("../views/Research demeanor/YichangView.vue");
const ResearchChongqingView = () =>
  import("../views/Research demeanor/ChongqingView.vue");
const ResearchJiujiangView = () =>
  import("../views/Research demeanor/JiujiangView.vue");
const ResearchChengduView = () =>
  import("../views/Research demeanor/ChengduView.vue");
const ResultRegioanlView = () =>
  import("../views/Research result/RegionalView.vue");
const ResultCompilationView = () =>
  import("../views/Research result/CompilationView.vue");
const ResultHistoryView = () =>
  import("../views/Research result/HistoryView.vue");
const ResultArchivelView = () =>
  import("../views/Research result/ArchiveView.vue");
const FootprintIntroView = () =>
  import("../views/Footprint/IntroView.vue");
const FootprintPastView = () =>
  import("../views/Footprint/PastView.vue");
const FootprintTodayView = () =>
  import("../views/Footprint/TodayView.vue");
const FootprintInspirationView = () =>
  import("../views/Footprint/InspirationView.vue");


const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/research/nanjing",
    component: ResearchNanjingView,
  },
  {
    path: "/research/wuhan",
    component: ResearchWuhanView,
  },
  {
    path: "/research/yichang",
    component: ResearchYichangView,
  },
  {
    path: "/research/chongqing",
    component: ResearchChongqingView,
  },
  {
    path: "/research/jiujiang",
    component: ResearchJiujiangView,
  },
  {
    path: "/research/chengdu",
    component: ResearchChengduView,
  },
  {
    path: "/result/regional",
    component: ResultRegioanlView,
  },
  {
    path: "/result/archive",
    component: ResultArchivelView,
  },
  {
    path: "/result/compilation",
    component: ResultCompilationView,
  },
  {
    path: "/result/history",
    component: ResultHistoryView,
  },
  {
    path: "/footprint/intro",
    component: FootprintIntroView,
  },
  {
    path: "/footprint/past",
    component: FootprintPastView,
  },
  {
    path: "/footprint/today",
    component: FootprintTodayView,
  },
  {
    path: "/footprint/Inspiration",
    component: FootprintInspirationView,
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
