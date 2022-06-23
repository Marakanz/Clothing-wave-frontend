// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHmwD6rqXxLb9vfm75oomHux8Lr6nPF4Y",
  authDomain: "clothing-wave.firebaseapp.com",
  projectId: "clothing-wave",
  storageBucket: "clothing-wave.appspot.com",
  messagingSenderId: "400651197151",
  appId: "1:400651197151:web:ebec23ae27d29db9f5a76a",
  measurementId: "G-H118NJ4DBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);