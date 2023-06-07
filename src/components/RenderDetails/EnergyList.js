import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { PieChart } from 'react-minimal-pie-chart';
import EnergyDesc from './EnergyDesc';

export default function EnergyList({ tariffData }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const RenderPieChart = ({ energyMix, size, showLabel }) => {
    const pieData = energyMix?.map(energy => {
      return {
        title: energy.source,
        value: energy.percent,
        color:
          energy.source === 'wind'
            ? '#bbe4e9'
            : energy.source === 'hydro'
            ? '#2e79ba'
            : energy.source === 'solar'
            ? '#f7aa00'
            : energy.source === 'nuclear'
            ? '#c9fdd7'
            : 'black',
      };
    });

    return (
      <PieChart
        data={pieData}
        lineWidth={50}
        label={({ dataEntry }) => showLabel && `${dataEntry.value}%`}
        labelPosition={100 - 60 / 2}
        style={{ width: size, marginRight: '100px' }}
        segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
        animate
      />
    );
  };

  return (
    <Box>
      <Accordion sx={{ mb: 3 }}>
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
      </Accordion>
      {tariffData?.map(data => {
        return (
          <Accordion
            key={data?.id}
            expanded={expanded === `panel${data?.id}`}
            onChange={handleChange(`panel${data?.id}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${data?.id}bh-content`}
              id={`panel${data?.id}bh-header`}
            >
              <Typography variant='h6' sx={{ width: '23%', flexShrink: 0 }}>
                {data.name}
              </Typography>
              <Typography variant='h6' sx={{ width: '23%', flexShrink: 0 }}>
                {Math.round(data.price.basePrice * 100) / 100} &euro;/month
              </Typography>
              <Typography variant='h6' sx={{ width: '23%', flexShrink: 0 }}>
                {Math.round(data.price.workingPrice * 100) / 100} &euro;/month
              </Typography>
              <RenderPieChart energyMix={data.energyMix} size={'50px'} />
              <Button variant='contained' color='tertiary'>
                Wechseln
              </Button>
            </AccordionSummary>
            <AccordionDetails>
              <EnergyDesc data={data} RenderPieChart={RenderPieChart} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
