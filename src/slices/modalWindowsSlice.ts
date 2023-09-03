import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  EntityState,
} from '@reduxjs/toolkit';
import { IModalWindow } from '../interfaces';

const modalWindowAdapter = createEntityAdapter<IModalWindow>();

interface ModalWindowState extends EntityState<IModalWindow> {
  isOpen: boolean;
  type: string | null;
  relevantPostId: number | null;
  relevantUserId: number | null;
}

const initialState: ModalWindowState = modalWindowAdapter.getInitialState({
  isOpen: false,
  type: null,
  relevantPostId: null,
  relevantUserId: null,
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
    setRelevantPost: (state, action: PayloadAction<number | null>) => {
      state.relevantPostId = action.payload;
    },
    setRelevantUser: (state, action: PayloadAction<number | null>) => {
      state.relevantUserId = action.payload;
    },
  },
});

export const {
  openModalWindow,
  closeModalWindow,
  setCurrentModalType,
  setRelevantPost,
  setRelevantUser,
} = modalWindowSlice.actions;
export { modalWindowAdapter };
export default modalWindowSlice.reducer;
