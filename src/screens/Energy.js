import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Calculator from "../components/Calculator";
import EnergyList from "../components/RenderDetails/EnergyList";
import { Parallax } from "react-parallax";
import AdSection from "../components/AdSection";
import styles from "../components/typography/StyleTypography";
import Registration from "../components/RenderDetails/Registration";
export default function Energy() {
  const style = {
    container: { mx: "auto", mt: "8em", mb: "3em" },
  };

  const [tariffData, setTariffData] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(true);

  const handleCalculate = () => {
    // setIsSubscribed(false);
  };

  return (
    <Box sx={{ background: "#fffafa" }}>
      <Parallax bgImage={"/cover.png"} strength={500}>
        <Box sx={style.container}>
          <Calculator
            setTariffData={setTariffData}
            handleCalculate={handleCalculate}
          />
        </Box>
      </Parallax>
      <Box mb={5} id="hero" sx={{ minHeight: "80vh" }}>
        <Container maxWidth="lg">
          <AdSection
            title={"Dein Impact fur Energie"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ducimus libero ullam at ipsum quibusdam illum dignissimos, quam totam!"
            }
            text1={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            text2={
              "Lorem ipsum dolorfalse sit amet consectetur adipisicing elit."
            }
          />
          {isSubscribed && (
            <>
              <EnergyList tariffData={tariffData} />
              <Box
                display="flex"
                gap={2}
                alignItems="center"
                width="fit-content"
                ml="auto"
                mt={2}
              >
                <Typography variant="h5" sx={styles.h5}>
                  In Kooperation mit
                </Typography>
                <img
                  src="/switch-for-climate.png"
                  style={{ width: "150px" }}
                  alt="switch-for-climate"
                />
              </Box>
            </>
          )}
        </Container>
        {!isSubscribed && <Registration />}
      </Box>
    </Box>
  );
}
