import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { PieChart } from "react-minimal-pie-chart";
import EnergyDesc from "./EnergyDesc";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  "&::before": {
    backgroundColor: "transparent",
  },
}));
export default function EnergyList({ tariffData }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const RenderPieChart = ({ energyMix, size, showLabel }) => {
    const pieData = energyMix?.map((energy) => {
      return {
        title: energy.source,
        value: energy.percent,
        color:
          energy.source === "wind"
            ? "#bbe4e9"
            : energy.source === "hydro"
            ? "#2e79ba"
            : energy.source === "solar"
            ? "#f7aa00"
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
          fill: "#fff"
        }}
        segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        animate
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
      {tariffData?.map((data) => {
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
            >
              <Grid container sx={style.flexCenter} columns={20} width="100%">
                <Grid item md={4} xs={10}>
                  <Typography variant="h6">{data.name}</Typography>
                </Grid>
                <Grid item md={4} xs={10} sx={style.flexCenter}>
                  <RenderPieChart energyMix={data.energyMix} size={"50px"} />
                </Grid>
                <Grid item md={4} xs={10}>
                  <Box sx={style.flexCenter} flexDirection="column">
                    <Typography variant="h5" color="primary">
                      {Math.round(data.price.workingPrice * 100) / 100}{" "}
                      &euro;/month
                    </Typography>
                    <Typography variant="h6">
                      {Math.round(data.price.basePrice * 100) / 100}{" "}
                      &euro;/month
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={4} xs={10} sx={style.flexCenter} flexDirection="column">
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6">Tariff</Typography>
                    <ExpandMore />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4} xs={10}
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
            <AccordionDetails>
              <EnergyDesc data={data} RenderPieChart={RenderPieChart} />
            </AccordionDetails>
          </StyledAccordion>
        );
      })}
    </Box>
  );
}
