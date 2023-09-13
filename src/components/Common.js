import { Accordion, styled } from "@mui/material";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
    "&::before": {
      backgroundColor: "transparent",
    },
  }));