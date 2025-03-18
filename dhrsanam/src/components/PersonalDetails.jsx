import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Container, Typography } from '@mui/material';

const PersonalDetails = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Typography>You are not logged in!</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">Personal Details</Typography>
      <Typography>Email: {user.email}</Typography>
    </Container>
  );
};

export default PersonalDetails;
