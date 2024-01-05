import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit;
