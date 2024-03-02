import { type HTMLAttributeAnchorTarget } from 'react';

import { useTranslation } from 'react-i18next';

import {
  type ArticleModel,
  type ArticleTextBlockType,
  ArticleBlockEnumType
} from '@/entities/Article/model/types';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Heading } from '@/shared/ui/Heading';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Typography';

import { ArticleTextBlock } from '../../../ArticleTextBlock';

import styles from '../../articleListItem.module.scss';

interface BigArticleListItemProps {
  article: ArticleModel;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const BigArticleListItem = ({ article, className, target }: BigArticleListItemProps) => {
  const { t } = useTranslation('articles');

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockEnumType.TEXT
  ) as ArticleTextBlockType;

  return (
    <div className={clsx(className, styles.big)}>
      <Card>
        <div className={styles.header}>
          <Avatar size={30} srcImg={article.img} alt={`img article ${article.img}`} />

          <Text className={styles.username}>{article.user.username}</Text>
          <Text className={styles.date}>{article.createdAt}</Text>

          <Heading className={styles.title}>{article.title}</Heading>

          <Text>{article.type.join(', ')}</Text>
        </div>

        <img src={article.img} className={styles.img} alt={`img articleListItem: ${article.img}`} />

        {textBlock && <ArticleTextBlock block={textBlock} className={styles.textBlock} />}

        <div className={styles.footer}>
          <AppLink to={`${routePath.articles}/${article.id}`} target={target}>
            <Button variant={ThemeButton.OUTLINE}>{t('read_next')}</Button>
          </AppLink>

          <Text className={styles.views}>{article.views.toString()}</Text>
          <Icon Svg={EyeIcon} />
        </div>
      </Card>
    </div>
  );
};
