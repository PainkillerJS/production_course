import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import { useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Typography';

import { getProfileData } from '../..';

import styles from './profileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const data = useAppSelector(getProfileData);

  return (
    <div className={clsx(className, styles.profileCard)}>
      <div className={styles.header}>
        <Text>{t('title')}</Text>

        <Button variant={ThemeButton.OUTLINE} className={styles.editBtn}>
          {t('changed')}
        </Button>
      </div>

      <div className={styles.data}>
        <Input value={data.name} placeholder={t('name')} className={styles.input} />
        <Input value={data.surname} placeholder={t('surname')} className={styles.input} />
      </div>
    </div>
  );
};
