import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useRef, useEffect, MouseEvent } from 'react';
import { usePostsData, useAppDispatch, useAppSelector } from '../../hooks';
import { currentUser } from '../../selectors';
import {
  closeModalWindow,
  setCurrentModalType,
  setRelevantPost,
} from '../../slices/modalWindowsSlice';
import ModalButton from './ModalButton';
import { toast } from 'react-toastify';
import uniqueId from 'lodash/uniqueId.js';

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
  const { createNewPost } = usePostsData();
  const isModalWindowOpen = useAppSelector(({ modal }) => modal.isOpen);
  const currentUserData = useAppSelector(currentUser) ?? null;
  const refModalInput = useRef<HTMLInputElement>(null);

  // Имитируем создание id для поста
  const lastElementId = useAppSelector(
    ({ posts }) => posts.ids[posts.ids.length - 1]
  );
  const id: number = Number(lastElementId) + 1;

  useEffect(() => {
    refModalInput?.current?.focus();
  }, []);

  const handleCloseModalWindow = (): void => {
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
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
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
              aria-label="Create title for new post"
              placeholder="Create title for new post"
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
              aria-label="Create text for new post"
              placeholder="Create text for new post"
              className="p-2 ps-2 form-control"
              onChange={formik.handleChange}
              isInvalid={
                (formik.errors.postText && formik.touched.postText) || false
              }
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              `Create post text`
            </Form.Label>
            <Form.Control.Feedback type="invalid" className="invalid-feedback">
              {formik.errors.postText}
            </Form.Control.Feedback>
          </div>

          <div className="d-flex justify-content-end">
            <ModalButton title="Cancel" onClick={handleCloseModalWindow} />
            <ModalButton title="Create" onClick={handleClick} priority />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddPostModalWindow;
