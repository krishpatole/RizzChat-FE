// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3RfFkA3cKNr5xFWu6Yr2oiH4NcNJyfiw",
  authDomain: "auth-23-07-2006.firebaseapp.com",
  projectId: "auth-23-07-2006",
  storageBucket: "auth-23-07-2006.firebasestorage.app",
  messagingSenderId: "811138021156",
  appId: "1:811138021156:web:41a3e871e2bf95d552e5b1",
  measurementId: "G-SMYNZN63D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export default app;