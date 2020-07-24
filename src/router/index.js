import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import { component } from "vue/types/umd";
import Display from "../views/Display.vue";
import Menu from "../views/Menu.vue";
import Settings from "../views/Settings.vue";
import Signout from "../views/Signout.vue";
import Calendar from "../views/Calendar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/display",
    name: "display",
    component: Display
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings
  },
  {
    path: "/signout",
    name: "signout",
    component: Signout
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar
  }
];

const router = new VueRouter({
  routes
});

export default router;
