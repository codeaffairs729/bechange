import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import FooterItems from '../components/FooterItems';
import Subscribe from '../components/Subscribe';

export default function Footer() {
  return (
    <Box component={'footer'}>
      <Divider />

      <Container sx={{ width: '90%' }}>
        <Subscribe />
        <FooterItems />
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
