import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a38ce28 = () => interopDefault(import('../pages/labor/index.vue' /* webpackChunkName: "pages/labor/index" */))
const _42a45e7c = () => interopDefault(import('../pages/pricing/index.vue' /* webpackChunkName: "pages/pricing/index" */))
const _00d0f813 = () => interopDefault(import('../pages/prosoft/index.vue' /* webpackChunkName: "pages/prosoft/index" */))
const _40633377 = () => interopDefault(import('../pages/team/index.vue' /* webpackChunkName: "pages/team/index" */))
const _5904466a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/labor",
    component: _2a38ce28,
    name: "labor"
  }, {
    path: "/pricing",
    component: _42a45e7c,
    name: "pricing"
  }, {
    path: "/prosoft",
    component: _00d0f813,
    name: "prosoft"
  }, {
    path: "/team",
    component: _40633377,
    name: "team"
  }, {
    path: "/",
    component: _5904466a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
