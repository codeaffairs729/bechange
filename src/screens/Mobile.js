import { useState } from "react";
import { Box, Container } from "@mui/material";
import SectionHeading from "../components/typography/SectionHeading";
import AdSection from "../components/AdSection";
import RenderDetails from "../components/RenderDetails";
import { Parallax } from "react-parallax";
import Checkbox from "../components/CheckboxHeader";
import Registration from "../components/RenderDetails/Registration";

export default function Mobile() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const style = {
    container: { mx: "auto", mt: "12em", mb: "7em" },
  };
  const labels = [
    { label: "Datenvolumen" },
    { label: "Vertragsdaver" },
    { label: "5G" },
  ];

  return (
    <Box>
      {/* <Parallax bgImage={"/cover.png"} strength={500}>
        <Box sx={style.container}>
          <Checkbox labels={labels} />
        </Box>
      </Parallax> */}
      <Box mt={5} mb={5}>
        <Container maxWidth="lg">
          <SectionHeading title={"Mobile"} />
          <AdSection
            title={"Dein Impact im Mobilfunk"}
            desc={
              "Was ist an den herkömmlichen Mobiltarifen verkehrt? Informiere Dich in den nebenstehende Blogs zur Thematik."
            }
            text1={"Wie groß ist der Fußabdruck unserer Fixkosten?"}
            text2={"Kostencheck: wie viel kostet es mich mehr?"}
          />
          {isSubscribed && <RenderDetails type={"telecom"} />}
        </Container>
        {!isSubscribed && <Registration />}
      </Box>
    </Box>
  );
}
