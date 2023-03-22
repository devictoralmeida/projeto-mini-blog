import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBlgOqrdZxHIc2KrOK0T-S0IeHlemUe0tQ",
  authDomain: "mini-blog-3cd4f.firebaseapp.com",
  projectId: "mini-blog-3cd4f",
  storageBucket: "mini-blog-3cd4f.appspot.com",
  messagingSenderId: "839170788896",
  appId: "1:839170788896:web:2fbd27c42936981539b645"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};