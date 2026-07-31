import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // createUserWithEmailAndPassword
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInWithEmailAndPassword
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

//   signOut
const logOut=()=>{
    signOut(auth);
}

  const authInfo = {
    user,
    createUser,
    logInUser,
    loginWithGoogle,
    logOut,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
