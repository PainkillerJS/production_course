import { loginAction, loginReducer } from '.';

describe('test slice = loginSlice', () => {
  test('test action setUsername', () => {
    expect(loginReducer(undefined, loginAction.setUsername('test user'))).toEqual({
      username: 'test user',
      password: '',
      isLoading: false
    });
  });

  test('test action setPassword', () => {
    expect(loginReducer(undefined, loginAction.setPassword('test password'))).toEqual({
      username: '',
      password: 'test password',
      isLoading: false
    });
  });
});
