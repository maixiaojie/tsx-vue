import Vue from 'vue'
import Router, { RouterOptions, RouteConfig } from 'vue-router';

import loginPage from '../views/login'
import indexPage from '../views/Index'

Vue.use(Router)

const routers: RouteConfig[]= [{
    path: '/login',
    name: 'login',
    component: loginPage as any
}, {
    path: '/',
    name: 'index',
    component: indexPage
}];

let options: RouterOptions = {
    mode: 'hash',
    routes: routers
}
const router = new Router(options)

export default router;