import { type HTMLAttributeAnchorTarget } from 'react';

import { type ArticleModel } from '@/entities/Article/model/types';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Typography';

import styles from '../../articleListItem.module.scss';

interface SmallArticleListItemProps {
  article: ArticleModel;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const SmallArticleListItem = ({ article, className, target }: SmallArticleListItemProps) => {
  return (
    <div className={clsx(className, styles.small)}>
      <AppLink to={`${routePath.articles}/${article.id}`} target={target}>
        <Card className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={article.img} className={styles.img} />
            <Text className={styles.date}>{article.createdAt}</Text>
          </div>

          <div className={styles.infoWrapper}>
            <Text className={styles.types}>{article.type.join(', ')}</Text>
            <Text className={styles.views}>{article.views.toString()}</Text>
            <Icon Svg={EyeIcon} />
          </div>

          <Text className={styles.title}>{article.title}</Text>
        </Card>
      </AppLink>
    </div>
  );
};
