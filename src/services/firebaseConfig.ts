import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKtOlbMnlp8G2FDj3dSE0TUwCStJDOVZI",
  authDomain: "crypton-store.firebaseapp.com",
  projectId: "crypton-store",
  storageBucket: "crypton-store.appspot.com",
  messagingSenderId: "56990810501",
  appId: "1:56990810501:web:3deeb6d92d47d100ef84ec",
};

export const app = initializeApp(firebaseConfig);
