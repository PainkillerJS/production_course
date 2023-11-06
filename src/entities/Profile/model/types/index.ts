import { type CountryEnum } from '@/entities/Contries';
import { type CurrencyEnum } from '@/entities/Currency';

export interface ProfileType {
  name?: string;
  surname?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}
