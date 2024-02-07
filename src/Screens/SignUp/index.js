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
  const [errorEmail, setErrorEmail] = useState(null);
  const navigate = useNavigate();



  const handleSignUp = async () => {
    try {
      setError(null);
      await signUpWithEmailAndPassword(email, password);
      navigate('/Ranked'); // Redireciona para a tela 'Home' após o cadastro bem-sucedido
    } catch (error) {
      if (error.code === 'auth/weak-password') {
        setError('A senha deve ter pelo menos 6 caracteres.');
      } else {
        setError('Ocorreu um erro ao criar a conta. Por favor, tente novamente.');
      }
    }
  };
  

  const handleValidatePassword = () => {
    const isEmailValid = isValidEmail(email);
    setBtnHability(password === passwordValidation && isEmailValid);
    setError(!isEmailValid ? '' : passwordValidation !== password ? 'Sua senha deve ser igual ao campo anterior' : null);
};


  const isValidEmail = (email) => {
    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
  };

  const handleValidateEmail = () => {
    const isEmailValid = isValidEmail(email);
    setErrorEmail( email != '' && !isEmailValid ?  'Informe um email válido' : null);
  };


  return (
  
 

 
    <div className="signup-container">
      <div className='container-bartop'>
      <Link to={'/'} className='link-style' >
        <div className='bt-back'>Voltar</div>
      </Link>
      </div>
      <div className='container-battitle'>
       <div className='container-titletext'>Cadastro</div> 
       <div className='container-text'>Para criar uma conta, basta informar seu e-mail e criar uma senha!</div> 
      </div>
     <div className='container-input'>
       { errorEmail &&
     <div className='container-notification'>{errorEmail && <p>{errorEmail}</p>}</div>
       }
       <TextField
          type="email"
          value={email}
          style={{height:'auto', width: '90%', margin:8, backgroundColor:"#fff"}}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleValidateEmail} 
          id="outlined-multiline-flexible-signup-email"
          label="Informe seu email aqui"
          multiline
          maxRows={4}
        />

       <TextField
            type="password"
            value={password}
            style={{height:'auto', width: '90%', margin:8, backgroundColor:"#fff"}}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-multiline-flexible-signup-password"
            label="Crie sua senha aqui"
            multiline
            maxRows={4}
        />
         { error &&
        <div className='container-notification'>{error && <p>{error}</p>}</div>
         }
        <TextField
            type="password"
            value={passwordValidation}
            style={{height:'auto', width: '90%', margin:8, backgroundColor:"#fff"}}
            onChange={(e) => setPasswordValidation(e.target.value)}
            onBlur={handleValidatePassword}
            id="outlined-multiline-flexible-signup-confirm"
            label="Repetir sua senha aqui"
            multiline
            maxRows={4}
        />
        
     </div>


      <Button className='btncad-primary' variant="contained" style={{ marginBottom: '10px', marginTop:'80px',width:'90%'}} onClick={handleSignUp} disabled={!btnhability} >
          Cadastrar
      </Button>

      
    </div>
   
  );
};


export default SignUp;
