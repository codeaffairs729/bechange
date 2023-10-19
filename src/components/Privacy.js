import { Box, Typography } from "@mui/material";
import styles from "./typography/StyleTypography";
import { Link } from "react-router-dom";
import Section1 from "./privacy/section1";
import Section2 from "./privacy/section2";
import Section3 from "./privacy/section3";
import Section4 from "./privacy/section4";

const style = {
  container: {
    width: "100%",
    mx: "auto",
    mt: "2em",
    display: "flex",
    justifyContent: "start",
    justifyItems: "start",
    alignContent: "start",
    alignItems: "start",
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
      sm: "24px",
      lg: "32px",
    },
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
    marginBottom: "12px",
    marginTop: "12px",
  },

  h3_2: {
    fontSize: {
      xs: "14px",
      sm: "16px",
      lg: "18px",
    },
    fontFamily: "Playfair Display, serif",
    fontWeight: "bold",
    marginTop: "1rem",
    marginBottom: {
      xs: "0.5rem",
      sm: "1rem",
    },
  },
  h3: {
    fontSize: {
      xs: "11px",
      sm: "16px",
      lg: "18px",
    },
    fontFamily: "Playfair Display, serif",
    marginBottom: {
      xs: "0.5rem",
      sm: "1rem",
    },
    marginTop: {
      xs: "5px",
      sm: "1rem",
    },
  },
  h4: {
    fontSize: {
      xs: "11px",
      sm: "16px",
      lg: "18px",
    },
    fontWeight: "bold",
    marginBottom: {
      xs: "5px",
      sm: "1rem",
    },
    marginTop: {
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
    marginBottom: "12px",
  },
};

const Privacy = () => {
  return (
    <Box
      py={{ xs: 0, sm: 8 }}
      px={{ xs: 4, sm: 16 }}
      sx={{ ...style.container, flexDirection: "column" }}
    >
      <Section1 style={style} />
      <Section2 style={style} />
      <Section3 style={style} />
      <Section4 style={style} />
    </Box>
  );
};

export default Privacy;
