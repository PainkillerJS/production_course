import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { PageWrapper } from '@/widgets/PageWrapper';

import {
  getProfileEditedData,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  ProfileCard,
  profileDataThunk,
  profileReducer,
  ValidateProfileError
} from '@/entities/Profile';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { Flex } from '@/shared/ui/Stack/Flex';
import { Text, TextTheme } from '@/shared/ui/Typography';

import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();

  const editedData = useAppSelector(getProfileEditedData);
  const isLoading = useAppSelector(getProfileLoading);
  const error = useAppSelector(getProfileError);
  const isReadonly = useAppSelector(getProfileReadonly);
  const validateErrors = useAppSelector(getProfileValidateErrors);

  const validateErrorTranslates: Record<ValidateProfileError, string> = {
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect_age'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_contry'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect_user_data'),
    [ValidateProfileError.NO_DATA]: t('no_data'),
    [ValidateProfileError.SERVER_ERROR]: t('server_error')
  };

  useEffect(() => {
    if (id) {
      dispatch(profileDataThunk(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <PageWrapper>
        <Flex direction='column' gap='16' isMax>
          <ProfilePageHeader />

          {validateErrors?.map((err) => (
            <Text key={err} variant={TextTheme.ERROR}>
              {validateErrorTranslates[err]}
            </Text>
          ))}

          <ProfileCard
            data={editedData}
            isLoading={isLoading}
            error={error}
            isReadonly={isReadonly}
          />
        </Flex>
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
