import {
    ONLY_LETTERS_REGEX,
    PHONE_CHARACTERS_REGEX,
    PHONE_FORMAT_REGEX,
    VALID_EMAIL_REGEX
} from "./RegistrationForm.constants";
import { RegistrationFormReducerStateField } from "./RegistrationForm.types";

export const validateFirstName = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (!ONLY_LETTERS_REGEX.test(value) && value.length > 0) {
        hasError = true;
        errorMessage = "First Name cannot contain special characters.";
    }

    return { value, hasError, errorMessage };
};

export const validateLastName = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (!ONLY_LETTERS_REGEX.test(value) && value.length > 0) {
        hasError = true;
        errorMessage = "Last Name cannot contain special characters.";
    }

    return { value, hasError, errorMessage };
};

export const validatePhoneNumber = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (!PHONE_CHARACTERS_REGEX.test(value) && value.length > 0) {
        hasError = true;
        errorMessage = "Phone Number has invalid characters.";
    } else if (!PHONE_FORMAT_REGEX.test(value) && value.length > 0) {
        hasError = true;
        errorMessage = "Phone Number has wrong format. Ex: (123) 456-7890.";
    }

    return { value, hasError, errorMessage };
};

export const validateEmail = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (value.trim() === "") {
        hasError = true;
        errorMessage = "Email cannot be empty.";
    } else if (!VALID_EMAIL_REGEX.test(value)) {
        hasError = true;
        errorMessage = "Email has invalid format. Ex: user@company.com";
    }

    return { value, hasError, errorMessage };
};

export const validatePassword = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (value.trim() === "") {
        hasError = true;
        errorMessage = "Password cannot be empty.";
    }

    return { value, hasError, errorMessage };
};

export const validateRepeatPassword = (value: string, currentPassword: string) => {
    let hasError = false;
    let errorMessage = '';
    if (value.trim() === "") {
        hasError = true;
        errorMessage = "Password cannot be empty.";
    } else if (value !== currentPassword) {
        hasError = true;
        errorMessage = "Passwords don't match.";
    }

    return { value, hasError, errorMessage };
};

export const validateForm = (
    email: RegistrationFormReducerStateField,
    password: RegistrationFormReducerStateField,
    confirmPassword: RegistrationFormReducerStateField
) => {
    return (
        email.value.length > 0 &&
        password.value.length > 0 &&
        confirmPassword.value.length > 0 &&
        !email.hasError &&
        !password.hasError &&
        !confirmPassword.hasError
    );
};