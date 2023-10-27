import { useEffect } from 'react';

import { ProfileCard, profileDataThunk, profileReducer } from '@/entities/Profile';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/providers/StoreProvider';

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(profileDataThunk());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
