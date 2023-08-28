import { useSelector } from 'react-redux';
import DeletePostModalWindow from './DeletePostModalWindow';
import './styles.css';
import ChangePostModalWindow from './ChangePostModalWindow';
import AddPostModalWindow from './AddPostModalWindow';

const ModalWindow = () => {
  const currentModalWindowType = useSelector((state) => state.modal.type);

  if (currentModalWindowType === 'delete') {
    return <DeletePostModalWindow />;
  }

  if (currentModalWindowType === 'change') {
    return <ChangePostModalWindow />;
  }

  if (currentModalWindowType === 'add') {
    return <AddPostModalWindow />;
  }
};

export default ModalWindow;
