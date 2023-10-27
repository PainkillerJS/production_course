import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { type ProfileType } from '../../types';

export const getProfileData = (state: StateSchema): ProfileType =>
  state?.profile?.data ?? ({} as ProfileType);
