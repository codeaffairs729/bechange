import { Box, Grid, Typography } from "@mui/material";
const style = {
  container: {
    width: "100%",
    mx: "auto",
    mt: "2em",
    mb: "3em",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  h2: {
    fontSize: {
      xs: "20px",
      sm: "40px",
      lg: "40px",
    },
  },

  h3: {
    fontSize: {
      xs: "11px",
      sm: "16px",
      lg: "18px",
    },
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
    marginBottom: {
      xs: "5px",
      sm: "1rem",
    },
  },
  p: {
    fontSize: {
      xs: "10px",
      sm: "16px",
    },
    fontFamily: "Ubuntu, sans-serif",
    lineHeight: "1.5",
  },
  borderStyle: {
    border: "1px solid lightgray",
    borderRadius: "16px",
    boxShadow: "2px 2px  lightgray",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignContent: "center",
    alignItems: "center",
  },
  paper: { p: 2, my: 2 },
};

const Consumer = () => {
  return (
    <Box>
      <Box p={{ xs: 2, sm: 4 }}>
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
          // border: "1px solid red",
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
          }}
        >
          <img src="./Footprint.jpg" alt="Footprint.jpg" width="80%" />
        </Grid>
        <Grid
          item
          sm={6}
          p={{ xs: 2, sm: 4 }}
          sx={{
            ...style.borderStyle,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            order: { xs: 0, sm: 1 },
          }}
        >
          <Typography variant="h3" sx={style.h3}>
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

          <Typography variant="h3" sx={style.h3} mt={2}>
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
