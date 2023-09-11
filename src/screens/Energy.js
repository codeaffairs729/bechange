import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Calculator from "../components/Calculator";
import EnergyList from "../components/RenderDetails/EnergyList";
import { Parallax } from "react-parallax";
import AdSection from "../components/AdSection";

export default function Energy() {
  const style = {
    container: { mx: "auto", mt: "8em", mb: "3em" },
  };

  const [tariffData, setTariffData] = useState([]);

  return (
    <Box>
      <Parallax bgImage={"/cover.png"} strength={500}>
        <Box sx={style.container}>
          <Calculator setTariffData={setTariffData} />
        </Box>
      </Parallax>
      <Box mt={5} mb={5}>
        <Container>
          <AdSection
            title={"Dein Impact fur Energie"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus libero ullam at ipsum quibusdam illum dignissimos, quam totam!"
            }
            text1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            text2={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          />
          <EnergyList tariffData={tariffData} />
          <Box width="fit-content" ml="auto" mt={2}>
          <Typography variant="h5">In Kooperation mit</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
