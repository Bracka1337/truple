// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
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
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
