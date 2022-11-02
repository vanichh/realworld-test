import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './RTK/articles';
import { tagsApi } from './RTK/tags';
import paginationSlice from './slices/pagination';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    pagination: paginationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(tagsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
