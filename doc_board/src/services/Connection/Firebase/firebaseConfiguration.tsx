// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhzAvVSh9fItrxMyFkdvHLoyO63N8ZFdE",
  authDomain: "docboard-faa6b.firebaseapp.com",
  projectId: "docboard-faa6b",
  storageBucket: "docboard-faa6b.appspot.com",
  messagingSenderId: "638554390211",
  appId: "1:638554390211:web:2249c1ed72679e8e76ac76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firebaseDB = getFirestore(app);