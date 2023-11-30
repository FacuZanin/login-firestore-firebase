import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"
import { auth, db } from './app/firebaseConfig.js';
import { loginCheck } from "./app/loginCheck.js";
import "./app/registerForm.js";
import './app/logout.js';
import './app/loginCheck.js';
import "./app/loginForm.js";
import "./app/googleLogin.js";
import "./app/postList.js";
import { setupPost } from "./app/postList.js";

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const querySnapshot = await getDocs(collection (db, 'post'))
        setupPost(querySnapshot.docs)
    } else {
        setupPost([])
    }
    loginCheck(user)
});
