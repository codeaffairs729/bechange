import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Checkbox,
} from "@mui/material";

export default function CompareSignUp({
  setSelectedServices,
  selectedServices,
}) {
  const items = [
    {
      id: 0,
      name: "energy",
      title: "Energie",
      desc: "Ökostrom: wirklich und unabhängig",
      link: "/energie",
      icon: <img src="./planet.png" width={"80px"} alt="Earth Icon" />,
    },
    {
      id: 1,
      name: "bank",
      title: "Banking",
      desc: "Sozial-okoligisches Konto für's Gemeinwohl",
      link: "/banking",
      icon: <img src="./growth.png" width={"80px"} alt="Banking Icon" />,
    },
    {
      id: 2,
      name: "sim",
      title: "Mobilfunk",
      desc: "Fairer Klima- und Datenschutz",
      link: "/",
      icon: <img src="./sim-card.png" width={"80px"} alt="Sim-Card Icon" />,
    },
    {
      id: 3,
      name: "insurance",
      title: "Versicherung",
      desc: "Leistung für einen nachhaltigen Lebensstil",
      link: "/",
      icon: <img src="./protection.png" width={"80px"} alt="Earth Icon" />,
    },
  ];

  const handleOnChecked = (name, isChecked) => {
    setSelectedServices({ ...selectedServices, [name]: isChecked });
  };

  return (
    <Container sx={{ width: "100%", mx: "auto", my: 5, textAlign: "center" }}>
      <Grid container spacing={2}>
        {items.map((item) => {
          return (
            <Grid item xs={12} sm={6} lg={3} key={item.id}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 1,
                  p: 2,
                }}
              >
                {item.icon}
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
                <Checkbox
                  onChange={(e) => handleOnChecked(item.name, e.target.checked)}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
