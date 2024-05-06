import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { Flex } from '.';

describe('Testing Flex', () => {
  test('The Flex shows on the Document', () => {
    const { getByTestId } = componentRender(
      <Flex testid='flex-wrapper'>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Flex>
    );

    expect(getByTestId('flex-wrapper')).toBeInTheDocument();
  });

  test('The Flex block have all children elements', () => {
    const { getByTestId } = componentRender(
      <Flex testid='flex-wrapper'>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Flex>
    );

    expect(getByTestId('flex-wrapper').children.length).toBe(4);
  });
});
