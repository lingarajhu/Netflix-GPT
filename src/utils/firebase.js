import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJNNIj_v9j-H70Ukp1uf1KGSF2WTPq-Ms",
  authDomain: "netflixgpt-fe1af.firebaseapp.com",
  projectId: "netflixgpt-fe1af",
  storageBucket: "netflixgpt-fe1af.appspot.com",
  messagingSenderId: "982909587158",
  appId: "1:982909587158:web:a9d9ea8c69509734188377",
  measurementId: "G-QTDJX33EBP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
