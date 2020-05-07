import firebase from 'firebase/app'
// import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCIntIhpJ5pDS4k373r71MENJ_HLZFD-QA",
    authDomain: "grillber-c05f4.firebaseapp.com",
    databaseURL: "https://grillber-c05f4.firebaseio.com",
    projectId: "grillber-c05f4",
    storageBucket: "grillber-c05f4.appspot.com",
    messagingSenderId: "528531270247",
    appId: "1:528531270247:web:f6383223ca527de39e02c2",
    measurementId: "G-LFDKVFLS6S"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;