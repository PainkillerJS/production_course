import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';

import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText';
import { addCommentFormAction, addCommentFormReducer } from '../../model/slice';

import styles from './addCommentForm.module.scss';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

interface AddCommentFormProps {
  className?: string;
  onSendComment?: (value: string) => void;
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('comments');
  const dispatch = useAppDispatch();

  const text = useAppSelector(getAddCommentFormText);

  const onChangeTextValue = useCallback(
    (value: string) => {
      dispatch(addCommentFormAction.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment?.(text);
    onChangeTextValue('');
  }, [onSendComment, text, onChangeTextValue]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={clsx(className, styles.addCommentForm)}>
        <Input
          placeholder={t('write_comment')}
          value={text}
          onChange={onChangeTextValue}
          className={styles.input}
        />

        <Button onClick={onSendHandler} variant={ThemeButton.OUTLINE}>
          {t('send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
