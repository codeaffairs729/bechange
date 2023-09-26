import { useState } from "react";
import styles from "./typography/StyleTypography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { Box, Button, Tooltip, Typography, Checkbox } from "@mui/material";

const infoBoxText =
  "Deine Daten Werden Addgeschutzt nach gesetzlichen Bestimmungen (DSCVO/BDSG/TMG) nur bei Tarifabschluss an Dritte ubermittelt(gewahlter Anbieter bzw.das gewahlte zahlungsinstitut";

const Policy = ({ formData, setFormData, errors }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Checkbox
          checked={formData.isPrivacyChecked}
          onChange={(e) => {
            setFormData({
              ...formData,
              ["isPrivacyChecked"]: e.target.checked,
            });
          }}
        />
        <Typography sx={styles.p}>Datenschutzbestimmungen</Typography>

        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "white",
                    color: "black",
                    border: "2px solid black",
                    padding: "4px",
                  },
                },
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement={"bottom-end"}
              title={infoBoxText}
            >
              <Button onClick={handleTooltipOpen}>
                <InfoOutlinedIcon variant="outlined" sx={{ color: "#000" }} />
              </Button>
            </Tooltip>
          </Box>
        </ClickAwayListener>
      </Box>
      {errors.isPrivacyChecked && (
        <Typography sx={styles.p} color="#f44336">
          {errors.isPrivacyChecked}
        </Typography>
      )}
    </>
  );
};

export default Policy;
