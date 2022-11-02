import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './RTK/articles';
import { tagsApi } from './RTK/tags';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(tagsApi.middleware),
});
