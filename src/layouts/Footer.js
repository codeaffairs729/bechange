import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { Instagram, Pinterest, LinkedIn } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate, useParams } from "react-router-dom";
import { Menu as MenuIcon, Home } from "@mui/icons-material";

export default function Footer() {
  const navigate = useNavigate();

  const path = useParams();

  const { screen } = path;

  const navItems = [
    // {
    //   title: 'Home',
    //   slug: '',
    // },
    {
      title: "Energie",
      slug: "energie",
      main: true,
      icon: "/green-energy.png",
      variant: "contained",
      active: true,
    },
    {
      title: "Banking",
      slug: "banking",
      main: true,
      icon: "/growth.png",
      variant: "contained",
      active: true,
    },
    {
      title: "Mobilfunk",
      slug: "mobile-funk",
      main: true,
      icon: "/sim-card.png",
      variant: "contained",
      active: true,
    },
  ];

  const styles = {
    Container: {
      position: "absolute",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      zIndex: "1",
      borderRadius: "0px 0px 40px 40px",
      background: "linear-gradient(180deg,  #d9d0be 15%, #709A4C  50%)",
    },
    button: {
      my: 2,
      borderRadius: "20px",
    },
    buttonContent: {
      fontSize: "10px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    buttonSyling: {
      color: "#000",
      fontSize: { xs: "12px", sm: "13px" },
      textDecoration: "underline",
    },
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
    },
    upArrow: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background: "#598F34",
      color: "white",
      marginTop: "20px",
    },
  };

  const handleOpenNavMenu = (event) => {};

  const handleCloseNavMenu = (slug) => {
    navigate("/" + slug);
  };

  return (
    <Box
      component={"footer"}
      sx={{
        background:
          "linear-gradient(0deg, rgba(105,136,0,1) 0%, rgba(180,179,112,1) 34%, rgba(255,255,255,1) 87%)",
        pb: 3,
      }}
    >
      <Divider />
      <Box sx={{ textAlign: "center", my: 5 }}>
        <img src="./logo_final.svg" width={"200vw"} alt="BeChange Logo" />
        <Typography display={{ xs: "none", sm: "block" }}>
          &copy; BeChange. {new Date().getFullYear()}
        </Typography>
        <Box
          sx={{
            ...styles.flexCenter,
            display: { xs: "flex", sm: "none" },
          }}
        >
          {navItems.map((item, i) => (
            <Box
              key={i}
              onClick={() => handleCloseNavMenu(item.slug)}
              sx={{
                display: "flex",
                border: "none",
                gap: "20px",
                justifyContent: "center",
                flexBasis: "30%",
              }}
            >
              <Button
                key={i}
                onClick={() => handleCloseNavMenu(item.slug)}
                size="small"
                sx={{
                  ...styles.button,
                  ...styles.flexCenter,
                  color: item.main ? "#fff" : "#000",
                  background:
                    item.active && (screen == item.slug ? "#385125" : ""),
                }}
                variant={item.variant}
              >
                <Box sx={styles.buttonContent}>
                  {item.title === "Home" ? (
                    <Home color="primary" />
                  ) : (
                    item.title
                  )}
                  {item.icon && (
                    <img src={item.icon} alt="button icon" width="15" />
                  )}
                </Box>
              </Button>
            </Box>
          ))}
        </Box>
        <Box sx={{ my: 3 }}>
          <Button sx={{ color: "black" }}>Qualität</Button>
          <Button sx={{ color: "black" }}>Blog</Button>
          <Button sx={{ color: "black" }}>About</Button>
        </Box>
      </Box>
      <Container sx={{ width: "100%" }}>
        <Grid
          container
          sx={{
            my: 3,
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton>
              <Pinterest />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Grid>
          <Box display={{ xs: "block", sm: "none" }}>
            <a
              href="#hero-section"
              style={{
                ...styles.upArrow,
                ...styles.flexCenter,
              }}
            >
              <KeyboardArrowUpIcon />
            </a>
          </Box>
          <Grid sm={4}>
            <Box
              display={{
                xs: "none",
                sm: "flex",
              }}
              sx={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src="/certificate.png" alt="Manitu Certificate" />
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              gap: "2px",
              fontSize: "10px",
            }}
            xs={12}
            sm={4}
            mt={{ xs: 4, sm: 0 }}
          >
            <Button sx={{ ...styles.buttonSyling }} size="small">
              Impressum
            </Button>
            <Button
              sx={{
                ml: { xs: 0, sm: 3 },
                ...styles.buttonSyling,
              }}
              size="small"
            >
              Datenschutz
            </Button>
            <Button
              sx={{
                ml: { xs: 0, sm: 3 },
                ...styles.buttonSyling,
              }}
              size="small"
            >
              Nutzungsbedingen
            </Button>
          </Grid>
          <Box
            display={{
              xs: "flex",
              sm: "none",
            }}
            sx={{
              flexDirection: "column",
              alignItems: "center",
            }}
            mt={4}
          >
            <Typography
              display={{
                fontSize: { xs: "10px", sm: "13px" },
              }}
              mb={4}
            >
              &copy; BeChange. {new Date().getFullYear()}
            </Typography>

            <img src="/certificate.png" alt="Manitu Certificate" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
