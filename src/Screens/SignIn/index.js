import React, { useState } from 'react';
import { useAuth } from '../../Context/useContext';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

const SignIn = () => {
 const { signInWithEmailAndPassword } = useAuth();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();

 const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(email, password);
      navigate('/');
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
      <button onClick={handleSignIn}>Sign In</button>
      <Link to="/SignUp">
         <button>Sign Up</button>
      </Link>
    
    </div>
 );
};

export default SignIn;