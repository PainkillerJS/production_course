import { memo } from 'react';

import { Select } from '@/shared/ui/Select';

import { type CurrencyEnum } from '../../model/types';

import { optionsCurrency } from './config';

interface CurrencySelectProps {
  className?: string;
  label?: string;
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  isReadonly?: boolean;
}

export const CurrencySelect = memo(
  ({ className, label, value, onChange, isReadonly }: CurrencySelectProps) => {
    const onChangeHandle = (value: string) => {
      onChange?.(value as CurrencyEnum);
    };

    return (
      <Select
        className={className}
        options={optionsCurrency}
        label={label}
        value={value}
        onChange={onChangeHandle}
        isDisabled={isReadonly}
      ></Select>
    );
  }
);
