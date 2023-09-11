import { useEffect, useState } from "react";
import {
  Box,
  styled,
  Switch,
  Typography,
  Grid,
  TextField,
  Button,
  ButtonGroup,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import calcBg from "../assets/images/other/calculatorBg.jpg";
import data from "../api/switch-for-climate-api";

export const MuiSwitchLarge = styled(Switch)(({ theme }) => ({
  width: 68,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      transform: "translateX(30px)",
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
  },
}));

export default function Calculator({ setTariffData }) {
  const [switchPrivate, setSwitchPrivate] = useState(true);
  const [switchPower, setSwitchPower] = useState(true);
  const [numPers, setNumPers] = useState(0);
  const [consumption, setConsumption] = useState(0);

  const initState = {
    plz: "",
  };

  const [formData, setFormData] = useState(initState);

  const style = {
    calculator: {
      // backgroundImage: `url(${calcBg})`,
      // backgroundPosition: "center",
      // backgroundSize: "cover",
      p: 3,
      width: "90%",
      m: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  };

  const handlePersonSelect = (type) => {
    switch (type) {
      case "add":
        return numPers >= 4 ? numPers : setNumPers(numPers + 1);
      case "remove":
        return numPers <= 0 ? numPers : setNumPers(numPers - 1);
      default:
        return numPers;
    }
  };

  const handleClick = () => {
    data.fetchLocations(plz).then((res) =>
      res?.[0].operatorIds.map((operatorId) =>
        data
          .fetchSwitchRates({
            energy: "power",
            consumption,
            zipCode: plz,
            city: res?.[0].city,
            operatorId,
          })
          .then((tariffInfo) => setTariffData(tariffInfo?.switchRates))
      )
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { plz } = formData;

  useEffect(() => {
    switch (numPers) {
      case 1:
        return setConsumption(1600);
      case 2:
        return setConsumption(2600);
      case 3:
        return setConsumption(3300);
      case 4:
        return setConsumption(3900);
      default:
        return setConsumption(0);
    }
  }, [numPers]);

  return (
    <Box sx={style.calculator}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        width="fit-content"
        borderRadius={2}
        border="2px solid #2c9b42"
        sx={{ backgroundColor: "#fff" }}
      >
        <Grid
          item
          p={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography fontWeight={switchPower && 900}>Power</Typography>
          <MuiSwitchLarge
            onChange={() => setSwitchPower(!switchPower)}
            color="default"
          />
          <Typography fontWeight={!switchPower && 900}>Gas</Typography>
        </Grid>
        <Grid
          item
          p={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          ml={5}
        >
          <Typography fontWeight={switchPrivate && 900}>Private</Typography>
          <MuiSwitchLarge
            onChange={() => setSwitchPrivate(!switchPrivate)}
            color="default"
          />
          <Typography fontWeight={!switchPrivate && 900}>Business</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2, backgroundColor: "#fff" }}
        width="fit-content"
        borderRadius={2}
        border="2px solid #2c9b42"
      >
        <Grid item p={1}>
          <TextField
            name="plz"
            sx={{ bgcolor: "background.light", borderRadius: "4px" }}
            value={plz}
            onChange={handleChange}
            size="small"
            placeholder="Deine PLZ"
            fullWidth
          />
        </Grid>
        <Grid item p={1} ml={1} mr={1}>
          <ButtonGroup>
            <Button
              variant="contained"
              sx={{
                bgcolor: "background.default",
                color: !switchPower ? "#e4c474" : "green",
              }}
              onClick={() => handlePersonSelect("remove")}
            >
              -
            </Button>
            {[
              ...Array.from({ length: 4 }, (_, i) => {
                return (
                  <Button
                    variant="contained"
                    key={i}
                    sx={{
                      bgcolor:
                        numPers <= i
                          ? "background.default"
                          : "background.light",
                      color:
                        numPers <= i
                          ? "text.secondary"
                          : !switchPower
                          ? "#e4c474"
                          : "green",
                    }}
                    onClick={() => setNumPers(i + 1)}
                  >
                    <PersonIcon />
                  </Button>
                );
              }),
            ]}
            <Button
              variant="contained"
              sx={{
                bgcolor: "background.default",
                color: !switchPower ? "#e4c474" : "green",
              }}
              onClick={() => handlePersonSelect("add")}
            >
              +
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item p={1}>
          <OutlinedInput
            sx={{
              bgcolor: "background.light",
              borderRadius: "4px",
              width: "12rem",
            }}
            type="number"
            value={consumption}
            size="small"
            placeholder="KWh/Jahr"
            endAdornment={
              <InputAdornment position="end">KWh/Jahr</InputAdornment>
            }
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color={switchPower ? "primary" : "yellow"}
        size="large"
        onClick={handleClick}
        sx={{ borderRadius: "20px", mt: 2 }}
      >
        Compare
      </Button>
    </Box>
  );
}
