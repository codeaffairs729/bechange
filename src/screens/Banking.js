import { useState } from "react";
import { Box, Container } from "@mui/material";
import SectionHeading from "../components/typography/SectionHeading";
import AdSection from "../components/AdSection";
import RenderDetails from "../components/RenderDetails";
import { Parallax } from "react-parallax";
import Checkbox from "../components/CheckboxHeader";
import Registration from "../components/RenderDetails/Registration";

export default function Banking() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const style = {
    container: { mx: "auto", mt: "12em", mb: "7em" },
  };
  const labels = [
    { label: "Alter" },
    { label: "Kreditkarte" },
    { label: "Gemeinschaftskonto" },
  ];
  return (
    <Box>
      <Parallax bgImage={"/cover.png"} strength={500}>
        <Box sx={style.container}>
          <Checkbox labels={labels} />
        </Box>
      </Parallax>
      <Box mt={5} mb={5}>
        <Container maxWidth="lg">
          <SectionHeading title={"Banking"} />
          <AdSection
            title={"Dein Impact für Banking"}
            desc={"Lorem Ipsum Dolor Sit Amet"}
            text1={"Bio? Selbes gilt für Ökostrom"}
            text2={"Kostencheck: wie viel kostet es mich mehr?"}
          />
          {isSubscribed && <RenderDetails type={"banking"} />}
        </Container>
        {!isSubscribed && <Registration />}
      </Box>
    </Box>
  );
}
