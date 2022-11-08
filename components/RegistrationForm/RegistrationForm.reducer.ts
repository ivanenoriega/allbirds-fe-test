import {
  SET_CONFIRM_PASSWORD,
  SET_EMAIL, SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD,
  SET_PHONE_NUMBER
} from "./RegistrationForm.actions";
import { RegistrationFormReducerAction, RegistrationFormReducerState } from "./RegistrationForm.types";
import {
  validateEmail,
  validateFirstName,
  validateForm,
  validateLastName,
  validatePassword,
  validatePhoneNumber,
  validateRepeatPassword
} from "./RegistrationForm.utls";

export const initialState: RegistrationFormReducerState = {
  firstName: { value: '', hasError: false, errorMessage: '' },
  lastName: { value: '', hasError: false, errorMessage: '' },
  phoneNumber: { value: '', hasError: false, errorMessage: '' },
  email: { value: '', hasError: false, errorMessage: '' },
  password: { value: '', hasError: false, errorMessage: '' },
  confirmPassword: { value: '', hasError: false, errorMessage: '' },
  validForm: false,
};

export const registrationFormReducer = (
  state: RegistrationFormReducerState,
  action: RegistrationFormReducerAction) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: validateFirstName(action.payload)
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: validateLastName(action.payload)
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: validatePhoneNumber(action.payload)
      };
    case SET_EMAIL: {
      const email = validateEmail(action.payload);

      return {
        ...state,
        email,
        validForm: validateForm(email, state.password, state.confirmPassword)
      };
    }
    case SET_PASSWORD: {
      const password = validatePassword(action.payload);
      const confirmPassword = validateRepeatPassword(state.confirmPassword.value, action.payload);
      const validForm = validateForm(state.email, password, confirmPassword);

      return {
        ...state,
        password,
        confirmPassword,
        validForm
      };
    }
    case SET_CONFIRM_PASSWORD: {
      const confirmPassword = validateRepeatPassword(action.payload, state.password.value);
      const validForm = validateForm(state.email, state.password, confirmPassword);

      return {
        ...state,
        confirmPassword,
        validForm
      };
    }
    default:
      throw new Error();
  }
};
