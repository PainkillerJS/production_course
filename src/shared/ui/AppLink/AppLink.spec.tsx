import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import AppLink from './AppLink';

describe('test AppLink', () => {
  beforeEach(() => {
    componentRender(<AppLink to='' />);
  });

  test('The AppLink renders', () => {
    expect(screen.getByTestId('appLink')).toBeInTheDocument();
  });
});
