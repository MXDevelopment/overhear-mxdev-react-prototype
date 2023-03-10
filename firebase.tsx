import { useState, useEffect } from 'react';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDxWEW3wxPNEUjkAkdvUeQLqc57AqQ8KTc",
  authDomain: "overhear2-backup.firebaseapp.com",
  databaseURL: "https://overhear2-backup-default-rtdb.firebaseio.com",
  projectId: "overhear2-backup",
  storageBucket: "overhear2-backup.appspot.com",
  messagingSenderId: "213322686439",
  appId: "1:213322686439:web:d85e39a290871b3055a742",
  measurementId: "G-HJFNC1HD2B"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);