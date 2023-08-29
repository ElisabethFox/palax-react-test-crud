import DeletePostModalWindow from './DeletePostModalWindow';
import './styles.css';
import ChangePostModalWindow from './ChangePostModalWindow';
import AddPostModalWindow from './AddPostModalWindow';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';

const ModalWindow: FC = () => {
  const currentModalWindowType = useAppSelector((state) => state.modal.type);

  if (currentModalWindowType === 'delete') {
    return <DeletePostModalWindow />;
  }

  if (currentModalWindowType === 'change') {
    return <ChangePostModalWindow />;
  }

  if (currentModalWindowType === 'add') {
    return <AddPostModalWindow />;
  }

  return null;
};

export default ModalWindow;
