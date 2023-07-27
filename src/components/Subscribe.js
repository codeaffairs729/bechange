import { Button, Grid, Paper, TextField, Typography } from '@mui/material';

export default function Subscribe() {
  const style = {
    bgcolor: 'background.light',
    p: 5,
    mx: 'auto',
    my: 5,
  };

  return (
    <Paper elevation={0} sx={style}>
      <Grid container spacing={5} sx={{ placeItems: 'center' }}>
        <Grid item xs={6}>
          <Typography variant='h5'>
            Hear about new providers & charging prices
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid container sx={{ placeItems: 'center' }}>
            <Grid item xs={7}>
              <TextField
                label={'Enter your email'}
                type={'email'}
                sx={{ background: 'white' }}
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <Button variant='contained' size='large' fullWidth>
                Subscribe Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
