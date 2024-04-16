// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVYG8w98Ln5hZleXAzgKbWHGTZJ_hCdU0",
    authDomain: "linkz-project.firebaseapp.com",
    databaseURL: "https://linkz-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "linkz-project",
    storageBucket: "linkz-project.appspot.com",
    messagingSenderId: "450501472166",
    appId: "1:450501472166:web:8ee275e9cac4900197e967",
    measurementId: "G-VB4DMDM295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;