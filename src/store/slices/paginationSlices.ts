import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from 'store/hooks';

interface PaginationState {
  countArticle: number;
  currentPage: number;
}

const initialState: PaginationState = {
  countArticle: 0,
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',

  initialState,
  reducers: {
    setCountArticle: (state, { payload }: PayloadAction<number>) => {
      state.countArticle = payload;
    },
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.countArticle = payload;
    },
  },
});
export const { setCountArticle, setCurrentPage } = paginationSlice.actions;

export const getCountArticle = (): number =>
  useAppSelector((store) => store.pagination.countArticle);

export const getCurrentPage = (): number =>
  useAppSelector((store) => store.pagination.currentPage);

export default paginationSlice.reducer;
