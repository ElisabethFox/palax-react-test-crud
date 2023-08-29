import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import ModalButton from './ModalButton';
import {
  closeModalWindow,
  setCurrentModalType,
  setRelevantPost,
} from '../../slices/modalWindowsSlice';
import { postsSelector } from '../../selectors';
import { usePostsData } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';

const ChangePostModalWindow = () => {
  const dispatch = useAppDispatch();
  const isModalWindowOpen = useAppSelector((state) => state.modal.isOpen);
  const relevantPostId = useAppSelector((state) => state.modal.relevantPost);
  const refModalInput = useRef(null);
  const { changeCurrentPost } = usePostsData();

  const posts = useAppSelector(postsSelector.selectAll);
  const currentPost = posts.find((post) => post.id === relevantPostId);

  useEffect(() => {
    refModalInput?.current?.focus();
  }, []);

  const handleCloseModalWindow = () => {
    dispatch(closeModalWindow());
    dispatch(setCurrentModalType(null));
    dispatch(setRelevantPost(null));
  };

  const formik = useFormik({
    initialValues: { postText: currentPost.body },
    onSubmit: async (values) => {
      const { postText } = values;
      try {
        changeCurrentPost(currentPost.id, postText);
        handleCloseModalWindow();
      } catch (error) {
        console.log('!!!!!!!!!!!!!');
      }
    },
  });

  return (
    <Modal show={isModalWindowOpen}>
      <div className="modal-header">
        <div className="modal-title h4">Change Post</div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={handleCloseModalWindow}
        />
      </div>

      <div className="modal-body">
        <h6>{currentPost.title}</h6>
        <Form onSubmit={formik.handleSubmit} className="py-1 rounded-2">
          <div className="form-group">
            <Form.Control
              as="textarea"
              rows="5"
              ref={refModalInput}
              id="postText"
              type="text"
              name="postText"
              aria-label="Change"
              className="p-2 ps-2 form-control"
              placeholder="Change"
              onChange={formik.handleChange}
              value={formik.values.postText}
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              "Change"
            </Form.Label>
          </div>

          <div className="d-flex justify-content-end">
            <ModalButton title="Отмена" onClick={handleCloseModalWindow} />
            <ModalButton
              title="Change"
              onClick={formik.handleSubmit}
              priority
            />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ChangePostModalWindow;
