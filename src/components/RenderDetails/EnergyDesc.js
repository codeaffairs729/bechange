import { useState } from "react";
import { Box, Grid, Divider, Button, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";

import { Link } from "react-router-dom";
import Modal from "../Modal";
import TariffDetails from "./TariffDetails";
import styles from "../typography/StyleTypography";
export default function EnergyDesc({
  data,
  RenderPieChart,
  index,
  setExpanded,
  expanded,
  target,
}) {
  const [openModal, setOpenModal] = useState(false);
  const isLabel = [
    "ÖKO-TEST AG",
    "Öko-Institut e.V.",
    "TÜV NORD CERT GmbH",
    "Grüner Strom Label e.V.",
    "eKomi Ltd.",
  ];
  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}>
        <TariffDetails data={data} />
      </Modal>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} lg={3}>
          <Typography sx={styles.h2}>Tariff: {data?.name}</Typography>
          <Typography sx={{ mt: 1, ...styles.p }}>
            Preisgarantie:{" "}
            {data?.priceGuarantee.period
              ? `${data?.priceGuarantee.period.value} ${data?.priceGuarantee.period.unit}`
              : "Keine"}
          </Typography>
          <Typography sx={{ mt: 1, ...styles.p }}>
            Kündigungsfrist:{" "}
            {`${data?.cancellationPeriod.value} ${data?.cancellationPeriod.unit}`}
          </Typography>
          <Typography sx={{ mt: 1, ...styles.p }}>
            Mindestvertragslaufzeit:{" "}
            {data?.minimumTerm
              ? `${data?.minimumTerm.value} ${data?.minimumTerm.unit}`
              : "Keine"}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Typography sx={styles.p}>
              Grundpreis: {data?.price.basePrice} €/Monat
            </Typography>
            <Typography sx={styles.p}>
              Arbeitspreis: {data?.price.workingPrice} €/Monat
            </Typography>
            <Typography sx={styles.p}>
              Gesamtpreis:
              {Math.round(
                (data?.price.basePrice + data?.price.workingPrice) * 100
              ) / 100}
              €/Monat
            </Typography>
            <Link onClick={() => setOpenModal(true)}>
              <Box display="flex" alignItems="center" mt={2}>
                <InfoOutlinedIcon variant="outlined" sx={{ color: "#000" }} />
                <Typography
                  variant="p"
                  fontSize={14}
                  sx={{ color: "#000", ...styles.p }}
                >
                  TARIF-DETAILS
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} lg={3}>
          <Typography sx={styles.h2}>
            Strommix ({data?.energyMixYear})
          </Typography>
          <Box display="flex" width="100%" mt={2}>
            <Box>
              <RenderPieChart
                energyMix={data?.energyMix}
                size={"100%"}
                showLabel={true}
                index={index}
              />
            </Box>
            <Box>
              {data?.energyMix.map((energy, i) => {
                return (
                  <Box key={i} sx={{ display: "flex", placeItems: "center" }}>
                    <Box
                      sx={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        background:
                          energy.source === "wind"
                            ? " #7CD0E0"
                            : energy.source === "hydro"
                            ? "#006180"
                            : energy.source === "solar"
                            ? "#EDD81D"
                            : energy.source === "nuclear"
                            ? "#c9fdd7"
                            : "black",
                        mr: 2,
                      }}
                    />
                    <Typography sx={styles.p}>{energy.source}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography sx={styles.h2}>
            Vorteile: {data?.provider.name}
          </Typography>
          <Typography sx={styles.p}>
            <div dangerouslySetInnerHTML={{ __html: data?.advantages }}></div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography sx={styles.h2} mb={1}></Typography>
          <Box
            px={2}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              justifyItems: "flex-start",
            }}
          >
            {data?.labels.map(
              (label, i) =>
                isLabel.includes(label.authority) && (
                  <Box>
                    <img
                      src={`./label/${label.authority}.png`}
                      style={{ width: "80px" }}
                      alt={`${label.authority}`}
                    />
                  </Box>
                )
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          display={{ xs: "flex", sm: "none" }}
          sx={{ justifyContent: "center" }}
        >
          <Divider />

          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h5" color="primary" sx={styles.h5}>
                {Math.round(data.price.workingPrice * 100) / 100} &euro;/month
              </Typography>
              <Typography variant="h6" sx={styles.h6}>
                {Math.round(data.price.basePrice * 100) / 100} &euro;/Jahr
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <a
              href={target}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                variant="h5"
                sx={styles.h5}
                onClick={() => setExpanded(!expanded)}
              >
                Tariff
                <ExpandLess />
              </Box>
            </a>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" size="small">
              Wechseln
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const style = {
  title: {
    ...styles.p,
    fontWeight: 900,
    fontSize: "20px",
  },
};
