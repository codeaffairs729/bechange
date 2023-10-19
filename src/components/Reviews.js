import {
  Box,
  Paper,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Container,
} from "@mui/material";
import SectionHeading from "./typography/SectionHeading";
import styles from "./typography/StyleTypography";

export default function Reviews() {
  const persons = [
    {
      id: 0,
      name: "Person 1",
      title: "Kritisch",
      desc: "Wir zeigen Dir nur jene Versorger, die durch konkrete Qualitätskriterien in Sachen Nachhaltigkeit überzeugen.",
      job: "CEO/Company",
    },
    {
      id: 1,
      name: "Person 2",
      title: "Unabhängig",
      desc: "Wir helfen Dir bei der bewussten Entscheidung und dem sicheren, einfachen Wechsel.Unsere Mission: Höchste Qualität zum besten Preis!",
      job: "CEO/Company",
    },
    {
      id: 2,
      name: "Person 3",
      title: "Kostenlos",
      desc: "Keine Extra-Kosten für Dich. Je nach Wechsel erhalten wir eine Provision. Dadurch gewinnen wir alle.",
      job: "CEO/Company",
    },
  ];
  return (
    <Container sx={{ width: "90%", my: 5 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <SectionHeading title={"Vorteile"} />
      </Box>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {persons.map((person) => {
          return (
            <Grid item key={person.id} xs={12} sm={6} lg={3} sx={{}}>
              <Paper
                variant="outlined"
                sx={{
                  maxWidth: 300,
                  p: 3,
                  border: "0.5px solid lightgray",
                  borderRadius: "30px",
                  boxShadow: {
                    xs: "-10px 10px 9px 2px rgba(0,0,0,0.2)",
                    sm: "-20px 20px 9px 2px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  container
                  sx={{
                    py: { xs: 1 },
                    px: { xs: 2 },
                    bgcolor: "background.light",
                    ...styles.flexCenter,
                    gap: "16px",
                    borderRadius: "16px",
                    fontFamily: "Playfair Display, serif",
                    fontWeight: "bold",
                  }}
                >
                  <Box>
                    <Box width="40px" sx={styles.flexCenter}>
                      <img src="/favicon.png" alt="logo.png" width={"100%"} />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h6" textAlign={"center"}>
                      {person.title}
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ height: "210px" }}>
                  <Typography variant="body1">{person.desc}</Typography>
                </CardContent>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
