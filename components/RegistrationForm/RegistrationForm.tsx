import { useReducer } from "react";
import Button from "../Button"
import Input from "../Input"
import { initialState, registrationFormReducer } from "./reducer";
import styles from "./RegistrationForm.module.scss"

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(registrationFormReducer, initialState);

  // Handlers
  const onChangeFirstNameHandler = (event) => {
    dispatch({ type: 'setFirstName', payload: event.target.value })
  }

  const onChangeLastNameHandler = (event) => {
    dispatch({ type: 'setLastName', payload: event.target.value })
  }

  return (
    <form className={styles.main}>
      <Input value={state.firstName} onChange={onChangeFirstNameHandler} label="first name" id='first_name' name='first_name' type="text" maxlength={250} />
      <Input value={state.lastName} onChange={onChangeLastNameHandler} label="last name" id='last_name' name='last_name' type="text" maxlength={250} />
      <Input value={state.phoneNumber} onChange={onChangeFirstNameHandler} label="phone number" id='phone_number' name='phone_number' type="tel" maxlength={250} />
      <Input value={state.email} onChange={onChangeFirstNameHandler} label="email" id='email' name='email' type="email" maxlength={250} />
      <Input value={state.password} onChange={onChangeFirstNameHandler} label="password" id='password' name='password' type="password" maxlength={250} />
      <Input value={state.confirmPassword} onChange={onChangeFirstNameHandler} label="confirm password" id='confirm_password' name='confirm_password' type="password" maxlength={250} />
      <Button type="submit">register</Button>
    </form>
  )
}

export default RegistrationForm
