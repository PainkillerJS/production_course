import { BrowserRouter } from 'react-router-dom';
import { type Decorator } from '@storybook/react';

export const RouteDecorator: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
