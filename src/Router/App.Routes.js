import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Screens/Home/index';
import Eventos from '../Screens/Events';
import Rank from '../Screens/Ranked';
import Account from '../Screens/Account';
import { AuthProvider } from '../Context/useContext';
import MenuMobile from '../Compenents/MenuBar';

const AppRoutes = () => {
  return (
    <div>
      <AuthProvider>
      <MenuMobile/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Events" element={<Eventos />} /> 
        <Route path="/Ranked" element={<Rank />} /> 
        <Route path="/Account" element={<Account />} /> 
      </Routes>
      </AuthProvider>
    </div>
 
   
  );
};

export default AppRoutes;


