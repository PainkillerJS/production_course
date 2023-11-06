import { CountryEnum } from '../model/types';

interface OptionsCurrencyType {
  value: CountryEnum;
  content: CountryEnum;
}

export const optionsContries: OptionsCurrencyType[] = [
  { value: CountryEnum.BELARUS, content: CountryEnum.BELARUS },
  { value: CountryEnum.RUSSIA, content: CountryEnum.RUSSIA }
];
