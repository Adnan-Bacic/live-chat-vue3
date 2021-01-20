import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBnY-Mrq5aEKq7BQ4laZsUpEShganyT5GE",
    authDomain: "udemy-vue-crud-livechat.firebaseapp.com",
    projectId: "udemy-vue-crud-livechat",
    storageBucket: "udemy-vue-crud-livechat.appspot.com",
    messagingSenderId: "101033495248",
    appId: "1:101033495248:web:ce5b96ba8bf811f2766cd5"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
    projectAuth,
    projectFirestore,
    timestamp
}