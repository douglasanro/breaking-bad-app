import ICharacter from 'models/ICharacter';

export type TCharacterFilterStatus = 'Alive' | 'Dead' | '';

export type TFilterTypes = 'status';

export interface ICharacterFilter {
  status: TCharacterFilterStatus;
};

export interface ICharacterState {
  list: ICharacter[];
  hasNextPage: boolean;
  filter: ICharacterFilter;
  searchTerm: string;
};

export interface IFetchCharacters {
  limit: number;
  offset?: number;
};
