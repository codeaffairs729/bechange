import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanks, getBankingTariffs } from "../../redux/actions/telecom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { PieChart } from "react-minimal-pie-chart";
import { StyledAccordion } from "./EnergyList.js";

export default function MobileList() {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const style = {
    payButton: {
      border: "1px solid black",
      borderRadius: "4px",
      p: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  useEffect(() => {
    dispatch(getBanks());
  }, [dispatch]);

  const { loading, loadingBankTariffs, banks, tariffs } = useSelector(
    (state) => state.banking
  );

  //   const getTariffs = network => {
  //     dispatch(getTelecomTariffs(network));
  //   };

  const handleChange = (panel, isExpanded, bankId) => {
    setExpanded(isExpanded ? panel : false);
    isExpanded && dispatch(getBankingTariffs(bankId));
  };

  const renderItems = (items) => {
    const splitItems = items.split("- ");
    const result = splitItems.map((item) => {
      return <p>{"- " + item}</p>;
    });
    return result.slice(1);
  };

  return loading ? (
    <CircularProgress />
  ) : (
    banks?.map((bank, i) => (
      <StyledAccordion
        key={i}
        expanded={expanded === `panel${i}`}
        onChange={() => handleChange(`panel${i}`, !expanded, bank?._id)}
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 2px 4px rgba(100, 100, 100, 0.498039)",
          borderRadius: "22px",
          marginBottom: "20px",
        }}
      >
        <AccordionSummary
          aria-controls={`panel${i}bh-content`}
          id={`panel${i}bh-header`}
        >
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            columns={14}
          >
            <Grid item xs={7} md={2}>
              <img
                src={`${process.env.REACT_APP_API_URL}${bank?.logo}`}
                width="80%"
                alt={bank?.name}
              />
              <Box display="flex" gap={1}>
                <Box sx={style.payButton}>
                  <img src="/g-pay.png" width="40px" alt="Google pay" />
                </Box>
                <Box sx={style.payButton}>
                  <img src="/apple-pay.png" width="40px" alt="Apple pay" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={7} md={1}>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">Tariff</Typography>
                <ExpandMore />
              </Box>
            </Grid>
            <Grid item xs={7} md={2} align="center">
              <PieChart
                data={[
                  {
                    title: "Fair Finance Score",
                    value: bank?.fair_finance_score,
                    color: "green",
                  },
                  {
                    title: "Reference",
                    value: 100 - bank?.fair_finance_score,
                    color: "#eee",
                  },
                ]}
                lineWidth={50}
                style={{
                  width: "100px",
                  marginRight: "auto",
                  fontSize: "9px",
                  fontWeight: "600",
                  fill: "#fff",
                }}
                segmentsStyle={{
                  transition: "stroke .3s",
                  cursor: "pointer",
                }}
                label={({ dataEntry }) =>
                  dataEntry?.value && `${dataEntry?.value}%`
                }
                labelPosition={100 - 60 / 2}
                animate
              />
            </Grid>
            <Grid item xs={7} md={2} align="center">
              <Typography variant="h5">17.300</Typography>
              <Typography variant="p" fontSize="14px">
                <Typography color="primary">kostenlose</Typography>{" "}
                Geldautomaten in Deustsland
              </Typography>
            </Grid>
            <Grid item xs={7} md={3}>
              <Typography variant="p" fontSize="14px">
                0 &#8364; Debitkarte
              </Typography>
              <br />
              <Typography variant="p" fontSize="14px">
                0 &#8364; Kreditkarte
              </Typography>
              <br />
              <Typography variant="p" fontSize="14px" color="primary">
                ab 3,70 &#8364; mtl.kontofuhrung
              </Typography>
            </Grid>
            <Grid item xs={7} md={1}>
              <img src="/visa.png" alt="visa" />
              <img src="/mastercard.png" alt="mastercard" />
            </Grid>
            <Grid item xs={7} md={2} display="flex" justifyContent="end">
              <Button
                variant="contained"
                color="primary"
                onClick={() => getBankingTariffs(bank?._id)}
              >
                Wechseln
              </Button>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item xs={12} sm={5}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Über {bank?.name}
              </Typography>
              <Typography>{renderItems(bank?.about)}</Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="h6" sx={{ mb: 2 }}>
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
                  {/* <Typography fontWeight={900} sx={{ mb: 2 }}>
                    Tarifname: {tariff?.name}
                  </Typography> */}
                  <Grid
                    container
                    spacing={1}
                    display="flex"
                    alignContent="center"
                    justifyContent="center"
                    columns={11}
                  >
                    <Grid item xs={10} md={2}>
                      <img
                        src={`${process.env.REACT_APP_API_URL}${bank?.logo}`}
                        width="80%"
                        alt={bank?.name}
                      />
                    </Grid>

                    <Grid item xs={10} md={2}>
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
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={10} md={2}>
                      <Typography>{tariff?.dispo} Disponzins</Typography>
                      <Typography>{tariff?.habenzins} Habenzins</Typography>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={10} md={2}>
                      <Typography>
                        Jahresbeitrag , fur gesellschaftliches Wirken
                      </Typography>
                      <Typography>60 €/Jahr</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      md={2}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        // component={Link}
                        // to={tariff?.product_info_url}
                        // target='_blank'
                        variant="contained"
                      >
                        Wechseln
                      </Button>
                    </Grid>
                  </Grid>
                  <Box mt={2}>
                    <Divider />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt={1}
                    >
                      <Typography variant="h6">Tarife</Typography>
                      <ExpandLess />
                    </Box>
                  </Box>
                </Paper>
              );
            })
          )}
        </AccordionDetails>
      </StyledAccordion>
    ))
  );
}
