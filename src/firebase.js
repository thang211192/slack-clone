import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvSfjy2SIi3HXqxcsH4ZmrmLjdtwTuIsE",
    authDomain: "slack-clone-9a30e.firebaseapp.com",
    projectId: "slack-clone-9a30e",
    storageBucket: "slack-clone-9a30e.appspot.com",
    messagingSenderId: "452374543513",
    appId: "1:452374543513:web:8c214184bdc17660000c08",
    measurementId: "G-K0QCL1MG6S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;