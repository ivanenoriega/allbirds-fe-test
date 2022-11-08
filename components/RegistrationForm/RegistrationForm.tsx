import { useCallback, useReducer } from "react";
import Button from "../Button";
import Input from "../Input";
import PhoneNumberInput from "../PhoneNumberInput";
import {
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
import { BUTTON_TYPE_SUBMIT } from "../Button/Button.constants";
import {
  CONFIRM_PASSWORD_CONFIG,
  EMAIL_CONFIG,
  FIRST_NAME_CONFIG,
  LAST_NAME_CONFIG,
  PASSWORD_CONFIG,
  PHONE_NUMBER_CONFIG
} from "./RegistrationForm.constants";

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(registrationFormReducer, initialState);

  type Function = (arg: string) => ReturnStatement;
  const onChangeInputHandler = useCallback((onChangeInput: Function) => (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(onChangeInput(event.currentTarget.value));
  }, []);

  const onChangePhoneNumberHandler = useCallback((value: string) => {
    dispatch(setPhoneNumber(value));
  }, []);

  return (
    <form className={styles.main}>
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
      <p className={styles.disclaimer}>* required fields</p>
    </form>
  );
};

export default RegistrationForm;
