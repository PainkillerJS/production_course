import {
  type ChangeEventHandler,
  type InputHTMLAttributes,
  type ReactEventHandler,
  memo,
  useEffect,
  useRef,
  useState
} from 'react';

import { clsx } from '@/shared/lib/classNames';

import styles from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface InputProps extends HTMLInputProps {
  /**
   * @description Кастомное имя стилей
   */
  className?: string;
  /**
   * @description Значение input
   */
  value?: string;
  /**
   * @description Функция для смены состояния input
   */
  onChange?: (value: string) => void;
  /**
   * @description Автофокус input
   */
  autoFocus?: boolean;
}

/**
 * @description Кастомный Input был сделан в качестве эксперимента, такое в production повторять не стоит
 */
export const Input = memo(
  ({ className, value, onChange, type = 'text', placeholder, autoFocus, ...props }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
      onChange?.(event.currentTarget.value);
      setCaretPosition(event.currentTarget.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect: ReactEventHandler<HTMLInputElement> = (event) => {
      setCaretPosition(event.currentTarget.selectionStart || 0);
    };

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        inputRef.current?.focus();
      }
    }, [autoFocus]);

    return (
      <div className={clsx(styles.inputWrapper, className)}>
        {placeholder && <div className={styles.placeholder}>{`${placeholder} >`}</div>}

        <div className={styles.caretWrapper}>
          <input
            data-testid='input'
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={styles.input}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            ref={inputRef}
            {...props}
          />

          {isFocused && (
            <span
              data-testid='caret'
              className={styles.caret}
              style={{ left: `${caretPosition * 7}px` }}
            />
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
