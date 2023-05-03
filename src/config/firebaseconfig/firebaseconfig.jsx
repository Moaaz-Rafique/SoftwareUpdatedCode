// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE7PwqRZCux-cG5556Rl1q0hA1K8N4rbQ",
  authDomain: "fb-db-auth-7c1bf.firebaseapp.com",
  projectId: "fb-db-auth-7c1bf",
  storageBucket: "fb-db-auth-7c1bf.appspot.com",
  messagingSenderId: "1021803340729",
  appId: "1:1021803340729:web:9457650ce36993f8014c68",
  measurementId: "G-R6J29CXQ66",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
