<template>
  <header class="fixed top-0 w-full p-3">
    <div class="flex justify-between">
      <router-link to="/">
        <h1 class="text-3xl font-bold">note.</h1>
      </router-link>
      <div class="flex">
        <div class="w-10 h-10 rounded-full bg-black mr-2"></div>
        <div>
          <p>Pen Write</p>
          <p class="-mt-1 text-sm">Log Out</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase';
import {auth} from '@/main';
export default {
  methods:{
    signIn(){
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
      .then((result) => {
        alert('Hello, ' + result.user.displayName + '!')
      })
    },
    signOut(){
      if(window.confirm('Are You Sure to Sign Out?')){
        auth.signout()
        .then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/')
          location.reload()
        })
      }
    }
  }
}
</script>