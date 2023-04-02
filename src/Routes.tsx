import { createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <LogIn />,
      },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

export default router;
