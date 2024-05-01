import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from  '../firebase/firebase.config.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const login = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('auth state changed ' , currentUser);
      setUser(currentUser)
      setLoading(false)
    });
    return () => {
       unsubscribe()
    }
  },[])

  const authInfo = {
   user,
   createUser,
   login,
   logOut,
   loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer></ToastContainer>
    </AuthContext.Provider>
  );
};

export default AuthProvider;