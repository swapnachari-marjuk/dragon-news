// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8-DCbjbdmIKdl9INf5S3aK7bLK1DkCU4",
  authDomain: "dragon-news-with-firebas-c8e2d.firebaseapp.com",
  projectId: "dragon-news-with-firebas-c8e2d",
  storageBucket: "dragon-news-with-firebas-c8e2d.firebasestorage.app",
  messagingSenderId: "992601873887",
  appId: "1:992601873887:web:1f5466364b355b99ae786a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)