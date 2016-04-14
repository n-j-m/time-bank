import Home from './components/Home.vue'
import Login from './components/Login.vue'

export default {
  '/': {
    name: 'home',
    component: Home
  },
  '/login': {
    name: 'login',
    component: Login
  }
}