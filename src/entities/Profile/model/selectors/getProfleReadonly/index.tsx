import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getProfileReadonly = (state: StateSchema) => state.profile?.isReadonly ?? false;
