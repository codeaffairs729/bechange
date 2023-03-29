import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Container, Grid } from '@mui/material';
import ComparePopover from './ComparePopover';
import { KeyboardArrowDown } from '@mui/icons-material';

const navItems = [
  {
    id: 9,
    title: 'Quality',
    link: '/',
  },
  {
    id: 1,
    title: 'About',
    link: '/',
  },
  {
    id: 2,
    title: 'Contact',
    link: '/',
  },
];

export default function Header() {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [popOverOpen, setPopOverOpen] = useState(false);

  return (
    <AppBar color='background'>
      <Container sx={{ width: '90%' }}>
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <img
              width={'150px'}
              src='/logo.jpeg'
              style={{ padding: 5, cursor: 'pointer' }}
              alt='BeChange Logo'
              onClick={() => navigate('/')}
            />
          </Grid>
          <Grid item xs={4} sx={{ textAlign: 'right', m: 'auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button ref={ref} onClick={() => setPopOverOpen(true)}>
                Compare <KeyboardArrowDown />
              </Button>
              {navItems.map(item => {
                return (
                  <Button
                    variant={item.title === 'Contact' ? 'contained' : 'muted'}
                    key={item.id}
                    onClick={() => navigate(item.link)}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ComparePopover
        anchorEl={ref.current}
        open={popOverOpen}
        onClose={() => setPopOverOpen(false)}
        navigate={navigate}
      />
    </AppBar>
  );
}
