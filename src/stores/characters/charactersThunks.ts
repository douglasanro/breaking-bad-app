import { Dispatch } from 'redux';
import axios from 'axios';
import { setCharacters, setHasNextPage } from './charactersActions';
import { IFetchCharacters } from './charactersModels';
import ICharacter from 'models/ICharacter';
import { rootState } from 'stores/rootStore';

const baseUrl = 'https://breakingbadapi.com/api';
const endpoint = '/characters';
const defaultOffset = 0;

export const getCharacters = ({ limit, offset = defaultOffset }: IFetchCharacters) => async ( dispatch: Dispatch, getState: () => rootState) => {
  const { characters } = getState();
  const { searchTerm } = characters;
  try {
    dispatch(setCharacters.request());
    const searchByName = searchTerm ? `&name=${searchTerm}` : '';
    const { data } = await axios.get(`${baseUrl}${endpoint}?limit=${limit}&offset=${offset}${searchByName}`);

    if(!data.length) {
      dispatch(setHasNextPage(false));
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
