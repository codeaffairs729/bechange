import { Button, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

export default function FooterItems() {
  return (
    <Grid container spacing={5} sx={{ placeItems: 'center', mb: 5 }}>
      <Grid item xs={4}>
        <Button>Compare</Button>
        <Button>Quality</Button>
        <Button>About</Button>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: 'center' }}>
        <img src='/certificate.png' alt='Manitu Certificate' />
      </Grid>
      <Grid item xs={4} sx={{ textAlign: 'right' }}>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <YouTube />
        </IconButton>
      </Grid>
    </Grid>
  );
}
