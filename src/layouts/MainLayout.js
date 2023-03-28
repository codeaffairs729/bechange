import { useParams } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import Energy from '../screens/Energy';
import Home from '../screens/Home';

export default function MainLayout() {
  const { screen } = useParams();
  return (
    <Box>
      <CssBaseline />
      <Header />
      {screen === 'energy' ? <Energy /> : <Home />}
      <Footer />
    </Box>
  );
}
