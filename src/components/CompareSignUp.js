import {
  Container,
  Grid,
  Paper,
  Typography,
  Checkbox,
  Box,
} from "@mui/material";

export default function CompareSignUp({
  setSelectedServices,
  selectedServices,
}) {
  const items = [
    {
      id: 0,
      name: "energy",
      title: "Energie",
      desc: "Ökostrom: wirklich und unabhängig",
      link: "/energie",
      icon: {
        path: "./planet.png",
        alt: "Earth Icon",
      },
    },
    {
      id: 1,
      name: "bank",
      title: "Banking",
      desc: "Ethisch und ökologisch für´s Gemeinwohl",
      link: "/banking",
      icon: {
        path: "./growth.png",
        alt: "Banking Icon",
      },
    },
    {
      id: 2,
      name: "sim",
      title: "Mobilfunk",
      desc: "Faier Klima- und Datenschutz",
      link: "/",
      icon: {
        path: "./sim-card.png",
        alt: "Sim-Card Icon",
      },
    },
    {
      id: 3,
      name: "insurance",
      title: "Versicherung",
      desc: "Leistungen für einen nachhaltigen Lebensstil",
      link: "/",
      icon: {
        path: "./protection.png",
        alt: "Earth Icon",
      },
    },
  ];

  const handleOnChecked = (name, isChecked) => {
    setSelectedServices({ ...selectedServices, [name]: isChecked });
  };

  return (
    <Container sx={{ width: "100%", mx: "auto", my: 5, textAlign: "center" }}>
      <Grid container spacing={2}>
        {items.map((item) => {
          return (
            <Grid item xs={3} key={item.id}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 1,
                  p: 2,
                  opacity: item.id == 3 ? 0.5 : 1,
                }}
              >
                <Box sx={{ width: { xs: "30px", sm: "80px" } }}>
                  <img
                    src={item.icon.path}
                    alt={item.icon.alt}
                    width={"100%"}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: ".5rem", sm: "1rem", md: "1.5rem" } }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  {item.desc}
                </Typography>
                <Checkbox
                  onChange={(e) => handleOnChecked(item.name, e.target.checked)}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
