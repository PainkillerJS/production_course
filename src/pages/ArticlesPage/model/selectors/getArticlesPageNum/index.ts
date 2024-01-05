import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1;
