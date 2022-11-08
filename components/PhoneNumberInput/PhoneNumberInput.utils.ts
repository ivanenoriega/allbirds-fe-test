import { ONLY_DIGITS_REGEX } from "./PhoneNumberInput.constants";

const clearNonNumbersValues = (value: string) => {
    return value.replaceAll(ONLY_DIGITS_REGEX, '');
};

export const formatPhoneNumber = (value: string): string => {
    if (!value) return value;
    const numbers = clearNonNumbersValues(value);
    if (numbers.length >= 7) {
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    } else if (numbers.length >= 4) {
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}`;
    } else {
        return numbers;
    }
};