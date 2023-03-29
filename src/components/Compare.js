import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import SectionHeading from './typography/SectionHeading';
import { SolarPower, Savings, SimCard, GppGood } from '@mui/icons-material';

export default function Compare() {
  const iconStyle = {
    fontSize: '5em',
  };
  const items = [
    {
      id: 0,
      title: 'Energy',
      desc: '24/7 Clean Energy. Independent',
      link: '/energy',
      icon: <SolarPower sx={iconStyle} />,
    },
    {
      id: 1,
      title: 'Banking',
      desc: 'Fair, Ethical and Ecological',
      link: '/',
      icon: <Savings sx={iconStyle} />,
    },
    {
      id: 2,
      title: 'Telecommunication',
      desc: 'Climate Action, Data Protection, Fairness and Transparency',
      link: '/',
      icon: <SimCard sx={iconStyle} />,
    },
    {
      id: 3,
      title: 'Insurance',
      desc: "Don't Bank the Bomb. Bank for Good",
      link: '/',
      icon: <GppGood sx={iconStyle} />,
    },
  ];

  const navigate = useNavigate();

  return (
    <Container sx={{ width: '90%', mx: 'auto', my: 5, textAlign: 'center' }}>
      <SectionHeading title={'Compare'} />
      <Typography variant='body2' sx={{ mb: 5 }}>
        Truly fair, ethical and ecological. Based on our quality standards you
        can select from the following
      </Typography>
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
                <Button onClick={() => navigate(item.link)}>Providers</Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
