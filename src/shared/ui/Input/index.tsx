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

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  /**
   * @description Кастомное имя стилей
   */
  className?: string;
  /**
   * @description Значение input
   */
  value?: string | number;
  /**
   * @description Функция для смены состояния input
   */
  onChange?: (value: string) => void;
  /**
   * @default false
   * @description Автофокус input
   */
  autoFocus?: boolean;
  /**
   * @default false
   * @description сделать поля только для чтения
   */
  isReadonly?: boolean;
}

/**
 * @description Кастомный Input был сделан в качестве эксперимента, такое в production повторять не стоит
 */
export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    isReadonly,
    ...props
  }: InputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !isReadonly;

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
      // @ts-expect-error
      if (type === 'number' && event.nativeEvent.data.toLowerCase() === 'e') {
        return undefined;
      }

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
      <div className={clsx(styles.inputWrapper, className, { [styles.readonly]: isReadonly })}>
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
            readOnly={isReadonly}
            {...props}
          />

          {isCaretVisible && (
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
