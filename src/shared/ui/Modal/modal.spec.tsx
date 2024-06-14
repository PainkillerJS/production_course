import { vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Modal } from '.';

describe('testing Modal component', () => {
  const testingText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt!';

  test('Modal open', () => {
    componentRender(<Modal isOpen>{testingText}</Modal>);

    expect(screen.getByTestId('modal')).toHaveClass(/opened/);
  });

  test('Modal`s state is change after fn of close', () => {
    const handleClose = vi.fn();

    const { getByTestId } = componentRender(
      <Modal isOpen onClose={handleClose}>
        {testingText}
      </Modal>
    );

    const childrenOverlay = getByTestId('modal').children[0];

    expect(getByTestId('modal')).toHaveClass(/opened/);

    fireEvent.click(childrenOverlay);

    expect(getByTestId('modal')).toHaveClass(/closing/);
  });

  test('Modal`s lazy loading', () => {
    const { rerender, queryByTestId } = componentRender(<Modal isLazyLoading>{testingText}</Modal>);

    expect(queryByTestId('modal')).not.toBeInTheDocument();

    rerender(
      <Modal isLazyLoading isOpen>
        {testingText}
      </Modal>
    );

    expect(queryByTestId('modal')).toBeInTheDocument();
  });
});
