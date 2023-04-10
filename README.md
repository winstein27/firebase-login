# Personal Expenses

This project allows users to create an account and login using Firebase Authentication.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Create an account using email and password
- Login with the created account
- Logout from my account

### Screenshot

![](./screenshoots/01.png)

### Links

- Live Site URL: [Add live site URL here](https://firebase-login-iota.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- React
- Context API
- React Router
- React Icons
- TypeScript
- Vite
- Firebase
- Yarn

### What I learned

Context API (Creating context and provider):

```ts
const UserContext = createContext({
  userIsLogged: false,
  loggedUser: {} as User,
  logUserIn: (userCredential: Firebase.UserCredential) => {},
  logUserOut: () => {},
});
```

```ts
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
```

React hook to validate inputs:

```ts
const useInput = (props: Props) => {
  const [value, setValue] = useState('');
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const valueIsValid = props.validation(value);

  const valueChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputTouchedHandler = () => {
    setInputWasTouched(true);
  };

  return {
    value: value,
    touched: inputWasTouched,
    isValid: valueIsValid,
    changeHandler: valueChangedHandler,
    blurHandler: inputTouchedHandler,
  };
};
```

### Useful resources

- [React Environment Variables](https://jasonwatmore.com/post/2022/06/22/react-access-environment-variables-from-dotenv-env) - This helped to set up environment variables to configure Firebase without exposing credentials.
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html) - This helped to set up Vite environment variables.

## Author

- LinkedIn - [Winstein Martins](https://www.linkedin.com/in/winstein-martins/)
