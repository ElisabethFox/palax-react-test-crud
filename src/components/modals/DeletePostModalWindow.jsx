import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { usePostsData } from '../../hooks';
import { closeModalWindow, setCurrentModalType, setRelevantPost } from '../../slices/modalWindowsSlice';

const DeletePostModalWindow = () => {
    const dispatch = useDispatch();
    const { deletePost } = usePostsData();
    const relevantPostId = useSelector((state) => state.modal.relevantPost);

    const handleDeletePost = (id) => {
        try {
            deletePost(id);
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
    <Modal show={true}>
      <div className="modal-header">
        <div className="modal-title h4">Delete Post</div>
        <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModalWindow} />
      </div>

      <div className="modal-body">
        <p className="lead">Are you sure?</p>
        <div className="d-flex justify-content-end">
          
          <button type="button" className="btn btn-danger w-40" onClick={() => handleDeletePost(relevantPostId)}>
            Delete
          </button>
        </div>
      </div>
    </Modal>

//     <div class="modal-window">
//     <div class="modal-window-active">
//         <div class="modal-close__button">
//             CLOSE
//         </div>
//         <div class="modal-window__body"> DELETE? </div>
//     </div>
// </div>

    );
}
 
export default DeletePostModalWindow;