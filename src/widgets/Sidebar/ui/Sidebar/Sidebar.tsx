import { type FC, useState } from 'react';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import { AppLinks } from '@/shared/ui/AppLinks';
import { AppLinkVariants } from '@/shared/ui/AppLinks/AppLinks';
import Button, { SizeSquaredButton, ThemeButton } from '@/shared/ui/Button/Button';

import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const navBarSettings = Object.values(routePath).filter(({ path }) => path !== '*');

  const onToggle = (): void => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div
      data-testid='sidebar'
      className={clsx(styles.sidebar, className, {
        [styles.collapsed]: isCollapsed
      })}
    >
      <Button
        data-testid='sidebar-toggle'
        className={styles.collapseBtn}
        onClick={onToggle}
        variant={ThemeButton.BACKGROUND_INVERTED}
        sizeSquared={SizeSquaredButton.L}
        isSquare
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div>
        <div data-testid='links' className={styles.links}>
          {navBarSettings.map(({ path, name, Icon }) => {
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

                <span className={styles.link}>{name}</span>
              </AppLinks>
            );
          })}
        </div>
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher isShortName={isCollapsed} className={styles.lang} />
      </div>
    </div>
  );
};
