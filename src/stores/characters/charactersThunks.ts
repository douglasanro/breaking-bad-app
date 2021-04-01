import { Dispatch } from 'redux';
import axios from 'axios';
import { setCharacters, setHasNextPage } from './charactersActions';
import { IFetchCharacters } from './charactersModels';
import ICharacter from 'models/ICharacter';
import { rootState } from 'stores/rootStore';
import { BREAKING_BAD_API_URL ,SERVICE } from 'environments';

const defaultOffset = 0;

export const getCharacters = ({ limit, offset = defaultOffset }: IFetchCharacters) => async ( dispatch: Dispatch, getState: () => rootState) => {
  const { characters } = getState();
  const { searchTerm } = characters;
  try {
    dispatch(setCharacters.request());
    const searchByName = searchTerm ? `&name=${searchTerm}` : '';
    const { data } = await axios.get(`${BREAKING_BAD_API_URL}${SERVICE.CHARACTERS()}?limit=${limit}&offset=${offset}${searchByName}`);

    if(!data.length) {
      dispatch(setHasNextPage(false));
      dispatch(setCharacters.success([]));
      return;
    }

    const effectData = data.map(({ status, ...otherArgs}: ICharacter) => {
      const currentStatus = ['Alive', 'Dead'][Number(status !== 'Alive')];

      return {...otherArgs, status: currentStatus };
    })

    dispatch(setHasNextPage(true));
    dispatch(setCharacters.success(effectData));
  } catch (error) {
    dispatch(setCharacters.failure(error));
  }
};
