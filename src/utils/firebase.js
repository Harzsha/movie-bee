// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClybDAwBjHqDqLxbcBzTOdwituD5nWduI",
    authDomain: "movie-bees.firebaseapp.com",
    projectId: "movie-bees",
    storageBucket: "movie-bees.firebasestorage.app",
    messagingSenderId: "40076135904",
    appId: "1:40076135904:web:ba8cf45bbdbf94ecfbaf85",
    measurementId: "G-4ZH8WY9TRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);