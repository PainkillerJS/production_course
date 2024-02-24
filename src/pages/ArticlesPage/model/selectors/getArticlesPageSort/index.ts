import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort;
