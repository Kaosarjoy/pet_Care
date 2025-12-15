// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI6TiYME7D5ZIbzyjcjF1ALPliCs-SE6Q",
  authDomain: "petcare-aec8a.firebaseapp.com",
  projectId: "petcare-aec8a",
  storageBucket: "petcare-aec8a.firebasestorage.app",
  messagingSenderId: "310282976632",
  appId: "1:310282976632:web:7bfd4858d64feb81e3dc8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;