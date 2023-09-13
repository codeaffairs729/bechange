import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./typography/StyleTypography";

export default function AdSection({ title, desc, text1, text2 }) {
  const style = {
    card: {
      bgcolor: "#000",
      color: "#fff",
      height: 1,
      padding: "20px",
    },
  };
  return (
    <Box sx={{ my: 5 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight={900} sx={styles.h6}>
            {title}
          </Typography>
          <Typography sx={styles.p}>{desc}</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={style.card}>
            <CardContent>
              <Typography sx={styles.p}>{text1}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={style.card}>
            <CardContent>
              <Typography sx={styles.p}>{text2}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
