import { createTheme } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: { main: '#598F34', light: '#fff' },
    secondary: { main: '#eee' },
    tertiary: { main: '#099a35bf', contrastText: '#fff' },
    yellow: { main: '#e4c474' },
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
