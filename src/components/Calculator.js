import { useState } from 'react';
import {
  Paper,
  Box,
  styled,
  Switch,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const MuiSwitchLarge = styled(Switch)(({ theme }) => ({
  width: 68,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
  },
}));

export default function Calculator() {
  const style = {
    calculator: {
      bgcolor: 'background.blue',
      p: 3,
      width: '80%',
      m: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    switch: {
      width: 200,
      display: 'flex',
      justifyContent: 'space-between',
    },
  };
  const [switchPrivate, setSwitchPrivate] = useState(false);
  return (
    <Paper sx={style.calculator}>
      <MuiSwitchLarge onChange={() => setSwitchPrivate(!switchPrivate)} />
      <Box sx={style.switch}>
        <Typography fontWeight={!switchPrivate && 900}>Business</Typography>
        <Typography fontWeight={switchPrivate && 900}>Private</Typography>
      </Box>
      <Grid container spacing={3} sx={{ placeItems: 'center' }}>
        <Grid item xs={3}>
          <TextField
            label={'Deine PLZ'}
            sx={{ bgcolor: 'background.light' }}
            fullWidth
          />
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item={2}>
              <Button variant='contained' color='secondary' sx={{ height: 1 }}>
                -
              </Button>
            </Grid>
            <Grid item={2}>
              <Button variant='contained' color='secondary' sx={{ height: 1 }}>
                <PersonIcon />
              </Button>
            </Grid>
            <Grid item={2}>
              <Button variant='contained' color='secondary' sx={{ height: 1 }}>
                <PersonIcon />
              </Button>
            </Grid>
            <Grid item={2}>
              <Button variant='contained' color='secondary' sx={{ height: 1 }}>
                <PersonIcon />
              </Button>
            </Grid>
            <Grid item={2}>
              <Button variant='contained' color='secondary' sx={{ height: 1 }}>
                <PersonIcon />
              </Button>
            </Grid>
            <Grid item={2}>
              <Button variant='contained' color='secondary' sx={{ height: 1 }}>
                +
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <TextField
            label={'KWh/Jahr'}
            sx={{ bgcolor: 'background.light' }}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant='contained' color='tertiary' size='large'>
            Compare
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
