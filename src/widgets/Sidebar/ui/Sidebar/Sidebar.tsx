import { type FC,useState } from 'react';

import { LanguageSwitcher, ThemeSwitcher } from '@/widgets/ui';

import { clsx } from '@/shared/lib/helpers/classNames';

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
      className={clsx(styles.sidebar, className, {
        [styles.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>Toggle</button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
