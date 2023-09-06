// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH4q4NkMQztBBP-bwZpQPhJu_WbNcYn7w",
  authDomain: "the-embrione.firebaseapp.com",
  projectId: "the-embrione",
  storageBucket: "the-embrione.appspot.com",
  messagingSenderId: "592971124688",
  appId: "1:592971124688:web:b4cd2881ffe680ad7373d5"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);