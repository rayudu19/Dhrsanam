import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup, navigate to login
    navigate('/login');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Signup</Typography>
      <form onSubmit={handleSignup}>
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
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
