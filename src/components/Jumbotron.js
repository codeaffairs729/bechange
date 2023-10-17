import { Box, Button, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import Lottie from "react-lottie";
import * as animationData from "./../assets/images/other/downArrow.json";
import { useState, useEffect } from "react";
export default function Jumbotron({
  title,
  desc,
  btnText,
  link,
  setSectionToScroll,
}) {
  const insideStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    width: 1,
  };

  const handleClick = () => {
    console.log("handleClick");
    setSectionToScroll("sectionToScroll");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
        width > 600
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
            <Box onClick={handleClick} mt={5} sx={{ cursor: "pointer" }}>
              <Lottie options={defaultOptions} width={50} height={50} />
            </Box>
          )}
        </Box>
      </Box>
    </Parallax>
  );
}
