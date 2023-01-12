import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "axd-auto-service.firebaseapp.com",
  projectId: "axd-auto-service",
  storageBucket: "axd-auto-service.appspot.com",
  messagingSenderId: "555861627965",
  appId: "1:555861627965:web:d98ae0cc450cd19a410654",
  measurementId: "G-SHZSG75575",
});

export const db = getFirestore(app);
