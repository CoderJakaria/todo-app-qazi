import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaRDR1yaSwvUV2PObTx3G2CaWuC8DiVz8",
    authDomain: "todo-app-cp-415b9.firebaseapp.com",
    projectId: "todo-app-cp-415b9",
    storageBucket: "todo-app-cp-415b9.appspot.com",
    messagingSenderId: "236590147660",
    appId: "1:236590147660:web:cb4a31d3f44aebc5462ce9",
    measurementId: "G-Z7CX4HX70P"
  });


const db = firebaseApp.firestore();

export default db