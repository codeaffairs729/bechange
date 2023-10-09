import { Container, Grid, Typography } from "@mui/material";

export default function Partners() {
  const items = [
    {
      id: 0,
      src: "/bcorp.png",
      alt: "B Corop Certified",
    },
    {
      id: 1,
      src: "/robinwood.png",
      alt: "RobinWood",
    },
    {
      id: 2,
      src: "/okotest.png",
      alt: "ÖkoTest",
    },
    {
      id: 3,
      src: "/utopia.png",
      alt: "Utopia",
    },
  ];

  return (
    <Container sx={{ my: 5 }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 10 }}
        sx={{
          placeItems: "center",
        }}
      >
        <Grid item xs={5} sm={4}>
          <Typography
            variant="h6"
            fontWeight={900}
            sx={{ fontSize: { xs: ".7rem", sm: "1.25rem" } }}
          >
            Wichtigste Qualitätszeichen
          </Typography>
          <Typography sx={{ fontSize: { xs: ".5rem", sm: "1rem" } }}>
            Alle gelisteten Anbieter wurden nach strengsten
            Nachhaltigkeitskriterien bewertet.
          </Typography>
        </Grid>
        <Grid item xs={7} sm={8}>
          <Grid
            container
            spacing={2}
            sx={{
              placeItems: "center",
            }}
          >
            {items.map((item) => {
              return (
                <Grid item xs={3} lg={3} key={item.id}>
                  <img width={"100%"} src={item.src} alt={item.alt} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
