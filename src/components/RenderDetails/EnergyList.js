import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { PieChart } from 'react-minimal-pie-chart';

export default function EnergyList({ tariffData }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const RenderPieChart = energyMix => {
    const pieData = energyMix?.energyMix.map(energy => {
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
        style={{ width: '50px', marginRight: '100px' }}
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
        console.log(data);
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
              <Typography sx={{ width: '23%', flexShrink: 0 }}>
                {data.name}
              </Typography>
              <Typography sx={{ width: '23%', flexShrink: 0 }}>
                {Math.round(data.price.basePrice * 100) / 100} &euro;/month
              </Typography>
              <Typography sx={{ width: '23%', flexShrink: 0 }}>
                {Math.round(data.price.workingPrice * 100) / 100} &euro;/month
              </Typography>
              <RenderPieChart energyMix={data.energyMix} />
              <Button variant='contained' color='tertiary'>
                Wechseln
              </Button>
            </AccordionSummary>
          </Accordion>
        );
      })}
    </Box>
  );
}
