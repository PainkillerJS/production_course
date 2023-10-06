import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';

import Button from '@/shared/ui/Button/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slices/counterSlice';

export const Counter = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const value = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>value = {value}</h1>

      <Button onClick={increment} data-testid='increment-button'>
        inc
      </Button>

      <Button onClick={decrement} data-testid='decrement-button'>
        dec
      </Button>
    </div>
  );
};
