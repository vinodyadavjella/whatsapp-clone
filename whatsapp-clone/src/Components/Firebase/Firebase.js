import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDDfAeOKmpzArUxEHDIvYE3OOY-2XHh-jk",
    authDomain: "whatsapp-clone-402e8.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-402e8.firebaseio.com",
    projectId: "whatsapp-clone-402e8",
    storageBucket: "whatsapp-clone-402e8.appspot.com",
    messagingSenderId: "406759527492",
    appId: "1:406759527492:web:3d92e4a3bae19a437d1811",
    measurementId: "G-0TP66ZYNXL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;