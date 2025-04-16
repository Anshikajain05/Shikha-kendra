// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfOGTODK-2eGj9U-D2uCMaLAEFvyojPwE",
  authDomain: "shikha-kendra.firebaseapp.com",
  projectId: "shikha-kendra",
  storageBucket: "shikha-kendra.firebasestorage.app",
  messagingSenderId: "841396106964",
  appId: "1:841396106964:web:63bffbc07af40a6e39ed41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;