import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view;
