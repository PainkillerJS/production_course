import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticleDetailsError = (state: StateSchema) => state.articles?.error;
