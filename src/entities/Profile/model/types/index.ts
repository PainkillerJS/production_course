import { type CountryEnum, type CurrencyEnum } from '@/shared/constants/profile';

export interface ProfileType {
  name: string;
  surname: string;
  age: number;
  currency: CurrencyEnum;
  country: CountryEnum;
  city: string;
  username: string;
  avatar: string;
}
