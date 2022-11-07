const clearNonNumbersValues = (value: string) => {
    const regex = /\D/g;
    console.log('regex', { value: value, result: value.replaceAll(regex, '') });
    return value.replaceAll(regex, '');
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