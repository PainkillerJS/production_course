import { screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Avatar } from '.';

describe('test Avatar', () => {
  beforeEach(() => {
    componentRender(<Avatar srcImg='test image url' alt='test image' />);
  });

  test('The Avatar renders', () => {
    expect(screen.getByAltText('test image')).toBeInTheDocument();
  });

  test('The Avatar set srcImg', () => {
    expect(screen.getByAltText('test image')).toHaveAttribute('src', 'test image url');
  });
});
