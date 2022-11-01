import { useReducer } from "react";
import Button from "../Button";
import Input from "../Input";
import {
  ReturnStatement,
  setConfirmPassword,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPhoneNumber
} from "./actions";
import { initialState, registrationFormReducer } from "./reducer";
import styles from "./RegistrationForm.module.scss";

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(registrationFormReducer, initialState);

  // Handlers
  type Function = (arg: string) => ReturnStatement;
  const onChangeInputHandler = (onChangeInput: Function) => (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(onChangeInput(event.currentTarget.value));
  };

  return (
    <form className={styles.main}>
      <Input
        value={state.firstName.value}
        onChange={onChangeInputHandler(setFirstName)}
        label="first name"
        id='first_name'
        name='first_name'
        type="text"
        maxlength={250} />
      <Input
        value={state.lastName.value}
        onChange={onChangeInputHandler(setLastName)}
        label="last name"
        id='last_name'
        name='last_name'
        type="text"
        maxlength={250} />
      <Input
        value={state.phoneNumber.value}
        onChange={onChangeInputHandler(setPhoneNumber)}
        label="phone number"
        id='phone_number'
        name='phone_number'
        type="tel"
        maxlength={250} />
      <Input
        value={state.email.value}
        onChange={onChangeInputHandler(setEmail)}
        label="email"
        id='email'
        name='email'
        type="email"
        maxlength={250} />
      <Input
        value={state.password.value}
        onChange={onChangeInputHandler(setPassword)}
        label="password"
        id='password'
        name='password'
        type="password"
        maxlength={250} />
      <Input
        value={state.confirmPassword.value}
        onChange={onChangeInputHandler(setConfirmPassword)}
        label="confirm password"
        id='confirm_password'
        name='confirm_password'
        type="password"
        maxlength={250} />
      <Button type="submit">register</Button>
    </form>
  );
};

export default RegistrationForm;
