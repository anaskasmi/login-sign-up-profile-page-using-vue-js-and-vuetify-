import Vue from 'vue'
import VueRouter from 'vue-router'
import profile from '../views/profile.vue'
import signIn from '../views/sign-in.vue'
import SingUp from '../views/Sing-up.vue'
import stats from '../views/stats.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'SingUp',
        component: SingUp
    }, {
        path: '/SingUp',
        name: 'SingUp',
        component: SingUp
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: signIn
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/stats',
        name: 'stats',
        component: stats
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router