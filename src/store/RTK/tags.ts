import { API } from 'lib/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITags } from 'lib/types/tags';

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  endpoints: (builder) => ({
    getTags: builder.query<string[], void>({
      query: () => `/tags`,
      transformResponse: (response: ITags) => response.tags,
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
