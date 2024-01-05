import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
