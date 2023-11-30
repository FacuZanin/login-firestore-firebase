import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebaseConfig.js";
import {showMessage} from "./message.js"

const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = registerForm["register-email"].value;
  const password = registerForm["register-password"].value;
  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth,email,password); 
    // cierra el modal de registro
    const registerModal = document.querySelector('#registerModal')
    const modal = bootstrap.Modal.getInstance(registerModal)
    modal.hide()

    showMessage("Welcome " + userCredentials.user.email, "succes")

  } catch (error) {
    console.log(error.code)
    if (error.code === 'auth/weak-password'){
        showMessage("la contraseña es incorrecta ")
    }
    else if (error.code === 'auth/invalid-email'){
        showMessage("el email es invalido ")
    }
    if (error.code === 'auth/email-already-in-use'){
        showMessage("la cuenta esta en uso ")
    }
  }
});
