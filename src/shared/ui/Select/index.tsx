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

interface SelectProps<T> {
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
  value?: T;
  /**
   * @description callback для изменения значения
   */
  onChange?: (value: T) => void;
  /**
   * @description состояние блокирвки select
   */
  isDisabled?: boolean;
}

const Select = <T extends string>({
  className,
  label,
  options,
  value,
  onChange,
  isDisabled
}: SelectProps<T>) => {
  const onChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onChange?.(event.target.value as T);
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
};

const SelectMemo = memo(Select) as typeof Select;

export { SelectMemo as Select };
