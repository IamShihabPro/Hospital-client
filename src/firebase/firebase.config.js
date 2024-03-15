import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQy_SOal8-SAuL7lKIq9y-xV3UyhhUvLg",
  authDomain: "simple-firebase-fdacd.firebaseapp.com",
  projectId: "simple-firebase-fdacd",
  storageBucket: "simple-firebase-fdacd.appspot.com",
  messagingSenderId: "474830598342",
  appId: "1:474830598342:web:d7ef5cefa3536447cee7c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);