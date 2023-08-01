import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import { Instagram, Pinterest, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component={'footer'}
      sx={{
        background:
          'linear-gradient(0deg, rgba(105,136,0,1) 0%, rgba(180,179,112,1) 34%, rgba(255,255,255,1) 87%)',
        pb: 3,
      }}
    >
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
          <Grid item xs={12} sm={4} lg={6}>
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
            xs={12}
            sm={8}
            lg={6}
            sx={{
              textAlign: {
                sm: 'right',
              },
            }}
          >
            <Button sx={{ color: '#000' }}>Impressum</Button>
            <Button sx={{ ml: 3, color: '#000' }}>Nutzungsbedingen</Button>
            <Button sx={{ ml: 3, color: '#000' }}>Datenschutz</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
