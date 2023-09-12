import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const BankingCheckbox = () => {
  const labels = [
    { label: "Alter" },
    { label: "Kreditkarte" },
    { label: "Gemeinschaftskonto" },
  ];
  return (
    <Box display="flex" gap={4} alignItems="center" justifyContent="center">
      {labels?.length > 0 &&
        labels.map((ele) => (
          <Box sx={{ backgroundColor: "#fff" }} borderRadius={2} px={1}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={ele.label}
              labelPlacement="start"
            />
          </Box>
        ))}
    </Box>
  );
};

export default BankingCheckbox;
