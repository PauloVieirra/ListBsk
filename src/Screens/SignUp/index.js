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
    <div className="signup-container">
      
<Box
      component="form"
      sx={{
        '& > :not(style)': { ml: '5%', mr: '5%', mb: 2,mt:1, width: '90vw', backgroundColor:"#000"},
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
           type="email"
           placeholder="Email"
           value={email}
           style={{height:'auto', backgroundColor:"#fff"}}
           onChange={(e) => setEmail(e.target.value)}
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
        />
       <TextField
            type="password"
            placeholder="Senha"
            value={password}
            style={{height:'auto', backgroundColor:"#fff"}}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-multiline-flexible"
            label="Senha"
            multiline
            maxRows={4}
        />
      </Box>





      <Button onClick={handleSignUp}>Cadastrar</Button>

      <Link to="/SignIn">
        <Button >SigIn</Button>
      </Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
