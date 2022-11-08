import { ReturnStatement } from "./RegistrationForm.types";

export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';

export const setFirstName = (payload: string): ReturnStatement => ({ type: SET_FIRST_NAME, payload });
export const setLastName = (payload: string): ReturnStatement => ({ type: SET_LAST_NAME, payload });
export const setPhoneNumber = (payload: string): ReturnStatement => ({ type: SET_PHONE_NUMBER, payload });
export const setEmail = (payload: string): ReturnStatement => ({ type: SET_EMAIL, payload });
export const setPassword = (payload: string): ReturnStatement => ({ type: SET_PASSWORD, payload });
export const setConfirmPassword = (payload: string): ReturnStatement => ({ type: SET_CONFIRM_PASSWORD, payload });
