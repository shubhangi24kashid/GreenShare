
import { initializeApp } from "firebase/app";
//for authentication import below
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAsu3Gi_3HriRuNyFhxt8_27W3b_rRDQmo",
  authDomain: "greenshare-882a9.firebaseapp.com",
  projectId: "greenshare-882a9",
  storageBucket: "greenshare-882a9.firebasestorage.app",
  messagingSenderId: "685641723362",
  appId: "1:685641723362:web:29dd982fc51097ae2f5dbb",
  measurementId: "G-1YMF1Q25F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {app,auth};