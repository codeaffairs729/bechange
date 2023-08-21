import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NoSsr, ThemeProvider } from '@mui/material';
import theme from './theme';
import MainLayout from './layouts/MainLayout';
import { Provider } from 'react-redux';
import store from './redux/store';
import Notification from './components/Notification';

function App() {
  return (
    <NoSsr>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <>
              <Notification />
              <Routes>
                <Route exact path='/'>
                  <Route exact path='' element={<MainLayout />} />
                  <Route exact path=':screen' element={<MainLayout />} />
                </Route>
              </Routes>
            </>
          </Router>
        </ThemeProvider>
      </Provider>
    </NoSsr>
  );
}

export default App;
