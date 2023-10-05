import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAR_lmXdsWgHotMuaNvTTc2ESbnfOsg06w",
  authDomain: "monkey-blog-c4f3b.firebaseapp.com",
  projectId: "monkey-blog-c4f3b",
  storageBucket: "monkey-blog-c4f3b.appspot.com",
  messagingSenderId: "273766047512",
  appId: "1:273766047512:web:fb3b4c3e52355b2b74086d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
