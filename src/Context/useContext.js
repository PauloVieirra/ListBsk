import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from '../Settings/FirebaseConect'; // Importe corretamente o módulo Firebase

const AuthContext = createContext();

const useAuth = () => {
  const { currentUser, signUpWithEmailAndPassword, signInWithEmailAndPassword, isAuthenticated, logout } = useContext(AuthContext);

  return {
    currentUser,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    isAuthenticated,
    logout
  };
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Nova variável de estado para autenticação

  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

      const { user } = userCredential;
      const { uid } = user;

      const userData = {
        email: user.email,
        uid: uid,
      };

      await firebase.database().ref(`users/${uid}`).set(userData);
    } catch (error) {
      throw error;
    }
  };

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      setIsAuthenticated(!!user); // Define isAuthenticated como true se houver um usuário logado
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logout,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    isAuthenticated // Incluímos isAuthenticated no value do contexto
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
