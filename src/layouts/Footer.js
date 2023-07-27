import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component={'footer'}>
      <Divider />
      <Box sx={{ textAlign: 'center', my: 5 }}>
        <img src='./logo_final.svg' width={'20%'} alt='BeChange Logo' />
        <Typography>&copy; BeChange. {new Date().getFullYear()}</Typography>
        <Box sx={{ my: 3 }}>
          <Button>Qualität</Button>
          <Button>Blog</Button>
          <Button>About</Button>
        </Box>
        <img src='/certificate.png' alt='Manitu Certificate' />
      </Box>
      <Container sx={{ width: '90%' }}>
        <Divider />
        <Grid container sx={{ placeContent: 'center', my: 3 }}>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Button>Impressum</Button>
            <Button sx={{ ml: 3 }}>Nutzungsbedingen</Button>
            <Button sx={{ ml: 3 }}>Datenschutz</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
