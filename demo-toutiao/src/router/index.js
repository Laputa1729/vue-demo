import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home/Home';
import User from '@/views/User/User';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, meta: { isRecord: true, top: 0 } },
  { path: '/user', component: User },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: to.meta.top || 0 };
    }
  },
});

export default router;
