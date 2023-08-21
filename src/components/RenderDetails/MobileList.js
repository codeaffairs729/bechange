import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTelecomCompanies,
  getTelecomTariffs,
} from '../../redux/actions/telecom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function MobileList() {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(getTelecomCompanies());
  }, [dispatch]);

  const { loading, loadingTariffs, companies, tariffs } = useSelector(
    state => state.telecom
  );

  const getTariffs = network => {
    dispatch(getTelecomTariffs(network));
  };

  const handleChange = (panel, isExpanded, company) => {
    setExpanded(isExpanded ? panel : false);
    isExpanded && getTariffs(company);
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
        onChange={() => handleChange(`panel${i}`, !expanded, company?._id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={`panel${i}bh-content`}
          id={`panel${i}bh-header`}
        >
          <Typography sx={{ width: '33%', flexGrow: 1 }}>
            <img
              src={`${process.env.REACT_APP_API_URL}${company?.logo}`}
              width={'20%'}
              alt={company?.name}
            />
          </Typography>
          <Typography
            variant='h4'
            sx={{ width: '33%', flexShrink: 0, lineHeight: '2.5em' }}
          >
            {'Tarife'}
          </Typography>
          <Button
            variant='contained'
            color='tertiary'
            onClick={() => getTariffs(company?._id)}
          >
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
          {loadingTariffs ? (
            <CircularProgress />
          ) : (
            tariffs?.map((tariff, i) => {
              return (
                <Paper key={i} sx={{ p: 2, mb: 3 }}>
                  <Typography fontWeight={900} sx={{ mb: 2 }}>
                    Tarifname: {tariff?.name}
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography>{renderItems(tariff?.details)}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography fontWeight={900}>Tarifgebühr</Typography>
                      <Typography>{tariff?.base_price}€/Monat</Typography>
                      <Typography>{tariff?.setup_cost}€ Grundgebühr</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        component={Link}
                        to={tariff?.product_info_url}
                        target='_blank'
                        variant='outlined'
                        fullWidth
                      >
                        Produktinformation
                      </Button>
                      <Button
                        component={Link}
                        to={tariff?.price_list_url}
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
                    Datenvolumen: {tariff?.data}
                  </Typography>
                </Paper>
              );
            })
          )}
        </AccordionDetails>
      </Accordion>
    ))
  );
}
