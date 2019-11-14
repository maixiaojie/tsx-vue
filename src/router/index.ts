import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router';

import loginPage from '../views/login'
import indexPage from '../views/Index'

Vue.use(Router)

const routers: Array<RouteConfig> = [{
    path: '/login',
    name: 'login',
    component: loginPage
}, {
    path: '/',
    name: 'index',
    component: indexPage
}];

const router = new Router({
    mode: 'hash',
    routes: routers
})

export default router;