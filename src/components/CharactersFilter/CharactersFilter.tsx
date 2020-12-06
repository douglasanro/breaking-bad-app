import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { setFilter } from 'stores/characters/charactersActions';
import { rootState } from 'stores/rootStore';
import { ICharacterFilter } from 'stores/characters/charactersModels';
import ICharactersFilter from 'models/ICharactersFilter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      minWidth: 150,
      '&:not(:last-child)': {
        marginRight: theme.spacing(1),
      },
    },
  })
);

const charactersFilters: ICharactersFilter[] = [
  {
    id: 'status',
    label: 'Status',
    initWithEmptyOption: true,
    items: [
      {
        id: 'alive',
        option: 'Alive',
        value: 'Alive',
      },
      {
        id: 'dead',
        option: 'Dead',
        value: 'Dead',
      },
    ],
  },
];

const CharactersFilter: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filter } = useSelector(({ characters }: rootState) => characters);

  const handleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    const filterId = event.target.name as keyof ICharacterFilter;
    dispatch(setFilter({ [filterId]: event.target.value as any }));
  };

  return (
    <Box className={classes.box}>
      <Typography>Filters:</Typography>
      {charactersFilters.map(({ id, label, initWithEmptyOption, items }) => (
        <FormControl key={id} variant="outlined" className={classes.formControl}>
          <InputLabel id={`characters-filter-${id}-label`}>{label}</InputLabel>
          <Select
            id={`characters-filter-${id}`}
            name={id}
            labelId={`characters-filter-${id}-label`}
            value={filter[id as keyof ICharacterFilter]}
            label={label}
            onChange={handleChange}
          >
            {initWithEmptyOption && (
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            )}
            {items.map(({ id, option, value }) => (
              <MenuItem key={id} value={value}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

export default CharactersFilter;
