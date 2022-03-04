// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1lCqS72lyWsqoAS-9Xysrt9fbj0XUUw",
  authDomain: "news-46816.firebaseapp.com",
  projectId: "news-46816",
  storageBucket: "news-46816.appspot.com",
  messagingSenderId: "1059143379283",
  appId: "1:1059143379283:web:6f91fa825a18f2020699a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
