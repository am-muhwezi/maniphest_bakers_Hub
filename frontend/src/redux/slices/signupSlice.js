import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.userInfo = action.payload;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    updateError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
    clearError: (state) => {
      state.error.condition = false;
    },
    clearSuccessCondition: (state) => {
      state.successCondition = false;
    },
  },
});

export const {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} = userSlice.actions;
export default userSlice.reducer;