// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfkS71J2Lr4SmTdSfXKJbTDs3o-e4xfUw",
  authDomain: "contact-saver-f6d58.firebaseapp.com",
  projectId: "contact-saver-f6d58",
  storageBucket: "contact-saver-f6d58.appspot.com",
  messagingSenderId: "88748684202",
  appId: "1:88748684202:web:e4708f2b0b58d8993271d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)