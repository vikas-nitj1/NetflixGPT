// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOHnfX5WM_RxmOh8kQjrTwjbAK64SB3mI",
  authDomain: "movieapp-fe538.firebaseapp.com",
  projectId: "movieapp-fe538",
  storageBucket: "movieapp-fe538.appspot.com",
  messagingSenderId: "574189978820",
  appId: "1:574189978820:web:eaba452e2175a8d6f4f591",
  measurementId: "G-LHLGVPMKQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();