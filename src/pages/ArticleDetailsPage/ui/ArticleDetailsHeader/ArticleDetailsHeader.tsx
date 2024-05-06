import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';

import { AppRoute, routePath } from '@/shared/config/routeConfig/routeConfig';
import { useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Flex } from '@/shared/ui/Stack/Flex';

import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';

export const ArticleDetailsHeader = () => {
  const { t } = useTranslation('articles');
  const navigate = useNavigate();

  const isEditAccess = useAppSelector(getCanEditArticle);
  const article = useAppSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(routePath[AppRoute.ARTICLES]);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(`${routePath[AppRoute.ARTICLES]}/${article.id}/edit`);
    }
  }, [article?.id, navigate]);

  return (
    <Flex direction='row' justify='between' isMax>
      <Button onClick={onBackToList} variant={ThemeButton.OUTLINE}>
        {t('back_to_lists')}
      </Button>

      {isEditAccess && (
        <Button onClick={onEditArticle} variant={ThemeButton.OUTLINE}>
          {t('change_article')}
        </Button>
      )}
    </Flex>
  );
};
