import { profileReducer } from '@/entities/Profile';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage = () => {
  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      1
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
