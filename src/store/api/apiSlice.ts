import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token !== null) {
      headers.set('authorization', `Baerer ${token}`);
    }
    console.log('PREPARE HEADERS');
    return headers;
  }
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({})
});
