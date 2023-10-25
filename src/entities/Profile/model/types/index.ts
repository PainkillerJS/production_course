import { type CountryEnum, type CurrencyEnum } from '@/shared/constants/profile';

export interface Profile {
  name: string;
  surname: string;
  age: number;
  currency: CurrencyEnum;
  country: CountryEnum;
  city: string;
  username: string;
  avatar: string;
}
