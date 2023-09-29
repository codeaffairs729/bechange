import { Container, Grid, Typography } from "@mui/material";

export default function Partners2() {
  const items = [
    {
      id: 0,
      src: "/fair.png",
      alt: "B Corop Certified",
    },
    {
      id: 1,
      src: "/robin.jpg",
      alt: "RobinWood",
    },
    {
      id: 2,
      src: "/switch-for-climate.png",
      alt: "RobinWood",
    },
  ];

  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={{ xs: 1, sm: 10 }} sx={{ placeItems: "center" }}>
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
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: ".3rem",
              flexWrap: "nowrap",
            }}
          >
            {items.map((item) => {
              return (
                <Grid
                  item
                  key={item.id}
                  sx={{
                    display: "flex",
                    height: { xs: "30px", sm: "80px", md: "120px" },
                  }}
                >
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
