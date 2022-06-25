// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZRkYI37TiyKoJvy1kn3wtV2C7N3BBMUI",
  authDomain: "clone-26fe7.firebaseapp.com",
  projectId: "clone-26fe7",
  storageBucket: "clone-26fe7.appspot.com",
  messagingSenderId: "109111434589",
  appId: "1:109111434589:web:4d1bffeb08ba335944dcb4",
  measurementId: "G-2NGPNKLRHP"
};

// const firebaseApp = firebase.initalizeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db , auth};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db; 