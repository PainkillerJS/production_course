// import { type Dispatch } from '@reduxjs/toolkit';

import { userActions } from '@/entities/User';

import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';

// import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';
import { loginByUsername } from '.';

describe('test asyncThunk - loginByUsername', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('get user data', async () => {
  //   const userValue = { username: '123', id: '1' };

  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });

  // test('rejected thunk', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  // });

  test('get user data', async () => {
    const userValue = { username: '123', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('rejected thunk', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
