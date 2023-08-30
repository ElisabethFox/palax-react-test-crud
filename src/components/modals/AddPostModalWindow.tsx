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
import { toast } from 'react-toastify';
import { MouseEvent } from 'react';
import * as Yup from 'yup';

interface IFormFields {
  title: string;
  postText: string;
}

const formSchema = Yup.object().shape({
  title: Yup.string().trim().required('Required field'),
  postText: Yup.string().trim().required('Required field'),
});

const AddPostModalWindow = () => {
  const dispatch = useAppDispatch();
  const isModalWindowOpen = useAppSelector((state) => state.modal.isOpen);
  const currentUserData = useAppSelector(currentUser) ?? null;
  const { createNewPost } = usePostsData();
  const refModalInput = useRef<HTMLInputElement>(null);
  const lastElementId = useAppSelector(
    (state) => state.posts.ids[state.posts.ids.length - 1]
  );
  const id: number = Number(lastElementId) + 1;

  useEffect(() => {
    refModalInput?.current?.focus();
  }, []);

  const handleCloseModalWindow = () => {
    dispatch(closeModalWindow());
    dispatch(setCurrentModalType(null));
    dispatch(setRelevantPost(null));
  };

  const formik = useFormik<IFormFields>({
    initialValues: { title: '', postText: '' },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const { title, postText } = values;
      try {
        if (currentUserData !== null) {
          createNewPost({
            id,
            title,
            userId: currentUserData.id,
            body: postText,
          });

          console.log(values);
          handleCloseModalWindow();
          toast.success('Post Created!');
        }
      } catch (error) {
        toast.error('Network Error');
      }
    },
  });

  const handleClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    formik.handleSubmit();
  };

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
        <Form className="py-1 rounded-2">
          <div className="form-group">
            <Form.Control
              ref={refModalInput}
              id="title"
              type="text"
              name="title"
              aria-label="Add"
              className="p-2 ps-2 form-control"
              onChange={formik.handleChange}
              isInvalid={(formik.errors.title && formik.touched.title) || false}
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              `Create title`
            </Form.Label>
            <Form.Control.Feedback type="invalid" className="invalid-feedback">
              {formik.errors.title}
            </Form.Control.Feedback>
          </div>

          <div className="form-group">
            <h6>Post Text</h6>
            <Form.Control
              as="textarea"
              rows={5}
              id="postText"
              type="text"
              name="postText"
              aria-label="Add"
              className="p-2 ps-2 form-control"
              onChange={formik.handleChange}
              isInvalid={(formik.errors.postText && formik.touched.postText) || false}
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              `Create post text`
            </Form.Label>
            <Form.Control.Feedback type="invalid" className="invalid-feedback">
              {formik.errors.postText}
            </Form.Control.Feedback>
          </div>

          <div className="d-flex justify-content-end">
            <ModalButton title="Отмена" onClick={handleCloseModalWindow} />
            <ModalButton title="Create" onClick={handleClick} priority />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddPostModalWindow;
