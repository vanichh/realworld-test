import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './RTK/articlesApi';
import { tagsApi } from './RTK/tags';
import filterSlice from './slices/filterSlices';
import paginationSlice from './slices/paginationSlices';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    pagination: paginationSlice,
    filterApi: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(tagsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
