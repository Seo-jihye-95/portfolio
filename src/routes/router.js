import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Portfolio from '@/views/Portfolio.vue';
import PfDetail from '@/views/PfDetail.vue';
import Blog from '@/views/Blog.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/pf",
        component: Portfolio,
    },
    {
        path: "/pfDetail/:id",
        component: PfDetail,
        name: 'pfdetail',
    },
    {
        path: "/blog",
        component: Blog,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 