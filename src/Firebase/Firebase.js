// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKHcY6C03R2-CUUB3mfiRorazIfAE101w",
  authDomain: "conceptual-practice-7fedb.firebaseapp.com",
  projectId: "conceptual-practice-7fedb",
  storageBucket: "conceptual-practice-7fedb.firebasestorage.app",
  messagingSenderId: "200922015723",
  appId: "1:200922015723:web:5efc8bb03cc4fce0095bae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
