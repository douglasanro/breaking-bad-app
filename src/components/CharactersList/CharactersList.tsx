import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Waypoint } from 'react-waypoint';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CharacterCard from 'components/CharacterCard';
import { getCharacters } from 'stores/characters/charactersThunks';
import { ECharactersActions, clearCharacters } from 'stores/characters/charactersActions';
import { rootState } from 'stores/rootStore';
import requestingSelector from 'selectors/requesting/requestingSelector';
import ICharacter from 'models/ICharacter';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
    },
    notFound: {
      marginTop: theme.spacing(4),
      textAlign: 'center',
    },
  })
);

const CharactersList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isRequesting = useSelector((state: rootState) =>
    requestingSelector(state, [ECharactersActions.FETCH_CHARACTERS_REQUEST])
  );
  const { list, hasNextPage, filter, searchTerm } = useSelector(({ characters }: rootState) => characters);

  const filteredList = list.filter((character) => {
    const hasFilter = Object.entries(filter).map(([key, value]) => {
      if (!value) {
        return true;
      }

      return character[key as keyof ICharacter] === value;
    });
    return hasFilter.every((filter) => filter);
  });

  const getMoreCharacters = () => {
    dispatch(getCharacters({ limit: 10, offset: list.length }));
  };

  useEffect(() => {
    if (!searchTerm) {
      dispatch(clearCharacters());
      dispatch(getCharacters({ limit: 10 }));
    }
  }, [dispatch, searchTerm]);

  if (!filteredList.length && !isRequesting) {
    return (
      <Typography component="p" variant="h4" className={classes.notFound}>
        No characters found. {searchTerm && 'Say my name correctly.'}
      </Typography>
    );
  }

  return (
    <Grid container spacing={4} className={classes.container}>
      {filteredList.map(({ char_id, name, birthday, img }, index) => (
        <Grid key={char_id} item xs={12} sm={6} md={4}>
          {hasNextPage && !isRequesting && index === filteredList.length - 1 && (
            <Waypoint onEnter={getMoreCharacters} />
          )}
          <CharacterCard name={name} birthday={birthday} img={img} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharactersList;
