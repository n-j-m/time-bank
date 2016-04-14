import Vue from 'vue'
import VueFire from 'vuefire'
import { sync } from 'vuex-router-sync'

if (process.env.NODE_ENV !== 'production') {
  Vue.config.debug = true;
}

import Root from './Root.vue'
import createRouter from './router'
import store from 'vuex-dir/store'

Vue.use(VueFire)

const router = createRouter()

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/js/bootstrap.js'
import './vendor/css/ball-clip-rotate.css'
import './vendor/css/animate.css'
import './vendor/js/bootstrap-notify.js'

sync(store, router)
router.start(Root, '#root')
