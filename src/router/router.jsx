import { createBrowserRouter } from 'react-router-dom';
import { Pay } from '../pages/pay';

import { Root } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Pay />,
      },
      {
        path: 'pay',
        element: <Pay />,
      },
    ],
  },
]);
