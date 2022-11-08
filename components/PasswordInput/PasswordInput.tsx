/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { FC, useCallback, useMemo, useState } from "react";
import Input from "../Input";
import { INPUT_TYPE_PASSWORD, INPUT_TYPE_TEXT } from "../Input/Input.constants";
import inputProps from "../Input/Input.types";
import { EYE_CONFIG, EYE_OFF_CONFIG } from "./PasswordInput.constants";
import styles from "./PasswordInput.module.scss";

const PasswordInput: FC<inputProps> = ({ ...restOfProps }) => {
  const [show, setShow] = useState(false);
  const type = useMemo(() => show ? INPUT_TYPE_TEXT : INPUT_TYPE_PASSWORD, [show]);

  const onChangeHandler = useCallback(() => {
    setShow(!show);
  }, [show]);

  return <Input {...restOfProps} type={type}>
    <span className={styles.eye} onClick={onChangeHandler}>
      {show ? <Image {...EYE_OFF_CONFIG} /> : <Image {...EYE_CONFIG} />}
    </span>
  </Input>;
};

export default PasswordInput;
