import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTelecomCompanies } from '../../redux/actions/telecom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MobileList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTelecomCompanies());
  }, [dispatch]);

  const { loading, companies } = useSelector(state => state.telecom);

  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const renderItems = items => {
    const splitItems = items.split('- ');
    const result = splitItems.map(item => {
      return <p>{'- ' + item}</p>;
    });
    return result.slice(1);
  };

  return loading ? (
    <CircularProgress />
  ) : (
    companies?.map((company, i) => (
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
          <Typography sx={{ width: '33%', flexGrow: 1 }}>
            {company?.name}
          </Typography>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {'Tarife'}
          </Typography>
          <Button variant='contained' color='tertiary'>
            Wechseln
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item xs={12} sm={5}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Über {company?.name}
              </Typography>
              <Typography>{renderItems(company?.about)}</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Gilt für alle Tarife
              </Typography>
              <Typography>{renderItems(company?.valid_tariffs)}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Typography fontWeight={900} sx={{ mb: 2 }}>
            Tarifname: {company?.Tarifname}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography>{company?.Tarifbeschreibung}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={900}>Tarifgebühr</Typography>
              <Typography>{company?.Tarifgrundgebühr}</Typography>
              <Typography>
                {company['einmalige Startgebühr']}€ Grundgebühr
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                component={Link}
                to={company['Produktinformation URL']}
                target='_blank'
                variant='outlined'
                fullWidth
              >
                Produktinformation
              </Button>
              <Button
                component={Link}
                to={company['Preisliste URL']}
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
            Datenvolumen: {company?.Datenvolumen}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))
  );
}
