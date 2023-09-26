import React from "react";
import styles from "./typography/StyleTypography";
import { Box, Grid, Typography } from "@mui/material";

const Services = () => {
  const services = [
    {
      title: "Wechselservice",
      img: "/search.png",
      desc: "Aktueller und unabhangiger Vergleich von Preis & Leistung der qualitativ nachhaltigsten Anbieter",
      alt: "planet.png",
    },
    {
      title: "Optimieren",
      img: "/optimize.png",
      desc: "Wir halter Deine Tarife im Blick undinformieren uber fristgerechte Verbesserungen",
      alt: "optimize.png",
    },
    {
      title: "Ohne Extra-Kosten",
      img: "/display.png",
      desc: "Provisionen werden ohne Kostenzuschlag fur Dichabgerechnet. Dein Bestarif ist unsere Mission ",
      alt: "display.png",
    },
  ];
  return (
    <>
      <Grid
        container
        xs={12}
        mt={{ xs: 16, sm: 8 }}
        mb={{ xs: 2, sm: 4, md: 8 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
        spacing={{ xs: 2, sm: 4, md: 8 }}
      >
        {services.map((service) => (
          <Grid
            item
            xs={12}
            sm={4}
            p={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <img
              src={`./${service.img}`}
              width={"45px"}
              height={"45px"}
              alt={service.alt}
            />
            <Typography
              variant="h6"
              fontWeight={900}
              sx={styles.h6}
              mt={{ xs: 1, sm: 5 }}
            >
              {service.title}
            </Typography>
            <Typography sx={styles.p}>{service.desc}</Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" fontWeight={900} sx={styles.h6} mb={4}>
        {"Einfach.Sicher.Unabhangig"}
      </Typography>
      <Box>
        <img src={`/SSL.png`} width={"90px"} height={"94px"} alt={"SSL.png"} />
      </Box>
    </>
  );
};

export default Services;
