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
      console.log(state.token);
    },
    logout: (state, action) => {
      state.token = null;
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export type AuthReducer = ReturnType<typeof authSlice.reducer>;
