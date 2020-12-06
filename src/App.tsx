import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from 'components/Header';
import Title from 'components/Title';
import mainTheme from 'themes/mainTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Header title="Breaking Bad App" />
      <Container component="main">
        <Title title="Breaking Bad Characters" />
      </Container>
    </ThemeProvider>
  );
};

export default App;
