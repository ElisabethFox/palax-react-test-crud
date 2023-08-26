import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const modalWindowAdapter = createEntityAdapter();
const initialState = modalWindowAdapter.getInitialState({
  isOpen: false,
  type: null,
  relevantPost: null,
});

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    openModalWindow: (state) => {
      state.isOpen = true;
    },
    closeModalWindow: (state) => {
      state.isOpen = false;
    },
    setCurrentModalType: (state, { payload }) => {
      state.type = payload;
    },
    setRelevantPost: (state, { payload }) => {
      state.relevantPost = payload;
    },
  },
});

export const {
  openModalWindow,
  closeModalWindow,
  setCurrentModalType,
  setRelevantPost,
} = modalWindowSlice.actions;
export { modalWindowAdapter };
export default modalWindowSlice.reducer;