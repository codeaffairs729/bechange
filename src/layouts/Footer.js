import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function Footer() {
  return (
    <Box component={'footer'}>
      <Divider />
      <Container sx={{ textAlign: 'center', width: '90%' }}>
        <Divider />
        <Grid container sx={{ placeContent: 'center', mt: 1 }}>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <Typography>
              &copy; {new Date().getFullYear()} BeChange. All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Button>Terms of Use</Button>
            <Button sx={{ ml: 3 }}>Privacy Policy</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
