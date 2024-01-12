import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBAgqbQbr0QRiZkAaETp8LsYjyqvoxDJR0",
    authDomain: "disnetplus-clone-9f535.firebaseapp.com",
    projectId: "disnetplus-clone-9f535",
    storageBucket: "disnetplus-clone-9f535.appspot.com",
    messagingSenderId: "604965939807",
    appId: "1:604965939807:web:7963514cf54860c07a49ea",
    measurementId: "G-B7PKDN4GZT"
  };

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage}
export default db;