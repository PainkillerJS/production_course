import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getUserAuthUsername = (state: StateSchema) => state.user.username;
