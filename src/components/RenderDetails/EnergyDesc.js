import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import TariffDetails from "./TariffDetails";
import styles from "../typography/StyleTypography";
export default function EnergyDesc({ data, RenderPieChart, index }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}>
        <TariffDetails />
      </Modal>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography sx={style.title}>Tariff: {data?.name}</Typography>
          <Typography sx={styles.p}>
            Preisgarantie:{" "}
            {data?.priceGuarantee.period
              ? `${data?.priceGuarantee.period.value} ${data?.priceGuarantee.period.unit}`
              : "Keine"}
          </Typography>
          <Typography sx={styles.p}>
            Kündigungsfrist:{" "}
            {`${data?.cancellationPeriod.value} ${data?.cancellationPeriod.unit}`}
          </Typography>
          <Typography sx={styles.p}>
            Mindestvertragslaufzeit:{" "}
            {data?.minimumTerm
              ? `${data?.minimumTerm.value} ${data?.minimumTerm.unit}`
              : "Keine"}
          </Typography>
          <Box>
            <Typography sx={styles.p}>
              Grundpreis: {data?.price.basePrice} €/Monat
            </Typography>
            <Typography sx={styles.p}>
              Arbeitspreis: {data?.price.workingPrice} €/Monat
            </Typography>
            <Typography sx={styles.p}>
              Gesamtpreis:{" "}
              {Math.round(
                (data?.price.basePrice + data?.price.workingPrice) * 100
              ) / 100}{" "}
              €/Monat
            </Typography>
            <Link onClick={() => setOpenModal(true)}>
              <Box display="flex" alignItems="center" mt={2}>
                <InfoOutlinedIcon variant="outlined" sx={{ color: "#000" }} />
                <Typography
                  variant="p"
                  fontSize={14}
                  sx={{ ...styles.p, color: "#000" }}
                >
                  TARIF-DETAILS
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography sx={style.title}>
            Strommix ({data?.energyMixYear})
          </Typography>
          <Box display="flex" width="100%">
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
          <Typography sx={style.title}>
            Vorteile: {data?.provider.name}
          </Typography>
          <Typography sx={{ ...styles.p, m: 0 }}>
            <div dangerouslySetInnerHTML={{ __html: data?.advantages }}></div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Typography sx={style.title}>Labels</Typography>
          {data?.labels.map((label, i) => {
            return (
              <Typography key={i} sx={{ ...styles.p, m: 0 }}>
                {label.authority}
              </Typography>
            );
          })}
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
