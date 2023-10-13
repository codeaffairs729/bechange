import { useState, useEffect } from "react";
import Consumer from "../components/about/Consumer";
import { Box, Button, CircularProgress, Container } from "@mui/material";
import { Parallax } from "react-parallax";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);

  const style = {
    container: {
      width: "100%",
      mx: "auto",
      mt: "2em",
      mb: "3em",
      // height: "500px",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    h2: {
      fontSize: {
        xs: "20px",
        sm: "40px",
        lg: "40px",
      },
    },
    h3: {
      fontSize: {
        xs: "12px",
        sm: "16px",
        lg: "20px",
      },
      fonWeight: 900,
      marginBottom: {
        xs: "1rem",
      },
    },
    p: {
      fontSize: {
        xs: "12px",
        sm: "16px",
      },
      marginBottom: {
        xs: "1rem",
      },
    },
    borderStyle: {
      border: "1px solid lightgray",
      borderRadius: "16px",
    },
    paper: { p: 2, my: 2 },
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
    <Box sx={{ background: "#FFFAFA" }} mb={8}>
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
            onClick={() => {}}
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
            <Consumer />
          </Box>
        )}
      </Container>
    </Box>
  );
}
