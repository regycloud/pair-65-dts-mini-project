// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmGHSc9QRqKc1RUl4h9PeefOcYdZmHl5c",
  authDomain: "movie-6ebfe.firebaseapp.com",
  projectId: "movie-6ebfe",
  storageBucket: "movie-6ebfe.appspot.com",
  messagingSenderId: "123046215367",
  appId: "1:123046215367:web:4e6e7800944c7a2581c8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
    try {
        const userYangDidapatkan = await createUserWithEmailAndPassword(auth, email, password);
        console.log("user yang terregis dan berhasil login adalah", userYangDidapatkan.user)      
    }
    catch(err) {
        console.log(err);
        console.log("Error code auth", err.code);
        console.log("Error msg auth", err.message);
    }
}

const loginDenganEmailDanPassword = async (email, password) => {
    try {
        const userYangLogin = await signInWithEmailAndPassword(auth, email, password);
        
        console.log("User yang sekarang ini yang berhasil login adalah", userYangLogin.user);
    }
    catch(err) {
        console.log("Error code auth", err.code);
        console.log("Error msg auth", err.message);
    }

}

const resetPasswordKarenaLupa = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    }
    catch(err) {
        console.log(err);
    }
}

const keluarDariAplikasi = async () => {
    try{
        await signOut(auth);
    }
    catch(err) {
        console.log(err)
    }

}

export {
    auth,
    registerDenganEmailDanPassword,
    loginDenganEmailDanPassword,
    resetPasswordKarenaLupa,
    keluarDariAplikasi,
}