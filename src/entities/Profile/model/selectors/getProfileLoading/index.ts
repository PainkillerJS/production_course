import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getProfileLoading = (state: StateSchema): boolean =>
  state?.profile?.isLoading ?? false;
