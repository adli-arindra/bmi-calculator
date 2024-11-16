// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqy12KCgqLJleA_z_ms9oa82bz2ofgaGo",
  authDomain: "bmi-calculator-a10cd.firebaseapp.com",
  projectId: "bmi-calculator-a10cd",
  storageBucket: "bmi-calculator-a10cd.firebasestorage.app",
  messagingSenderId: "841776914914",
  appId: "1:841776914914:web:38eae4c73f36d89a3019bb",
  measurementId: "G-S89HBWY7MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);