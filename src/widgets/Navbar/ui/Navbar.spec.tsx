import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import Navbar from './Navbar';

describe('test navbar', () => {
  beforeEach(() => {
    componentRender(<Navbar />);
  });

  test('The navbar renders', () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
