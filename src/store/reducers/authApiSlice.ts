import { LoginRequest } from '../../requests/loginRequest';
import { RegisterRequest } from '../../requests/registerRequest';
import { AuthResponse } from '../../responses/authResponse';
import { apiSlice } from '../api/apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: '/auth/signIn',
        method: 'POST',
        body
      })
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({
        url: 'auth/signUp',
        method: 'POST',
        body
      })
    })
  })
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
