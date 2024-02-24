import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search;
