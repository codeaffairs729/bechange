import { useEffect, useState, useRef } from "react";
import Current from "./current";
import {
  Box,
  Grid,
  Switch,
  styled,
  Button,
  TextField,
  Typography,
  ButtonGroup,
  Autocomplete,
  OutlinedInput,
  InputAdornment,
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

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& input": {
    textAlign: "center",
  },
}));

export default function Calculator({ setTariffData, handleCalculate }) {
  const [switchPrivate, setSwitchPrivate] = useState(true);
  const [switchPower, setSwitchPower] = useState(true);
  const [numPers, setNumPers] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [provider, setProvider] = useState("");
  const [dependantTariff, setDependantTariff] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [valid, setValid] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showHero, setShowHero] = useState(false);

  const initState = {
    plz: "",
  };

  const [formData, setFormData] = useState(initState);

  const style = {
    calculator: {
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

  const handleSelect = (event, data, name) => {
    if (plz?.length) {
      setShowCurrent(true);
    } else {
      setShowCurrent(false);
    }
    switch (name) {
      case "plz":
        setSelectedCity(data);
        if (data && consumption && provider && dependantTariff) {
          setShowHero(true);
        }
        break;
      case "consumption":
        setConsumption(data);
        if (selectedCity && data && provider && dependantTariff) {
          setShowHero(true);
        }
        break;
      case "provider":
        setProvider(data);
        if (selectedCity && consumption && data && dependantTariff) {
          setShowHero(true);
        }
        break;
      case "dependantTariff":
        setDependantTariff(data);
        if (selectedCity && consumption && provider && data) {
          setShowHero(true);
        }
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    setValid(true);

    if (selectedCity && consumption && provider && dependantTariff) {
      const { zipCode } = selectedCity;
      data?.fetchLocations(zipCode)?.then((res) => {
        res?.[0].operatorIds?.map((operatorId) =>
          data
            .fetchSwitchRates({
              energy: "power",
              consumption,
              zipCode: zipCode,
              city: res?.[0].city,
              operatorId,
            })
            .then((tariffInfo) => {
              setTariffData(tariffInfo?.switchRates);
            })
        );
      });
      handleCalculate();
    } else {
      return;
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    data.fetchLocations(value).then((res) => {
      setCity(res);
    });

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
        sx={{ mt: 2, backgroundColor: "#fff" }}
        width="fit-content"
        borderRadius={2}
        border="2px solid #2c9b42"
      >
        <Grid item p={1}>
          <Autocomplete
            disableCloseOnSelect
            id="combo-box-demo"
            name="plz"
            options={city}
            getOptionLabel={(option) => `${option.zipCode} ${option.city}`}
            onChange={(event, value) => handleSelect(event, value, "plz")}
            onBlur={() => setCity([])}
            sx={{
              bgcolor: "background.light",
              borderRadius: "4px",
              width: "300px",
              border: valid
                ? plz?.length > 0
                  ? "1px solid green"
                  : "2px solid #C00000"
                : "1px solid green",
            }}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                name="plz"
                sx={{
                  bgcolor: "background.light",
                  borderRadius: "4px",
                }}
                value={plz}
                onChange={handleChange}
                placeholder="Postleitzahl "
                size="small"
                fullWidth
              />
            )}
          />
        </Grid>
        <Box
          sx={{
            border: valid
              ? consumption
                ? "0.5px solid lightgray"
                : "2px solid #C00000"
              : "0.5px solid lightgray",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
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
                border: "1px solid green",
              }}
              type="text"
              value={consumption}
              name="consumption"
              onChange={(e) => handleSelect(e, e.target.value, "consumption")}
              size="small"
              placeholder="KWh/Jahr"
              endAdornment={<Typography position="end">KWh/Jahr</Typography>}
              fullWidth
            />
          </Grid>
        </Box>
      </Grid>
      {showCurrent && (
        <Current StyledTextField={StyledTextField} handleSelect={handleSelect}/>
        
      )}
      {showHero && (
        <a href="#hero">
          <Button
            variant="contained"
            color={switchPower ? "primary" : "yellow"}
            size="large"
            onClick={handleClick}
            sx={{ borderRadius: "20px", mt: 2 }}
          >
            Vergleiche
          </Button>
        </a>
      )}
      {!showHero && (
        <Button
          variant="contained"
          color={switchPower ? "primary" : "yellow"}
          size="large"
          onClick={handleClick}
          sx={{ borderRadius: "20px", mt: 2 }}
        >
          Vergleiche
        </Button>
      )}
    </Box>
  );
}
