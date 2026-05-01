import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD5SBwsznvQ7sbWu4yjjMqvdbYqLLWN09g",
  authDomain: "our-ac29c.firebaseapp.com",
  databaseURL: "https://our-ac29c-default-rtdb.firebaseio.com",
  projectId: "our-ac29c",
  storageBucket: "our-ac29c.firebasestorage.app",
  messagingSenderId: "71228953116",
  appId: "1:71228953116:web:3b9daf2592ca5d841405d9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
