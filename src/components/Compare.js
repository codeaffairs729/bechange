import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';

export default function Compare() {
  const items = [
    {
      id: 0,
      title: 'Energie',
      desc: 'Ökostrom: wirklich und unabhängig',
      link: '/energie',
      icon: <img src='./planet.png' width={'80px'} alt='Earth Icon' />,
    },
    {
      id: 1,
      title: 'Banking',
      desc: "Sozial-okoligisches Konto für's Gemeinwohl",
      link: '/banking',
      icon: <img src='./growth.png' width={'80px'} alt='Banking Icon' />,
    },
    {
      id: 2,
      title: 'Mobilfunk',
      desc: 'Fairer Klima- und Datenschutz',
      link: '/',
      icon: <img src='./sim-card.png' width={'80px'} alt='Sim-Card Icon' />,
    },
    {
      id: 3,
      title: 'Versicherung',
      desc: 'Leistung für einen nachhaltigen Lebensstil',
      link: '/',
      icon: <img src='./protection.png' width={'80px'} alt='Earth Icon' />,
    },
  ];

  const navigate = useNavigate();

  return (
    <Container sx={{ width: '90%', mx: 'auto', my: 5, textAlign: 'center' }}>
      <Grid container spacing={5}>
        {items.map(item => {
          return (
            <Grid item xs={12} sm={6} lg={3} key={item.id}>
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 1,
                  p: 2,
                }}
              >
                {item.icon}
                <Typography variant='h5'>{item.title}</Typography>
                <Typography variant='body2'>{item.desc}</Typography>
                <Button
                  variant='contained'
                  onClick={() => navigate(item.link)}
                  sx={{ my: 2 }}
                >
                  Zum Vergleich
                </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
