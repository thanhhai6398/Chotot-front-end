// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9OTKcwEkbOgWqPgmnaFK8VoPmLYIitYI",
    authDomain: "chotot-3fb17.firebaseapp.com",
    projectId: "chotot-3fb17",
    storageBucket: "chotot-3fb17.appspot.com",
    messagingSenderId: "494688642742",
    appId: "1:494688642742:web:fbbdc033388e9f684ca817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);