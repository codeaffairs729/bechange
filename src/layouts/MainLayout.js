import { useParams } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import Energy from '../screens/Energy';
import Home from '../screens/Home';
import Mobile from '../screens/Mobile';
import Quality from '../screens/Quality';

const RenderPage = () => {
  const { screen } = useParams();
  switch (screen) {
    case 'energie':
      return <Energy />;
    case 'mobile-funk':
      return <Mobile />;
    case 'qualitaet':
      return <Quality />;
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
