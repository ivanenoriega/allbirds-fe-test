import { InputTypes } from "../Input/Input.types";
import {
  SET_CONFIRM_PASSWORD,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD,
  SET_PHONE_NUMBER
} from "./RegistrationForm.actions";

export type Actions =
  typeof SET_FIRST_NAME |
  typeof SET_LAST_NAME |
  typeof SET_PHONE_NUMBER |
  typeof SET_EMAIL |
  typeof SET_PASSWORD |
  typeof SET_CONFIRM_PASSWORD;

export type ReturnStatement = {
  type: Actions
  payload: string
};

export interface RegistrationFormReducerStateField {
  value: string,
  hasError: boolean,
  errorMessage: string,
}

export interface RegistrationFormReducerState {
  firstName: RegistrationFormReducerStateField,
  lastName: RegistrationFormReducerStateField,
  phoneNumber: RegistrationFormReducerStateField,
  email: RegistrationFormReducerStateField,
  password: RegistrationFormReducerStateField,
  confirmPassword: RegistrationFormReducerStateField,
  validForm: boolean
}

export interface RegistrationFormReducerAction {
  type: Actions
  payload: string
}

export interface inputConfig {
  type: InputTypes
  label: string
  id: string
  name: string
  maxlength: number
  required: boolean
}