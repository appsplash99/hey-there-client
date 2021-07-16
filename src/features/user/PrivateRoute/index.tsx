import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const PrivateRoute: React.FC<{ path: string }> = ({ path, ...props }) => {
  const { userLoggedIn } = useSelector((state: RootState) => state.user);

  return userLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
