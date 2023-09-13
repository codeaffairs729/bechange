import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTelecomCompanies,
  getTelecomTariffs,
} from "../../redux/actions/telecom";
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
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";
import styles from "../typography/StyleTypography";
import Modal from "../Modal";
import TariffDetails from "./TariffDetails";
import { StyledAccordion } from "../Common";

export default function MobileList() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(getTelecomCompanies());
  }, [dispatch]);

  const { loading, loadingTariffs, companies, tariffs } = useSelector(
    (state) => state.telecom
  );

  const getTariffs = (network) => {
    dispatch(getTelecomTariffs(network));
  };

  const handleChange = (panel, isExpanded, company) => {
    setExpanded(isExpanded ? panel : false);
    isExpanded && getTariffs(company);
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
      </Modal>{" "}
      {loading ? (
        <CircularProgress />
      ) : (
        companies?.map((company, i) => (
          <StyledAccordion
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={() => handleChange(`panel${i}`, !expanded, company?._id)}
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
                columns={10}
              >
                <Grid item xs={5} md={2}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${company?.logo}`}
                    width={"50%"}
                    alt={company?.name}
                  />
                </Grid>
                <Grid item xs={5} md={2}>
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6" sx={styles.h6}>
                      Tariff
                    </Typography>
                    <ExpandMore />
                  </Box>
                </Grid>
                <Grid item xs={5} md={2}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${company?.logo}`}
                    width={"50%"}
                    alt={company?.name}
                  />
                </Grid>
                <Grid item xs={5} md={2}>
                  <Typography variant="h6" sx={styles.h6}>
                    Ab 5,99 &#8364;/Monat
                  </Typography>
                </Grid>
                <Grid item xs={10} md={2} display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => getTariffs(company?._id)}
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
                    Über {company?.name}
                  </Typography>
                  <Typography>{renderItems(company?.about)}</Typography>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Typography variant="h6" sx={styles.h6} fontWeight={900}>
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
                      <Typography fontWeight={900} sx={{ mb: 2, ...styles.p }}>
                        Tarifname: {tariff?.name}
                      </Typography>
                      <Grid container columns={10} >
                        <Grid item xs={5} md={2}>
                          <img
                            src={`${process.env.REACT_APP_API_URL}${company?.logo}`}
                            width={"50%"}
                            alt={company?.name}
                          />
                        </Grid>
                        <Grid item xs={5} md={2}>
                          <Typography>
                            {renderItems(tariff?.details)}
                          </Typography>
                        </Grid>
                        <Grid item xs={5} md={2}>
                          <Typography fontWeight={900} sx={styles.p}>
                            Tarifgebühr
                          </Typography>
                          <Typography sx={styles.p}>
                            {tariff?.base_price}€/Monat
                          </Typography>
                          <Typography sx={styles.p}>
                            {tariff?.setup_cost}€ Grundgebühr
                          </Typography>
                        </Grid>
                        <Grid item xs={5} md={2}>
                          <Link onClick={() => setOpenModal(true)}>
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
                        <Grid
                          item
                          xs={10} md={2}
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
                      <Divider sx={{ my: 2 }} />
                      <Typography sx={styles.p} fontWeight={900}>
                        Datenvolumen: {tariff?.data}
                      </Typography>
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
