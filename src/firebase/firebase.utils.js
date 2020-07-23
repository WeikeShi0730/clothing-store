import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKntCHcxboH9-hLHhPW5htHqTNzYKgtEg",
  authDomain: "crwm-db-c7324.firebaseapp.com",
  databaseURL: "https://crwm-db-c7324.firebaseio.com",
  projectId: "crwm-db-c7324",
  storageBucket: "crwm-db-c7324.appspot.com",
  messagingSenderId: "36180049250",
  appId: "1:36180049250:web:6c1b13c4a932b64adf403b",
  measurementId: "G-3LYW4W6L7Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
