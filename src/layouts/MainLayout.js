import { useParams } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import Energy from '../screens/Energy';
import Home from '../screens/Home';
import Mobile from '../screens/Mobile';

const RenderPage = () => {
  const { screen } = useParams();
  switch (screen) {
    case 'energy':
      return <Energy />;
    case 'telecom':
      return <Mobile />;
    default:
      return <Home />;
  }
};

export default function MainLayout() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <RenderPage />
      <Footer />
    </Box>
  );
}
