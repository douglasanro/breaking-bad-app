import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#69A704',
      main: '#3A7116',
      dark: '#064500',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#FFFF51',
      main: '#DFD400',
      dark: '#A9A300',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*, *::before, *::after": {
          boxSizing: "content-box",
        },
        body: {
          background: '#FFF'
        },
      },
    },
  },
});

export default mainTheme;
