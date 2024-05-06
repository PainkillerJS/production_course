import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileDataThunk
} from '@/entities/Profile';
import { getUserAuth } from '@/entities/User';

import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Flex } from '@/shared/ui/Stack/Flex';
import { Text } from '@/shared/ui/Typography';

export const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const isReadonly = useAppSelector(getProfileReadonly);
  const profileData = useAppSelector(getProfileData);
  const authData = useAppSelector(getUserAuth);

  const isCanEdit = profileData.id === authData.id;

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
    <Flex direction='row' justify='between' isMax>
      <Text>{t('title')}</Text>

      {isCanEdit && (
        <div>
          {isReadonly ? (
            <Button variant={ThemeButton.OUTLINE} onClick={onEdit}>
              {t('changed')}
            </Button>
          ) : (
            <Flex direction='row' gap='8'>
              <Button variant={ThemeButton.OUTLINE_RED} onClick={onEdit}>
                {t('cancel')}
              </Button>

              <Button variant={ThemeButton.OUTLINE} onClick={onSave}>
                {t('save')}
              </Button>
            </Flex>
          )}
        </div>
      )}
    </Flex>
  );
};
