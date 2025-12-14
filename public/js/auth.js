import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

window.login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  signInWithEmailAndPassword(auth, email, password)
    .catch(err => error.innerText = err.message);
};

window.signup = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  createUserWithEmailAndPassword(auth, email, password)
    .catch(err => error.innerText = err.message);
};

window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .catch(err => alert(err.message));
};

window.logout = () => {
  signOut(auth);
};
