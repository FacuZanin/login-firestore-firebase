// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfIf8AywXRj8X7-UPhtkWOHNMclL2_CX8",
  authDomain: "facundozanin-blog.firebaseapp.com",
  projectId: "facundozanin-blog",
  storageBucket: "facundozanin-blog.appspot.com",
  messagingSenderId: "19650727979",
  appId: "1:19650727979:web:63bbae61403f51becdda6e",
  measurementId: "G-8QL2JHKYNV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)