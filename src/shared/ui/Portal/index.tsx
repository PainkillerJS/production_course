import { type ReactNode, type ReactPortal } from 'react';

import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = ({ children, element = document.body }: PortalProps): ReactPortal => {
  return createPortal(children, element);
};
