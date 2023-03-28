import { createTheme } from '@material-ui/core';

let theme = createTheme({
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#eee' },
    background: {
      default: '#fff',
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
