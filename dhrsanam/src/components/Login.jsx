import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating successful login
    login({ email });
    navigate('/personal-details');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField 
          label="Email" 
          fullWidth 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          margin="normal" 
        />
        <TextField 
          label="Password" 
          type="password" 
          fullWidth 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          margin="normal" 
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
