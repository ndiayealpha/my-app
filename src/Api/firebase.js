// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF8BmK1gy8ac3u_OEYSq4_FojMnWUEc6I",
  authDomain: "npaapp-ac767.firebaseapp.com",
  projectId: "npaapp-ac767",
  storageBucket: "npaapp-ac767.appspot.com",
  messagingSenderId: "476352338079",
  appId: "1:476352338079:web:888aff340517e62382eaaa",
  measurementId: "G-X11ST335Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {app, analytics, db}