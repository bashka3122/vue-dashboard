import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/auth/login.vue'
import defaultLayoutVue from '../components/defaultLayout.vue'
import store from "../store";
const routes = [
    {
        path: '/',
        redirect: "/dashboard",
        name: 'Home',
        component: defaultLayoutVue,
        meta: { requiresAuth: true },
        children: [
            { path: "/dashboard", name: "Dashboard", component: Home },
            {
                path: '/about',
                name: 'About',
                component: () => import('../views/about.vue')
            },

        ],

    },
    {
        meta: { isGuest: true },
        path: '/login',
        name: 'Login',
        component: Login
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    }
    else if (store.state.user.token && to.meta.isGuest) {
        next({ name: "Dashboard" });
    }
    else {
        next();
    }
});
export default router