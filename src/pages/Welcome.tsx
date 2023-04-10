import { useContext } from 'react';
import UserContext from '../store/UserContext';

const Welcome = () => {
  const userCtx = useContext(UserContext);

  return <h2>Welcome {userCtx.loggedUser.email}</h2>;
};

export default Welcome;
