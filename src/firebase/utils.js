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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    const totalScore = 0;
    try {
      await userRef.set({
        email,
        displayName,
        totalScore,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message());
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
