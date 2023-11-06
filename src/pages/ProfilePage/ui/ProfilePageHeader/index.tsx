import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { getProfileReadonly, profileActions, updateProfileDataThunk } from '@/entities/Profile';

import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Typography';

import styles from './profilePageHeader.module.scss';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const isReadonly = useAppSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    if (isReadonly) {
      dispatch(profileActions.setReadonly(false));
    } else {
      dispatch(profileActions.setReadonly(true));
      dispatch(profileActions.cancelEdit());
    }
  }, [dispatch, isReadonly]);

  const onSave = useCallback(() => {
    dispatch(updateProfileDataThunk());
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <Text>{t('title')}</Text>

      {isReadonly ? (
        <Button variant={ThemeButton.OUTLINE} className={styles.editBtn} onClick={onEdit}>
          {t('changed')}
        </Button>
      ) : (
        <>
          <Button variant={ThemeButton.OUTLINE_RED} className={styles.editBtn} onClick={onEdit}>
            {t('cancel')}
          </Button>

          <Button variant={ThemeButton.OUTLINE} className={styles.saveBtn} onClick={onSave}>
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
