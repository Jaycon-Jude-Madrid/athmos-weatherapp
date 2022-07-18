import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjElI5mZBH3PTp1SGfFEKgU45mlNHdqTo",
  authDomain: "weather-9d891.firebaseapp.com",
  projectId: "weather-9d891",
  storageBucket: "weather-9d891.appspot.com",
  messagingSenderId: "888387343705",
  appId: "1:888387343705:web:7a5e0adaf109873ddfa848",
  measurementId: "G-XQ0NBXHK4J",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
