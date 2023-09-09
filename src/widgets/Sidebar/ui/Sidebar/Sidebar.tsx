import { type FC, useState } from 'react';

import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';

import { clsx } from '@/shared/lib/classNames';
import Button from '@/shared/ui/Button/Button';

import styles from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      data-testid='sidebar'
      className={clsx(styles.sidebar, className, {
        [styles.collapsed]: collapsed
      })}
    >
      <Button data-testid='sidebar-toggle' onClick={onToggle}>
        Toggle
      </Button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
