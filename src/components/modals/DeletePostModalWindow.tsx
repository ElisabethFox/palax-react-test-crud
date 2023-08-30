import { Modal } from 'react-bootstrap';
import { usePostsData } from '../../hooks';
import {
  closeModalWindow,
  setCurrentModalType,
  setRelevantPost,
} from '../../slices/modalWindowsSlice';
import ModalButton from './ModalButton';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { toast } from 'react-toastify';

const DeletePostModalWindow = () => {
  const dispatch = useAppDispatch();
  const { deleteCurrentPost } = usePostsData();
  const relevantPostId = useAppSelector((state) => state.modal.relevantPostId);
  const isModalWindowOpen = useAppSelector((state) => state.modal.isOpen);

  const handleDeletePost = (id: number | null) => {
    try {
      if (id !== null) {
        deleteCurrentPost(id);
        dispatch(closeModalWindow());
        toast.success('Post Deleted!');
      }
    } catch (error) {
      toast.error('Network Error');
    }
  };

  const handleCloseModalWindow = () => {
    dispatch(closeModalWindow());
    dispatch(setCurrentModalType(null));
    dispatch(setRelevantPost(null));
  };

  return (
    <Modal show={isModalWindowOpen}>
      <div className="modal-header">
        <div className="modal-title h4">Delete Post</div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={handleCloseModalWindow}
        />
      </div>

      <div className="modal-body">
        <p className="lead">Are you sure?</p>
        <div className="d-flex justify-content-end">
          <ModalButton title="Отмена" onClick={handleCloseModalWindow} />
          <ModalButton
            title="Delete"
            priority
            onClick={() => handleDeletePost(relevantPostId)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeletePostModalWindow;
