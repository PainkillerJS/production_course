import { CurrencyEnum } from '@/entities/Currency/model/types';

interface OptionsCurrencyType {
  value: CurrencyEnum;
  content: CurrencyEnum;
}

export const optionsCurrency: OptionsCurrencyType[] = [
  { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
  { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
  { value: CurrencyEnum.USD, content: CurrencyEnum.USD }
];
