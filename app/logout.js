import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './firebaseConfig.js'

const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
    await signOut(auth)
    console.log("delog");
})