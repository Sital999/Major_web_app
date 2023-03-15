import React, { useEffect, useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from '@constants/routes';
import Login from '@containers/login';
import SignUp from '@containers/signup';
import Dashboard from '@containers/dashboard';
import { AuthenticatedRoute, UnauthenticatedRoute } from '@components/authentication';
import { Toaster } from '@components/toaster';
interface AppProps {}

const Main: React.FC<AppProps> = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.LOGIN} element={<UnauthenticatedRoute component={Login} />} />
      <Route path={routes.SIGNUP} element={<UnauthenticatedRoute component={SignUp} />} />
      <Route path={routes.DASHBOARD} element={<AuthenticatedRoute component={Dashboard} />} />
      <Route path="*" element={<Navigate to={routes.LOGIN} replace />} />
    </Routes>
  );
};

export default Main;
