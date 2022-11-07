import inputProps from "../Input/Input.types";

interface PhoneNumberInputProps extends inputProps {
    onChange: (e: string) => void
}

export default PhoneNumberInputProps;
