import { Box, Grid, Typography } from "@mui/material";
import FormatQuoteSharpIcon from "@mui/icons-material/FormatQuoteSharp";

const ProfileInfo = [
  {
    name: "Tizian Amadeus Luciani",
    avatar: "/0Tizian.png",
    designation: "Gründer & Inhaber",
    info: "Wir wollen den Druck auf dem Markt erhöhen, damit Nachhaltigkeit in Unternehmen zur Norm wird, und nicht optional bleibt.",
    linkdin: "",
  },
  {
    name: "Waleed Ahmad",
    avatar: "/0Waleed.png",
    designation: "Full Stack Developer",
    info: "Wir haben die Lösungen. Nutzen wir unsere Macht der Nachfrage für klare Marktsignale.",
    linkdin: "",
  },
];

const Profile = ({ style }) => {
  return (
    <Box p={{ xs: 0, sm: "4px  4px 4px 4px" }}>
      <Box
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: { xs: "10px" },
        }}
      >
        {ProfileInfo.map((profile) => (
          <Grid
            sx={{
              ...style.flexCenter,
              flexDirection: "column",
              flexWrap: "wrap",
              flexBasis: { xs: "100%", sm: "30%" },
              gap: "2rem",
              background: "#fff",
              ...style.borderStyle,
            }}
            xs={12}
            sm={6}
            p={{ xs: 4, sm: 8 }}
          >
            <Grid item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                mb={4}
              >
                <img src={profile.avatar} width={100} alt={profile.avatar} />
              </Box>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Grid
                  item
                  sx={{
                    background:
                      "radial-gradient(circle, rgba(189,189,189,1) 0%, rgba(255,255,255,0.5) 45%)",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      ...style.h3,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {profile.name}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      ...style.p,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {profile.designation}
                  </Typography>
                </Grid>
                <Grid item>
                  <img src="/linkedinGreen.png" width={45} alt="linkding" />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              display={{ xs: "none", sm: "block", textAlign: "center" }}
            >
              <Typography variant="p" sx={{ ...style.p }}>
                <FormatQuoteSharpIcon
                  sx={{ color: "green", fontSize: "18px" }}
                />
                {profile.info}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#fff",
        }}
        my={{ xs: 2, sm: 2 }}
        py={{ xs: 2, sm: 6 }}
      >
        <Typography
          variant="h3"
          sx={{
            ...style.heading,
            fontWeight: "600",
            fontSize: { xs: "14px", sm: "1.25rem" },
          }}
        >
          Du siehst mögliche Synergien zwischen uns?
        </Typography>
        <Typography variant="p">
          Wir freuen uns sehr von Dir zu hören.
        </Typography>
        <a href="mailto:info@bechange.earth" style={{ color: "inherit" }}>
          info@bechange.earth
        </a>
      </Box>
    </Box>
  );
};

export default Profile;
