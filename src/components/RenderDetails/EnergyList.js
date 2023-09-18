import { useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";
import EnergyDesc from "./EnergyDesc";
import styles from "../typography/StyleTypography";
import { StyledAccordion } from "../Common";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function EnergyList({ tariffData }) {
  const [expanded, setExpanded] = useState(false);
  const [animateIndex, setAnimateIndex] = useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const RenderPieChart = ({ energyMix, size, showLabel, index }) => {
    const pieData = energyMix?.map((energy) => {
      return {
        title: energy.source,
        value: energy.percent,
        color:
          energy.source === "wind"
            ? "#7CD0E0"
            : energy.source === "hydro"
            ? "#006180"
            : energy.source === "solar"
            ? "#EDD81D"
            : energy.source === "nuclear"
            ? "#c9fdd7"
            : "black",
      };
    });

    return (
      <PieChart
        data={pieData}
        lineWidth={50}
        label={({ dataEntry }) => showLabel && `${dataEntry.value}%`}
        labelPosition={100 - 60 / 2}
        style={{
          width: size,
          marginRight: "100px",
          fontSize: "9px",
          fontWeight: "600",
          fill: "#fff",
        }}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        animate={index === animateIndex}
      />
    );
  };

  const style = {
    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <Box>
      {/* <Accordion sx={{ mb: 3 }}>
        <AccordionSummary>
          <Typography variant='h5' sx={{ width: '22%', flexShrink: 0 }}>
            Provider
          </Typography>
          <Typography variant='h5' sx={{ width: '23%', flexShrink: 0 }}>
            Base Price
          </Typography>
          <Typography variant='h5' sx={{ width: '23%', flexShrink: 0 }}>
            Working Price
          </Typography>
          <Typography variant='h5' sx={{ width: '23%', flexShrink: 0 }}>
            Energy Mix
          </Typography>
        </AccordionSummary>
      </Accordion> */}
      {tariffData?.map((data, index) => {
        return (
          <StyledAccordion
            key={data?.id}
            expanded={expanded === `panel${data?.id}`}
            onChange={handleChange(`panel${data?.id}`)}
            sx={{ mt: 2, borderRadius: 4 }}
          >
            <AccordionSummary
              aria-controls={`panel${data?.id}bh-content`}
              id={`panel${data?.id}bh-header`}
              onClick={() => setAnimateIndex(index)}
            >
              <Grid container sx={style.flexCenter} columns={20} width="100%">
                <Grid item md={4} xs={10}>
                  <Typography variant="h6" sx={styles.h6}>
                    {data.name}
                  </Typography>
                </Grid>
                <Grid item md={4} xs={10} sx={style.flexCenter}>
                  <RenderPieChart
                    energyMix={data.energyMix}
                    size={"50px"}
                    index={index}
                  />
                </Grid>
                <Grid item md={4} xs={10}>
                  <Box sx={style.flexCenter} flexDirection="column">
                    <Typography variant="h5" color="primary" sx={styles.h5}>
                      {Math.round(data.price.workingPrice * 100) / 100}{" "}
                      &euro;/month
                    </Typography>
                    <Typography variant="h6" sx={styles.h5}>
                      {Math.round(data.price.basePrice * 100) / 100} &euro;/Jahr
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={10}
                  sx={style.flexCenter}
                  flexDirection="column"
                >
                  <Box display="flex" alignItems="center">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      variant="h6"
                      sx={styles.h6}
                    >
                      Tariff
                    </AccordionSummary>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={10}
                  display="flex"
                  alignItems="end"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Button variant="contained" color="primary" size="large">
                    Wechseln
                  </Button>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails id={`panel${index}`}>
              <EnergyDesc
                data={data}
                RenderPieChart={RenderPieChart}
                index={index}
              />
            </AccordionDetails>
          </StyledAccordion>
        );
      })}
    </Box>
  );
}
