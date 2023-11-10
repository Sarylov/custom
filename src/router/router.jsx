import { createBrowserRouter } from 'react-router-dom';
import { WhiteBoll } from '../pages/white_boll';

import { Root } from './root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <WhiteBoll />,
      },
      {
        path: 'white_boll',
        element: <WhiteBoll />,
      },
    ],
  },
]);
