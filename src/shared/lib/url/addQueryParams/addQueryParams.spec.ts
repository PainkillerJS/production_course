import { getQueryParams } from '.';

describe('Test help func = AddQueryParams', () => {
  test('test this one param', () => {
    const params = getQueryParams({
      test: 'value'
    });

    expect(params).toBe('?test=value');
  });

  test('test this two param', () => {
    const params = getQueryParams({
      test: 'value',
      second: '2'
    });

    expect(params).toBe('?test=value&second=2');
  });

  test('test this undefined', () => {
    const params = getQueryParams({
      second: undefined
    });

    expect(params).toBe('?');
  });
});
