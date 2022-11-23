import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from 'store/hooks';

interface PaginationState {
  countArticle: number;
}

const initialState: PaginationState = {
  countArticle: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',

  initialState,
  reducers: {
    setCountArticle: (state, { payload }: PayloadAction<number>) => {
      state.countArticle = payload;
    },
  },
});
export const { setCountArticle } = paginationSlice.actions;

export const getCountArticle = (): number =>
  useAppSelector((store) => store.pagination.countArticle);


export default paginationSlice.reducer;
