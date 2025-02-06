/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
  //   const [token, setToken] = useState(null);

  //   useEffect(() => {
  //     setToken(userInfo.token);
  //   });

  //   console.log(token, 'This is the token');

  return userInfo?.token ? children : <Navigate to="/authentication" replace />;
};

export default PrivateRoutes;