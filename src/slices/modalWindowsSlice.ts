import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface ModalWindowState {
  isOpen: boolean;
  type: string | null;
  relevantPost: string | null;
}

const modalWindowAdapter = createEntityAdapter();
const initialState: ModalWindowState = modalWindowAdapter.getInitialState({
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
    setCurrentModalType: (state, action: PayloadAction<string | null>) => {
      state.type = action.payload;
    },
    setRelevantPost: (state, action: PayloadAction<string | null>) => {
      state.relevantPost = action.payload;
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
