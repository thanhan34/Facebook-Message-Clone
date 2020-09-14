// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWD8uXIs01zFOyAZyi2WWLO4njCrMAZnY",
    authDomain: "facebook-message-clone-dfbf4.firebaseapp.com",
    databaseURL: "https://facebook-message-clone-dfbf4.firebaseio.com",
    projectId: "facebook-message-clone-dfbf4",
    storageBucket: "facebook-message-clone-dfbf4.appspot.com",
    messagingSenderId: "594786942021",
    appId: "1:594786942021:web:5d519486d355412f3d772c",
    measurementId: "G-M2QLJR64CN"
});


  const db = firebaseApp.firestore();

  export default db;