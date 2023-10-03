import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { Instagram, Pinterest, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        background:
          "linear-gradient(0deg, rgba(105,136,0,1) 0%, rgba(180,179,112,1) 34%, rgba(255,255,255,1) 87%)",
        pb: 3,
      }}
    >
      <Divider />
      <Box sx={{ textAlign: "center", my: 5 }}>
        <img src="./logo_final.svg" width={"200vw"} alt="BeChange Logo" />
        <Typography>&copy; BeChange. {new Date().getFullYear()}</Typography>
        <Box sx={{ my: 3 }}>
          <Button>Qualität</Button>
          <Button>Blog</Button>
          <Button>About</Button>
        </Box>
        <img src="/certificate.png" alt="Manitu Certificate" />
      </Box>
      <Container sx={{ width: "90%" }}>
        <Divider />
        <Grid
          container
          sx={{
            my: 3,
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={4}
            md={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton>
              <Pinterest />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
            xs={12}
            sm={4}
            md={7}
          >
            <Button sx={{ color: "#000" }}>Impressum</Button>
            <Button sx={{ ml: { xs: 0, sm: 3 }, color: "#000" }}>
              Datenschutz
            </Button>
            <Button sx={{ ml: { xs: 0, sm: 3 }, color: "#000" }}>
              Nutzungsbedingen
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
