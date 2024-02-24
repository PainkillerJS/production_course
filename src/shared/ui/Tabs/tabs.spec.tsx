import { fireEvent } from '@testing-library/react';

import { componentRender } from '@/shared/config/tests/componentRender/ComponentRender';

import { type TabItem, Tabs } from '.';

const testTabs: TabItem[] = [
  {
    value: 'test',
    content: 'test'
  },
  {
    value: 'test 1',
    content: 'test 1'
  },
  {
    value: 'test 2',
    content: 'test 2'
  }
];

describe('test component = Tabs', () => {
  test('The Tabs render', () => {
    const onClickMock = jest.fn();

    const { getByTestId } = componentRender(
      <Tabs tabs={testTabs} value={testTabs[0].value} onClickTab={onClickMock} />
    );

    expect(getByTestId('tabs')).toBeInTheDocument();
  });

  test('The children of tabs render', () => {
    const onClickMock = jest.fn();

    const { getByTestId } = componentRender(
      <Tabs tabs={testTabs} value={testTabs[0].value} onClickTab={onClickMock} />
    );

    const tabsComponent = getByTestId('tabs');

    expect(tabsComponent.children.length).toBe(testTabs.length);
  });

  test('The click of tabs', () => {
    const onClickMock = jest.fn();

    const { getByTestId } = componentRender(
      <Tabs tabs={testTabs} value={testTabs[0].value} onClickTab={onClickMock} />
    );

    const tabsComponent = getByTestId('tabs');

    fireEvent.click(tabsComponent.children[0]);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
