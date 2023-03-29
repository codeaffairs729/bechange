import { Container, Grid, Typography, Box } from '@mui/material';

export default function Partners() {
  const items = [
    {
      id: 0,
      src: '/bcorp.png',
      alt: 'B Corop Certified',
    },
    {
      id: 1,
      src: '/robinwood.png',
      alt: 'RobinWood',
    },
    {
      id: 2,
      src: '/okotest.png',
      alt: 'ÖkoTest',
    },
    {
      id: 3,
      src: '/utopia.png',
      alt: 'Utopia',
    },
  ];

  return (
    <Container sx={{ width: '90%', my: 5, textAlign: 'center' }}>
      <Typography variant='h4' fontWeight={900}>
        Quality Partners
      </Typography>
      <Grid
        container
        sx={{
          width: '80%',
          m: 'auto',
          placeItems: 'center',
        }}
      >
        {items.map(item => {
          return (
            <Grid item xs={3} key={item.id}>
              <img width={150} src={item.src} alt={item.alt} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
