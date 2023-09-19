import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanks, getBankingTariffs } from "../../redux/actions/telecom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

import {
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
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { PieChart } from "react-minimal-pie-chart";
import Modal from "../Modal";
import TariffDetails from "./TariffDetails";
import styles from "../typography/StyleTypography";
import { StyledAccordion } from "../Common";

export default function MobileList() {
  const [openModal, setOpenModal] = useState(false);
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
      return <Typography sx={styles.p}>{"- " + item}</Typography>;
    });
    return result.slice(1);
  };

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal}>
        <TariffDetails />
      </Modal>
      {loading ? (
        <CircularProgress />
      ) : (
        banks?.map((bank, i) => (
          <StyledAccordion
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={() => handleChange(`panel${i}`, !expanded, bank?._id)}
            sx={{
              mt: 2,
              borderRadius: 4,
              boxShadow: "0px 2px 4px rgba(100, 100, 100, 0.498039)",
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
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      variant="h6"
                      sx={styles.h6}
                    >
                      Tariff
                    </AccordionSummary>
                  </Box>
                </Grid>
                <Grid item xs={12} md={2} align="center">
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
                  <Typography variant="h5" sx={styles.h5}>
                    17.300
                  </Typography>
                  <Typography variant="p" sx={styles.p}>
                    <Typography color="primary">kostenlose</Typography>{" "}
                    Geldautomaten in Deustslandhello
                  </Typography>
                </Grid>
                <Grid item xs={7} md={3}>
                  <Typography variant="p" sx={styles.p1}>
                    0 &#8364; Debitkarte
                  </Typography>
                  <br />
                  <Typography variant="p" sx={styles.p1}>
                    0 &#8364; Kreditkarte
                  </Typography>
                  <br />
                  <Typography variant="p" sx={styles.p1} color="primary">
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
                  <Typography variant="h6" sx={styles.h6} fontWeight={900}>
                    Über {bank?.name}
                  </Typography>
                  <Typography>{renderItems(bank?.about)}</Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Typography variant="h6" sx={styles.h6} fontWeight={900}>
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
                          <Typography sx={styles.p}>
                            Grundgebühr: {tariff?.base_price}€/month
                          </Typography>
                          <Typography sx={styles.p}>
                            Girokonto: {tariff?.girocard_fee}€/Jahr
                          </Typography>
                          <Typography sx={styles.p}>
                            Kreditkarte: {tariff?.creditcard_fee}€/Jahr
                          </Typography>
                        </Grid>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                        />
                        <Grid item xs={10} md={2}>
                          <Typography sx={styles.p}>
                            {tariff?.dispo} Disponzins
                          </Typography>
                          <Typography sx={styles.p}>
                            {tariff?.habenzins} Habenzins
                          </Typography>
                        </Grid>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                        />
                        <Grid item xs={10} md={2}>
                          <Typography sx={styles.p}>
                            Jahresbeitrag , fur gesellschaftliches Wirken
                          </Typography>
                          <Typography sx={styles.p}>60 €/Jahr</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          md={2}
                          display="flex"
                          flexDirection="column"
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
                          <Link to="#">
                            <Box display="flex" alignItems="center" mt={2}>
                              <InfoOutlinedIcon
                                variant="outlined"
                                sx={{ color: "#000" }}
                              />
                              <Typography
                                variant="p"
                                fontSize={14}
                                sx={{ ...styles.p, color: "#000" }}
                              >
                                TARIF-DETAILS
                              </Typography>
                            </Box>
                          </Link>
                        </Grid>
                      </Grid>
                    </Paper>
                  );
                })
              )}
              <Box mt={2}>
                <Divider />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt={1}
                >
                  <Typography variant="h6" sx={styles.h6}>
                    Tarife
                  </Typography>
                  <ExpandLess />
                </Box>
              </Box>
            </AccordionDetails>
          </StyledAccordion>
        ))
      )}
    </>
  );
}
