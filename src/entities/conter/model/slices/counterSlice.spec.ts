import { type CounterState, counterActions, counterReducer } from './counterSlice';

describe('test slice = counterSlice', () => {
  test('test without state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1
    });
  });

  test('test decrement', () => {
    const state: CounterState = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9
    });
  });

  test('test increment', () => {
    const state: CounterState = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11
    });
  });
});
