<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import store from 'vuex-dir/store'
import { getAuth, getError } from 'vuex-dir/getters'
import { usersRef } from 'time-bank'

export default {
  components: {NavBar},
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Time bank!'
    }
  },
  vuex: {
    getters: {
      errorValue: getError,
      auth: getAuth
    }
  },
  store
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

<style>
body {
  padding-top: 70px;
}
</style>