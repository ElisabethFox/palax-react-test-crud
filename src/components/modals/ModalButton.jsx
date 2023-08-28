import cn from 'classnames';

const ModalButton = ({ title, onClick, priority = null }) => {
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
