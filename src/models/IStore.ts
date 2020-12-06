import ICharacter from 'models/ICharacter';
import { IRequestingState } from 'stores/requesting/requestingModels';

export default interface IStore {
  characters: ICharacter[];
  requesting: IRequestingState;
}
