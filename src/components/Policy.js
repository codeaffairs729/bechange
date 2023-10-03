import { useState } from "react";
import styles from "./typography/StyleTypography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

import { Box, Button, Tooltip, Typography, Checkbox } from "@mui/material";

const infoBoxText =
  "Deine Daten Werden Addgeschutzt nach gesetzlichen Bestimmungen (DSCVO/BDSG/TMG) nur bei Tarifabschluss an Dritte ubermittelt(gewahlter Anbieter bzw.das gewahlte zahlungsinstitut";

const Policy = ({ formData, setFormData, errors }) => {
  const [open, setOpen] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      ["isPrivacyChecked"]: e.target.checked,
    });
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Checkbox
          checked={formData.isPrivacyChecked}
          onChange={handleOnChange}
        />
        <Typography sx={styles.p}>Datenschutzbestimmungen</Typography>

        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box>
            <Button onClick={() => setTerms(!terms)}>
              <InfoOutlinedIcon variant="outlined" sx={{ color: "#000" }} />
            </Button>
          </Box>
        </ClickAwayListener>
      </Box>
      {!formData.isPrivacyChecked && (
        <Typography sx={styles.p} color="#f44336">
          {formData.isPrivacyChecked ? "" : "Accept Policy"}
        </Typography>
      )}
      {terms && (
        <Box
          sx={{
            width: "300px",
            background: "#fff",
            padding: "4px",
            border: "1px solid black",
            borderRadius: "8px",
          }}
        >
          <ul sx={{ listStyleType: "circle" }}>
            <Typography
              sx={{ ...styles.p, fontWeight: "bold", textAlign: "left" }}
            >
              Deine Daten werden
            </Typography>
            <li sx={{ listStyleType: "circle" }}>
              <Typography sx={{ ...styles.p, textAlign: "left" }}>
                geschützt nach gesetzlichen Bestimmungen (DSGVO/BDSG/TMG)
              </Typography>{" "}
            </li>
            <li sx={{ listStyleType: "circle" }}>
              <Typography sx={{ ...styles.p, textAlign: "left" }}>
                nur bei Tarifabschluss an Dritte übermittelt (gewählter Anbieter
                bzw. das gewählte Zahlungsinstitut)
              </Typography>
            </li>
          </ul>
        </Box>
      )}
    </>
  );
};

export default Policy;
