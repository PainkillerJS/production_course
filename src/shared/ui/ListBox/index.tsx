import { type ReactNode, Fragment, memo } from 'react';

import { Listbox as HListBox } from '@headlessui/react';

import { clsx } from '@/shared/lib/classNames';

import Button from '../Button/Button';
import { Flex } from '../Stack/Flex';

import styles from './listBox.module.scss';

export type DropDownDirecton = 'top' | 'bottom';

export interface PatternItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items: PatternItem[];
  initialValue?: string;
  value?: string;
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  isReadonly?: boolean;
  direction?: DropDownDirecton;
}

export const ListBox = memo(
  ({
    className,
    items,
    initialValue,
    value,
    onChange,
    isReadonly,
    direction = 'bottom',
    label
  }: ListBoxProps) => {
    return (
      <Flex gap='4' direction='row'>
        {label && (
          <span className={styles.label} data-testid='ListBox-label'>
            {label + ' > '}
          </span>
        )}

        <HListBox
          disabled={isReadonly}
          as='div'
          className={clsx(className, styles.ListBox)}
          value={value ?? initialValue}
          onChange={onChange}
          data-testid='ListBox'
        >
          <HListBox.Button className={styles.trigger}>
            <Button disabled={isReadonly} data-testid='ListBox-button'>
              {value ?? initialValue}
            </Button>
          </HListBox.Button>

          <HListBox.Options
            className={clsx(styles.options, styles[direction])}
            data-testid='ListBox-options'
          >
            {items?.map((item) => (
              <HListBox.Option
                key={item.value}
                value={item.value}
                as={Fragment}
                disabled={item.disabled}
              >
                {({ active }) => (
                  <li
                    className={clsx(styles.item, {
                      [styles.active]: active,
                      [styles.disabled]: item.disabled
                    })}
                  >
                    {item.content}
                  </li>
                )}
              </HListBox.Option>
            ))}
          </HListBox.Options>
        </HListBox>
      </Flex>
    );
  }
);
