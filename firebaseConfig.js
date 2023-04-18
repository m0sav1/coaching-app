import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM3qMuVDxSFJS0bCrU7Fo8s-rpMJs-FLo",
  authDomain: "phantoms-mobile-app.firebaseapp.com",
  projectId: "phantoms-mobile-app",
  storageBucket: "phantoms-mobile-app.appspot.com",
  messagingSenderId: "733350156577",
  appId: "1:733350156577:web:62c601aa9fcb9ec8ae4660",
  measurementId: "G-6V593ZNWE3",
};

export const Firebase_App = initializeApp(firebaseConfig);
export const Firestore_Db = getFirestore(Firebase_App);
export const Firebase_Auth = getAuth(Firebase_App);
export default firebaseConfig;
