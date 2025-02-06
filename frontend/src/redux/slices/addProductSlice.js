import { createSlice } from '@reduxjs/toolkit';

export const addProductSlice = createSlice({
  name: 'addProduct',
  initialState: {
    productInfo: null,
    successCondition: false,
    pending: false,
    error: {
      condition: false,
      message: '',
    },
  },
  reducers: {
    addProduct: state => {
      state.pending = true;
    },
    addProductSuccess: (state, action) => {
      state.successCondition = true;
      state.pending = false;
      state.productInfo = action.payload;
    },
    addError: (state, action) => {
      state.error.condition = true;
      state.error.message = action.payload;
      state.pending = false;
    },
    clearError: state => {
      state.error.condition = false;
    },
    clearSuccessCondition: state => {
      state.successCondition = false;
    },
  },
});

export const {
  addProduct,
  addProductSuccess,
  addError,
  clearError,
  clearSuccessCondition,
} = addProductSlice.actions;
export default addProductSlice.reducer;