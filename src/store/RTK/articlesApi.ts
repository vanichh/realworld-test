import { API } from 'lib/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IListArticle } from 'lib/types/articleList';
import { setCountArticle } from 'store/slices/paginationSlices';

export interface IParamArticle {
  offset: number;
  author?: string;
  limit: number;
}

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  tagTypes: ['Article'],
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getArticle: builder.query<IListArticle, IParamArticle>({
      query: (params) => ({
        method: 'GET',
        url: '/articles',
        params: { ...params },
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCountArticle(data.articlesCount));
      },
    }),
  }),
});

export const { useGetArticleQuery } = articlesApi;
