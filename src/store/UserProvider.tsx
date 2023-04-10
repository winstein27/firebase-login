import React, { useState } from 'react';
import Firebase from 'firebase/auth';

import UserContext from './UserContext';

import User from './User';

const initalState = {
  userIsLogged: false,
  loggedUser: {} as User,
};

const UserProvider = (props: { children: React.ReactNode }) => {
  const [userState, setUserState] = useState(initalState);

  const logUserIn = (userCredential: Firebase.UserCredential) => {
    setUserState({
      userIsLogged: true,
      loggedUser: {
        id: userCredential.user.uid,
        firstName: '',
        lastName: '',
        email: userCredential.user.email || '',
      },
    });
  };

  const logUserOut = () => {
    setUserState(initalState);
  };

  const userContext = {
    userIsLogged: userState.userIsLogged,
    loggedUser: userState.loggedUser,
    logUserIn,
    logUserOut,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
