import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
