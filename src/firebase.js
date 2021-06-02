import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBndFoQ9pG8b1oC553y8HRince_wErx0bw",
  authDomain: "linkedin-clone-fb9a6.firebaseapp.com",
  projectId: "linkedin-clone-fb9a6",
  storageBucket: "linkedin-clone-fb9a6.appspot.com",
  messagingSenderId: "1039182012018",
  appId: "1:1039182012018:web:95d69346a55e24b37beceb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
