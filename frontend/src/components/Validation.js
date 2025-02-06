
import React from 'react';

export const ValidateFistname = (authData) => {
  const errors = {};

  if (authData.firstname === '') {
    errors.firstname = 'Firstname is Required';
  }

  return errors;
};

export const ValidateLastName = (authData) => {
  const errors = {};

  if (authData.lastname === '') {
    errors.lastname = 'Lastname is Required';
  }

  return errors;
};

export const ValidateEmail = (authData) => {
  const errors = {};

  const Email_Pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;

  if (authData.email === '') {
    errors.email = 'Email is required';
  } else if (!authData.email.match(Email_Pattern)) {
    errors.email = 'Please Enter a Valid Email';
  }

  return errors;
};

export const ValidatePassword = (authData) => {
  const errors = {};

  const Password_Pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (authData.password === '') {
    errors.password = 'Password is required';
  } else if (!authData.password.match(Password_Pattern)) {
    errors.password = 'Provide valid password';
  }

  return errors;
};
export const validateUpdatePassword = (authData) => {
  const errors = {};
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  if (authData.currentPassword === '') {
    errors.currentPassword = 'Current Password is incorrect';
  } else if (!authData.currentPassword.match(passwordPattern)) {
    errors.currentPassword = 'Password format is incorect';
  }
  if (authData.newPassword === '') {
    errors.newPassword = 'New Password is required';
  } else if (!authData.newPassword.match(passwordPattern)) {
    errors.newPassword = 'New Password format is incorrect';
  }
  return errors;
};

export const ValidateNewPassword = (authData) => {
  const errors = {};

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (authData.newPassword === '') {
    errors.newPassword = 'New Password is required';
  } else if (!authData.newPassword.match(passwordPattern)) {
    errors.newPassword = 'Password format is incorrect';
  }

  if (authData.confirmPassword === '') {
    errors.confirmPassword = 'Password Confirmation is required';
  } else if (!authData.confirmPassword.match(passwordPattern)) {
    errors.confirmPassword = 'Password format is incorrect';
  }
  if (authData.confirmPassword !== authData.newPassword) {
    errors.matchPassword = 'Two passwords do not match';
  }
  return errors;
};
