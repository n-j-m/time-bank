import Vue from 'vue'
import VueRouter from 'vue-router'

import { rootRef } from 'time-bank'

import routes from './routes'

export default function createRouter() {
  Vue.use(VueRouter)

  const router = new VueRouter({
    history: true
  })

  router.map(routes)

  router.redirect('*', '/')

  router.beforeEach(({to, next, redirect}) => {
    if (to.path === '/login') {
      return next()
    }

    const auth = rootRef.getAuth()
    if (auth) {
      return next()
    }

    return redirect('/login')    
  })

  return router
}