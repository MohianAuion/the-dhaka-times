import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Checks if Firebase is determining the current user
  const [loading, setLoading] = useState(true);

  // Used for Login/Register/Logout buttons
  const [authLoading, setAuthLoading] = useState(false);

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Register
  const createUser = (email, password) => {
    setAuthLoading(true);

    return createUserWithEmailAndPassword(auth, email, password).finally(() => {
      setAuthLoading(false);
    });
  };

  // Login
  const logInUser = (email, password) => {
    setAuthLoading(true);

    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setAuthLoading(false);
    });
  };

  // Google Login
  const loginWithGoogle = () => {
    setAuthLoading(true);

    return signInWithPopup(auth, googleProvider).finally(() => {
      setAuthLoading(false);
    });
  };

  // GitHub Login
  const loginWithGitHub = () => {
    setAuthLoading(true);

    return signInWithPopup(auth, gitHubProvider).finally(() => {
      setAuthLoading(false);
    });
  };

  // Logout
  const logOut = () => {
    setAuthLoading(true);

    return signOut(auth).finally(() => {
      setAuthLoading(false);
    });
  };

  // Update Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Email Verification
  const emailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    loading,
    setLoading,
    authLoading,
    createUser,
    logInUser,
    loginWithGoogle,
    loginWithGitHub,
    logOut,
    updateUserProfile,
    emailVerify,
    resetPassword,
  };

  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;