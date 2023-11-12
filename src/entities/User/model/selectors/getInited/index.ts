import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getUserInited = (state: StateSchema) => state.user._initied;
