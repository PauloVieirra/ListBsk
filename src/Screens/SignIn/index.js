import React, { useState } from 'react';
import { useAuth } from '../../Context/useContext';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardMedia, Button } from '@mui/material' // Importando componentes do Material-UI
import './style.css';
import '../../../src/App.css';

const SignIn = () => {
 const { signInWithEmailAndPassword } = useAuth();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();

 const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      navigate('/Ranked');
    } catch (error) {
      // Lidar com erros de login, exibir mensagem de erro, etc.
      console.error('Erro ao fazer login:', error);
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

      <Button  onClick={handleSignIn}>Entrar</Button>

      <Link to="/SignUp" className='btncad' >
      <Button style={{color:'#fff'}}>Cadastrar</Button>
      </Link>
    
    </div>
 );
};

export default SignIn;