import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import AppLinks from './AppLinks';

describe('test AppLinks', () => {
  beforeEach(() => {
    componentRender(<AppLinks to='' />);
  });

  test('The AppLinks renders', () => {
    expect(screen.getByTestId('appLinks')).toBeInTheDocument();
  });
});
