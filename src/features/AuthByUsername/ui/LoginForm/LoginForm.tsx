import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';

import styles from './loginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation('login');

  return (
    <div className={clsx(styles.loginForm, className)}>
      <Input placeholder={t('username')} className={styles.input} autoFocus />
      <Input placeholder={t('password')} className={styles.input} />
      <Button className={styles.btn} variant={ThemeButton.OUTLINE}>
        {t('login')}
      </Button>
    </div>
  );
};
