// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHy5yEwbWtLLMr7MZPDyPDNM-0_M5IveI",
  authDomain: "the-dhaka-times-bc4d4.firebaseapp.com",
  projectId: "the-dhaka-times-bc4d4",
  storageBucket: "the-dhaka-times-bc4d4.firebasestorage.app",
  messagingSenderId: "817350361051",
  appId: "1:817350361051:web:0a41aed4ca2b9b37b371fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

