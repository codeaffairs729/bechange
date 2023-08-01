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
    width: 1,
  };
  return (
    <Parallax bgImage={'/cover.png'} strength={500}>
      <Box sx={{ height: 500 }}>
        <Box sx={insideStyles}>
          <Typography variant='h4' fontWeight={900} color='primary.light'>
            Dein wirklich grünes Vergleichsportal
          </Typography>
          <Typography variant='h5' color='primary.light' fontStyle={'italic'}>
            Transparent, sicher &amp; einfach
          </Typography>
          <Button variant='contained' sx={{ mt: 5 }}>
            Vergleiche
          </Button>
        </Box>
      </Box>
    </Parallax>
  );
}
