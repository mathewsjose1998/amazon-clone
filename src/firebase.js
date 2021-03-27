import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCj212tH1iu34ZYNWme_WLnl1Ex0e_5f8Q",
    authDomain: "clone-march-26.firebaseapp.com",
    projectId: "clone-march-26",
    storageBucket: "clone-march-26.appspot.com",
    messagingSenderId: "923602759947",
    appId: "1:923602759947:web:26b97aee8303bebc79320e",
    measurementId: "G-F6FPG9QXQQ"
  });

const  db=firebase.firestore();

export { db }
 