import { memo, useCallback } from 'react';

import { clsx } from '@/shared/lib/classNames';

import CopyImg from '../../assets/icons/copy-20-20.svg';
import Button, { ThemeButton } from '../Button/Button';

import styles from './code.module.scss';

interface CodeProps {
  /**
   * @description Кастомное имя стилей
   */
  className?: string;
  /**
   * @description текст кода
   */
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre data-testid='code' className={clsx(className, styles.code)}>
      <Button
        data-testid='code-btn'
        className={styles.copyBtn}
        variant={ThemeButton.CLEAR}
        onClick={onCopy}
      >
        <CopyImg className={styles.copyIcon} />
      </Button>

      <code>{text}</code>
    </pre>
  );
});
