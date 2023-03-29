import { Box, Divider } from '@mui/material';
import React from 'react';
import Compare from '../components/Compare';
import Jumbotron from '../components/Jumbotron';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';

export default function Home() {
  return (
    <Box component='main' sx={{ flexGrow: 1, mt: '3em' }}>
      <Jumbotron />
      <Compare />
      <Divider />
      <Partners />
      <Divider />
      <Reviews />
    </Box>
  );
}
