import { useCallback, useReducer, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import PhoneNumberInput from "../PhoneNumberInput";
import {
  resetForm,
  setConfirmPassword,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPhoneNumber
} from "./RegistrationForm.actions";
import { initialState, registrationFormReducer } from "./RegistrationForm.reducer";
import styles from "./RegistrationForm.module.scss";
import PasswordInput from "../PasswordInput";
import { ReturnStatement } from "./RegistrationForm.types";
import { BUTTON_TYPE_RESET, BUTTON_TYPE_SUBMIT, BUTTON_VARIANT_SECONDARY } from "../Button/Button.constants";
import {
  CONFIRM_PASSWORD_CONFIG,
  EMAIL_CONFIG,
  ERROR_MESSAGE,
  FIRST_NAME_CONFIG,
  LAST_NAME_CONFIG,
  PASSWORD_CONFIG,
  PHONE_NUMBER_CONFIG,
  SUCCESS_MESSAGE
} from "./RegistrationForm.constants";

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(registrationFormReducer, initialState);
  const [showErrorMessage, setShowErrorMessage] = useState(true); // This is to test the error scenerio

  type Function = (arg: string) => ReturnStatement;
  const onChangeInputHandler = (onChangeInput: Function) => (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(onChangeInput(event.currentTarget.value));
  };

  const onChangePhoneNumberHandler = (value: string) => {
    dispatch(setPhoneNumber(value));
  };

  const onClickReset = () => {
    dispatch(resetForm());
  };

  const onClickSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    console.log('onClickSubmit', event);
    event.preventDefault();
    try {
      if (showErrorMessage) throw new Error("Unexpected Error");
      alert(SUCCESS_MESSAGE);
      dispatch(resetForm());
    } catch (error) {
      alert(ERROR_MESSAGE);
      console.log("There was an unexpected error while submitting the form.", error);
      setShowErrorMessage(false);
    }
  }, [showErrorMessage]);

  return (
    <form className={styles.main} onSubmit={onClickSubmit}>
      <Input
        value={state.firstName.value}
        onChange={onChangeInputHandler(setFirstName)}
        message={state.firstName.errorMessage}
        hasError={state.firstName.hasError}
        {...FIRST_NAME_CONFIG}
      />
      <Input
        value={state.lastName.value}
        onChange={onChangeInputHandler(setLastName)}
        message={state.lastName.errorMessage}
        hasError={state.lastName.hasError}
        {...LAST_NAME_CONFIG}
      />
      <PhoneNumberInput
        value={state.phoneNumber.value}
        onChange={onChangePhoneNumberHandler}
        message={state.phoneNumber.errorMessage}
        hasError={state.phoneNumber.hasError}
        {...PHONE_NUMBER_CONFIG}
      />
      <Input
        value={state.email.value}
        onChange={onChangeInputHandler(setEmail)}
        message={state.email.errorMessage}
        hasError={state.email.hasError}
        {...EMAIL_CONFIG}
      />
      <PasswordInput
        value={state.password.value}
        onChange={onChangeInputHandler(setPassword)}
        message={state.password.errorMessage}
        hasError={state.password.hasError}
        {...PASSWORD_CONFIG}
      />
      <PasswordInput
        value={state.confirmPassword.value}
        onChange={onChangeInputHandler(setConfirmPassword)}
        message={state.confirmPassword.errorMessage}
        hasError={state.confirmPassword.hasError}
        {...CONFIRM_PASSWORD_CONFIG}
      />
      <Button type={BUTTON_TYPE_SUBMIT} disabled={!state.validForm}>register</Button>
      <Button type={BUTTON_TYPE_RESET} variant={BUTTON_VARIANT_SECONDARY} onClick={onClickReset}>reset</Button>
      <p className={styles.disclaimer}>* required fields</p>
    </form>
  );
};

export default RegistrationForm;
