import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { signUp } from '../redux/actions/signup';
import signIn from '../redux/actions/login';

import '../css/Auth.css';

import {
  ValidateFistname,
  ValidateLastName,
  ValidateEmail,
  ValidatePassword,
} from '../components/Validation';

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const [authData, setAuthData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const {
    successCondition, userInfo, error, pending,
  } = useSelector(
    (state) => state.user,
  );

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleValidationFistname = () => {
    setErrors(ValidateFistname(authData));
  };

  const handleValidationLastname = () => {
    setErrors(ValidateLastName(authData));
  };

  const handleValidationEmail = () => {
    setErrors(ValidateEmail(authData));
  };

  const handleValidationPassword = () => {
    setErrors(ValidatePassword(authData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      signUp(authData, dispatch, setAuthData);
    } else {
      signIn(authData, dispatch, navigate, setAuthData);
    }
  };

  return (
    <div className="authForm">
      <div className="authFormLeft">
        <h1>{isSignUp ? 'Welcome Back' : 'Create Account'}</h1>
        <button onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
      <div className="authFormRight">
        <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
        <form>
          {isSignUp && (
            <>
              <input
                name="firstname"
                type="text"
                placeholder="First Name"
                value={authData.firstname}
                onChange={handleChange}
                onKeyUp={handleValidationFistname}
              />
              {errors.firstname && (
                <p style={{ color: 'red', fontSize: '15px' }}>
                  {errors.firstname}
                </p>
              )}
              <input
                name="lastname"
                type="text"
                placeholder="Last Name"
                value={authData.lastname}
                onChange={handleChange}
                onKeyUp={handleValidationLastname}
              />
              {errors.lastname && (
                <p style={{ color: 'red', fontSize: '15px' }}>
                  {errors.lastname}
                </p>
              )}
            </>
          )}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={authData.email}
            onChange={handleChange}
            onKeyUp={handleValidationEmail}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '15px' }}>{errors.email}</p>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={authData.password}
            onChange={handleChange}
            onKeyUp={handleValidationPassword}
          />
          {errors.password && (
            <p style={{ color: 'red', fontSize: '15px' }}>{errors.password}</p>
          )}
          <span className="pending">{pending ? 'loading...' : null}</span>
          {/* {successCondition && (
            <span className="successDisplay">{userInfo.message}</span>
          )} */}
          {error.condition && (
            <span className="errorDisplay">{error.message}</span>
          )}
          <button className="authButton" onClick={handleSubmit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          {/* <p
            className
            style={{ fontFamily: 'Baloo Tamma 2' }}
          >
            {!isSignUp && (
              <>
                <span className="link1">Forgot Password? </span>
                <Link to="requestResetPassword" className="link2">
                  Reset it
                </Link>
              </>
            )}
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;