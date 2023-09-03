import DeletePostModalWindow from './DeletePostModalWindow';
import ChangePostModalWindow from './ChangePostModalWindow';
import AddPostModalWindow from './AddPostModalWindow';
import { useAppSelector } from '../../hooks';
import './styles.css';

const ModalWindow = () => {
  const currentModalWindowType = useAppSelector(({ modal }) => modal.type);

  if (currentModalWindowType === 'delete') {
    return <DeletePostModalWindow />;
  }

  if (currentModalWindowType === 'change') {
    return <ChangePostModalWindow />;
  }

  // if (currentModalWindowType === 'add') {
  //   return <AddPostModalWindow />;
  // }

  return null;
};

export default ModalWindow;
