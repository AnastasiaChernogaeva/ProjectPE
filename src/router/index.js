import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
