import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Create a new user with email and password
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in with email and password
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign in with Google and handle user data (optionally add to Firestore)
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  
  // Use the user data (e.g., for Firestore)
  return result.user; // ✅ Return user object to use later
};

// Sign out the current user
export const doSignOut = () => {
  return auth.signOut();
};

// Send a password reset email
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Change the current user's password
export const doPasswordChange = (password) => {
  if (!auth.currentUser) throw new Error("No authenticated user");
  return updatePassword(auth.currentUser, password);
};

// Send email verification to the current user
export const doSendEmailVerification = () => {
  if (!auth.currentUser) throw new Error("No authenticated user");
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
