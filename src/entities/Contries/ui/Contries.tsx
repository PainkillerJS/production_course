import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/ListBox';

import { type CountryEnum } from '../model/types';

import { optionsContries } from './config';

interface ContriesSelectProps {
  className?: string;
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  isReadonly?: boolean;
}

export const ContriesSelect = memo(
  ({ className, value, onChange, isReadonly }: ContriesSelectProps) => {
    const { t } = useTranslation();

    const onChangeHandle = (value: string) => {
      onChange?.(value as CountryEnum);
    };

    return (
      <ListBox
        className={className}
        onChange={onChangeHandle}
        value={value}
        initialValue={t('select_contries')}
        isReadonly={isReadonly}
        items={optionsContries}
        direction='top'
      />
    );
  }
);
