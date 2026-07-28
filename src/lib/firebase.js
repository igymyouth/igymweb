// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxJFMciVDFyQnhJgYckEUi96c9KZdQaDk",
  authDomain: "igymweb.firebaseapp.com",
  projectId: "igymweb",
  storageBucket: "igymweb.firebasestorage.app",
  messagingSenderId: "479568094609",
  appId: "1:479568094609:web:e7d81e86e01996a31fa630",
  measurementId: "G-J8LV618JFD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);