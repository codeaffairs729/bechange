import { useState } from "react";
import CompareSignUp from "../CompareSignUp";
import styles from "../typography/StyleTypography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import {
  Box,
  Button,
  Grid,
  Tooltip,
  TextField,
  FormControl,
  Typography,
  Checkbox,
} from "@mui/material";

const style = {
  calculator: {
    background:
      "linear-gradient(180deg, #709A4C 5%, #d9d0be 50%,rgba(255,255,255,1) 79%)",
    bgcolor: "background.light",
    borderRadius: "60px 60px 0px 0px",
    m: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "20px",
  },
  cardDetails: {
    bgcolor: "#fff",
    borderRadius: "16px",
    alignItems: "center",
    justifyContent: "center",
  },
};

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
const infoBoxText =
  "Deine Daten Werden Addgeschutzt nach gesetzlichen Bestimmungen (DSCVO/BDSG/TMG) nur bei Tarifabschluss an Dritte ubermittelt(gewahlter Anbieter bzw.das gewahlte zahlungsinstitut";

export default function Registration() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [selectedBank, setSelectedBank] = useState(false);
  const [selectedEnergy, setSelectedEnergy] = useState(false);
  const [selectedSim, setSelectedSim] = useState(false);
  const [selectedInsurance, setSelectedInsurance] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleOnSubmit = () => {
  };

  return (
    <Box container sx={style.calculator} p={{ xs: 4, sm: 8, md: 10 }}>
      <Box mb={{ xs: 4, sm: 8 }}>
        <Typography variant="h3" fontWeight={900} sx={styles.h3}>
          Gratis registrienren. Sofort vergleichen.
        </Typography>
        <Typography variant="h4" fontWeight={500} sx={styles.h4}>
          Tarife optimieren.
        </Typography>
      </Box>
      <FormControl onClick={handleOnSubmit}>
        <Grid container spacing={4} rowSpacing={4} mb={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstname"
              type="text"
              sx={{ bgcolor: "#fff", borderRadius: "8px" }}
              size="small"
              placeholder="vorname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastname"
              type="text"
              sx={{ bgcolor: "#fff", borderRadius: "8px" }}
              size="small"
              placeholder="Nachname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              type="email"
              sx={{ bgcolor: "#fff", borderRadius: "8px" }}
              size="small"
              placeholder="E-mail Addresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid container mt={2} sx={style.cardDetails}>
            <CompareSignUp
              setSelectedBank={setSelectedBank}
              setSelectedEnergy={setSelectedEnergy}
              setSelectedSim={setSelectedSim}
              setSelectedInsurance={setSelectedInsurance}
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button
            name="submit"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: "20px", mt: 2 }}
            p={4}
          >
            Zum Vergleich
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <Checkbox
            checked={isPrivacyChecked}
            onChange={(e) => {
              setIsPrivacyChecked(e.target.checked);
            }}
          />
          <Typography sx={styles.p}>Datenschutzbestimmungen</Typography>

          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Box>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "white",
                      color: "black",
                      border: "2px solid black",
                      padding: "4px",
                    },
                  },
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement={"bottom-end"}
                title={infoBoxText}
              >
                <Button onClick={handleTooltipOpen}>
                  <InfoOutlinedIcon variant="outlined" sx={{ color: "#000" }} />
                </Button>
              </Tooltip>
            </Box>
          </ClickAwayListener>
        </Box>
      </FormControl>

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
              alignContent:"center"
            }}
          >
            <img
              src={`./${service.img}`}
              width={"45px"}
              height={"45px"}
              alt={service.alt}
            />
            <Typography variant="h6" fontWeight={900} sx={styles.h6} mt={{xs:1,sm:5}}>
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
    </Box>
  );
}
