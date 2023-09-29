import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NoSsr, ThemeProvider } from "@mui/material";
import theme from "./theme";
import MainLayout from "./layouts/MainLayout";
import { Provider } from "react-redux";
import store from "./redux/store";
import Notification from "./components/Notification";
import { useEffect } from "react";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <NoSsr>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <>
              <Notification />
              <Routes>
                <Route exact path="/">
                  <Route exact path="" element={<MainLayout />} />
                  <Route exact path=":screen" element={<MainLayout />} />
                  <Route
                    exact
                    path=":screen/:subscreen"
                    element={<MainLayout />}
                  />
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
