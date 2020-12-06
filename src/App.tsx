import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import mainTheme from 'themes/mainTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
