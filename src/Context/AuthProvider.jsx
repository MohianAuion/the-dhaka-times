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
const gitHubProvider= new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading, setLoading]=useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // createUserWithEmailAndPassword
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInWithEmailAndPassword
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

//   signInWithGitHub
const loginWithGitHub=()=>{
     setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
}

//   signOut
const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

// update profile

const updateUserProfile=(name, photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name, 
        photoURL:photo,
    })

}

// sendEmailVerification
const emailVerify=()=>{
    return sendEmailVerification(auth.currentUser);
}

// sendPasswordResetEmail
const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth, email);
}

  const authInfo = {
    user,
    createUser,
    logInUser,
    loginWithGoogle,
    loginWithGitHub,
    updateUserProfile,
    emailVerify,
    resetPassword,
     logOut,
    loading,
    setLoading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
