// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx33VhMn5ZfSDJdY3IhnTzY76eDlO4A9E",
  authDomain: "mood-flix.firebaseapp.com",
  projectId: "mood-flix",
  storageBucket: "mood-flix.appspot.com",
  messagingSenderId: "90466198315",
  appId: "1:90466198315:web:9c209d1f682fe97c159b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();