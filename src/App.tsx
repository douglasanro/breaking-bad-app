import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from 'components/Header';
import mainTheme from 'themes/mainTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Header title="Breaking Bad App" />
    </ThemeProvider>
  );
};

export default App;
