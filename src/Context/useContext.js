import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from '../Settings/FirebaseConect';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        const userRef = firebase.database().ref(`users/${user.uid}`);
        userRef.once('value', (snapshot) => {
          const userData = snapshot.val();
          setUser(userData);
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signInWithEmailAndPassword,
    logout,
    signUpWithEmailAndPassword,
    currentUser, // if needed in your app
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }
  return context;
};

export { AuthProvider, useAuth };
