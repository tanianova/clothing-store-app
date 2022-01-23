import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCVq2-9l7qtKfSN2o4h5STPXnjMJT4x1tQ",
  authDomain: "crown-db-293c8.firebaseapp.com",
  projectId: "crown-db-293c8",
  storageBucket: "crown-db-293c8.appspot.com",
  messagingSenderId: "458555875831",
  appId: "1:458555875831:web:68446c1cc0b18dc8eecef2",
  measurementId: "G-0JSTMNV8XQ",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase