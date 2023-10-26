import { Suspense } from 'react';

import { clsx } from '@/shared/lib/classNames';
import Loader from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal className={clsx(className)} isOpen={isOpen} onClose={onClose} isLazyLoading>
      <Suspense fallback={<Loader />}>{isOpen && <LoginFormAsync />}</Suspense>
    </Modal>
  );
};
