import { type UserState, userActions, userReducer } from './userSlice';

describe('test slice = userSlice', () => {
  test('test without state', () => {
    expect(
      userReducer(
        undefined,
        userActions.setAuthData({ id: '1', username: 'test', _initied: false })
      )
    ).toEqual({
      id: '1',
      username: 'test',
      _initied: false
    });
  });

  test('test change user data', () => {
    const state: UserState = { id: '10', username: 'test', _initied: false };

    expect(
      userReducer(state, userActions.setAuthData({ id: '20', username: 'test', _initied: false }))
    ).toEqual({
      id: '20',
      username: 'test',
      _initied: false
    });
  });

  test('test initAuthData', () => {
    const state: UserState = { _initied: false };

    expect(userReducer(state, userActions.initAuthData())).toEqual({ _initied: true });
  });

  test('test logout', () => {
    const state: UserState = {
      username: 'test name',
      id: '1',
      _initied: false
    };

    expect(userReducer(state, userActions.logout())).toEqual({ _initied: false });
  });
});
