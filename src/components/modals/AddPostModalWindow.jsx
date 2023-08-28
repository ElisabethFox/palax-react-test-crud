import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { usePostsData } from '../../hooks';
import {
  closeModalWindow,
  setCurrentModalType,
  setRelevantPost,
} from '../../slices/modalWindowsSlice';
import ModalButton from './ModalButton';

const AddPostModalWindow = () => {
  const dispatch = useDispatch();
  const isModalWindowOpen = useSelector((state) => state.modal.isOpen);
  const refModalInput = useRef(null);

  useEffect(() => {
    refModalInput?.current?.focus();
  }, []);

  const handleCloseModalWindow = () => {
    dispatch(closeModalWindow());
    dispatch(setCurrentModalType(null));
    dispatch(setRelevantPost(null));
  };

  const formik = useFormik({
    initialValues: { name: '' },
    onSubmit: async (values) => {
      try {
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
              isInvalid={formik.errors.name && formik.touched.name}
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              "Add"
            </Form.Label>
            <Form.Control.Feedback type="invalid" className="invalid-feedback">
              {formik.errors.name}
            </Form.Control.Feedback>
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
