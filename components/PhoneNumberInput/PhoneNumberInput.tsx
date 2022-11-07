import { FC, useCallback } from "react";
import Input from "../Input";
import PhoneNumberInputProps from "./PhoneNumberInput.types";
import { formatPhoneNumber } from "./PhoneNumberInput.utils";

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ onChange, ...restOfProps }) => {
  const onChangeHandler = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    onChange(formatPhoneNumber(event.currentTarget.value));
  }, [onChange]);
  return <Input onChange={onChangeHandler} {...restOfProps} />;
};

export default PhoneNumberInput;
