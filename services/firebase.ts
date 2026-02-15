
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGA5KjoUUV9eBkmIG1Rggnv8POsicXm_8",
  authDomain: "hotjobsconnect-67b86.firebaseapp.com",
  projectId: "hotjobsconnect-67b86",
  storageBucket: "hotjobsconnect-67b86.firebasestorage.app",
  messagingSenderId: "586899422960",
  appId: "1:586899422960:web:86a23e6d4858e0c5594c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const microsoftProvider = new OAuthProvider('microsoft.com');
