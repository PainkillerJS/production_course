import { type ArticleListView } from '@/entities/Article';

const VIEW_STORAGE_KEY = 'view';

export const setViewFromLocalStorage = (view: ArticleListView): void => {
  localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(view));
};

export const getViewFromLocalStorage = (): ArticleListView =>
  JSON.parse(localStorage.getItem(VIEW_STORAGE_KEY)!);
