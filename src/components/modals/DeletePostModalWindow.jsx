import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { usePostsData } from '../../hooks';
import { closeModalWindow, setCurrentModalType, setRelevantPost } from '../../slices/modalWindowsSlice';
import ModalButton from './ModalButton';

const DeletePostModalWindow = () => {
    const dispatch = useDispatch();
    const { deleteChangedPost } = usePostsData();
    const relevantPostId = useSelector((state) => state.modal.relevantPost);
    const isModalWindowOpen = useSelector((state) => state.modal.isOpen);

    const handleDeletePost = (id) => {
        try {
          deleteChangedPost(id);
            dispatch(closeModalWindow());
        } catch (error) {
            console.log('!!!!')
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
        <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModalWindow} />
      </div>

      <div className="modal-body">
        <p className="lead">Are you sure?</p>
        <div className="d-flex justify-content-end">
          <ModalButton title="Отмена" priority={false}/>
          <ModalButton title="Delete" priority={true} onClick={() => handleDeletePost(relevantPostId)} />
        </div>
      </div>
    </Modal>
  );
}
 
export default DeletePostModalWindow;