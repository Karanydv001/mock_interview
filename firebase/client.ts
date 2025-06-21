
import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCoJ24sDwNF3qjvcSDnU9s6GlBKKQIlrUo",
  authDomain: "prepwise-9ba54.firebaseapp.com",
  projectId: "prepwise-9ba54",
  storageBucket: "prepwise-9ba54.firebasestorage.app",
  messagingSenderId: "757222275575",
  appId: "1:757222275575:web:b5957deeba0a4c9a03d6f2",
  measurementId: "G-VHGBR0HHD4"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);