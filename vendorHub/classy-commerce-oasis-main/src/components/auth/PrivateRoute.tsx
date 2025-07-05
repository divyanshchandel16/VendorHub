import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAccount } from '@/context/AccountContext';

const PrivateRoute = () => {
  const { user } = useAccount();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
