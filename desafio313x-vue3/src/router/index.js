import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Anos70 from "../components/Anos70.vue";
import Anos80 from "../components/Anos80.vue";
import Anos90 from "../components/Anos90.vue";
import Anos00 from "../components/Anos00.vue";
import Last from "../components/Last.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
        leaveClass: "animate__animated animate__fadeOutRight",
      },
    },
    {
      path: "/anos70",
      component: Anos70,
      meta: {
        enterClass: "animate__animated animate__fadeInRight",
        leaveClass: "animate__animated animate__fadeOutLeft",
      },
    },
    {
      path: "/anos80",
      component: Anos80,
      meta: {
        enterClass: "animate__animated animate__bounceIn",
        leaveClass: "animate__animated animate__bounceOut",
      },
    },
    {
      path: "/anos90",
      component: Anos90,
      meta: {
        enterClass: "animate__animated animate__fadeIn",
        leaveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/anos00",
      component: Anos00,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeInRight",
      },
    },
    {
      path: "/last",
      component: Last,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeInRight",
      },
    },
  ],
});

export default router;
