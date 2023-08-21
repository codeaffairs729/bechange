import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanks, getBankingTariffs } from '../../redux/actions/telecom';
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
import { PieChart } from 'react-minimal-pie-chart';

export default function MobileList() {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(getBanks());
  }, [dispatch]);

  const { loading, loadingBankTariffs, banks, tariffs } = useSelector(
    state => state.banking
  );

  //   const getTariffs = network => {
  //     dispatch(getTelecomTariffs(network));
  //   };

  const handleChange = (panel, isExpanded, bankId) => {
    setExpanded(isExpanded ? panel : false);
    isExpanded && dispatch(getBankingTariffs(bankId));
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
    banks?.map((bank, i) => (
      <Accordion
        key={i}
        expanded={expanded === `panel${i}`}
        onChange={() => handleChange(`panel${i}`, !expanded, bank?._id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls={`panel${i}bh-content`}
          id={`panel${i}bh-header`}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            <img
              src={`${process.env.REACT_APP_API_URL}${bank?.logo}`}
              width={'50%'}
              alt={bank?.name}
            />
          </Typography>
          <Typography
            variant='h4'
            sx={{ width: '33%', flexShrink: 0, lineHeight: '4.5em' }}
          >
            {'Tarife'}
          </Typography>
          <Typography sx={{ width: '33%' }}>
            <Typography>
              Fair Finance Score: {bank?.fair_finance_score}%
            </Typography>
            <PieChart
              data={[
                {
                  title: 'Fair Finance Score',
                  value: bank?.fair_finance_score,
                  color: 'green',
                },
                {
                  title: 'Reference',
                  value: 100 - bank?.fair_finance_score,
                  color: '#eee',
                },
              ]}
              lineWidth={50}
              style={{
                width: '100px',
                marginRight: '50px',
              }}
              segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
              animate
            />
          </Typography>
          <Button
            variant='contained'
            color='tertiary'
            onClick={() => getBankingTariffs(bank?._id)}
          >
            Wechseln
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container sx={{ justifyContent: 'space-between' }}>
            <Grid item xs={12} sm={5}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Über {bank?.name}
              </Typography>
              <Typography>{renderItems(bank?.about)}</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant='h6' sx={{ mb: 2 }}>
                Außerdem
              </Typography>
              <Typography>{renderItems(bank?.more_services)}</Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />
          {loadingBankTariffs ? (
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
                      <Typography>
                        Grundgebühr: {tariff?.base_price}€/month
                      </Typography>
                      <Typography>
                        Girokonto: {tariff?.girocard_fee}€/Jahr
                      </Typography>
                      <Typography>
                        Kreditkarte: {tariff?.creditcard_fee}€/Jahr
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>{tariff?.dispo} Disponzins</Typography>
                      <Typography>{tariff?.habenzins}% Habenzins</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        // component={Link}
                        // to={tariff?.product_info_url}
                        // target='_blank'
                        variant='contained'
                        fullWidth
                      >
                        Wechseln
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })
          )}
        </AccordionDetails>
      </Accordion>
    ))
  );
}
