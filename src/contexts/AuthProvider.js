import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";



export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState({});

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const googleSignIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe();
    }, []);

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signInEmailPassword,
        user,
        googleSignIn,
        updateUser,
        loading,
        booking,
        setBooking,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;