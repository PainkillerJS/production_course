import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import Loader from '.';

describe('test Loader', () => {
  beforeEach(() => {
    componentRender(<Loader />);
  });

  test('The Loader renders', () => {
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
