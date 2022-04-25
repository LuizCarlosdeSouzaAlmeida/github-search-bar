import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import SearchResults from "@/pages/SearchResults.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/results", name: "results", component: SearchResults },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
