// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjHy0u9SmML140uXQUCLv944Mpm498J5g",
  authDomain: "linkedin-clone-3dccb.firebaseapp.com",
  projectId: "linkedin-clone-3dccb",
  storageBucket: "linkedin-clone-3dccb.appspot.com",
  messagingSenderId: "424920140635",
  appId: "1:424920140635:web:7af29b23c9229255c7287e"
};
// Initialize Firebase
// check if already initialize bc we are doing server side rending, it could be edge cases where we are already render
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };