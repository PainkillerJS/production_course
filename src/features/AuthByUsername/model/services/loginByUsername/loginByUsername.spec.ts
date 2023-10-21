import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import { loginByUsername } from '.';

describe('test asyncThunk - loginByUsername', () => {
  test('get data', async () => {
    const returnData = {
      id: 1,
      username: 'admin',
      password: '123'
    };

    const data = {
      username: 'admin',
      password: '123'
    };

    const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: returnData });

    const store = configureStore({
      reducer: function (state = '', action) {
        switch (action.type) {
          case 'login/loginByUsername/fulfilled':
            return action.payload;
          default:
            return state;
        }
      }
    });

    await store.dispatch(loginByUsername(data));

    expect(postSpy).toBeCalledWith('http://localhost:8000/login', data);

    expect(store.getState()).toEqual({ id: 1, password: '123', username: 'admin' });
  });
});
