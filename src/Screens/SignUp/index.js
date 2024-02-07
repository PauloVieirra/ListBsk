import React, { useState } from 'react';
import { useAuth } from '../../Context/useContext';
import { Link, useNavigate } from 'react-router-dom';
import { Box, CardContent, CardHeader, TextField, Button } from '@mui/material' // Importando componentes do Material-UI
import '../../App.css';
import './style.css';

const SignUp = () => {
  const { signUpWithEmailAndPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState ('');
  const [btnhability, setBtnHability] = useState (false);
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

  const handleValidatePassword = () => {
    setBtnHability(password === passwordValidation && isValidEmail(email));
  };

  const isValidEmail = (email) => {
    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleValidateEmail = () => {
  
  };


  return (
  
 

 
    <div className="signup-container">
      <div className='container-bartop'>
      <Link to={'/'}>
        <div style={{margin:'10px', width:'50px', height:'30px'}}>Voltar</div>
      </Link>
      </div>
      <div className='container-battitle'>
       <div className='container-titletext'>Cadastro</div> 
       <div className='container-text'>Para criar um conta, basta informar seu e-mail e criar uma senha!</div> 
      </div>
     <div className='container-input'>
       <TextField
          type="email"
          value={email}
          style={{height:'auto', width: '90%', margin:8, backgroundColor:"#fff"}}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleValidateEmail} 
          id="outlined-multiline-flexible"
          label="Informe seu Email aqui"
          multiline
          maxRows={4}
        />
       <TextField
            type="password"
            value={password}
            style={{height:'auto', width: '90%', margin:8, backgroundColor:"#fff"}}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-multiline-flexible"
            label="Crie sua senha aqui"
            multiline
            maxRows={4}
        />
        <TextField
            type="password"
            value={passwordValidation}
            style={{height:'auto', width: '90%', margin:8, backgroundColor:"#fff"}}
            onChange={(e) => setPasswordValidation(e.target.value)}
            onBlur={handleValidatePassword}
            id="outlined-multiline-flexible"
            label="Repetir sua senha aqui"
            multiline
            maxRows={4}
        />
     </div>


      <Button className='btncad-primary' variant="contained" style={{ marginBottom: '10px', marginTop:'80px',width:'90%'}} onClick={handleSignUp} disabled={!btnhability} >
          Cadastrar
      </Button>

      {error && <p>{error}</p>}
    </div>
   
  );
};


export default SignUp;
