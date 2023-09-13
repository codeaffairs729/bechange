import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import React from "react";

const BankingCheckbox = ({ labels }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={4}
      sm={12}
    >
      {labels.length > 0 &&
        labels.map((item) => (
          <Grid item sx={{ backgroundColor: "#fff" }} borderRadius={2} px={1}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={item.label}
              labelPlacement="start"
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default BankingCheckbox;
