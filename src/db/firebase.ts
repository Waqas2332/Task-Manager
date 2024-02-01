import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5oRuX3DhLLotMq7KQcdK36Rs7qVE4cFQ",
  authDomain: "todo-app-ad87a.firebaseapp.com",
  projectId: "todo-app-ad87a",
  storageBucket: "todo-app-ad87a.appspot.com",
  messagingSenderId: "283695805303",
  appId: "1:283695805303:web:bd9b2cb7105ba325182772",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
