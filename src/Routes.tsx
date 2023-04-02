import { createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import LogIn from './pages/Login';
import SignUp from './pages/Signup';

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
