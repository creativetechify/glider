import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBogF8wzykNdM4KOGQeqp931iG1y9E7tNY",
  authDomain: "glider-2235b.firebaseapp.com",
  projectId: "glider-2235b",
  storageBucket: "glider-2235b.appspot.com",
  messagingSenderId: "355763750840",
  appId: "1:355763750840:web:e253b5f776d5b0c471314d",
  measurementId: "G-ZN7399H42R"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);


