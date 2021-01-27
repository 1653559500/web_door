import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/home/Index")
    },
    {
        path: '/market',
        name: 'Market',
        component: () => import("../views/market/Index")
    },
    {
        path: '/market/:id',
        name: 'MarketDetail',
        component: () => import("../views/market/Detail")
    },
    {
        path: '/iot',
        name: 'Iot',
        component: () => import("../views/iot/Index")
    },
    {
        path: '/iot/:id',
        name: 'IotDetail',
        component: () => import("../views/iot/Detail")
    },
    {
        path: '/scheme',
        name: 'Scheme',
        component: () => import("../views/scheme/Index")
    },
    {
        path: '/supply',
        name: 'Supply',
        component: () => import("../views/supply/Index")
    },
    {
        path: '/service',
        name: 'Service',
        component: () => import("../views/service/Index")
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router