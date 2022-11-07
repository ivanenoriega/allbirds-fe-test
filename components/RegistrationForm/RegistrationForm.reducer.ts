import {
  Actions,
  SET_CONFIRM_PASSWORD,
  SET_EMAIL, SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD,
  SET_PHONE_NUMBER
} from "./RegistrationForm.actions";
import { validateEmail, validateFirstName, validateLastName, validatePhoneNumber } from "./RegistrationForm.utls";

interface RegistrationFormReducerStateField {
  value: string,
  hasError: boolean,
  errorMessage: string,
}

interface RegistrationFormReducerState {
  firstName: RegistrationFormReducerStateField,
  lastName: RegistrationFormReducerStateField,
  phoneNumber: RegistrationFormReducerStateField,
  email: RegistrationFormReducerStateField,
  password: RegistrationFormReducerStateField,
  confirmPassword: RegistrationFormReducerStateField,
}

interface RegistrationFormReducerAction {
  type: Actions
  payload: string
}

export const initialState: RegistrationFormReducerState = {
  firstName: { value: '', hasError: false, errorMessage: '' },
  lastName: { value: '', hasError: false, errorMessage: '' },
  phoneNumber: { value: '', hasError: false, errorMessage: '' },
  email: { value: '', hasError: false, errorMessage: '' },
  password: { value: '', hasError: false, errorMessage: '' },
  confirmPassword: { value: '', hasError: false, errorMessage: '' },
};

export const registrationFormReducer = (
  state: RegistrationFormReducerState,
  action: RegistrationFormReducerAction) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: { ...state.firstName, ...validateFirstName(action.payload) } };
    case SET_LAST_NAME:
      return { ...state, lastName: { ...state.lastName, ...validateLastName(action.payload) } };
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: { ...state.phoneNumber, ...validatePhoneNumber(action.payload) } };
    case SET_EMAIL:
      return { ...state, email: { ...state.email, ...validateEmail(action.payload) } };
    case SET_PASSWORD:
      return { ...state, password: { ...state.password, value: action.payload } };
    case SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: { ...state.confirmPassword, value: action.payload } };
    default:
      throw new Error();
  }
};
