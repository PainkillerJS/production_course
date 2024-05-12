import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/ListBox';

import { type CurrencyEnum } from '../../model/types';

import { optionsCurrency } from './config';

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  isReadonly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, value, onChange, isReadonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandle = (value: string) => {
      onChange?.(value as CurrencyEnum);
    };

    return (
      <ListBox
        onChange={onChangeHandle}
        className={className}
        initialValue={t('select_currency')}
        isReadonly={isReadonly}
        value={value}
        items={optionsCurrency}
      />
    );
  }
);
