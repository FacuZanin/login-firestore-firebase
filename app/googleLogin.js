import { GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebaseConfig.js";
import { showMessage } from "./message.js"

const googleButton = document.querySelector("#google-login");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const provider = new GoogleAuthProvider()

  try {
    const userCredencials= await signInWithPopup(auth,provider)
    console.log(userCredencials)

    const modal = bootstrap.Modal.getInstance(document.querySelector('#loginModal'))
    modal.hide()
    showMessage("Welcome " + userCredencials.user.displayName, "success")

  } catch (error) {
    console.log(error)
  }


});