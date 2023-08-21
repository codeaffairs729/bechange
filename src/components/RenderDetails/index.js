import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { read, utils } from 'xlsx';
import file from '../../assets/data/datasheet1.xlsx';
import { Link } from 'react-router-dom';
import MobileList from './MobileList';
import BankingList from './BankingList';

export default function RenderDetails({ type }) {
  const [expanded, setExpanded] = useState(false);
  const [excelData, setExcelData] = useState([]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    (async () => {
      const f = await (await fetch(file)).arrayBuffer();
      const wb = read(f);
      const ws = wb.Sheets.Telecommunications;
      const data = utils.sheet_to_json(ws);
      setExcelData(data);
    })();
  }, []);

  return type === 'telecom' ? (
    <MobileList />
  ) : type === 'banking' ? (
    <BankingList />
  ) : (
    excelData?.map((data, i) => (
      <Accordion
        key={i}
        expanded={expanded === `panel${i}`}
        onChange={handleChange(`panel${i}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={`panel${i}bh-content`}
          id={`panel${i}bh-header`}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {data.Firma}
          </Typography>
          <Typography
            sx={{ width: '33%', flexShrink: 0, color: 'text.secondary' }}
          >
            ab {data.Tarifgrundgebühr ? data.Tarifgrundgebühr : '-/'}
          </Typography>
          <Button variant='contained' color='tertiary'>
            Wechseln
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item xs={12} sm={5}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Über {data.Firma}
              </Typography>
              <Typography>{data.Über}</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Gilt für alle Tarife
              </Typography>
              <Typography>{data['Gilt für alle Tarife']}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Typography fontWeight={900} sx={{ mb: 2 }}>
            Tarifname: {data.Tarifname}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography>{data.Tarifbeschreibung}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={900}>Tarifgebühr</Typography>
              <Typography>{data.Tarifgrundgebühr}</Typography>
              <Typography>
                {data['einmalige Startgebühr']}€ Grundgebühr
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                component={Link}
                to={data['Produktinformation URL']}
                target='_blank'
                variant='outlined'
                fullWidth
              >
                Produktinformation
              </Button>
              <Button
                component={Link}
                to={data['Preisliste URL']}
                target='_blank'
                variant='outlined'
                sx={{ mt: 2 }}
                fullWidth
              >
                Preisliste URL
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Typography fontWeight={900}>
            Datenvolumen: {data.Datenvolumen}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))
  );
}
