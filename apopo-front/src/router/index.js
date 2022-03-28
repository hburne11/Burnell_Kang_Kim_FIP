import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/CampaignView",
    name: "campaignView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/CampaignView.vue"),
  },
  {
    path: "/AboutView",
    name: "aboutView",

    component: () => import("../views/AboutView.vue"),
  },

  {
    path: "/GalleryView",
    name: "galleryView",

    component: () => import("../views/GalleryView.vue"),
  },
  {
    path: "/MapView",
    name: "mapView",

    component: () => import("../views/MapView.vue"),
  },
  {
    path: "/DonationView",
    name: "donationView",

    component: () => import("../views/DonationView.vue"),
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
