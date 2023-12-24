import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Wellcome from '../Screens/Wellcome/index'; // Corrigi o nome do componente
import SignUp from '../Screens/SignUp/index';
import SignIn from '../Screens/SignIn/index';
import Cadastro from '../Screens/Cadastro';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wellcome />} /> 
      <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cadastro" element={<Cadastro />} />
    </Routes>
  );
};

export default AuthRoutes;


