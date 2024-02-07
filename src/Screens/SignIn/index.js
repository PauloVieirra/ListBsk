import React, { useState } from 'react';
import { useAuth } from '../../Context/useContext';
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Alert } from '@mui/material';
import './style.css';
import '../../../src/App.css';

const SignIn = () => {
  const { signInWithEmailAndPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Estado para armazenar o erro de login, inicialmente nulo
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      setError(null);
      await signInWithEmailAndPassword(email, password);
      setSuccessMessage('Login efetuado com sucesso.');
      // Aguardar 3 segundos antes de limpar a mensagem de sucesso
      setTimeout(() => {
        setSuccessMessage(null);
        navigate('/Ranked');
      }, 3000); // 3000 milissegundos = 3 segundos
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
      console.error('Erro ao fazer login:', error);
      setTimeout(() => {
        setError('');
      },3000);
    }
  };
  
  

  const handleSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div className="signin-container">
       <div className='divcentered'> 
      <div className='divtopsignin'>
      <div className='space'>
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}</div>
      </div>
      
      <div className='divinputsign'>
    
       <TextField
           type="email"
           placeholder="Email"
           value={email}
           style={{height:'auto', width: '90%', margin:8, backgroundColor:"#fff"}}
           onChange={(e) => setEmail(e.target.value)}
          id="outlined-multiline-flexible-signin-email"
          label="Email"
          multiline
          maxRows={4}
        />
       <TextField
            type="password"
            placeholder="Senha"
            value={password}
            style={{height:'auto',  width: '90%', margin:8, backgroundColor:"#fff"}}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-multiline-flexible-signin-password"
            label="Senha"
            multiline
            maxRows={4}
        />
      
       </div>
       <div className='divbottomsignin'>
        <Button className='btncad-primary' variant="contained" style={{ marginBottom: '10px', marginTop:'10px',width:'90%'}} onClick={handleSignIn}>
          Entrar
        </Button>
        
        <Button className='btncad-secundary' variant="outlined" color="secondary" style={{ width:'90%', backgroundColor:"#EEE", color:"#000" }}onClick={handleSignUp} >
          Cadastrar
        </Button>
      </div>
      </div>
    </div>
 );
};

export default SignIn;