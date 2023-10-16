import { Box, Typography, Container } from "@mui/material";

const titleInfo = [
  "Transparenz",
  "Kundenorientierung",
  "Qualität",
  "Sicherheit",
];

const serviceInfo = [
  "Energiewende",
  "Impact",
  "Sozialverträglicher Wandel",
  "Simplizität",
  "Holistische Lösungen",
  "Datenschutz",
];

const StandForSection = ({ style }) => {
  return (
    <Box
      p={{ xs: 2, sm: 4 }}
      style={{ ...style.container, flexDirection: "column" }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{ ...style.heading }}
          mb={{ xs: "1rem", sm: "2rem" }}
        >
          Wir stehen für
        </Typography>
      </Box>
      <Box
        sx={{
          ...style.flexCenter,
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          columnGap: "30px",
          rowGap: { xs: "0px", sm: "10px" },
          color: "tertiary",
        }}
      >
        {titleInfo.map((title) => (
          <Typography
            variant="p"
            sx={{ ...style.p }}
            color="primary"
            mb={"5px"}
          >
            {title}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          ...style.flexCenter,
          justifyContent: "space-evenly",

          flexWrap: "wrap",
          width: { xs: "100%", sm: "60%" },
        }}
        mt={{ xs: 0, sm: "1rem" }}
      >
        {serviceInfo.map((service) => (
          <Typography
            variant="p"
            sx={{ ...style.p }}
            px={{ xs: 0, sm: 4 }}
            py={{ xs: 0, sm: 2 }}
          >
            {service}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default StandForSection;
