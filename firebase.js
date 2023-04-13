import * as firebase from "firebase";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBM3qMuVDxSFJS0bCrU7Fo8s-rpMJs-FLo",
    authDomain: "phantoms-mobile-app.firebaseapp.com",
    projectId: "phantoms-mobile-app",
    storageBucket: "phantoms-mobile-app.appspot.com",
    messagingSenderId: "733350156577",
    appId: "1:733350156577:web:62c601aa9fcb9ec8ae4660",
    measurementId: "G-6V593ZNWE3",
  };

  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
}
