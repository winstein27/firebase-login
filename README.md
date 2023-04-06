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
- React Router
- React Icons
- TypeScript
- Vite
- Firebase
- Yarn

### What I learned

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

- [React Environment Variables](https://jasonwatmore.com/post/2022/06/22/react-access-environment-variables-from-dotenv-env) - This helped to set up environment variable to configure Firebase without exposing credentials.

## Author

- LinkedIn - [Winstein Martins](https://www.linkedin.com/in/winstein-martins/)
