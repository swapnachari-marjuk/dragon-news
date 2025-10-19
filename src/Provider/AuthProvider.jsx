import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
      } else {
        console.log("No User Signed In.");
      }
    });
    return () => unsubscribe();
  }, []);

  const logOutUser = () => {
    return signOut(auth);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authData = {
    user,
    setUser,
    createUser,
    logOutUser,
    logInUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export { AuthProvider };
