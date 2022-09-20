// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGzK7snvzHTo0SHFJu_lV2tKSxgw1At8s",
  authDomain: "e-commerce-61bd4.firebaseapp.com",
  projectId: "e-commerce-61bd4",
  storageBucket: "e-commerce-61bd4.appspot.com",
  messagingSenderId: "881391703495",
  appId: "1:881391703495:web:3686c2bfebca2e606c75e2",
  measurementId: "G-RV7293KLBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
