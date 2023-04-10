import { createContext } from 'react';
import Firebase from 'firebase/auth';

import User from './User';

const UserContext = createContext({
  userIsLogged: false,
  loggedUser: {} as User,
  logUserIn: (userCredential: Firebase.UserCredential) => {},
});

export default UserContext;
