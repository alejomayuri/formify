import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcmhz2QHrKSAZVXjmxkQo6npSRf2MVz2Q",
  authDomain: "formify-15be1.firebaseapp.com",
  projectId: "formify-15be1",
  storageBucket: "formify-15be1.appspot.com",
  messagingSenderId: "76484276902",
  appId: "1:76484276902:web:d62cf61de6dc3083acba67",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, uid } = user;

  return {
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((user) => mapUserFromFirebaseAuthToUser(user));
};

export const loginWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const registerWithEmailAndPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
