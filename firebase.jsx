// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOKu2Ty-ekxkS4PE0XKJelzh43JQKD1lo",
  authDomain: "traffic-challan-system.firebaseapp.com",
  projectId: "traffic-challan-system",
  storageBucket: "traffic-challan-system.appspot.com",
  messagingSenderId: "248653979720",
  appId: "1:248653979720:web:ebbf3bbc06017618bd387d",
  measurementId: "G-2YNH3PMJMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app);

export {analytics, auth, firestore}