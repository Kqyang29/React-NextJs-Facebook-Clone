// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNY8QNA1NGVT2vkenghiT2lojxkHGOTvg",
  authDomain: "react-next-facebook.firebaseapp.com",
  projectId: "react-next-facebook",
  storageBucket: "react-next-facebook.appspot.com",
  messagingSenderId: "315857181006",
  appId: "1:315857181006:web:dcf4531714c92e06a9e61f"
};

// Initialize Firebase
// check if already initialize bc we are doing server side rending, it could be edge cases where we are already render
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };