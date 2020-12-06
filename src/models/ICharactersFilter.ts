export interface ICharactersFilterItem {
  id: string;
  option: string;
  value: string;
}

export default interface ICharactersFilter {
  id: string;
  label: string;
  initWithEmptyOption: boolean;
  items: ICharactersFilterItem[];
}
