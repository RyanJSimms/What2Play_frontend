import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import GamesIndex from "../views/GamesIndex.vue";
import FavoritesIndex from "../views/FavoritesIndex.vue";
import GamesShow from "../views/GamesShow.vue";
import FavoritesShow from "../views/FavoritesShow.vue";
import UsersIndex from "../views/UsersIndex.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/games",
    name: "gamesIndex",
    component: GamesIndex,
  },
  {
    path: "/favorites",
    name: "favoritesIndex",
    component: FavoritesIndex,
  },
  {
    path: "/games/:id",
    name: "gamesShow",
    component: GamesShow,
  },
  {
    path: "/favorites/:id",
    name: "favoritesShow",
    component: FavoritesShow,
  },
  {
    path: "/users",
    name: "usersIndex",
    component: UsersIndex,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
