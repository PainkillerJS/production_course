import { useEffect } from 'react';

import {
  getProfileEditedData,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  ProfileCard,
  profileDataThunk,
  profileReducer
} from '@/entities/Profile';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';

import { ProfilePageHeader } from './ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const editedData = useAppSelector(getProfileEditedData);
  const isLoading = useAppSelector(getProfileLoading);
  const error = useAppSelector(getProfileError);
  const isReadonly = useAppSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(profileDataThunk());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <ProfilePageHeader />

      <ProfileCard data={editedData} isLoading={isLoading} error={error} isReadonly={isReadonly} />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
