import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageIsHasMore = (state: StateSchema) => state.articlesPage?.isHasMore;
