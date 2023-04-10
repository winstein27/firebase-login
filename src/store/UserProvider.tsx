import React, { useState } from 'react';
import Firebase from 'firebase/auth';

import UserContext from './UserContext';

import User from './User';

const UserProvider = (props: { children: React.ReactNode }) => {
  const [userState, setUserState] = useState({
    loggedIn: false,
    user: {} as User,
  });

  const logUserIn = (userCredential: Firebase.UserCredential) => {
    setUserState({
      loggedIn: true,
      user: {
        id: userCredential.user.uid,
        firstName: '',
        lastName: '',
        email: userCredential.user.email || '',
      },
    });
  };

  const userContext = {
    userIsLogged: userState.loggedIn,
    loggedUser: userState.user,
    logUserIn,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
