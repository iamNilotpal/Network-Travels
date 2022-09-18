import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

/* Types */
type State = {
  otp: string;
  user: {
    fullName: string;
    phoneNumber: string;
    email?: string;
  };
  isActivated: boolean;
};

export type UserActions = {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
};

/* Initial State */
const initialState: State = {
  otp: '',
  user: {
    fullName: '',
    phoneNumber: '',
    email: '',
  },
  isActivated: false,
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
    setActivated: (state: State, action: PayloadAction<boolean>) => {
      state.isActivated = action.payload;
    },
  },
});

// ACTIONS
export const { setOtp, setUser, setActivated } = authSlice.actions;

// SELECTORS
export const selectUser = (state: RootState) => state.auth.user;
export const selectOtp = (state: RootState) => state.auth.otp;
export const selectActivated = (state: RootState) => state.auth.isActivated;

// REDUCER
export default authSlice.reducer;
