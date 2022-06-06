import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import AdoptedCats from "@/views/adoptedCats";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/adopted-cats",
    name: "AdoptedCats",
    component: AdoptedCats,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
