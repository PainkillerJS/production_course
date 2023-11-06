import { type ChangeEventHandler, memo } from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './select.module.scss';

export interface OptionsType {
  /**
   * @description значение выбраного варианта
   */
  value: string | number;
  /**
   * @description текст варианта
   */
  content: string;
}

interface SelectProps {
  /**
   * @description варианты select
   */
  options: OptionsType[];
  /**
   * @description кастомный classname
   */
  className?: string;
  /**
   * @description текст надписи над select
   */
  label?: string;
  /**
   * @description значение select
   */
  value?: OptionsType['value'];
  /**
   * @description placeholder select
   */
  placeholder?: string;
  /**
   * @description callback для изменения значения
   */
  onChange?: (value: string) => void;
  /**
   * @description состояние блокирвки select
   */
  isDisabled?: boolean;
}

export const Select = memo(
  ({ className, label, options, value, onChange, placeholder, isDisabled }: SelectProps) => {
    const onChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
      onChange?.(event.target.value);
    };

    return (
      <div
        data-testid='select'
        className={clsx(styles.wrapper, className, { [styles.disabled]: isDisabled })}
      >
        {label && <span className={styles.label}>{`${label} > `}</span>}

        <select
          className={styles.select}
          onChange={onChangeSelect}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
        >
          {options.map(({ content, value }) => (
            <option value={value} key={value}>
              {content}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
