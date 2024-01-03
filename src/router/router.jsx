import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Whiteball } from '../pages/white-ball';
import { BlackBall } from '../pages/black-ball';
import { RedBall } from '../pages/red-ball';
import { Success } from '../pages/success';

import { AuthProvider } from '../modules/auth';
import { SingIn } from '../pages/sing-in';
import { Dashboard } from '../pages/dashboard';

import { Root } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Whiteball />,
      },
      {
        path: 'whiteball',
        element: <Whiteball />,
      },
      {
        path: 'blackball',
        element: <BlackBall />,
      },
      {
        path: 'redball',
        element: <RedBall />,
      },
      {
        path: 'success',
        element: <Success />,
      },
      {
        path: 'admin',
        element: (
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        ),
        children: [
          {
            index: true,
            element: <SingIn />,
          },
          {
            path: 'singin',
            element: <SingIn />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
