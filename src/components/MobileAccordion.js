import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getTelecomCompanies,
  getTelecomTariffs,
} from "../redux/actions/telecom";
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
import styles from "./typography/StyleTypography";
import { StyledAccordion } from "./Common";

const MobileAccordion = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(getTelecomCompanies());
  }, [dispatch]);

  const { loadingTariffs, companies, tariffs } = useSelector(
    (state) => state.telecom
  );

  const networkImgage = [
    "",

    "Wetell_Logo_mit_Kreis_800x536_weisser_hintergrund.png.png",

    "goood_logo_green_rgb.jpg.png",

    "amiva-mobilfunk-logo.svg.png",
  ];
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
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <Box>
      {companies?.map((company, i) => (
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
              columns={12}
            >
              <Grid item xs={4} sm={2} style={{ order: 1 }}>
                <img
                  src={`${process.env.REACT_APP_API_URL}${company?.logo}`}
                  width={"80%"}
                  alt={company?.name}
                />
              </Grid>
              <Grid
                item
                sm={1}
                display={{ xs: "none", sm: "block" }}
                style={{ order: 2 }}
              >
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
              <Grid
                item
                xs={4}
                sm={3}
                sx={{ order: { xs: "4", sm: "3" } }}
                display={"flex"}
                justifyContent={{ xs: "end", sm: "center" }}
              >
                <img
                  src={`/${networkImgage[company.network]}`}
                  width={"40%"}
                  alt={company?.network}
                />
              </Grid>
              <Grid
                item
                xs={4}
                sm={3}
                sx={{ order: { xs: "3", sm: "4" } }}
                display={"flex"}
                justifyContent="center"
                justifyItems="center"
              >
                <Typography variant="h6" sx={styles.h6}>
                  Ab 5,99 &#8364;/Monat
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={2}
                display="flex"
                justifyContent="center"
                style={{ order: 5 }}
              >
                {width < 600 ? (
                  <Box mt={2}>
                    <ExpandMore />
                  </Box>
                ) : (
                  <Button
                    display={{ xs: "none", sm: "block" }}
                    variant="contained"
                    color="primary"
                    onClick={() => getTariffs(company?._id)}
                    size={width < 600 ? "small" : "large"}
                  >
                    Mehr
                  </Button>
                )}
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container sx={{ justifyContent: "space-evenly" }}>
              <Grid item xs={12} sm={5}>
                <Typography variant="h6" sx={styles.h6} fontWeight={900}>
                  Über {company?.name}
                </Typography>
                <Typography>{renderItems(company?.about)}</Typography>
              </Grid>
              <Grid item xs={12} sm={5} mt={2}>
                <Typography variant="h6" sx={styles.h6} fontWeight={900}>
                  Gilt für alle Tarife
                </Typography>
                <Typography>{renderItems(company?.valid_tariffs)}</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            {loadingTariffs ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              tariffs?.map((tariff, i) => {
                return (
                  <Paper key={i} sx={{ p: 2, mb: 3 }}>
                    <Typography fontWeight={900} sx={{ mb: 2, ...styles.p }}>
                      {tariff?.name}
                    </Typography>
                    <Grid container columns={10}>
                      <Grid item xs={5} md={2}>
                        <Grid item xs={12}>
                          <img
                            src={`${process.env.REACT_APP_API_URL}${company?.logo}`}
                            width={"50%"}
                            alt={company?.name}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Box
                            sx={{
                              display: { xs: "flex", sm: "none" },
                              flexDirection: "column",
                            }}
                          >
                            <Typography fontWeight={900} sx={styles.p}>
                              Tarifgebühr
                            </Typography>
                            <Typography sx={styles.p}>
                              {Math.round(tariff?.base_price)
                                .toFixed(2)
                                .replace(".", ",")}
                              €/Monat
                            </Typography>
                            <Typography sx={styles.p}>
                              {Math.round(tariff?.setup_cost)
                                .toFixed(2)
                                .replace(".", ",")}
                              € Grundgebühr
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid item xs={5} md={2}>
                        <Typography>{renderItems(tariff?.details)}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        md={2}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            display: { xs: "none", sm: "flex" },
                            flexDirection: "column",
                          }}
                        >
                          <Typography fontWeight={900} sx={styles.p}>
                            Tarifgebühr
                          </Typography>
                          <Typography sx={styles.p}>
                            {Math.round(tariff?.base_price)
                              .toFixed(2)
                              .replace(".", ",")}
                            €/Monat
                          </Typography>
                          <Typography sx={styles.p}>
                            {Math.round(tariff?.setup_cost)
                              .toFixed(2)
                              .replace(".", ",")}
                            € Grundgebühr
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        md={2}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={styles.p} fontWeight={900}>
                          {tariff?.data}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={10}
                        md={2}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt={{ xs: 4, sm: 0 }}
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

                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      mt={2}
                    >
                      <InfoOutlinedIcon
                        variant="outlined"
                        sx={{ color: "#000" }}
                      />
                      <Link to={tariff?.product_info_url}>
                        <Typography
                          variant="p"
                          fontSize={14}
                          sx={{ color: "#000", ...styles.p }}
                        >
                          TARIF-DETAILS
                        </Typography>
                      </Link>
                    </Box>
                  </Paper>
                );
              })
            )}
            <Box mt={2}>
              <Divider />
              <Box display="flex" alignItems="center" justifyContent="center">
                <a
                  href={`#panel${i}bh-header`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
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
                </a>
              </Box>
            </Box>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </Box>
  );
};

export default MobileAccordion;
