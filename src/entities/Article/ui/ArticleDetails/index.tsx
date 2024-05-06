import { memo, useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import CaledarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { clsx } from '@/shared/lib/classNames';
import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { Avatar } from '@/shared/ui/Avatar';
import { Heading, HeadingSize } from '@/shared/ui/Heading';
import { Icon } from '@/shared/ui/Icon';
import { Flex } from '@/shared/ui/Stack/Flex';
import { Text, TextSize, TextTheme } from '@/shared/ui/Typography';

import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError';
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading';
import { getArticleByIdThunk } from '../../model/services/getArticleById';
import { articleDetailsReducer } from '../../model/slice';
import { type ArticleBlockType, ArticleBlockEnumType } from '../../model/types';
import { ArticleCodeBlock } from '../ArticleCodeBlock';
import { ArticleDetailsBone } from '../ArticleDetailsBone';
import { ArticleImageBlock } from '../ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock';

import styles from './articleDetails.module.scss';

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

const initialReducers: ReducersList = {
  articles: articleDetailsReducer
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles');

  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const data = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlockType) => {
    switch (block.type) {
      case ArticleBlockEnumType.CODE: {
        return <ArticleCodeBlock key={block.id} block={block} className={styles.block} />;
      }
      case ArticleBlockEnumType.IMAGE: {
        return <ArticleImageBlock key={block.id} block={block} className={styles.block} />;
      }
      case ArticleBlockEnumType.TEXT: {
        return <ArticleTextBlock key={block.id} block={block} className={styles.block} />;
      }
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    dispatch(getArticleByIdThunk(id));
  }, [dispatch, id]);

  let content: JSX.Element;

  if (isLoading) {
    content = <ArticleDetailsBone />;
  } else if (error) {
    content = (
      <Text variant={TextTheme.ERROR} className={styles.error}>
        {t('error')}
      </Text>
    );
  } else {
    content = (
      <>
        {data && (
          <>
            <Flex direction='row' justify='center' isMax>
              <Avatar
                size={200}
                srcImg={data.img}
                className={styles.avatar}
                alt={`${data.title} img`}
              />
            </Flex>

            <Flex direction='column' gap='4' isMax>
              <Heading size={HeadingSize.L}>{data.title}</Heading>
              <Text size={TextSize.L}>{data.subtitle}</Text>

              <Flex direction='row' gap='8'>
                <Icon Svg={EyeIcon} className={styles.icon} />
                <Text>{data.views}</Text>
              </Flex>

              <Flex direction='row' gap='8'>
                <Icon Svg={CaledarIcon} className={styles.icon} />
                <Text>{data.createdAt}</Text>
              </Flex>
            </Flex>

            {data.blocks.map(renderBlock)}
          </>
        )}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Flex direction='column' gap='16' className={clsx(className, styles.articleDetails)}>
        {content}
      </Flex>
    </DynamicModuleLoader>
  );
});
