// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dreamdwell-estate-370b4.firebaseapp.com",
  projectId: "dreamdwell-estate-370b4",
  storageBucket: "dreamdwell-estate-370b4.appspot.com",
  messagingSenderId: "209058886103",
  appId: "1:209058886103:web:6e35e60700e3a703719b92",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
