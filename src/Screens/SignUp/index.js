import React, { useState } from 'react';
import { useAuth } from '../../Context/useContext';
import { Link, useNavigate } from 'react-router-dom';

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
      navigate('/Home'); // Redirecione para a tela 'Home' após o cadastro bem-sucedido
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
      <button onClick={handleSignUp}>Sign Up</button>
      <Link to="/SignIn">
        <button>SigIn</button>
      </Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
