import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleBlockEnumType, ArticleEnumType } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getCanEditArticle } from '.';

describe('test selector = getCanEditArticle', () => {
  test('selector should return success access for edit', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        id: '1'
      },
      articles: {
        isLoading: false,
        data: {
          id: '0',
          title: 'test title',
          subtitle: 'test subtitle',
          views: 111,
          createdAt: '12.12.2012',
          type: [ArticleEnumType.ECONOMIC],
          img: 'test img',
          blocks: [
            {
              id: '1',
              type: ArticleBlockEnumType.CODE,
              code: 'test code'
            }
          ],
          user: {
            id: '1',
            _initied: true
          }
        }
      }
    };

    expect(getCanEditArticle(state as StateSchema)).toBe(true);
  });

  test('selector should return unsuccess access for edit', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        id: '1'
      },
      articles: {
        isLoading: false,
        data: {
          id: '0',
          title: 'test title',
          subtitle: 'test subtitle',
          views: 111,
          createdAt: '12.12.2012',
          type: [ArticleEnumType.ECONOMIC],
          img: 'test img',
          blocks: [
            {
              id: '1',
              type: ArticleBlockEnumType.CODE,
              code: 'test code'
            }
          ],
          user: {
            id: '2',
            _initied: true
          }
        }
      }
    };

    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
});
