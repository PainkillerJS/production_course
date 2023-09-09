import { fireEvent, screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/lib/renderWithLibs/renderWithLibs';

import { Sidebar } from './Sidebar';

describe('test sidebar', () => {
  beforeEach(() => {
    renderWithLibs(<Sidebar />);
  });

  test('The sidebar renders', () => {
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('The sidebar renders', () => {
    const toggleButton = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toggleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
