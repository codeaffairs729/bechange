import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { SolarPower, Savings, SimCard, GppGood } from '@mui/icons-material';

export default function Compare() {
  const iconStyle = {
    fontSize: '5em',
  };
  const items = [
    {
      id: 0,
      title: 'Energie',
      desc: 'Ökostrom: wirklich und unabhängig',
      link: '/energie',
      icon: <SolarPower sx={iconStyle} />,
    },
    {
      id: 1,
      title: 'Banking',
      desc: "Sozial-okoligisches Konto für's Gemeinwohl",
      link: '/banking',
      icon: <Savings sx={iconStyle} />,
    },
    {
      id: 2,
      title: 'Mobilfunk',
      desc: 'Fairer Klima- und Datenschutz',
      link: '/',
      icon: <SimCard sx={iconStyle} />,
    },
    {
      id: 3,
      title: 'Versicherung',
      desc: 'Leistung für einen nachhaltigen Lebensstil',
      link: '/',
      icon: <GppGood sx={iconStyle} />,
    },
  ];

  const navigate = useNavigate();

  return (
    <Container sx={{ width: '90%', mx: 'auto', my: 5, textAlign: 'center' }}>
      <Grid container spacing={5}>
        {items.map(item => {
          return (
            <Grid item xs={3} key={item.id}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 1,
                }}
              >
                {item.icon}
                <Typography variant='h5'>{item.title}</Typography>
                <Typography variant='body2'>{item.desc}</Typography>
                <Button onClick={() => navigate(item.link)}>
                  Zum Vergleich
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
