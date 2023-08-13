import { clsx } from '.';

describe('classNames', () => {
  test('with once className', () => {
    expect(clsx('someClassName')).toBe('someClassName');
  });

  test('with additionaly className', () => {
    expect(clsx('someClassName', 'additionalyClassName')).toBe('someClassName additionalyClassName');
  });

  test('with additionaly classNames', () => {
    expect(clsx('someClassName', 'additionalyClassName', 'secondAdditionalyClassNames', 'thirdAdditionalyClassName')).toBe(
      'someClassName additionalyClassName secondAdditionalyClassNames thirdAdditionalyClassName',
    );
  });

  test('with additionaly classNames and options', () => {
    expect(clsx('someClassName', 'additionalyClassName', { secondAdditionalyClassNames: true, thirdAdditionalyClassName: false })).toBe(
      'someClassName additionalyClassName secondAdditionalyClassNames',
    );
  });

  test('with className and undefined', () => {
    expect(clsx('someClassName', { secondAdditionalyClassNames: true }, undefined)).toBe('someClassName secondAdditionalyClassNames');
  });
});
