import { memo } from 'react';

import { type TFunction } from 'i18next';

import { type RouteType } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import { AppLinks, AppLinkVariants } from '@/shared/ui/AppLinks';

import styles from './sidebar.module.scss';

interface SidebarItemProps extends RouteType {
  t: TFunction<'translation', undefined>;
  isCollapsed: boolean;
}

export const SidebarItem = memo(({ path, Icon, name, t, isCollapsed }: SidebarItemProps) => {
  return (
    <AppLinks
      className={styles.item}
      data-testid='link'
      variants={AppLinkVariants.SECONDARY}
      to={path}
      key={path}
    >
      {Icon && (
        <div className={styles.icon}>
          <Icon />
        </div>
      )}

      <span
        className={clsx(styles.link, {
          [styles.link_collapsed]: isCollapsed
        })}
      >
        {t(name)}
      </span>
    </AppLinks>
  );
});
