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
import { toast } from 'react-toastify';
import { MouseEvent } from 'react';
import * as Yup from 'yup';

interface IFormFields {
  postText: string;
}

const formSchema = Yup.object().shape({
  postText: Yup.string().trim().required('Required field'),
});

const ChangePostModalWindow = () => {
  const dispatch = useAppDispatch();
  const isModalWindowOpen = useAppSelector((state) => state.modal.isOpen);
  const relevantPostId = useAppSelector((state) => state.modal.relevantPostId);
  const refModalInput = useRef<HTMLTextAreaElement>(null);
  const { changeCurrentPost } = usePostsData();

  const posts = useAppSelector(postsSelector.selectAll);
  const currentPost = posts.find((post) => post.id === relevantPostId) || null;

  useEffect(() => {
    refModalInput?.current?.focus();
  }, []);

  const handleCloseModalWindow = () => {
    dispatch(closeModalWindow());
    dispatch(setCurrentModalType(null));
    dispatch(setRelevantPost(null));
  };

  const formik = useFormik<IFormFields>({
    initialValues: { postText: currentPost!.body },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      const { postText } = values;
      try {
        if (currentPost !== null) {
          changeCurrentPost(currentPost.id, postText);
          handleCloseModalWindow();
          toast.success('Post Changed!');
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
        <div className="modal-title h4">Change Post</div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={handleCloseModalWindow}
        />
      </div>

      <div className="modal-body">
        <h6>{currentPost!.title}</h6>
        <Form className="py-1 rounded-2">
          <div className="form-group">
            <Form.Control
              as="textarea"
              rows={5}
              ref={refModalInput}
              id="postText"
              type="text"
              name="postText"
              aria-label="Change"
              className="p-2 ps-2 form-control"
              placeholder="Сreate a new test post"
              onChange={formik.handleChange}
              value={formik.values.postText}
              isInvalid={(formik.errors.postText && formik.touched.postText) || false}
            />
            <Form.Label htmlFor="name" className="form-label visually-hidden">
              `Change`
            </Form.Label>
            <Form.Control.Feedback type="invalid" className="invalid-feedback">
              {formik.errors.postText}
            </Form.Control.Feedback>
          </div>

          <div className="d-flex justify-content-end">
            <ModalButton title="Отмена" onClick={handleCloseModalWindow} />
            <ModalButton title="Change" onClick={handleClick} priority />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ChangePostModalWindow;
