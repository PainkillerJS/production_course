import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
