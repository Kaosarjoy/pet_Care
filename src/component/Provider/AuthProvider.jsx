import React, { createContext, useEffect, useState } from 'react';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider,
    signInWithPopup // 💡 নতুন ইম্পোর্ট
} from "firebase/auth";
import app from '../../firebase/firebase.config';

// 1. AuthContext তৈরি করা
export const AuthContext = createContext();

// 2. Firebase Auth এবং Google Provider ইনিশিয়ালাইজ করা
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const createUser = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithGoogle = () => {
        setLoading(true); 
        return signInWithPopup(auth, googleProvider);
    };

    
    const logOutUser = () => {
        setLoading(true); 
        return signOut(auth);
    };

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User state changed:', currentUser); 
            setLoading(false); 
            setUser(currentUser);
        });
        return () => unsubscribe(); 
        
        
    }, []);
    const authInfo = {
        user,
        loading, 
        createUser,
        signInUser,
        signInWithGoogle,
        logOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;