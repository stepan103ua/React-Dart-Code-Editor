import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = { token: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      localStorage.setItem('accessToken', token);
      console.log(state.token);
    },
    loadAccessToken: (state, action) => {
      const token = localStorage.getItem('accessToken');
      console.log(token);

      if (token !== null) {
        state.token = token;
        console.log(token);
      }
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    }
  }
});

export const { setCredentials, logout, loadAccessToken } = authSlice.actions;

export default authSlice.reducer;

export type AuthReducer = ReturnType<typeof authSlice.reducer>;
