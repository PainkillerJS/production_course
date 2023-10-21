import { type UserState, userActions, userReducer } from './userSlice';

describe('test slice = userSlice', () => {
  test('test without state', () => {
    expect(userReducer(undefined, userActions.setAuthData({ id: 1, username: 'test' }))).toEqual({
      id: 1,
      username: 'test'
    });
  });

  test('test change user data', () => {
    const state: UserState = { id: 10, username: 'test' };

    expect(userReducer(state, userActions.setAuthData({ id: 20, username: 'test' }))).toEqual({
      id: 20,
      username: 'test'
    });
  });

  test('test initAuthData', () => {
    const state: UserState = {};

    expect(userReducer(state, userActions.initAuthData())).toEqual({});
  });

  test('test logout', () => {
    const state: UserState = {
      username: 'test name',
      id: 1
    };

    expect(userReducer(state, userActions.logout())).toEqual({});
  });
});
