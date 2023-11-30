import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Wellcome from '../Screens/Wellcome/index'; // Corrigi o nome do componente
import SignUp from '../Screens/SignUp/index';
import SignIn from '../Screens/SignIn/index';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wellcome />} /> 
      <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default AuthRoutes;


