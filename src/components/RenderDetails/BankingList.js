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
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        </Box>
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
                columns={{ xs: 12, sm: 14 }}
                sx={{ display: "flex" }}
              >
                <Grid xs={12} sm={6} sx={{ display: "flex", gap: "2px" }}>
                  <Grid item xs={4} sm={6}>
                    <img
                      src={`${process.env.REACT_APP_API_URL}${bank?.logo}`}
                      width="100%"
                      alt={bank?.name}
                    />
                    <Box display="flex" gap={1}>
                      <Box
                        sx={{
                          ...style.payButton,
                          width: { xs: "60px", sm: "60px" },
                        }}
                      >
                        <img src="/g-pay.png" width="100%" alt="Google pay" />
                      </Box>
                      <Box
                        sx={{
                          ...style.payButton,
                          width: { xs: "60px", sm: "60px" },
                        }}
                      >
                        <img
                          src="/apple-pay.png"
                          width="100%"
                          alt="Apple pay"
                        />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={4} sm={4} display="flex">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        padding: "8px",
                      }}
                    >
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
                        sx={{
                          width: "100px",
                          marginRight: "auto",
                          fontSize: "12px",
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
                      <Link to={bank?.fair_finance_url}>
                        <Box
                          display={{ xs: "none", sm: "flex" }}
                          alignItems="center"
                          mt={2}
                          gap={1}
                        >
                          <InfoOutlinedIcon
                            variant="outlined"
                            sx={{ color: "#000" }}
                          />
                          <Typography variant="p" sx={styles.p1}>
                            Fair Finance
                          </Typography>
                        </Box>
                      </Link>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={3}
                    align="center"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="p" sx={styles.p1}>
                      {bank?.amount_free_withdrawl}
                    </Typography>
                    <Typography variant="p" sx={styles.p1}>
                      <Typography color="primary" variant="p" sx={styles.p1}>
                        kostenlose
                      </Typography>{" "}
                      Geldautomaten in Deustsland
                    </Typography>
                  </Grid>
                </Grid>
                <Grid xs={12} sm={6} sx={{ display: "flex" }}>
                  <Grid item xs={8} sm={6}>
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
                  <Grid
                    xs={4}
                    sm={6}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Grid
                      item
                      xs={8}
                      sm={8}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="/visa.png" alt="visa" />
                      <img src="/mastercard.png" alt="mastercard" />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sm={4}
                      display="flex"
                      alignContent="center"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                      gap={2}
                      maxWidth="20px"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size={width < 600 ? "small" : "large"}
                        onClick={() => getBankingTariffs(bank?._id)}
                        fontSize={{ xs: 12, sm: 16 }}
                      >
                        Mehr
                      </Button>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={12} sm={5} mb={2}>
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
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                  </Box>
                </Box>
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
                        alignItems="center"
                        columns={11}
                      >
                        <Grid item xs={10} md={2}>
                          <img
                            src={`${process.env.REACT_APP_API_URL}${bank?.logo}`}
                            width="80%"
                            alt={bank?.name}
                          />
                        </Grid>

                        <Grid
                          item
                          xs={10}
                          md={2}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "center",
                          }}
                        >
                          <Typography sx={{ ...styles.p, fontWeight: "bold" ,textAlign: "center "}}>
                            {tariff?.name}
                          </Typography>

                          <Typography sx={{ ...styles.p, textAlign: "center " }}>
                            Grundgebühr: {tariff?.base_price}€/month
                          </Typography>
                          <Typography sx={{ ...styles.p, textAlign: "center " }}>
                            Girokonto: {tariff?.girocard_fee}€/Jahr
                          </Typography>
                          <Typography sx={{ ...styles.p, textAlign: "center " }}>
                            Kreditkarte: {tariff?.creditcard_fee}€/Jahr
                          </Typography>
                        </Grid>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                        />
                        <Grid item xs={10} md={2}>
                          <Typography sx={{ ...styles.p, textAlign: "center " }}>
                            {tariff?.dispo} Disponzins
                          </Typography>
                          <Typography sx={{ ...styles.p, textAlign: "center " }}>
                            {tariff?.habenzins} Habenzins
                          </Typography>
                        </Grid>
                        <Divider
                          orientation="vertical"
                          variant="middle"
                          flexItem
                        />
                        <Grid item xs={10} md={2}>
                          <Typography sx={{ ...styles.p, textAlign: "center " }}>
                            Jahresbeitrag , fur gesellschaftliches Wirken
                          </Typography>
                          <Typography sx={{ ...styles.p, textAlign: "center " }}>
                            {tariff?.total_price} €/Jahr
                          </Typography>
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
                                sx={{ color: "#000", ...styles.p }}
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
                <Box display="flex" alignItems="center" justifyContent="center">
                  <AccordionSummary
                    expandIcon={<ExpandLess />}
                    variant="h6"
                    sx={styles.h6}
                    onClick={() => {
                      setExpanded(!expanded);
                    }}
                  >
                    Tariff
                  </AccordionSummary>
                </Box>
              </Box>
            </AccordionDetails>
          </StyledAccordion>
        ))
      )}
    </>
  );
}
