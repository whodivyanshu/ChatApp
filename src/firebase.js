import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDa0_1--xo8GlJ_TKxqNu8WH9JN1iRSdMU",
    authDomain: "deepeshno.firebaseapp.com",
    projectId: "deepeshno",
    storageBucket: "deepeshno.appspot.com",
    messagingSenderId: "1068525142128",
    appId: "1:1068525142128:web:858a93352f986b9015b4b5"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();