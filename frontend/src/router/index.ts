// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import MyCourses from "@/views/MyCourses.vue";

const routes = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Home,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
          hideNavbar: true,
        }
      },
      {
        path: '/mycourses',
        name: 'MyCourses',
        component: MyCourses,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
