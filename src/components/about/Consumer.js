import { Box, Grid, Typography } from "@mui/material";

const Consumer = ({ style }) => {
  return (
    <Box p={{ xs: 0, sm: 4 }}>
      <Box py={{ xs: 2, sm: 4 }} px={{ xs: 0, sm: 4 }}>
        <Typography
          variant="h2"
          sx={{
            ...style.h2,
            textAlign: "center",
            fontFamily: "Playfair Display, serif",
          }}
        >
          About
        </Typography>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: { xs: "16px", sm: "0px" },
        }}
      >
        <Grid
          item
          sm={3}
          p={2}
          sx={{
            ...style.borderStyle,
            ...style.flexCenter,
            order: { xs: 1, sm: 0 },
            background: "#fff",
          }}
        >
          <img src="./Footprint.jpg" alt="Footprint.jpg" width="80%" />
        </Grid>
        <Grid
          item
          sm={6}
          p={{ xs: 4, sm: 4 }}
          sx={{
            ...style.borderStyle,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            order: { xs: 0, sm: 1 },
            background: "#fff",
          }}
        >
          <Typography variant="h3" sx={style.heading} mb={"1rem"}>
            Konsumentscheidungen setzen neue Maßstäbe.
          </Typography>
          <Typography variant="p" sx={style.p}>
            Als{" "}
            <b>
              unabhängige und ganzheitliche Vergleichs- und Wechselplattform
            </b>
            wollen wir gemeinsam wirkliche Nachhaltigkeit durch{" "}
            <b>klare Transparenz</b> und höchste Qualitätsstandards in Europa
            vorantreiben. Wir helfen Dir den Wandel zu unterstützen und
            gleichzeitig das <b>Beste aus Preis und Leistung</b> zu ziehen.
          </Typography>

          <Typography variant="h3" sx={style.heading} mb={"1rem"}>
            Dein bewusster Wechsel war noch nie so einfach!
          </Typography>
          <Typography variant="p" sx={style.p}>
            Mit BeChange hast du die Macht, <b>bewusste Entscheidungen</b> zu
            den
            <b>nachhaltigsten Anbietern</b> auf dem Markt zu treffen und dadurch
            eine
            <b>soziale und ökologische Gesellschaft</b> zu fördern.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Consumer;
