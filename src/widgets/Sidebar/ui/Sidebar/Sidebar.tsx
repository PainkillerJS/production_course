import { clsx } from '@/shared/lib/helpers/classNames';
import { useState, type FC } from 'react';
import styles from './sidebar.module.scss';
import ThemeSwitcher from '@/widgets/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
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
      </div>
    </div>
  );
};
