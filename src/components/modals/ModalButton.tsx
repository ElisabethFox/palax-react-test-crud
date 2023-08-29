import cn from 'classnames';
import { FC } from 'react';
import { IModalButton } from '../../interfaces';

const ModalButton: FC<IModalButton> = ({ title, onClick, priority = null }) => {
  const ModalButttonClasses = cn('modal-button', {
    'high-priority': priority,
  });

  return (
    <button
      type={priority ? 'submit' : 'button'}
      className={ModalButttonClasses}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ModalButton;
