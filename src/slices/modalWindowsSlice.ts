import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IModalWindow } from '../interfaces';


const modalWindowAdapter = createEntityAdapter<IModalWindow>();
const initialState = modalWindowAdapter.getInitialState({
  isOpen: false,
  type: '',
  relevantPostId: 0,
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
    setCurrentModalType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setRelevantPost: (state, action: PayloadAction<number>) => {
      state.relevantPostId = action.payload;
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
