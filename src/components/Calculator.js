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
  ButtonGroup,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import calcBg from '../assets/images/other/calculatorBg.jpg';

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
  const [switchPrivate, setSwitchPrivate] = useState(true);
  const [switchPower, setSwitchPower] = useState(true);
  const [numPers, setNumPers] = useState(0);

  const style = {
    calculator: {
      backgroundImage: `url(${calcBg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      p: 3,
      width: '90%',
      m: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    switch: {
      width: 200,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#fff',
    },
  };

  const handlePersonSelect = type => {
    switch (type) {
      case 'add':
        return numPers >= 4 ? numPers : setNumPers(numPers + 1);
      case 'remove':
        return numPers <= 0 ? numPers : setNumPers(numPers - 1);
      default:
        return numPers;
    }
  };

  return (
    <Paper sx={style.calculator}>
      <Grid container spacing={5} sx={{ w: 300, justifyContent: 'center' }}>
        <Grid item xs={3} sx={{ bgcolor: '#00000080', mt: 5, p: 3 }}>
          <MuiSwitchLarge onChange={() => setSwitchPower(!switchPower)} />
          <Box sx={style.switch}>
            <Typography fontWeight={switchPower && 900}>Power</Typography>
            <Typography fontWeight={!switchPower && 900}>Gas</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ bgcolor: '#00000080', mt: 5, p: 3 }}>
          <MuiSwitchLarge onChange={() => setSwitchPrivate(!switchPrivate)} />
          <Box sx={style.switch}>
            <Typography fontWeight={switchPrivate && 900}>Private</Typography>
            <Typography fontWeight={!switchPrivate && 900}>Business</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ placeItems: 'center', justifyContent: 'space-between', mt: 3 }}
      >
        <Grid item xs={4}>
          <TextField
            label={'Deine PLZ'}
            sx={{ bgcolor: 'background.light' }}
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sx={{ mr: 2 }}>
          <ButtonGroup>
            <Button
              variant='contained'
              sx={{
                bgcolor: 'background.default',
                color: !switchPower ? '#e4c474' : 'green',
              }}
              onClick={() => handlePersonSelect('remove')}
            >
              -
            </Button>
            {[
              ...Array.from({ length: 4 }, (_, i) => {
                return (
                  <Button
                    variant='contained'
                    key={i}
                    sx={{
                      bgcolor:
                        numPers <= i
                          ? 'background.default'
                          : 'background.light',
                      color:
                        numPers <= i
                          ? 'text.secondary'
                          : !switchPower
                          ? '#e4c474'
                          : 'green',
                    }}
                    onClick={() => setNumPers(i + 1)}
                  >
                    <PersonIcon />
                  </Button>
                );
              }),
            ]}
            <Button
              variant='contained'
              sx={{
                bgcolor: 'background.default',
                color: !switchPower ? '#e4c474' : 'green',
              }}
              onClick={() => handlePersonSelect('add')}
            >
              +
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={2} sx={{ ml: 5 }}>
          <TextField
            label={'KWh/Jahr'}
            sx={{ bgcolor: 'background.light' }}
            type='number'
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant='contained'
            color={switchPower ? 'tertiary' : 'yellow'}
            size='large'
          >
            Compare
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
