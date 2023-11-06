import { memo } from 'react';

import { Select } from '@/shared/ui/Select';

import { type CountryEnum } from '../model/types';

import { optionsContries } from './config';

interface ContriesSelectProps {
  className?: string;
  label?: string;
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  isReadonly?: boolean;
}

export const ContriesSelect = memo(
  ({ className, label, value, onChange, isReadonly }: ContriesSelectProps) => {
    const onChangeHandle = (value: string) => {
      onChange?.(value as CountryEnum);
    };

    return (
      <Select
        className={className}
        options={optionsContries}
        label={label}
        value={value}
        onChange={onChangeHandle}
        isDisabled={isReadonly}
      ></Select>
    );
  }
);
