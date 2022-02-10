import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0k_SGucYWn9EeC8xTuVQUgyiRVZAJdrM",
  authDomain: "hakaton3-33bf8.firebaseapp.com",
  projectId: "hakaton3-33bf8",
  storageBucket: "hakaton3-33bf8.appspot.com",
  messagingSenderId: "978115907181",
  appId: "1:978115907181:web:6709ed7ccf5b30bcc0b964"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;