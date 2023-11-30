import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebaseConfig.js";
import {showMessage} from "./message.js"

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    try {
        const userCredencials = await signInWithEmailAndPassword(auth,email,password)
        const loginModal = document.querySelector('#loginModal')
        const modal = bootstrap.Modal.getInstance(loginModal)
        modal.hide()
        console.log(userCredencials);

    } catch (error) {
    console.log(error.code)
       if (error.code === 'auth/invalid-login-credentials')
        showMessage("Error. Intente de ")
    }
  })