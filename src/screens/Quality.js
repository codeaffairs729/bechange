import { useState } from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import {
  allgemeinItems,
  bankingItems,
  energyItems,
  mobileItems,
} from '../assets/data/qualityData';
import Jumbotron from '../components/Jumbotron';

export default function Quality() {
  const style = {
    container: { width: '90%', mx: 'auto', mt: '2em', mb: '3em' },
  };

  const [filter, setFilter] = useState('Allgemein');
  const [certs, setCerts] = useState(allgemeinItems);

  const filterButtons = ['Allgemein', 'Banking', 'Energie', 'Mobilfunk'];

  const handleClick = button => {
    setFilter(button);
    switch (button) {
      case 'Banking':
        return setCerts(bankingItems);
      case 'Energie':
        return setCerts(energyItems);
      case 'Mobilfunk':
        return setCerts(mobileItems);
      default:
        return setCerts(allgemeinItems);
    }
  };

  return (
    <>
      <Jumbotron
        title={'Qualität'}
        desc={'Klares Zeichen gegen Greenwashing'}
        btnText={'Geht Klar'}
      />
      <Container sx={style.container}>
        <Box textAlign={'center'}>
          {filterButtons.map((button, i) => {
            return (
              <Button
                key={i}
                variant={filter === button && 'contained'}
                onClick={() => handleClick(button)}
              >
                {button}
              </Button>
            );
          })}
        </Box>
        <Box sx={{ mt: '5em' }}>
          <Typography variant='h5' marginBottom={2}>
            {certs.title}
          </Typography>
          <Typography marginBottom={2}>{certs.desc}</Typography>
          {certs?.data?.map((cert, i) => (
            <Paper key={i} sx={{ mb: 5, p: 2 }}>
              <Grid container sx={{ placeItems: 'center' }}>
                <Grid item xs={12} sm={3}>
                  <img src={`./${cert.logo}`} width={'200px'} alt={cert.name} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {cert.text}
                </Grid>
                <Grid item xs={12} sm={3} sx={{ p: 3 }}>
                  <Button variant='contained' fullWidth>
                    Label
                  </Button>
                  <Button variant='contained' sx={{ mt: 1 }} fullWidth>
                    Anbieter
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      </Container>
    </>
  );
}
