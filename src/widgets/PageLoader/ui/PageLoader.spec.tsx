import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import PageLoader from './PageLoader';

describe('test PageLoader', () => {
  beforeEach(() => {
    componentRender(<PageLoader />);
  });

  test('The PageLoader renders', () => {
    expect(screen.getByTestId('PageLoader')).toBeInTheDocument();
  });
});
