import { fireEvent, screen } from '@testing-library/react';

import { renderWithLibs } from '@/shared/config/tests/renderWithLibs/renderWithLibs';

import { Modal } from '.';

describe('testing Modal component', () => {
  const testingText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, deserunt!';

  test('Modal open', () => {
    renderWithLibs(<Modal isOpen>{testingText}</Modal>);

    expect(screen.getByTestId('modal')).toHaveClass('opened');
  });

  test('Modal`s state is change after fn of close', () => {
    const handleClose = jest.fn();

    const { getByTestId } = renderWithLibs(
      <Modal isOpen onClose={handleClose}>
        {testingText}
      </Modal>
    );

    const childrenOverlay = getByTestId('modal').children[0];

    expect(getByTestId('modal')).toHaveClass('opened');

    fireEvent.click(childrenOverlay);

    expect(getByTestId('modal')).toHaveClass('closing');
  });
});
