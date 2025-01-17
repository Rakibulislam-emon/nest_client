/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { ap } from
import { auth } from "../firebase/firebase.config.js";
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);

// const auth = getAuth(app);

export default function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // For creating a new user (sign-up)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // For signing in an existing user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // For logging out
  const logOut = () => {
    setLoading(true);
    // localStorage.removeItem("access-token"); // Remove token on logout if added
    return signOut(auth);
  };

  // For Google sign-in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Effect to listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state with the current user
      setLoading(false); // Set loading to false when authentication state has been determined
    });
    return () => {
      return unsubscribe(); // Cleanup on component unmount
    };
  }, []);

  console.log(user);
  // Context value to be provided to the children components
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
