import { Container, Grid, Typography } from '@mui/material';

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
    <Container sx={{ my: 5 }}>
      <Grid container spacing={10} sx={{ placeItems: 'center' }}>
        <Grid item xs={4}>
          <Typography variant='h6' fontWeight={900}>
            Wichtigste Qualitätszeichen
          </Typography>
          <Typography>
            Alle gelisteten Anbieter wurden nach strengsten
            Nachhaltigkeitskriterien bewertet.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            sx={{
              placeItems: 'center',
            }}
          >
            {items.map(item => {
              return (
                <Grid item xs={6} lg={3} key={item.id}>
                  <img width={150} src={item.src} alt={item.alt} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
