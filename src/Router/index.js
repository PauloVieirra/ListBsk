import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRoutes from './Auth.Routes';
import AppRoutes from './App.Routes';
import { useAuth } from '../Context/useContext';


const AppRoutesControl = () => {
    const { user } = useAuth();
  return (
    <Router> 
    <Routes>
    <Route path="/*" element={user ? <AppRoutes /> : <AuthRoutes />} />
    </Routes>
  </Router>
  );
};

export default AppRoutesControl;