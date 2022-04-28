import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import AccountDetails from "@/pages/AccountDetails.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/details", name: "details", component: AccountDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
