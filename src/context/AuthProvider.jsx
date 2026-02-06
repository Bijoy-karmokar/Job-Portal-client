import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './../firebase/firebase.init';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        return ()=>{
            unSubcribe()
        }
    },[])

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleProvider =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    const authInfo={
         user,
         loading,
         createUser,
         signInUser,
         logOut,
         googleProvider
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;