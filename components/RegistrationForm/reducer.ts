import { SET_CONFIRM_PASSWORD, SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_PASSWORD, SET_PHONE_NUMBER } from "./actions";

interface RegistrationFormReducerState {
  firstName: string,
  lastName: string,
}

interface RegistrationFormReducerAction {
  action: 'SET_FIRST_NAME' | 'SET_LAST_NAME' | 'SET_PHONE_NUMBER' | 'SET_EMAIL' | 'SET_PASSWORD' | 'SET_CONFIRM_PASSWORD'
  payload?: string
}

export const initialState = { firstName: '', lastName: '' };

export function registrationFormReducer(state: RegistrationFormReducerState, action: RegistrationFormReducerAction) {
  switch (action.action) {
    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    default:
      throw new Error();
  }
}
