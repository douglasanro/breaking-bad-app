import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { clearCharacters, setSearchTerm } from 'stores/characters/charactersActions';
import { getCharacters } from 'stores/characters/charactersThunks';

const CharactersSearch: React.FC = () => {
  const dispatch = useDispatch();

  const searchCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearCharacters());
    dispatch(setSearchTerm(event.target.value));

    if (event.target.value) {
      dispatch(getCharacters({ limit: 10 }));
    }
  };

  return (
    <TextField
      fullWidth
      label="Search character..."
      variant="outlined"
      onChange={debounce(searchCharacter, 500)}
      data-testid="charactersSearch"
      inputProps={{
        'data-testid': 'charactersSearchInput',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CharactersSearch;
