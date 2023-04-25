
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDX0Y9-rQnPh1EnVfo-1MV82naZjIDR8Gw",
  authDomain: "chatapp-59b33.firebaseapp.com",
  projectId: "chatapp-59b33",
  storageBucket: "chatapp-59b33.appspot.com",
  messagingSenderId: "700849359202",
  appId: "1:700849359202:web:f6623fa13e233c9fa8c43b",
  measurementId: "G-4X1DXXJM1Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);
export const storage = getStorage()