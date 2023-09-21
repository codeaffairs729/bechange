import { Box, Container } from "@mui/material";
import SectionHeading from "../components/typography/SectionHeading";
import AdSection from "../components/AdSection";
import RenderDetails from "../components/RenderDetails";
import { Parallax } from "react-parallax";
import Checkbox from "../components/CheckboxHeader";

export default function Banking() {
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
          <RenderDetails type={"banking"} />
        </Container>
      </Box>
    </Box>
  );
}
