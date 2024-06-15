import axios from 'axios';
import { type MockedFunction, vi } from 'vitest';
import { type AsyncThunkAction, type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

vi.mock('axios');

const mockedAxios = vi.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  public readonly dispatch: MockedFunction<any>;
  public readonly getState: () => StateSchema;
  public readonly api: typeof mockedAxios;
  public readonly navigate: MockedFunction<any>;

  constructor(
    public readonly actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.dispatch = vi.fn();
    this.getState = vi.fn(() => state as StateSchema);
    this.api = mockedAxios;
    this.navigate = vi.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate
    });

    return result;
  }
}
