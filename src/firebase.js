// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2pt8RxAwi56Fvc_6al_F59GVc8TQ0fXc",
  authDomain: "ubooks-nwu.firebaseapp.com",
  projectId: "ubooks-nwu",
  storageBucket: "ubooks-nwu.appspot.com",
  messagingSenderId: "13997817083",
  appId: "1:13997817083:web:74601ddd38d5df1e2a045e",
  measurementId: "G-PJ2Z9MZXVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
