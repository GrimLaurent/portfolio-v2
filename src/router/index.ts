import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

//views
import Home from "../views/Home.vue";
import Homepage from "../views/Homepage.vue";
import TestApi from "../views/TestApi.vue";
import HomeSwipe from "../views/HomeSwipe.vue";
import HelpTranslate from "../views/answer/HelpTranslate.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/home",
    component: Homepage,
    name: "Homepage",
  },
  {
    path: "/swipe",
    component: HomeSwipe,
    name: "HomeSwipe",
  },
  {
    path: "/help-translate",
    component: HelpTranslate,
    name: "HelpTranslate",
  },
  {
    path: "/test",
    component: TestApi,
    name: "TestApi",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
