import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Jumbotron from '../components/Jumbotron';

export default function Home() {
  return (
    <Box component='main' sx={{ flexGrow: 1, mt: '3em' }}>
      <Jumbotron />
      <Container>Home Content</Container>
    </Box>
  );
}
