import {
  Actions,
  SET_CONFIRM_PASSWORD,
  SET_EMAIL, SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD,
  SET_PHONE_NUMBER
} from "./actions";

interface RegistrationFormReducerStateField {
  value: string, hasError: boolean, info: string, errorMessage: string
}

interface RegistrationFormReducerState {
  firstName: RegistrationFormReducerStateField,
  lastName: RegistrationFormReducerStateField,
  phoneNumber: RegistrationFormReducerStateField,
  email: RegistrationFormReducerStateField,
  password: RegistrationFormReducerStateField,
  confirmPassword: RegistrationFormReducerStateField
}

interface RegistrationFormReducerAction {
  type: Actions
  payload: string
}

export const initialState: RegistrationFormReducerState = {
  firstName: { value: '', hasError: false, info: '', errorMessage: '' },
  lastName: { value: '', hasError: false, info: '', errorMessage: '' },
  phoneNumber: { value: '', hasError: false, info: '', errorMessage: '' },
  email: { value: '', hasError: false, info: '', errorMessage: '' },
  password: { value: '', hasError: false, info: '', errorMessage: '' },
  confirmPassword: { value: '', hasError: false, info: '', errorMessage: '' }
};

export const registrationFormReducer = (
  state: RegistrationFormReducerState,
  action: RegistrationFormReducerAction) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return { ...state, firstName: { ...state.firstName, value: action.payload } };
    case SET_LAST_NAME:
      return { ...state, lastName: { ...state.lastName, value: action.payload } };
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: { ...state.phoneNumber, value: action.payload } };
    case SET_EMAIL:
      return { ...state, email: { ...state.email, value: action.payload } };
    case SET_PASSWORD:
      return { ...state, password: { ...state.password, value: action.payload } };
    case SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: { ...state.confirmPassword, value: action.payload } };
    default:
      throw new Error();
  }
};
