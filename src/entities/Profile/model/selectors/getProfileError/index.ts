import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getProfileError = (state: StateSchema): string => state?.profile?.error ?? '';
