import { useState, useEffect } from "react";
import Consumer from "../components/about/Consumer";
import Profile from "../components/about/Profile";
import StandForSection from "../components/about/StandForSection";
import { Box, Button, CircularProgress, Container } from "@mui/material";
import { Parallax } from "react-parallax";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);

  const style = {
    container: {
      width: "100%",
      mx: "auto",
      mt: "2em",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
    },

    h2: {
      fontSize: {
        xs: "20px",
        sm: "40px",
        lg: "40px",
      },
      fontFamily: "Playfair Display, serif",
      fontWeight: "bold",
    },

    heading: {
      fontSize: {
        xs: "14px",
        sm: "16px",
        lg: "18px",
      },
      fontFamily: "Playfair Display, serif",
      fontWeight: "bold",
    },
    h3: {
      fontSize: {
        xs: "14px",
        sm: "16px",
        lg: "18px",
      },
      fontWeight: "bold",
    },
    h3_2: {
      fontSize: {
        xs: "14px",
        sm: "16px",
        lg: "18px",
      },
      fontFamily: "Playfair Display, serif",
      fontWeight: "bold",
    },
    p1: {
      fontSize: {
        xs: "12px",
        sm: "16px",
      },
      fontFamily: "Ubuntu, sans-serif",
      lineHeight: "1.5",
    },
    borderStyle: {
      border: "0.5px solid lightgray",
      borderRadius: "16px",
      boxShadow: "0px 0px 9px 2px rgba(0,0,0,0.1)",
    },
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
    },

    h4: {
      fontSize: {
        xs: "11px",
        sm: "16px",
        lg: "px",
      },
      fontFamily: "Playfair Display, serif",
      fontWeight: "bold",
      marginBottom: {
        xs: "5px",
        sm: "1rem",
      },
    },
    p: {
      fontSize: {
        xs: "12px",
        sm: "16px",
      },
      fontFamily: "Ubuntu, sans-serif",
      lineHeight: "1.5",
      marginBottom: {
        xs: "0.5rem",
        sm: "1rem",
      },
    },
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
    <Box sx={{ background: "#FFFAFA" }}>
      <Parallax bgImage={"/AboutDesktop.png"} strength={500}>
        <Box sx={style.container} py={25}>
          <Button
            variant="contained"
            size={width < 600 ? "small" : "large"}
            sx={{
              backgroundImage: `url('/Logo_frame_whitebg.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              width: "250px",
              height: "50px",
              borderRadius: "16px",
            }}
          ></Button>
        </Box>
      </Parallax>
      <Container maxWidth="xl" style={{ ...style.container }}>
        {false ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Consumer style={style} />
            <StandForSection style={style} />
            <Profile style={style} />
          </Box>
        )}
      </Container>
    </Box>
  );
}
