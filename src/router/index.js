import { createRouter, createWebHistory } from "vue-router";
import Brand from "../views/Brand.vue";

const routes = [
  {
    path: "/",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/components",
    name: "Components",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "components" */ "../views/Components.vue"),
  },
  {
    path: "/pages",
    name: "Pages",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pages" */ "../views/Pages.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
