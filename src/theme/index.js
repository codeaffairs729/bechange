import { createTheme } from '@material-ui/core';

let theme = createTheme({
  palette: {
    primary: { main: '#000', light: '#fff' },
    secondary: { main: '#eee' },
    tertiary: { main: '#099a35bf', contrastText: '#fff' },
    background: {
      default: '#fff',
      light: '#f5f7fa',
      blue: '#afe1ff',
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '"Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  },
});

export default theme;
