import { memo } from 'react';

import { ArticleListView } from '@/entities/Article';

import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import Button from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon';

const viewsType = [
  {
    view: ArticleListView.BIG,
    IconView: ListIcon
  },
  {
    view: ArticleListView.SMALL,
    IconView: TiledIcon
  }
] as const;

interface ArticlesViewSwitcherProps {
  view?: ArticleListView;
  onViewClick?: (newView: ArticleListView) => void;
  className?: string;
}

export const ArticlesViewSwitcher = memo(
  ({ className, view, onViewClick }: ArticlesViewSwitcherProps) => {
    const handleClickView = (newView: ArticleListView) => () => {
      onViewClick?.(newView);
    };

    return (
      <div>
        {viewsType.map(({ IconView, view }) => (
          <Button key={view} onClick={handleClickView(view)}>
            <Icon Svg={IconView} />
          </Button>
        ))}
      </div>
    );
  }
);
