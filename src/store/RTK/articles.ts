import { API } from 'lib/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IListArticle } from 'lib/types/article-list';
import { setCountArticle } from 'store/slices/pagination';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  tagTypes: ['Article'],
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getArticle: builder.query<IListArticle, void>({
      query: () => `/articles`,
      providesTags: (result) =>
        result
          ? [
              ...result.articles.map(({ title }) => ({
                type: 'Article' as const,
                id: title,
              })),
              { type: 'Article', id: 'LIST' },
            ]
          : [{ type: 'Article', id: 'LIST' }],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCountArticle(data.articlesCount));
      },
    }),
    toogleArticle: builder.mutation<IListArticle, number>({
      query: (count) => ({
        url: '/articles',
        params: {
          limit: 10,
          offset: count,
        },
      }),
      invalidatesTags: [{ type: 'Article', id: 'LIST' }],
    }),
  }),
});

export const { useGetArticleQuery, useToogleArticleMutation } = articlesApi;
