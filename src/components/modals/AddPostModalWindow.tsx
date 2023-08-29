import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { usePostsData } from '../../hooks';
import { currentUser } from '../../selectors';
import {
  closeModalWindow,
  setCurrentModalType,
  setRelevantPost,
} from '../../slices/modalWindowsSlice';
import ModalButton from './ModalButton';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';

const AddPostModalWindow = () => {
  const dispatch = useAppDispatch();
  const isModalWindowOpen = useAppSelector((state) => state.modal.isOpen);
  const currentUserData = useAppSelector(currentUser);
  const { createNewPost } = usePostsData();
  const refModalInput = useRef(null);
  const id = useAppSelector((state) => state.posts.ids.at(-1));

  useEffect(() => {
    refModalInput?.current?.focus();
  }, []);

  const handleCloseModalWindow = () => {
    dispatch(closeModalWindow());
    dispatch(setCurrentModalType(null));
    dispatch(setRelevantPost(null));
  };

  const formik = useFormik({
    initialValues: { title: '', postText: '' },
    onSubmit: async (values) => {
      const { title, postText } = values;
      try {
        createNewPost({id, title, userId: currentUserData.id, body: postText})
        handleCloseModalWindow();
      } catch (error) {
        console.log(111);
      }
    },
  });

  return (
    <Modal show={isModalWindowOpen}>
      <div className="modal-header">
        <div className="modal-title h4">Create New Post</div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={handleCloseModalWindow}
        />
      </div>

      <div className="modal-body">
        <h6>Post Title</h6>
        <Form onSubmit={formik.handleSubmit} className="py-1 rounded-2">
          <div className="form-group">
            <Form.Control
              ref={refModalInput}
              id="name"
              type="text"
              name="name"
              aria-label="Add"
              className="p-2 ps-2 form-control"
              onChange={formik.handleChange}
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              "Create title"
            </Form.Label>
          </div>

          <div className="form-group">
            <h6>Post Text</h6>
            <Form.Control
              as="textarea"
              rows="5"
              id="name"
              type="text"
              name="name"
              aria-label="Add"
              className="p-2 ps-2 form-control"
              onChange={formik.handleChange}
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              "Create post text"
            </Form.Label>
          </div>

          <div className="d-flex justify-content-end">
            <ModalButton title="Отмена" onClick={handleCloseModalWindow} />
            <ModalButton
              title="Create"
              onClick={formik.handleSubmit}
              priority
            />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddPostModalWindow;
