// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA71h-tnm5IZkXF5llr3XZ-cBBpXy-O0iU",
  authDomain: "jason-app-firebase.firebaseapp.com",
  projectId: "jason-app-firebase",
  storageBucket: "jason-app-firebase.firebasestorage.app",
  messagingSenderId: "274363731588",
  appId: "1:274363731588:web:882ba29934c6adadd1bcd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();