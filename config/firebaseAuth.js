// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvmyS-aSlu8LpesaIwi3aTFV027jvEJgY",
  authDomain: "fir-auth-97811.firebaseapp.com",
  projectId: "fir-auth-97811",
  storageBucket: "fir-auth-97811.appspot.com",
  messagingSenderId: "37083860232",
  appId: "1:37083860232:web:da05bf4d418abb1e4330bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);