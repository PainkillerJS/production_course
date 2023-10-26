import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Heading } from '@/shared/ui/Heading';
import { Input } from '@/shared/ui/Input';
import { Text, TextTheme } from '@/shared/ui/Typography';

import { getLoginState } from '../../model/selectors';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginAction, loginReducer } from '../../model/slice';

import styles from './loginForm.module.scss';

interface LoginFormProps {
  onSuccess?: () => void;
  className?: string;
}

const initialReducers: ReducersList = { login: loginReducer };

export const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation('login');
  const dispatch = useAppDispatch();
  const { password, username, error, isLoading } = useAppSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginAction.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginAction.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({
        password,
        username
      })
    );

    if (result.meta.requestStatus === 'rejected') {
      onSuccess?.();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={clsx(styles.loginForm, className)}>
        <Heading className={styles.title}>{t('title')}</Heading>

        <Input
          placeholder={t('username')}
          className={styles.input}
          onChange={onChangeUsername}
          value={username}
          autoFocus
        />
        <Input
          placeholder={t('password')}
          className={styles.input}
          onChange={onChangePassword}
          value={password}
        />

        {error && <Text variant={TextTheme.ERROR}>{error}</Text>}

        <Button
          className={styles.btn}
          variant={ThemeButton.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
