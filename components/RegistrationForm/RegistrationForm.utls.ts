import {
    ONLY_LETTERS_REGEX,
    PHONE_CHARACTERS_REGEX,
    PHONE_FORMAT_REGEX,
    VALID_EMAIL_REGEX
} from "./RegistrationForm.constants";

export const validateFirstName = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (value.trim() === "") {
        hasError = true;
        errorMessage = "First Name cannot be empty.";
    } else if (!ONLY_LETTERS_REGEX.test(value)) {
        hasError = true;
        errorMessage = "First Name cannot contain special characters.";
    }
    return { value, hasError, errorMessage };
};

export const validateLastName = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (value.trim() === "") {
        hasError = true;
        errorMessage = "Last Name cannot be empty.";
    } else if (!ONLY_LETTERS_REGEX.test(value)) {
        hasError = true;
        errorMessage = "Last Name cannot contain special characters.";
    }
    return { value, hasError, errorMessage };
};

export const validatePhoneNumber = (value: string) => {
    let hasError = false;
    let errorMessage = '';
    if (value.trim() === "") {
        hasError = true;
        errorMessage = "Phone Number cannot be empty.";
    } else if (!PHONE_CHARACTERS_REGEX.test(value)) {
        hasError = true;
        errorMessage = "Phone Number has invalid characters.";
    } else if (!PHONE_FORMAT_REGEX.test(value)) {
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