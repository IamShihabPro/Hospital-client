import React, { useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const auth = getAuth(app)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password)
    }

    const resetPassword= email =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile=(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, loggedUser=>{
            console.log('ogged user in inside auth state observer', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
      }

    return (
        <div value={authInfo}>
            {children}
        </div>
    );
};

export default AuthProvider;