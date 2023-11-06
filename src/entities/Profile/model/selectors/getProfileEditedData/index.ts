import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { type ProfileType } from '../../types';

export const getProfileEditedData = (state: StateSchema) =>
  state?.profile?.editedData ?? ({} as ProfileType);
