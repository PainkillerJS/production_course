import { memo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

import { clsx } from '@/shared/lib/classNames';
import { useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { SizeSquaredButton, ThemeButton } from '@/shared/ui/Button/Button';

import { getItemsSidebar } from '../../model/selectors/getItemsSidebar';
import { SidebarItem } from '../SidebarItem';

import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [isCollapsed, setCollapsed] = useState(false);

  const itemsSidebar = useAppSelector(getItemsSidebar);

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

      <div data-testid='links' className={styles.links}>
        {itemsSidebar.map((item) => (
          <SidebarItem key={item.name} {...item} t={t} isCollapsed={isCollapsed} />
        ))}
      </div>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher isShortName={isCollapsed} className={styles.lang} />
      </div>
    </div>
  );
});
