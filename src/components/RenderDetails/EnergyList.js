import { useState, useEffect } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const RenderPieChart = ({ energyMix, size, showLabel, index, type }) => {
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
          fontSize: "9px",
          fontWeight: "600",
          fill: "#fff",
          display: "flex",
          justifyContent: "flex-end",
          padding: type === "summary" ? "0px" : "5px",
          marginLeft:
            type === "summary" ? (width > 600 ? "0px" : "25px") : "0px",
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
      {tariffData?.map((data, index) => {
        return (
          <StyledAccordion
            key={data?.id}
            expanded={expanded === `panel${data?.id}`}
            onChange={handleChange(`panel${data?.id}`)}
            sx={{
              mt: 2,
              borderRadius: "16px 16px 16px 16px",
            }}
          >
            <AccordionSummary
              aria-controls={`panel${data?.id}bh-content`}
              id={`panel${data?.id}bh-header`}
              onClick={() => setAnimateIndex(index)}
            >
              <Grid
                container
                columns={20}
                width="100%"
                spacing={2}
                sx={{
                  ...style.flexCenter,
                }}
              >
                <Grid item md={5} xs={10}>
                  <Box
                    height={{ xs: 25, sm: 50 }}
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <img
                      src={`/energy/${data.provider.name}.svg`}
                      height="100%"
                      alt={`${data.provider.name}.svg`}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={10}
                  sx={{
                    ...style.flexCenter,
                  }}
                >
                  <RenderPieChart
                    energyMix={data.energyMix}
                    size={"50px"}
                    index={index}
                    type={"summary"}
                  />
                </Grid>
                <Grid item md={4} xs={10}>
                  <Box sx={style.flexCenter} flexDirection="column">
                    <Typography variant="h5" color="primary" sx={styles.h5}>
                      {Math.round(data.price.workingPrice * 100) / 100}{" "}
                      &euro;/month
                    </Typography>
                    <Typography variant="h6" sx={styles.h6}>
                      {Math.round(data.price.basePrice * 100) / 100} &euro;/Jahr
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={10}
                  sx={{
                    ...style.flexCenter,
                    display: { xs: "none", sm: "flex" },
                  }}
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
                  md={3}
                  xs={10}
                  display="flex"
                  alignItems="end"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size={width < 600 ? "small" : "large"}
                  >
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
                setExpanded={setExpanded}
                expanded={expanded}
                target={`#panel${data?.id}bh-header`}
              />
            </AccordionDetails>
          </StyledAccordion>
        );
      })}
    </Box>
  );
}
