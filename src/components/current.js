import React from "react";
import { Grid, Typography, Autocomplete } from "@mui/material";

const Current = ({ StyledTextField, handleSelect }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 2, bgcolor: "background.light" }}
      width="fit-content"
      borderRadius={2}
      border="2px solid #2c9b42"
      p={{ xs: 2, sm: 0 }}
    >
      <Grid item p={1}>
        <Typography variant="p" px={4}>
          Aktueller
        </Typography>
      </Grid>
      <Grid item p={1}>
        <Autocomplete
          disableCloseOnSelect
          id="provider"
          name="provider"
          options={["Option 1", "Option 2"]}
          sx={{
            bgcolor: "background.light",
            borderRadius: "4px",
            width: "300px",
            border: "1px solid green",
          }}
          onChange={(event, value) => handleSelect(event, value, "provider")}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              name="provider"
              sx={{
                bgcolor: "#ffff",
                borderRadius: "4px",
              }}
              placeholder="E.ON Energie Deutschland"
              size="small"
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid item p={1}>
        <Autocomplete
          disableCloseOnSelect
          id="dependantTariff"
          name="dependantTariff"
          options={["Option 1", "Option 2"]}
          onChange={(event, value) =>
            handleSelect(event, value, "dependantTariff")
          }
          sx={{
            bgcolor: "background.light",
            borderRadius: "4px",
            width: "300px",
            border: "1px solid green",
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              name="dependantTariff"
              sx={{
                bgcolor: "#ffff",
                borderRadius: "4px",
              }}
              placeholder="E.ON Grundversorgung Strom"
              size="small"
              fullWidth
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Current;
