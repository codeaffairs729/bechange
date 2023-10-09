import {
  Box,
  Paper,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Container,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import SectionHeading from "./typography/SectionHeading";

export default function Reviews() {
  const persons = [
    {
      id: 0,
      name: "Person 1",
      job: "CEO/Company",
    },
    {
      id: 1,
      name: "Person 2",
      job: "CEO/Company",
    },
    {
      id: 2,
      name: "Person 3",
      job: "CEO/Company",
    },
  ];
  return (
    <Container sx={{ width: "90%", my: 5 }}>
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <SectionHeading title={"Referenzen"} />
      </Box>
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        {persons.map((person) => {
          return (
            <Grid item key={person.id} xs={12} sm={6} lg={3}>
              <Paper variant="outlined" sx={{ maxWidth: 345, p: 3 }}>
                <CardContent>
                  <Typography variant="body1">
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat.”
                  </Typography>
                </CardContent>
                <Grid
                  container
                  sx={{
                    p: { xs: 2, sm: 5 },
                    bgcolor: "background.light",
                    placeItems: "center",
                  }}
                >
                  <Grid item xs={3} sm={4}>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </Grid>
                  <Grid item xs={9} sm={8}>
                    <Typography variant="h5">{person.name}</Typography>
                    <Typography>{person.job}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
