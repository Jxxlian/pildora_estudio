import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBUxHmMxRACTwtsYiHThta9sUBYtnDcAU",
  authDomain: "bd-pildora-estudio.firebaseapp.com",
  projectId: "bd-pildora-estudio",
  storageBucket: "bd-pildora-estudio.appspot.com",
  messagingSenderId: "832367778007",
  appId: "1:832367778007:web:833a2112ada11c0af8f892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)