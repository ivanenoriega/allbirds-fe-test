export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';

export const setFirstName = (payload: string) => ({action: SET_FIRST_NAME, payload})
export const setLastName = (payload: string) => ({action: SET_LAST_NAME, payload})
export const setPhoneNumber = (payload: string) => ({action: SET_PHONE_NUMBER, payload})
export const setEmail = (payload: string) => ({action: SET_EMAIL, payload})
export const setPassword = (payload: string) => ({action: SET_PASSWORD, payload})
export const setConfirmPassword = (payload: string) => ({action: SET_CONFIRM_PASSWORD, payload})
