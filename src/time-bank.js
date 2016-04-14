import Firebase from 'firebase'

export const rootRef = new Firebase('https://time-bank.firebaseio.com')

export const usersRef = rootRef.child('/users')