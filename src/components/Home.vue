<template>
  <div>
    <h1>Home</h1>
    <pre>{{auth | json}}</pre>
  </div>
</template>

<script>
import { getAuth } from 'vuex-dir/getters'

export default {
  vuex: {
    getters: {
      auth: getAuth
    }
  }
}
</script>
