import { rootRef } from 'time-bank'

export const login = (store, credentials) => {
  const { dispatch } = store
  dispatch('PROCESSING', true)
  rootRef.authWithPassword(credentials)
    .then(auth => {
      dispatch('LOGIN', auth)
      dispatch('NAVIGATE', '/')
      dispatch('PROCESSING', false)
    })
    .catch(err => {
      error(store, {message: 'Invalid email and/or password'})
      dispatch('PROCESSING', false)
    })
}

export const error = ({dispatch}, err) => {
  $.notify({
    title: '<strong>Error</strong>',
    message: err.message,
    icon: 'glyphicon glyphicon-warning-sign'
  }, {
    type: 'danger',
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    }
  })
}

export const clearError = ({dispatch}) => {
  dispatch('CLEAR_ERROR')
  dispatch('CLEAR_TIMEOUT', 'ERROR')
}

export const processing = ({dispatch}, status) => dispatch('PROCESSING', status)
