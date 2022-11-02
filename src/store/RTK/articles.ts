import { API } from 'lib/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IListArticle } from 'lib/types/article-list';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  tagTypes: ['Article'],
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getArticle: builder.query<IListArticle, void>({
      query: () => `/articles`,
      providesTags: ['Article'],
    }),
  }),
});

export const { useGetArticleQuery } = articlesApi;
