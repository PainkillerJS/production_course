import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order;
