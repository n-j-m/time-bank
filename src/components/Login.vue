<template>
  <div class="container-fluid">
    <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2>Login</h2>
        </div>
        <div class="panel-body">
          <form class="form">
            <div class="form-group {{emailValid ? '' : 'has-error'}}">
              <input v-model="email" type="email" @blur="validate" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input v-model="password" type="password" class="form-control" placeholder="Password" required>
            </div>
            <button @click.prevent="login({email: email, password: password})" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { rootRef } from 'time-bank'
import { login, error } from 'vuex-dir/actions'

export default {
  data() {
    return {
      email: '',
      password: '',
      emailValid: true
    }
  },
  methods: {
    validate(ev) {
      const val = ev.target.value
      if (val === '') {
        this.emailValid = true
      }
      else {
        console.log('validate:',/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val))
        this.emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
      }
    }
  },
  vuex: {
    actions: {
      login
    }
  }
}
</script>

