import { fireEvent, screen } from '@testing-library/react';

import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Sidebar } from './Sidebar';

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

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });

  test('The sidebar links wrapper renders', () => {
    expect(screen.getByTestId('links')).toBeInTheDocument();
  });

  test('The sidebar link items renders', () => {
    const navBarSettings = Object.values(routePath).filter(({ path }) => path !== '*');

    expect(screen.getAllByTestId('link').length).toBe(navBarSettings.length);
  });
});
