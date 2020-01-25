import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

import Home from "../views/Home.vue";
import Password from "../views/Password.vue";
import Notify from "../views/notify.vue";
import MusicSuggestion from "../views/MusicSuggestion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/password",
    name: "password",
    component: Password
  },

  {
    path: "/anmalan",
    component: Notify
  },

  {
    path: "/musicsuggestion",
    component: MusicSuggestion
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  var loggedIn = store.state.users.loggedIn;

  if (!loggedIn && to.path !== "/password") next({ path: "/password" });

  next();
});

export default router;
