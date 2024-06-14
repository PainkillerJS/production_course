import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Sidebar } from './Sidebar';

vi.mock('../../model/selectors/getItemsSidebar', () => {
  return {
    getItemsSidebar: () => [
      { path: 'test path', name: 'test name' },
      { path: 'test path 2', name: 'test name 2' }
    ]
  };
});

describe('test sidebar', () => {
  beforeEach(() => {
    componentRender(<Sidebar />);
  });

  test('The sidebar renders', () => {
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('The sidebar renders', () => {
    const toggleButton = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass(/collapsed/);
  });

  test('The sidebar links wrapper renders', () => {
    expect(screen.getByTestId('links')).toBeInTheDocument();
  });

  test('The sidebar link items renders', () => {
    expect(screen.getAllByTestId('link').length).toBe(2);
  });
});
