import { type ArticleModel } from '@/entities/Article/model/types';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { clsx } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Typography';

import styles from '../../articleListItem.module.scss';

interface SmallArticleListItemProps {
  article: ArticleModel;
  onOpenArtice: () => void;
  className?: string;
}

export const SmallArticleListItem = ({
  article,
  className,
  onOpenArtice
}: SmallArticleListItemProps) => {
  return (
    <div className={clsx(className, styles.small)}>
      <Card className={styles.card} onClick={onOpenArtice}>
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
    </div>
  );
};
