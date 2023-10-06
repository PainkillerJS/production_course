import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import PageError from './PageError';

describe('test PageError', () => {
  beforeEach(() => {
    componentRender(<PageError />);
  });

  test('The PageError renders', () => {
    expect(screen.getByTestId('pageError')).toBeInTheDocument();
  });
});
