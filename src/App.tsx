import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Header from 'components/Header';
import Title from 'components/Title';
import CharactersSearch from 'components/CharactersSearch';
import CharactersFilter from 'components/CharactersFilter';
import CharactersList from 'components/CharactersList';
import rootStore from 'stores/rootStore';
import mainTheme from 'themes/mainTheme';

const App: React.FC = () => {
  return (
    <Provider store={rootStore}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Header title="Breaking Bad App" />
        <Container component="main">
          <Title title="Breaking Bad Characters" />
          <CharactersSearch />
          <CharactersFilter />
          <Divider />
          <CharactersList />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
