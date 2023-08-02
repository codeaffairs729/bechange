import { Box, Container, Divider } from '@mui/material';
import React from 'react';
import Compare from '../components/Compare';
import Jumbotron from '../components/Jumbotron';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';
import AdSection from '../components/AdSection';

export default function Home() {
  return (
    <Box component='main' sx={{ flexGrow: 1, mt: '3em' }}>
      <Jumbotron
        title={'Dein wirklich grünes Vergleichsportal'}
        desc={'Transparent, sicher & einfach'}
        btnText={'Vergleiche'}
        link={true}
      />
      <Compare />
      <Divider />
      <Partners />
      <Divider />
      <Container>
        <AdSection
          title={'Blog-Artikel'}
          desc={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus libero ullam at ipsum quibusdam illum dignissimos, quam totam!'
          }
          text1={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          text2={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        />
      </Container>
      <Divider />
      <Reviews />
    </Box>
  );
}
