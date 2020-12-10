import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBbPSnV2VNrpwrxPm54pXlfTT7NjXiQQv4",
    authDomain: "actividades-8998d.firebaseapp.com",
    projectId: "actividades-8998d",
    storageBucket: "actividades-8998d.appspot.com",
    messagingSenderId: "17465019516",
    appId: "1:17465019516:web:8f544302c48113b7be8df9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
      db,
  }
