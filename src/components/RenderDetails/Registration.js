import { useState } from "react";
import CompareSignUp from "../CompareSignUp";
import Services from "../Services";
import Policy from "../Policy";
import styles from "../typography/StyleTypography";
import { validateForm } from "../../util/validation";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const style = {
  calculator: {
    background:
      "linear-gradient(180deg, #709A4C 5%, #d9d0be 50%,rgba(255,255,255,1) 79%)",
    bgcolor: "background.light",
    borderRadius: "60px 60px 0px 0px",
    m: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "20px",
  },
  cardDetails: {
    bgcolor: "#fff",
    borderRadius: "16px",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function Registration() {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isPrivacyChecked: false,
  });

  const [selectedServices, setSelectedServices] = useState({
    bank: false,
    energy: false,
    sim: false,
    insurance: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
    console.log({formData});
    console.log({selectedServices});
  };

  return (
    <Box container sx={style.calculator} p={{ xs: 4, sm: 8, md: 10 }}>
      <Box mb={{ xs: 4, sm: 8 }}>
        <Typography variant="h3" fontWeight={900} sx={styles.h3}>
          Gratis registrienren. Sofort vergleichen.
        </Typography>
        <Typography variant="h4" fontWeight={500} sx={styles.h4}>
          Tarife optimieren.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4} rowSpacing={4} mb={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              type="text"
              sx={{ bgcolor: "#fff", borderRadius: "8px" }}
              size="small"
              placeholder="vorname"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              error={errors?.firstName?.length > 0 ? true : false}
              helperText={errors.firstName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              type="text"
              sx={{ bgcolor: "#fff", borderRadius: "8px" }}
              size="small"
              placeholder="Nachname"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              error={errors?.lastName?.length > 0 ? true : false}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              World
              name="email"
              type="email"
              sx={{ bgcolor: "#fff", borderRadius: "8px" }}
              size="small"
              placeholder="E-mail Addresse"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              error={errors?.email?.length > 0 ? true : false}
              helperText={errors.email}
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid container mt={2} sx={style.cardDetails}>
            <CompareSignUp
              setSelectedServices={setSelectedServices}
              selectedServices={selectedServices}
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button
            name="submit"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOnSubmit}
            sx={{ borderRadius: "20px", mt: 2 }}
            p={4}
          >
            Zum Vergleich
          </Button>
        </Box>
      </Box>
      <Policy setFormData={setFormData} formData={formData} errors={errors} />
      <Services />
    </Box>
  );
}
