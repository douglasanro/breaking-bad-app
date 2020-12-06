import { action, createAsyncAction } from 'typesafe-actions';
import { ICharacterFilter } from './charactersModels';
import ICharacter from 'models/ICharacter';

export enum ECharactersActions {
  FETCH_CHARACTERS_REQUEST = '@characters/FETCH_CHARACTERS_REQUEST',
  FETCH_CHARACTERS_SUCCESS = '@characters/FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_FAILURE = '@characters/FETCH_CHARACTERS_FAILURE',
  CLEAR_CHARACTERS = '@characters/CLEAR_CHARACTERS',
  HAS_NEXT_PAGE = '@characters/HAS_NEXT_PAGE',
  SET_SEARCH_TERM = '@characters/SET_SEARCH_TERM',
  SET_FILTER = '@characters/SET_FILTER'
}

export const setCharacters = createAsyncAction(
  ECharactersActions.FETCH_CHARACTERS_REQUEST,
  ECharactersActions.FETCH_CHARACTERS_SUCCESS,
  ECharactersActions.FETCH_CHARACTERS_FAILURE,
)<undefined, ICharacter[], Error>();

export const clearCharacters = () => action(ECharactersActions.CLEAR_CHARACTERS);

export const setHasNextPage = (flag: boolean) => action(ECharactersActions.HAS_NEXT_PAGE, flag);

export const setSearchTerm = (term: string) => action(ECharactersActions.SET_SEARCH_TERM, term);

export const setFilter = ({ status }: ICharacterFilter) => action(ECharactersActions.SET_FILTER, { status });
