import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp,getApps } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "earlylogistics-5bed7.firebaseapp.com",
  projectId: "earlylogistics-5bed7",
  storageBucket: "earlylogistics-5bed7.appspot.com",
  messagingSenderId: "1020013630952",
  appId: "1:1020013630952:web:a658b0827f6fe772e8405d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage }


