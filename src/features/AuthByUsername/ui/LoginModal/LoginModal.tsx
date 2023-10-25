import { clsx } from '@/shared/lib/classNames';
import { Modal } from '@/shared/ui/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal className={clsx(className)} isOpen={isOpen} onClose={onClose} isLazyLoading>
      <LoginForm onSuccess={onClose} />
    </Modal>
  );
};
