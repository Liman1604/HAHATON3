import React, { useContext, useEffect, useReducer, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider, //! ДЛЯ АВТОРИЗАЦИИ ЧЕРЕЗ ГУГЛ   
    onAuthStateChanged, signInWithEmailAndPassword, //! ЧТО-БЫ ПОНИМАТЬ ПОЛЬЗОВАТЕЛЬ В СИСТЕМЕ ИЛИ НЕТ
    signInWithPopup, //! ЧТОБЫ ВЫШЛО МОДАЛЬНОЕ ОКНО
    signOut, //! ЧТОБЫ ВЫЙТИ ИЗ СИСТЕМЫ
} from 'firebase/auth';
import { auth } from '../fireBase';

export const AuthContext = React.createContext();

const INIT_STATE = {
    user: null
};

const reduser = (state, action) => {
    switch (action.type) {
        case 'CHECK_USER':
            return { ...state, user: action.payload }
        default:
            return state
    }
}

const AuthProvider = (props) => {

    const [state, dispatch] = useReducer(reduser, INIT_STATE);
    const [user, setUser] = useState("");


    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();


    const authWithGoogle = async () => {
        try {
          const response = await signInWithPopup(auth, googleProvider);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    useEffect(() => {
        return () => {
          unsubscribe();
        };
      }, []);

    const values = {
        signUp,
        logIn,
        logOut,
        authWithGoogle,
        unsubscribe,
        user,
      };

    return (
        <AuthContext.Provider value={{
         values
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export function useUserAuth() {
    return useContext(AuthContext);
}

export default AuthProvider;