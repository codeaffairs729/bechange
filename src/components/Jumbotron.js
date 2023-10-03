import { Box, Button, Typography } from "@mui/material";
import { Parallax } from "react-parallax";

export default function Jumbotron({
  title,
  desc,
  btnText,
  link,
  setSectionToScroll,
}) {
  const insideStyles = {
    padding: 10,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    width: 1,
  };

  const handleClick = () => {
    console.log("handleClick");
    setSectionToScroll('sectionToScroll'); 
  };

  return (
    <Parallax bgImage={"/cover.png"} strength={500}>
      <Box sx={{ height: 500 }}>
        <Box sx={insideStyles}>
          <Typography variant="h4" fontWeight={900} color="primary.light">
            {title}
          </Typography>
          <Typography variant="h5" color="primary.light" fontStyle={"italic"}>
            {desc}
          </Typography>
          {link && (
            <Button variant="contained" sx={{ mt: 5 }} onClick={handleClick}>
              {btnText}
            </Button>
          )}
        </Box>
      </Box>
    </Parallax>
  );
}
