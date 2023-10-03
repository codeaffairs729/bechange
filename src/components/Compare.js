import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Box, Paper, Typography } from "@mui/material";
import { Scale } from "@mui/icons-material";
import { useEffect, useRef } from "react";

export default function Compare({ setSectionToScroll, sectionToScroll }) {
  const items = [
    {
      id: 0,
      title: "Energie",
      desc: "Ökostrom: wirklich und unabhängig",
      link: "/energie",
      icon: <img src="./planet.png" width={"100%"} alt="Earth Icon" />,
    },
    {
      id: 1,
      title: "Banking",
      desc: "Ethisch und ökologisch für´s Gemeinwohl",
      link: "/banking",
      icon: <img src="./growth.png" width={"100%"} alt="Banking Icon" />,
    },
    {
      id: 2,
      title: "Mobilfunk",
      desc: "Faier Klima- und Datenschutz",
      link: "/mobile-funk",
      icon: <img src="./sim-card.png" width={"100%"} alt="Sim-Card Icon" />,
    },
    {
      id: 3,
      title: "Versicherung",
      desc: "Leistungen für einen nachhaltigen Lebensstil",
      link: "/",
      icon: <img src="./protection.png" width={"100%"} alt="Earth Icon" />,
    },
  ];

  const navigate = useNavigate();

  const sectionRef = useRef(null);
  useEffect(() => {
    console.log("sectionRef");
    if (sectionRef.current && sectionToScroll) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [sectionToScroll]);

  return (
    <Container
      ref={sectionRef}
      id={sectionToScroll}
      sx={{
        width: { xs: "100%", sm: "90%" },
        mx: "auto",
        my: 5,
        textAlign: "center",
      }}
    >
      <Grid container spacing={{ xs: 1, sm: 5 }}>
        {items.map((item) => {
          return (
            <Grid item xs={3} sm={3} lg={3} key={item.id}>
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
                  {item.icon}
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
                  sectionToScroll
                >
                  {item.desc}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(item.id == 3 ? null : item.link)}
                  sx={{
                    my: 2,
                    fontSize: { xs: "2px", sm: ".7rem" },
                    boxShadow: "2px 2px 2px 2px lightgray",
                    minWidth: "50px",
                  }}
                >
                  {item.id == 3 ? "Bald verfügbar" : "Zum Vergleich"}
                </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
