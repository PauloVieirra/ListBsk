import React from 'react';
import AppRoutesControl from './Router/index';
import { AuthProvider, AuthContext } from './Context/useContext';


const App = () => {
  return (
    <AuthProvider>
      <AppRoutesControl /> 
    </AuthProvider>
         
   
    
  );
};

export default App;
