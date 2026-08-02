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
  const [loading, setLoading] = useState(true);

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
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // Login
  const logInUser = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // Google Login
  const loginWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
  };

  // GitHub Login
  const loginWithGitHub = () => {
    setLoading(true);

    return signInWithPopup(auth, gitHubProvider).finally(() => {
      setLoading(false);
    });
  };

  // Logout
  const logOut = () => {
    setLoading(true);

    return signOut(auth).finally(() => {
      setLoading(false);
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