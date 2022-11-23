import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from 'store/hooks';

interface FilterState {
  author?: string;
  limit: number;
  offset: number;
}

const initialState: FilterState = {
  limit: 10,
  offset: 0,
};

export const filterSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }: PayloadAction<number>) => {
      state.offset = payload;
    },
  }
});

export const { setCurrentPage } = filterSlice.actions;

export const getParams = () => useAppSelector((store) => store.filterApi);

export const getCurrentPage = () => useAppSelector(store=>store.filterApi.offset)


export default filterSlice.reducer;
