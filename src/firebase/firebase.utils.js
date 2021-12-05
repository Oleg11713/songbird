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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message());
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
