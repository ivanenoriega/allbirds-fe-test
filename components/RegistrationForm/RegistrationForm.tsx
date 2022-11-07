import { useCallback, useReducer } from "react";
import Button from "../Button";
import Input from "../Input";
import PhoneNumberInput from "../PhoneNumberInput";
import {
  ReturnStatement,
  setConfirmPassword,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPhoneNumber
} from "./RegistrationForm.actions";
import { initialState, registrationFormReducer } from "./RegistrationForm.reducer";
import styles from "./RegistrationForm.module.scss";

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
        label="first name"
        id='first_name'
        name='first_name'
        type="text"
        maxlength={100}
        message={state.firstName.errorMessage}
        hasError={state.firstName.hasError}
      />
      <Input
        value={state.lastName.value}
        onChange={onChangeInputHandler(setLastName)}
        label="last name"
        id='last_name'
        name='last_name'
        type="text"
        maxlength={100}
        message={state.lastName.errorMessage}
        hasError={state.lastName.hasError}
      />
      <PhoneNumberInput
        value={state.phoneNumber.value}
        onChange={onChangePhoneNumberHandler}
        label="phone number"
        id='phone_number'
        name='phone_number'
        type="tel"
        maxlength={24}
        message={state.phoneNumber.errorMessage}
        hasError={state.phoneNumber.hasError}
      />
      <Input
        value={state.email.value}
        onChange={onChangeInputHandler(setEmail)}
        label="email *"
        id='email'
        name='email'
        type="email"
        maxlength={250}
        message={state.email.errorMessage}
        hasError={state.email.hasError}
        required
      />
      <Input
        value={state.password.value}
        onChange={onChangeInputHandler(setPassword)}
        label="password *"
        id='password'
        name='password'
        type="password"
        maxlength={250}
        required
      />
      <Input
        value={state.confirmPassword.value}
        onChange={onChangeInputHandler(setConfirmPassword)}
        label="confirm password *"
        id='confirm_password'
        name='confirm_password'
        type="password"
        maxlength={250}
        required
      />
      <Button disabled>register</Button>
      <p className={styles.disclaimer}>* required fields</p>
    </form>
  );
};

export default RegistrationForm;
