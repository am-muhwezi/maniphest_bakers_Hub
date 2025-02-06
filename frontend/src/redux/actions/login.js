/* eslint-disable no-unused-vars */
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  updateStart,
  updateSuccess,
  updateError,
  clearError,
  clearSuccessCondition,
} from '../slices/signupSlice';

const API = axios.create({ baseURL: 'http://localhost:5000/auth' });
const signIn = async (authData, dispatch, navigate, setAuthData) => {
  dispatch(updateStart());
  try {
    const res = await API.post('/login', authData);

    dispatch(updateSuccess(res.data));

    setAuthData({
      email: '',
      password: '',
    });

    toast.success(res.data.message, {
      position: 'top-right',
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    if (
      res.data.message === 'Please check your email for the authentication code'
    ) {
      setTimeout(() => {
        dispatch(clearSuccessCondition());

        //navigate('/verifyOTP');
      }, [2000]);
    } else {
      setTimeout(() => {
        dispatch(clearSuccessCondition());

        navigate('/');
      }, [2000]);
    }
  } catch (error) {
    if (!error.response) {
      dispatch(updateError(error.message));
    } else if (!error.response.data.message) {
      dispatch(updateError(error.response.data));
    } else {
      dispatch(updateError(error.response.data.message));
    }

    setTimeout(() => {
      dispatch(clearError());
    }, [3000]);
  }
};

export default signIn;