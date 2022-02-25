// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpDZj6iRCgFAo81JIReNE_9gHo3_M6L5g",
  authDomain: "burmeet-6fba4.firebaseapp.com",
  projectId: "burmeet-6fba4",
  storageBucket: "burmeet-6fba4.appspot.com",
  messagingSenderId: "678208845333",
  appId: "1:678208845333:web:2661bd3f3818374ab1401c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// asi exporto la base de datos de firestore para usarla en la app
export const baseDatos = getFirestore(app);