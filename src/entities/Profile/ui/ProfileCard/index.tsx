import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { type CountryEnum, ContriesSelect } from '@/entities/Contries';
import { type CurrencyEnum, CurrencySelect } from '@/entities/Currency';

import { clsx } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/providers/StoreProvider';
import { Avatar } from '@/shared/ui/Avatar';
import { Heading, TextHeadingTheme } from '@/shared/ui/Heading';
import { Input } from '@/shared/ui/Input';
import Loader from '@/shared/ui/Loader';
import { Flex } from '@/shared/ui/Stack/Flex';

import { type ProfileType, profileActions } from '../..';

import styles from './profileCard.module.scss';

interface ProfileCardProps {
  data: ProfileType;
  isLoading: boolean;
  error: string;
  className?: string;
  isReadonly?: boolean;
}

export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  isReadonly
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ name: value }));
    },
    [dispatch]
  );

  const onChangeSurname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ surname: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value?: CurrencyEnum) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value?: CountryEnum) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  if (isLoading) {
    return (
      <Flex direction='row' justify='center' className={clsx(className, styles.loading)} isMax>
        <Loader />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex direction='row' justify='center' isMax>
        <Heading variant={TextHeadingTheme.ERROR} className={styles.error}>
          {error}
        </Heading>
      </Flex>
    );
  }

  return (
    <Flex
      gap='8'
      direction='column'
      className={clsx(className, styles.profileCard, { [styles.editing]: !isReadonly })}
      isMax
    >
      {data.avatar && (
        <Flex justify='center' direction='row' isMax>
          <Avatar srcImg={data.avatar} alt='avatar' />
        </Flex>
      )}

      <Input
        value={data.name}
        placeholder={t('name')}
        className={styles.input}
        onChange={onChangeFirstName}
        isReadonly={isReadonly}
      />

      <Input
        value={data.surname}
        placeholder={t('surname')}
        className={styles.input}
        onChange={onChangeSurname}
        isReadonly={isReadonly}
      />

      <Input
        value={data.age}
        placeholder={t('age')}
        type='number'
        className={styles.input}
        onChange={onChangeAge}
        isReadonly={isReadonly}
      />

      <Input
        value={data.city}
        placeholder={t('city')}
        className={styles.input}
        onChange={onChangeCity}
        isReadonly={isReadonly}
      />

      <Input
        value={data.username}
        placeholder={t('username')}
        className={styles.input}
        onChange={onChangeUsername}
        isReadonly={isReadonly}
      />

      <Input
        value={data.avatar}
        placeholder={t('avatar')}
        className={styles.input}
        onChange={onChangeAvatar}
        isReadonly={isReadonly}
      />

      <ContriesSelect
        isReadonly={isReadonly}
        className={styles.input}
        value={data.country}
        label={t('contry')}
        onChange={onChangeCountry}
      />

      <CurrencySelect
        label={t('currency')}
        value={data.currency}
        onChange={onChangeCurrency}
        isReadonly={isReadonly}
        className={styles.input}
      />
    </Flex>
  );
};
