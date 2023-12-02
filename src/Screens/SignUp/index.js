import React, { useState } from 'react';
import { useAuth } from '../../Context/useContext';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardMedia, Button } from '@mui/material' // Importando componentes do Material-UI
import '../../App.css';

const SignUp = () => {
  const { signUpWithEmailAndPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  


  const handleSignUp = async () => {
    try {
      setError(null);
      await signUpWithEmailAndPassword(email, password);
      navigate('/Ranked');// Redirecione para a tela 'Home' após o cadastro bem-sucedido
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signin-container">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSignUp}>Cadastrar</Button>

      <Link to="/SignIn">
        <Button >SigIn</Button>
      </Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
