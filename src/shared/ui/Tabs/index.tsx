import { type ReactNode, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import { Card, CardTheme } from '../Card';

import styles from './tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  /**
   * @description  Элементы таба
   */
  tabs: TabItem[];
  /**
   * @description Текущее значение
   */
  value: string;
  /**
   * @description Клик на элемент
   */
  onClickTab: (tab: TabItem) => void;

  /**
   * @description Кастомные стили
   */
  className?: string;
}

export const Tabs = memo(({ className, onClickTab, tabs, value }: TabsProps) => {
  const onClick = (tab: TabItem) => () => {
    onClickTab(tab);
  };

  return (
    <div className={clsx(className, styles.tabs)} data-testid='tabs'>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={styles.tab}
          onClick={onClick(tab)}
          themeCard={tab.value === value ? CardTheme.PRIMARY : CardTheme.OUTLINED}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
