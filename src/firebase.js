// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAmKckZfI0xNwHv2AVIDTKTxW9UZP4STRs",
  authDomain: "play-ball-d8e11.firebaseapp.com",
  databaseURL: "https://play-ball-d8e11-default-rtdb.firebaseio.com",
  projectId: "play-ball-d8e11",
  storageBucket: "play-ball-d8e11.appspot.com",
  messagingSenderId: "412320212388",
  appId: "1:412320212388:web:d39c3fb4563959b4864d31",
  measurementId: "G-V000596DFR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db }
export { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword}
