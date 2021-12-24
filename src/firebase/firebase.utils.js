import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { async } from "@firebase/util";

const config = {
  apiKey: "AIzaSyBDWbKAhMrkiPWpKAqfOYpmW--sKczcRBA",

  authDomain: "carl-clothes-db.firebaseapp.com",

  projectId: "carl-clothes-db",

  storageBucket: "carl-clothes-db.appspot.com",

  messagingSenderId: "769505627373",

  appId: "1:769505627373:web:e9abd591cade01e63350e4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
