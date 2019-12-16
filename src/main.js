import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// 追記しました
import '@/assets/css/tailwind.css'
import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'
import VueDateFns from "vue-date-fns";

Vue.use(VueDateFns);

// firebase
Vue.use(firestorePlugin)
firebase.initializeApp({              
  apiKey: "AIzaSyDyaBWhd4AbaDBufdPilm8Z2_45rLOh888",
  authDomain: "vue-note-a7fdf.firebaseapp.com",
  databaseURL: "https://vue-note-a7fdf.firebaseio.com",
  projectId: "vue-note-a7fdf",
  storageBucket: "vue-note-a7fdf.appspot.com",
  messagingSenderId: "465956740476",
  appId: "1:465956740476:web:a9ce92dffcbc8b2af4d8f9",
})
export const db = firebase.firestore()
export const auth = firebase.auth()


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
