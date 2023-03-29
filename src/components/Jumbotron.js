import { Box, Button, Typography } from '@mui/material';
import { Parallax } from 'react-parallax';

export default function Jumbotron() {
  const insideStyles = {
    padding: 10,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
  };
  return (
    <Parallax bgImage={'/cover.jpeg'} strength={500}>
      <Box sx={{ height: 500 }}>
        <Box sx={insideStyles}>
          <Typography variant='h4' fontWeight={900} color='primary.light'>
            Your Transition Was Never Easier
          </Typography>
          <Typography variant='h5' color='primary.light' fontStyle={'italic'}>
            Stop compromising on unethical Business
          </Typography>
          <Button variant='contained' sx={{ mt: 5 }}>
            Learn More
          </Button>
        </Box>
      </Box>
    </Parallax>
  );
}
