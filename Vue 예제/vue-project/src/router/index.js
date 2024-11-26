import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/template',
      name: 'template',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TempView.vue'),
    },
    {
      path: '/ref',
      name: 'ref',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RefView.vue'),
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReactivityView.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComputedView.vue'),
    },
    {
      path: '/binding',
      name: 'binding',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BindingView.vue'),
    },
    {
      path: '/condition',
      name: 'condition',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ConditionView.vue'),
    },
    {
      path: '/list_render',
      name: 'list_render',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListRenderView.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue'),
    },
    {
      path: '/form_bind',
      name: 'form_bind',
      component: () => import('../views/FormBindView.vue'),
    },
    {
      path: '/life_cycle',
      name: 'life_cycle',
      component: () => import('../views/LifeCycleView.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue'),
    },
  ],
})

export default router
