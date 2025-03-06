// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnToGAsclyy1F0S5NIgVLMzxW5iBlXLK4",
  authDomain: "dragon-news-33d62.firebaseapp.com",
  projectId: "dragon-news-33d62",
  storageBucket: "dragon-news-33d62.firebasestorage.app",
  messagingSenderId: "338936803360",
  appId: "1:338936803360:web:7c05273743219ac2244c45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
