import { INPUT_TYPE_EMAIL, INPUT_TYPE_PASSWORD, INPUT_TYPE_TEL, INPUT_TYPE_TEXT } from "../Input/Input.constants";
import { inputConfig } from "./RegistrationForm.types";

export const ONLY_LETTERS_REGEX = /^[a-zA-Z ]+$/;
export const PHONE_CHARACTERS_REGEX = /^[\d\(\)\- ]+$/;
export const PHONE_FORMAT_REGEX = /(\d{3}\) \d{3}\-\d{4})$/;
export const VALID_EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const FIRST_NAME_CONFIG: inputConfig = {
    type: INPUT_TYPE_TEXT,
    label: "first name",
    id: 'first_name',
    name: 'first_name',
    maxlength: 100,
    required: false,
};

export const LAST_NAME_CONFIG: inputConfig = {
    type: INPUT_TYPE_TEXT,
    label: "last name",
    id: 'last_name',
    name: 'last_name',
    maxlength: 100,
    required: false,
};

export const PHONE_NUMBER_CONFIG: inputConfig = {
    type: INPUT_TYPE_TEL,
    label: "phone number",
    id: 'phone_number',
    name: 'phone_number',
    maxlength: 24,
    required: false,
};

export const EMAIL_CONFIG: inputConfig = {
    type: INPUT_TYPE_EMAIL,
    label: "email *",
    id: 'email',
    name: 'email',
    maxlength: 100,
    required: true,
};

export const PASSWORD_CONFIG: inputConfig = {
    type: INPUT_TYPE_PASSWORD,
    label: "password *",
    id: 'password',
    name: 'password',
    maxlength: 250,
    required: true,
};

export const CONFIRM_PASSWORD_CONFIG: inputConfig = {
    type: INPUT_TYPE_PASSWORD,
    label: "confirm password *",
    id: 'confirm_password',
    name: 'confirm_password',
    maxlength: 250,
    required: true,
};