import { type TFunction } from 'i18next';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { SidebarItem } from '.';

const t = jest.fn() as unknown as TFunction<'translation', undefined>;

describe('test component - SidebarItem', () => {
  test('rendering component', () => {
    const { getByTestId } = componentRender(
      <SidebarItem path='/test' name='test' t={t} isCollapsed={false} />
    );

    expect(getByTestId('link')).toBeInTheDocument();
  });

  test('rendering component with collapsed flag', () => {
    const { getByTestId } = componentRender(
      <SidebarItem path='/test' name='test' t={t} isCollapsed />
    );

    const sidebarItem = getByTestId('link').children;

    expect(sidebarItem[sidebarItem.length - 1]).toHaveClass('link_collapsed');
  });
});
