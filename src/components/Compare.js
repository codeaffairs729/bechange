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
    if (sectionRef.current && sectionToScroll) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [sectionToScroll]);

  return (
    <Container
      ref={sectionRef}
      id={sectionToScroll}
      maxWidth="xl"
      sx={{
        my: 5,
        textAlign: "center",
        background: "#fffafa",
        border: { sm: ".5px solid lightgray" },
        boxShadow: "2px  lightgray",
        borderRadius: "20px 20px 10px 10px",
        marginTop: "-20px",
        position: "relative",
        zIndex: "1000",
        maxWidth: { xs: `calc(100% - 50px)` },
        padding: "0px",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
        px={{ xs: 0, sm: 0 }}
        py={{ xs: 0, sm: 3 }}
      >
        {items.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={3}
              lg={3}
              key={item.id}
              sx={{ flexBasis: { xs: "100%", sm: "17%" } }}
            >
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 1,
                  p: 2,
                  opacity: item.id == 3 ? 0.5 : 1,
                  borderRadius: { xs: "20px" },
                }}
              >
                <Box sx={{ width: "80px" }}>{item.icon}</Box>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2" sectionToScroll>
                  {item.desc}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate(item.id == 3 ? null : item.link)}
                  sx={{
                    my: 2,
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
