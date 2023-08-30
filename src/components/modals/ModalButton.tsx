import cn from 'classnames';
import { IModalButton } from '../../interfaces';

const ModalButton = ({ title, onClick, priority = false }: IModalButton) => {
  const ModalButttonClasses = cn('modal-button', {
    'high-priority': priority,
  });

  return (
    <button
      type={priority ? 'submit' : 'button'}
      className={ModalButttonClasses}
      onClick={(e) => onClick(e)}
    >
      {title}
    </button>
  );
};

export default ModalButton;
