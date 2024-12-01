import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBrjOPWJMc9SeMUC8Pgbmf6nNxVNgfw9Q",
  authDomain: "poyectoreact.firebaseapp.com",
  projectId: "poyectoreact",
  storageBucket: "poyectoreact.firebasestorage.app",
  messagingSenderId: "537083243228",
  appId: "1:537083243228:web:b4c41bc1e0a057c31ea219",
  measurementId: "G-VNKKFRK62J"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)


