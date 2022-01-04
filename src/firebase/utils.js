import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAeFnC-Emz4SVnuszbN0wxi8pBhNg2A8hQ",
  authDomain: "songbird-41f8d.firebaseapp.com",
  projectId: "songbird-41f8d",
  storageBucket: "songbird-41f8d.appspot.com",
  messagingSenderId: "348563519581",
  appId: "1:348563519581:web:764bda33cdebf4ecf4f5b4",
  measurementId: "G-HQEX45HXBE",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
