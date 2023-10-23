import { Box, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import { Parallax } from "react-parallax";
import { useState, useEffect } from "react";
import "./../../src/styles.css";

export default function Jumbotron({
  title,
  desc,
  link,
  setSectionToScroll,
  cover,
}) {
  const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    width: 1,
  };

  const style = {
    btnStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      zIndex: "10",
      background: "#4B7A2C",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      margin: "auto",
      marginTop: "10px",
    },
  };

  const handleClick = () => {
    console.log("handleClick");
    setSectionToScroll("sectionToScroll");
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(false);

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
    <Parallax
      bgImage={
        cover
          ? cover
          : width > 600
          ? title === "Blog"
            ? "/BlogDesktop.png"
            : "/cover.png"
          : title === "Blog"
          ? "/BlogMobile.png"
          : "/cover.png"
      }
      strength={500}
      sx={{ zIndex: "5" }}
    >
      <Box sx={{ height: 500 }}>
        <Box sx={{ ...insideStyles, padding: { xs: 0, sm: 10 } }}>
          <Typography variant="h4" fontWeight={900} color="primary.light">
            {title}
          </Typography>
          <Typography variant="h5" color="primary.light" fontStyle={"italic"}>
            {desc}
          </Typography>

          {link && (
            <Box onClick={handleClick} mt={5} style={style.btnStyle}>
              <SouthIcon
                sx={{
                  color: "white",
                  animation: "moveUpDown 2s ease infinite",
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Parallax>
  );
}
