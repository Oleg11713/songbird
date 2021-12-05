import firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-ulr7aJ3xN2bU2cDG4Rw8MYCPgGHr-VY",
  authDomain: "crwn-db-d7273.firebaseapp.com",
  projectId: "crwn-db-d7273",
  storageBucket: "crwn-db-d7273.appspot.com",
  messagingSenderId: "467961616344",
  appId: "1:467961616344:web:1ab8b3fd70c77dcf5644ad",
  measurementId: "G-SYG9BN286P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
