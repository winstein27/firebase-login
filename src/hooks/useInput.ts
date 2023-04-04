import React, { useState } from 'react';

interface Props {
  validation: (value: string) => boolean;
}

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

export default useInput;
