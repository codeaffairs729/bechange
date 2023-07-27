import { useNavigate, useParams } from 'react-router-dom';
import { AppBar, Box, Button, Container, Grid } from '@mui/material';

const navItems = [
  {
    title: 'Energie',
    slug: 'energie',
  },
  {
    title: 'Banking',
    slug: 'banking',
  },
  {
    title: 'Mobilfunk',
    slug: 'mobile-funk',
  },
  {
    title: 'Qualität',
    slug: 'qualitaet',
  },
  {
    title: 'Blog',
    slug: 'blug',
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { screen } = useParams();
  return (
    <AppBar color='background'>
      <Container sx={{ width: '90%' }}>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <img
              width={'150px'}
              src='/logo_final.svg'
              style={{ padding: 5, cursor: 'pointer' }}
              alt='BeChange Logo'
              onClick={() => navigate('/')}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right', m: 'auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {navItems.map((item, i) => {
                return (
                  <Button
                    variant={item.slug === screen ? 'contained' : 'muted'}
                    key={i}
                    onClick={() => navigate('/' + item.slug)}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
