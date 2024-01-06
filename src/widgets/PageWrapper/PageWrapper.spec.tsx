import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { PageWrapper } from '.';

describe('test PageWrapper', () => {
  beforeEach(() => {
    componentRender(<PageWrapper />);
  });

  test('The PageWrapper renders', () => {
    expect(screen.getByTestId('page-wrapper')).toBeInTheDocument();
  });
});
