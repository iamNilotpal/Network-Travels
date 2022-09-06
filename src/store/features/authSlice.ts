import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

/* Types */
type State = typeof initialState;
export type UserActions = {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
};

/* Initial State */
const initialState = {
  otp: '',
  user: {
    fullName: '',
    mobileNumber: '',
    email: '',
  },
  isActivated: false,
  loading: false,
};

/* Auth Slice */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setOtp: (state: State, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setUser: (state: State, { payload }: PayloadAction<UserActions>) => {
      state.user = { ...state.user, ...payload };
    },
    setLoading: (state: State, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setActivated: (state: State, action: PayloadAction<boolean>) => {
      state.isActivated = action.payload;
    },
  },
});

// ACTIONS
export const { setOtp, setUser, setLoading, setActivated } = authSlice.actions;

// SELECTORS
export const selectUser = (state: RootState) => state.auth.user;
export const selectOtp = (state: RootState) => state.auth.otp;
export const selectActivated = (state: RootState) => state.auth.isActivated;
export const selectLoading = (state: RootState) => state.auth.loading;

// REDUCER
export default authSlice.reducer;
