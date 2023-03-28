import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoSsr, ThemeProvider } from '@mui/material';
import theme from './theme';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path='/'>
              <Route exact path='' element={<MainLayout />} />
              <Route exact path=':screen' element={<MainLayout />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </NoSsr>
  );
}

export default App;
